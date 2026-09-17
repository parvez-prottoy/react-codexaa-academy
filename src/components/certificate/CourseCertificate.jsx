import { forwardRef } from 'react';
import logo from '../../assets/logo.png';
import { HiCheckBadge, HiShieldCheck } from 'react-icons/hi2';

/**
 * Reusable Course Certificate Component
 * 
 * Supports dynamic student and course information.
 * Architected to support custom template background images (when provided)
 * while providing a luxury, print-ready default vector design.
 */
const CourseCertificate = forwardRef(function CourseCertificate(
  {
    studentName = '',
    courseName = '',
    completionDate = '',
    certificateId = '',
    mentorName = 'Md. Israfil Rana',
    mentorOrg = 'CodexAA Academy',
    mentorRole = 'Lead Software Engineering Mentors',
    templateImage = null,
    className = '',
    id = 'course-certificate',
    isPrint = false,
  },
  ref
) {
  const containerClass = isPrint
    ? `certificate-print-canvas relative w-[297mm] h-[210mm] max-w-[297mm] max-h-[210mm] select-none overflow-hidden bg-[#FCFBF7] text-slate-900 box-border ${className}`
    : `relative w-full aspect-[1.414/1] select-none overflow-hidden bg-[#FCFBF7] text-slate-900 shadow-2xl transition-all duration-300 ${className}`;

  return (
    <div
      ref={ref}
      id={id}
      className={containerClass}
      style={{
        printColorAdjust: 'exact',
        WebkitPrintColorAdjust: 'exact',
      }}
    >
      {/* ─────────────────────────────────────────────────────────────
          1. BACKGROUND LAYER: Custom Template Image OR Default Vector Design
         ───────────────────────────────────────────────────────────── */}
      {templateImage ? (
        // Custom background template image mode
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={templateImage}
            alt="Certificate Template"
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        // Default Luxury Certificate Vector Design
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Subtle Guilloche / Radial Texture Background */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `radial-gradient(#19264F 1px, transparent 1px), radial-gradient(#C59B27 1px, #FCFBF7 1px)`,
              backgroundSize: '24px 24px',
              backgroundPosition: '0 0, 12px 12px',
            }}
          />

          {/* Outer Multi-layered Ornamental Borders */}
          <div
            className={
              isPrint
                ? 'absolute inset-7 border-3 border-[#C59B27] rounded-sm pointer-events-none'
                : 'absolute inset-3 sm:inset-5 md:inset-7 border-2 sm:border-3 border-[#C59B27] rounded-sm pointer-events-none'
            }
          />
          <div
            className={
              isPrint
                ? 'absolute inset-8.5 border border-[#19264F]/30 pointer-events-none'
                : 'absolute inset-4 sm:inset-6 md:inset-8.5 border border-[#19264F]/30 pointer-events-none'
            }
          />
          <div
            className={
              isPrint
                ? 'absolute inset-10 border border-[#C59B27]/40 pointer-events-none'
                : 'absolute inset-5 sm:inset-7 md:inset-10 border border-[#C59B27]/40 pointer-events-none'
            }
          />

          {/* Corner Floral / Filigree Ornaments */}
          {/* Top-Left */}
          <svg
            className={
              isPrint
                ? 'absolute top-8.5 left-8.5 w-16 h-16 text-[#C59B27]'
                : 'absolute top-4 sm:top-6 md:top-8.5 left-4 sm:left-6 md:left-8.5 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-[#C59B27]'
            }
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
          >
            <path d="M4 4h32M4 4v32M12 12h16M12 12v16M4 4l20 20" />
            <circle cx="24" cy="24" r="2.5" fill="currentColor" />
            <circle cx="4" cy="4" r="3" fill="currentColor" />
          </svg>

          {/* Top-Right */}
          <svg
            className={
              isPrint
                ? 'absolute top-8.5 right-8.5 w-16 h-16 text-[#C59B27]'
                : 'absolute top-4 sm:top-6 md:top-8.5 right-4 sm:right-6 md:right-8.5 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-[#C59B27]'
            }
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
          >
            <path d="M60 4H28M60 4v32M52 12H36M52 12v16M60 4L40 24" />
            <circle cx="40" cy="24" r="2.5" fill="currentColor" />
            <circle cx="60" cy="4" r="3" fill="currentColor" />
          </svg>

          {/* Bottom-Left */}
          <svg
            className={
              isPrint
                ? 'absolute bottom-8.5 left-8.5 w-16 h-16 text-[#C59B27]'
                : 'absolute bottom-4 sm:bottom-6 md:bottom-8.5 left-4 sm:left-6 md:left-8.5 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-[#C59B27]'
            }
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
          >
            <path d="M4 60h32M4 60V28M12 52h16M12 52V36M4 60l20-20" />
            <circle cx="24" cy="40" r="2.5" fill="currentColor" />
            <circle cx="4" cy="60" r="3" fill="currentColor" />
          </svg>

          {/* Bottom-Right */}
          <svg
            className={
              isPrint
                ? 'absolute bottom-8.5 right-8.5 w-16 h-16 text-[#C59B27]'
                : 'absolute bottom-4 sm:bottom-6 md:bottom-8.5 right-4 sm:right-6 md:right-8.5 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-[#C59B27]'
            }
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
          >
            <path d="M60 60H28M60 60V28M52 52H36M52 52V36M60 60L40 40" />
            <circle cx="40" cy="40" r="2.5" fill="currentColor" />
            <circle cx="60" cy="60" r="3" fill="currentColor" />
          </svg>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          2. FOREGROUND CONTENT LAYER (Dynamic Data Placement)
         ───────────────────────────────────────────────────────────── */}
      <div
        className={
          isPrint
            ? 'relative z-10 w-full h-full flex flex-col justify-between p-14 text-center box-border'
            : 'relative z-10 w-full h-full flex flex-col justify-between p-7 sm:p-10 md:p-14 lg:p-16 text-center'
        }
      >
        {/* TOP SECTION: Branding & Academy Header */}
        <div className="space-y-1 sm:space-y-2">
          {/* Centered Codexaa Academy Logo */}
          <div className="flex items-center justify-center">
            <img
              src={logo}
              alt="Codexaa Academy Logo"
              className={
                isPrint
                  ? 'h-14 object-contain mx-auto'
                  : 'h-9 sm:h-12 md:h-14 lg:h-16 object-contain mx-auto'
              }
            />
          </div>

          {/* Certificate Badge Accent */}
          <div className="flex items-center justify-center gap-3 pt-1">
            <span
              className={
                isPrint
                  ? 'h-[1px] w-24 bg-linear-to-r from-transparent via-[#C59B27] to-[#C59B27]'
                  : 'h-[1px] w-10 sm:w-16 md:w-24 bg-linear-to-r from-transparent via-[#C59B27] to-[#C59B27]'
              }
            />
            <span
              className={
                isPrint
                  ? 'text-xs font-bold uppercase tracking-[0.3em] text-[#8C6B14]'
                  : 'text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#8C6B14]'
              }
            >
              Accredited Credential of Achievement
            </span>
            <span
              className={
                isPrint
                  ? 'h-[1px] w-24 bg-linear-to-l from-transparent via-[#C59B27] to-[#C59B27]'
                  : 'h-[1px] w-10 sm:w-16 md:w-24 bg-linear-to-l from-transparent via-[#C59B27] to-[#C59B27]'
              }
            />
          </div>

          {/* Certificate Title */}
          <h1
            className={
              isPrint
                ? 'font-cinzel text-3xl md:text-4xl font-extrabold tracking-[0.18em] text-[#19264F] pt-2 drop-shadow-xs'
                : 'font-cinzel text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-[0.18em] text-[#19264F] pt-1 sm:pt-2 drop-shadow-xs'
            }
          >
            CERTIFICATE OF COMPLETION
          </h1>

          <p
            className={
              isPrint
                ? 'font-playfair italic text-base md:text-lg text-slate-600 pt-0.5'
                : 'font-playfair italic text-xs sm:text-sm md:text-base lg:text-lg text-slate-600 pt-0.5'
            }
          >
            This certificate is proudly presented to
          </p>
        </div>

        {/* MIDDLE SECTION: Dynamic Student Name & Course Credentials */}
        <div className="my-auto py-1 sm:py-2 space-y-1.5 sm:space-y-2.5">
          {/* Student Name */}
          <div className="inline-block relative">
            <h2
              className={
                isPrint
                  ? 'font-playfair text-4xl md:text-5xl font-bold tracking-tight text-[#19264F] px-8'
                  : 'font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#19264F] px-4 sm:px-8'
              }
            >
              {studentName}
            </h2>
            {/* Elegant Name Underline */}
            <div className="h-[2px] sm:h-[2.5px] w-full max-w-md mx-auto bg-linear-to-r from-transparent via-[#C59B27] to-transparent mt-1" />
          </div>

          {/* Completion Statement */}
          <p
            className={
              isPrint
                ? 'text-sm text-slate-600 font-medium tracking-wide'
                : 'text-[11px] sm:text-xs md:text-sm text-slate-600 font-medium tracking-wide'
            }
          >
            for successfully completing
          </p>

          {/* Course Name */}
          <div className="max-w-2xl mx-auto px-4">
            <h3
              className={
                isPrint
                  ? 'font-cinzel text-xl md:text-2xl font-extrabold text-[#2470A8] leading-snug tracking-wide'
                  : 'font-cinzel text-xs sm:text-base md:text-xl lg:text-2xl font-extrabold text-[#2470A8] leading-snug tracking-wide'
              }
            >
              {courseName}
            </h3>
          </div>

          {/* Final Credential Criteria Statement */}
          <p
            className={
              isPrint
                ? 'text-xs text-slate-500 max-w-xl mx-auto px-4 leading-relaxed'
                : 'text-[9px] sm:text-xs text-slate-500 max-w-xl mx-auto px-4 leading-relaxed'
            }
          >
            and demonstrating successful completion of all required course
            requirements, practical projects, and professional curriculum
            standards.
          </p>
        </div>

        {/* BOTTOM SECTION: Lead Mentor Signature, Gold Verified Seal & Metadata */}
        <div className="pt-2 sm:pt-3 space-y-2.5 sm:space-y-3.5">
          <div className="flex flex-col items-center justify-center max-w-xl mx-auto space-y-2 sm:space-y-2.5">
            {/* Sole Mentor Signature Block (Centered & Balanced) */}
            <div className="text-center space-y-0.5">
              <div
                className={
                  isPrint
                    ? 'font-signature text-3xl md:text-4xl text-slate-800 leading-none h-8 flex items-end justify-center'
                    : 'font-signature text-2xl sm:text-3xl md:text-4xl text-slate-800 leading-none h-7 sm:h-9 flex items-end justify-center'
                }
              >
                Md. Israfil Rana
              </div>
              <div
                className={
                  isPrint
                    ? 'h-[1.5px] w-48 md:w-56 mx-auto bg-linear-to-r from-transparent via-slate-400 to-transparent'
                    : 'h-[1.5px] w-40 sm:w-48 md:w-56 mx-auto bg-linear-to-r from-transparent via-slate-400 to-transparent'
                }
              />
              <div
                className={
                  isPrint
                    ? 'text-xs md:text-sm font-bold text-slate-900 tracking-wide pt-0.5'
                    : 'text-[11px] sm:text-xs md:text-sm font-bold text-slate-900 tracking-wide pt-0.5'
                }
              >
                {mentorName}
              </div>
              <div
                className={
                  isPrint
                    ? 'text-[10px] md:text-xs font-semibold text-[#19264F] tracking-wide'
                    : 'text-[9px] sm:text-[10px] md:text-xs font-semibold text-[#19264F] tracking-wide'
                }
              >
                {mentorOrg}
              </div>
              <div
                className={
                  isPrint
                    ? 'text-[9px] md:text-[10px] text-slate-500 font-medium'
                    : 'text-[8px] sm:text-[9px] md:text-[10px] text-slate-500 font-medium'
                }
              >
                {mentorRole}
              </div>
            </div>

            {/* Official Codexaa Golden Seal (Centered with luxury gold hairline accents) */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 w-full max-w-md mx-auto">
              <span className="h-[1px] flex-1 bg-linear-to-r from-transparent via-[#C59B27]/40 to-[#C59B27]" />
              <div
                className={
                  isPrint
                    ? 'relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-linear-to-tr from-[#9B771A] via-[#E9C766] to-[#C59B27] p-1 shadow-md flex items-center justify-center shrink-0'
                    : 'relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-linear-to-tr from-[#9B771A] via-[#E9C766] to-[#C59B27] p-1 shadow-md flex items-center justify-center shrink-0'
                }
              >
                <div className="w-full h-full rounded-full border-2 border-dashed border-[#5C450C] flex flex-col items-center justify-center p-0.5 text-center bg-linear-to-b from-[#FFF5D0] to-[#E5BE53]">
                  <HiShieldCheck
                    className={
                      isPrint
                        ? 'w-4 h-4 md:w-5 md:h-5 text-[#745508]'
                        : 'w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#745508]'
                    }
                  />
                  <span
                    className={
                      isPrint
                        ? 'font-cinzel text-[6px] md:text-[7px] font-black text-[#5C450C] uppercase tracking-tighter leading-tight mt-0.5'
                        : 'font-cinzel text-[5px] sm:text-[6px] md:text-[7px] font-black text-[#5C450C] uppercase tracking-tighter leading-tight mt-0.5'
                    }
                  >
                    Verified
                  </span>
                  <span
                    className={
                      isPrint
                        ? 'text-[5px] font-bold text-[#745508] uppercase tracking-widest'
                        : 'text-[4px] sm:text-[5px] font-bold text-[#745508] uppercase tracking-widest'
                    }
                  >
                    Seal
                  </span>
                </div>
              </div>
              <span className="h-[1px] flex-1 bg-linear-to-l from-transparent via-[#C59B27]/40 to-[#C59B27]" />
            </div>
          </div>

          {/* Certificate Metadata Bar */}
          <div
            className={
              isPrint
                ? 'mt-3 pt-2 border-t border-slate-200/80 flex flex-row items-center justify-between text-[10px] md:text-[11px] text-slate-500 font-medium gap-4 px-2'
                : 'mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between text-[8px] sm:text-[10px] md:text-[11px] text-slate-500 font-medium gap-1 sm:gap-4 px-2'
            }
          >
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-slate-700">Completed on:</span>
              <span>{completionDate}</span>
            </div>

            <div className="flex items-center gap-1.5 text-[#2470A8]">
              <HiCheckBadge className="w-3.5 h-3.5 text-[#2470A8]" />
              <span className="font-mono tracking-wider text-[8px] sm:text-[10px]">
                https://codexaa.com/verify/{certificateId}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-slate-700">Certificate ID:</span>
              <span className="font-mono font-bold text-[#19264F]">
                {certificateId}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CourseCertificate;
