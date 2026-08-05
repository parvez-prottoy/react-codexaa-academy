import { HiMapPin, HiArrowTopRightOnSquare } from "react-icons/hi2";

export default function GoogleMap() {
  const mapDirectionsUrl =
    "https://www.google.com/maps/place/Codexaa+Ltd/@23.7802959,90.4238998,17z";

  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-3xl bg-white border border-slate-200/80 shadow-xl overflow-hidden">
        {/* Map Header Overlay */}
        <div className="p-6 sm:p-8 bg-linear-to-r from-slate-900 via-slate-800 to-[#19264F] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-300">
              <HiMapPin size={16} className="text-[#5BAFE6]" />
              <span>Codexaa Academy Campus</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              TA-39/1, Gulshan Badda Link Rd, Dhaka 1212
            </h3>
          </div>

          <a
            href={mapDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 px-5 py-2.5 rounded-full
              bg-linear-to-r from-[#5BAFE6] via-[#3695d0] to-[#2470A8]
              text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-900/30
              hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5
              transition-all duration-200 shrink-0
            "
          >
            <span>Visit Our Campus</span>
            <HiArrowTopRightOnSquare size={16} />
          </a>
        </div>

        {/* Google Map iFrame Embed */}
        <div className="w-full h-80 sm:h-96 lg:h-112 relative bg-slate-100">
          <iframe
            title="Codexaa Academy Campus Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.1037042078696!2d90.4238998!3d23.7802959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7002c311e07%3A0x6d9cc41dc9b38f7b!2sCodexaa%20Ltd!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
