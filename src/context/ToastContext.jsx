import { useCallback, useState } from 'react';
import {
  HiCheckCircle,
  HiExclamationCircle,
  HiInformationCircle,
  HiXCircle,
  HiXMark,
} from 'react-icons/hi2';
import { ToastContext } from './toast-context';

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback(
    (message, type = 'info', duration = 4000) => {
      const id = `${Date.now()}_${Math.random()}`;
      setToasts((prev) => [...prev, { id, message, type }]);

      if (duration > 0) {
        setTimeout(() => {
          removeToast(id);
        }, duration);
      }
    },
    [removeToast]
  );

  const toast = {
    success: (msg, duration) => addToast(msg, 'success', duration),
    error: (msg, duration) => addToast(msg, 'error', duration),
    info: (msg, duration) => addToast(msg, 'info', duration),
    warning: (msg, duration) => addToast(msg, 'warning', duration),
  };

  return (
    <ToastContext.Provider value={toast}>
      {children}

      {/* Toast Render Container */}
      <div
        aria-live="polite"
        className="fixed top-5 right-5 z-[9999] flex flex-col gap-2.5 max-w-sm w-full pointer-events-none px-4 sm:px-0"
      >
        {toasts.map((t) => {
          const isSuccess = t.type === 'success';
          const isError = t.type === 'error';
          const isWarning = t.type === 'warning';

          return (
            <div
              key={t.id}
              className={`
                pointer-events-auto flex items-start gap-3 p-3.5 rounded-2xl shadow-xl border backdrop-blur-md transition-all duration-300 animate-fadeIn
                ${
                  isSuccess
                    ? 'bg-emerald-950/90 text-white border-emerald-500/30'
                    : isError
                    ? 'bg-rose-950/90 text-white border-rose-500/30'
                    : isWarning
                    ? 'bg-amber-950/90 text-white border-amber-500/30'
                    : 'bg-slate-900/90 text-white border-blue-500/30'
                }
              `}
            >
              <div className="shrink-0 mt-0.5">
                {isSuccess && <HiCheckCircle size={20} className="text-emerald-400" />}
                {isError && <HiXCircle size={20} className="text-rose-400" />}
                {isWarning && <HiExclamationCircle size={20} className="text-amber-400" />}
                {!isSuccess && !isError && !isWarning && (
                  <HiInformationCircle size={20} className="text-blue-400" />
                )}
              </div>

              <div className="flex-1 text-xs sm:text-sm font-medium leading-snug">
                {t.message}
              </div>

              <button
                type="button"
                onClick={() => removeToast(t.id)}
                className="shrink-0 text-white/60 hover:text-white transition-colors p-0.5 rounded-lg"
                aria-label="Dismiss notification"
              >
                <HiXMark size={16} />
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}
