import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  HiCheck,
  HiClipboardDocument,
  HiPrinter,
  HiSparkles,
  HiXMark,
} from 'react-icons/hi2';
import CourseCertificate from './CourseCertificate';

export default function CertificateModal({
  isOpen,
  onClose,
  initialData = {},
}) {
  if (!isOpen) return null;

  return (
    <CertificateModalDialog
      key={`${initialData.certificateId || 'demo'}_${initialData.studentName || 'student'}_${initialData.courseName || 'course'}`}
      onClose={onClose}
      initialData={initialData}
    />
  );
}

function CertificateModalDialog({ onClose, initialData = {} }) {
  const certificateRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const studentName = initialData.studentName || '';
  const courseName = initialData.courseName || '';
  const completionDate = initialData.completionDate || '';
  const certificateId = initialData.certificateId || '';
  const mentorName = initialData.mentorName || 'Md. Israfil Rana';
  const mentorOrg = initialData.mentorOrg || 'CodexAA Academy';
  const mentorRole =
    initialData.mentorRole || 'Lead Software Engineering Mentors';
  const templateImage = initialData.templateImage || null;

  // Handle ESC key press and scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    const verificationUrl = `https://codexaa.com/verify/${certificateId}`;
    navigator.clipboard?.writeText(verificationUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 md:p-8 bg-slate-950/85 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-modal-title"
    >
      <div className="relative w-full max-w-5xl bg-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-700/60 overflow-hidden flex flex-col max-h-[96vh]">
        {/* MODAL HEADER */}
        <div className="flex items-center justify-between px-5 py-4 sm:px-6 border-b border-slate-800 bg-slate-900/95 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <HiSparkles size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2
                  id="certificate-modal-title"
                  className="text-base sm:text-lg font-bold text-white tracking-tight"
                >
                  Course Completion Certificate
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-wider border border-emerald-500/30">
                  Verified Credential
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Issued to{' '}
                <span className="text-slate-200 font-semibold">
                  {studentName || 'Student'}
                </span>
                {courseName ? (
                  <>
                    {' '}
                    • <span className="text-slate-300">{courseName}</span>
                  </>
                ) : null}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Print / Save PDF Button */}
            <button
              type="button"
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-md shadow-emerald-600/20 cursor-pointer"
              title="Print or Save as PDF"
            >
              <HiPrinter size={15} />
              <span>Print / Save PDF</span>
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer ml-1"
              aria-label="Close certificate modal"
            >
              <HiXMark size={20} />
            </button>
          </div>
        </div>

        {/* CERTIFICATE PREVIEW DISPLAY AREA */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 flex items-center justify-center bg-slate-950/60">
          <div className="w-full max-w-4xl shadow-2xl rounded-sm overflow-hidden">
            <CourseCertificate
              ref={certificateRef}
              studentName={studentName}
              courseName={courseName}
              completionDate={completionDate}
              certificateId={certificateId}
              mentorName={mentorName}
              mentorOrg={mentorOrg}
              mentorRole={mentorRole}
              templateImage={templateImage}
            />
          </div>
        </div>

        {/* MODAL FOOTER */}
        <div className="px-5 py-3 sm:px-6 bg-slate-900/95 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px]">
              Standard A4 Landscape • Print-Ready 300 DPI Vector Typography
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors cursor-pointer text-xs"
            >
              {copied ? (
                <>
                  <HiCheck className="text-emerald-400" size={14} />
                  <span className="text-emerald-400 font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <HiClipboardDocument size={14} />
                  <span>Copy Verification URL</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="px-4 py-1.5 rounded-xl bg-linear-to-r from-[#2470A8] to-[#3695d0] text-white font-bold text-xs shadow-md shadow-blue-500/20 hover:opacity-95 transition-all cursor-pointer"
            >
              Download / Print PDF
            </button>
          </div>
        </div>
      </div>

      {/* Fallback Dedicated Print Portal if not already mounted on the page */}
      {typeof document !== 'undefined' &&
        !document.getElementById('print-certificate-portal') &&
        createPortal(
          <div id="print-certificate-portal" aria-hidden="true">
            <CourseCertificate
              studentName={studentName}
              courseName={courseName}
              completionDate={completionDate}
              certificateId={certificateId}
              mentorName={mentorName}
              mentorOrg={mentorOrg}
              mentorRole={mentorRole}
              templateImage={templateImage}
              id="course-certificate-print"
              isPrint
            />
          </div>,
          document.body
        )}
    </div>
  );
}
