import { HiSparkles, HiArrowUpRight, HiAcademicCap } from "react-icons/hi2";
import { mentorsData } from "../../data/aboutData";

export default function InstructorPreview() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#2470A8]">
            <HiAcademicCap size={16} className="text-[#3695d0]" />
            <span>Expert Faculty</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Learn From Active Tech Leads
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-xl mx-auto">
            Our mentors are practicing software leads and architects from top national & international companies.
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentorsData.map((mentor) => (
            <div
              key={mentor.id}
              className="rounded-3xl bg-white border border-slate-200/80 shadow-lg shadow-slate-900/5 overflow-hidden hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Photo & Company Overlay */}
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={mentor.photo}
                  alt={mentor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="text-xs font-extrabold text-blue-200">
                    {mentor.company}
                  </div>
                  <div className="text-[11px] opacity-80 font-medium">
                    {mentor.experience}
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-900">
                    {mentor.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#2470A8]">
                    {mentor.role}
                  </p>
                  <p className="text-xs text-slate-500 pt-1 leading-relaxed">
                    <span className="font-semibold text-slate-700">Focus:</span>{" "}
                    {mentor.expertise}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <a
                    href={mentor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2470A8] hover:text-blue-800 transition-colors"
                  >
                    <span>LinkedIn Profile</span>
                    <HiArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
