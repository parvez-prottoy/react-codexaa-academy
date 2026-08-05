import { HiArrowRight } from "react-icons/hi2";

/* Hero CTA button pair */
export default function HeroButtons({ primary }) {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 sm:gap-4 w-full sm:w-auto mx-auto lg:mx-0">
      {/* Primary — gradient pill with arrow */}
      <a
        href={primary.href}
        className="
          group inline-flex items-center justify-center gap-2.5
          px-7 py-3.5
          rounded-full
          bg-linear-to-r from-[#5BAFE6] via-[#3695d0] to-[#2470A8]
          text-white text-base font-bold
          shadow-lg shadow-blue-200
          hover:shadow-xl hover:shadow-blue-300
          hover:-translate-y-0.5
          transition-all duration-300
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
          w-full sm:w-auto text-center
        "
      >
        {primary.label}
        <HiArrowRight
          size={18}
          className="group-hover:translate-x-1 transition-transform duration-300"
        />
      </a>
    </div>
  );
}
