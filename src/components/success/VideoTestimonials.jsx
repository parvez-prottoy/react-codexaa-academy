import { useState } from "react";
import { HiPlay, HiXMark, HiClock, HiAcademicCap } from "react-icons/hi2";
import { videoTestimonials } from "../../data/successStoriesData";

export default function VideoTestimonials() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#2470A8]">
            <span>🎥 Video Interviews</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Hear Directly From Our Graduates
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-xl mx-auto">
            Watch real interviews of students sharing their journey, struggles, and success.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videoTestimonials.map((video) => (
            <div
              key={video.id}
              className="rounded-3xl bg-white border border-slate-200/80 shadow-lg overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative h-52 overflow-hidden bg-slate-900">
                <img
                  src={video.thumbnail}
                  alt={video.studentName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/30 transition-colors" />

                {/* Play Button Overlay */}
                <button
                  type="button"
                  onClick={() => setActiveVideo(video)}
                  aria-label={`Play video testimonial of ${video.studentName}`}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-full bg-white/90 text-[#2470A8] flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-white transition-all duration-300 pl-1">
                    <HiPlay size={28} />
                  </div>
                </button>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-slate-900/80 text-white text-[11px] font-semibold backdrop-blur-md flex items-center gap-1">
                  <HiClock size={13} />
                  <span>{video.duration}</span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-bold text-slate-800 leading-snug">
                    "{video.quote}"
                  </p>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <HiAcademicCap size={15} className="text-[#3695d0]" />
                    <span>{video.course}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-slate-900">
                      {video.studentName}
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      Hired @ {video.company}
                    </div>
                  </div>
                  {video.companyLogo && (
                    <img
                      src={video.companyLogo}
                      alt={video.company}
                      className="h-6 w-auto object-contain opacity-80"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-3xl bg-black rounded-3xl overflow-hidden shadow-2xl">
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition-colors"
            >
              <HiXMark size={22} />
            </button>
            <div className="aspect-video w-full">
              <iframe
                title={activeVideo.studentName}
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
