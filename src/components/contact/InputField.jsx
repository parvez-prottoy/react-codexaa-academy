import { useState, useRef, useEffect } from "react";

/**
 * InputField — Premium animated input with floating label, icon, and validation.
 *
 * @param {string}   id          - Unique field id (for accessibility)
 * @param {string}   label       - Floating label text
 * @param {string}   type        - Input type (text, email, tel, etc.)
 * @param {string}   value       - Controlled value
 * @param {Function} onChange    - Change handler
 * @param {node}     icon        - React icon element
 * @param {string}   placeholder - Placeholder (used as aria hint)
 * @param {boolean}  required    - Whether field is required
 * @param {string}   error       - Validation error message
 * @param {string}   autoComplete
 */
export default function InputField({
  id,
  label,
  type = "text",
  value,
  onChange,
  icon: Icon,
  placeholder,
  required = false,
  error = "",
  autoComplete,
}) {
  const [focused, setFocused] = useState(false);
  const isFloating = focused || value.length > 0;

  return (
    <div className="relative w-full">
      {/* Floating label */}
      <label
        htmlFor={id}
        className="absolute left-11 pointer-events-none select-none transition-all duration-200 ease-out z-10"
        style={{
          top: isFloating ? "6px" : "50%",
          transform: isFloating ? "translateY(0) scale(0.78)" : "translateY(-50%) scale(1)",
          transformOrigin: "left center",
          color: focused ? "#3695d0" : error ? "#ef4444" : "#94a3b8",
          fontWeight: isFloating ? 600 : 400,
          fontSize: "0.9375rem",
          letterSpacing: "0.01em",
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}
      >
        {label}
        {required && (
          <span className="ml-0.5 text-rose-400" aria-hidden="true">
            *
          </span>
        )}
      </label>

      {/* Icon */}
      <span
        className="absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-200 pointer-events-none"
        aria-hidden="true"
        style={{ color: focused ? "#3695d0" : error ? "#ef4444" : "#94a3b8" }}
      >
        {Icon && <Icon size={17} />}
      </span>

      {/* Input element */}
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        autoComplete={autoComplete}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={!!error}
        placeholder={focused ? placeholder : ""}
        className="w-full pt-5 pb-2 pl-11 pr-4 rounded-xl text-slate-800 text-[0.9375rem] font-medium
                   bg-slate-50 border outline-none transition-all duration-200
                   placeholder:text-slate-300 placeholder:text-sm placeholder:font-normal"
        style={{
          borderColor: error ? "#fca5a5" : focused ? "#3695d0" : "#e2e8f0",
          boxShadow: focused
            ? "0 0 0 3.5px rgba(54,149,208,0.15), 0 1px 3px rgba(0,0,0,0.06)"
            : error
            ? "0 0 0 3px rgba(239,68,68,0.12)"
            : "0 1px 2px rgba(0,0,0,0.04)",
          backgroundColor: focused ? "#ffffff" : error ? "#fff5f5" : "#f8fafc",
        }}
      />

      {/* Error message */}
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-1.5 flex items-center gap-1 text-xs text-rose-500 font-medium pl-1"
        >
          <span aria-hidden="true">⚠</span> {error}
        </p>
      )}
    </div>
  );
}
