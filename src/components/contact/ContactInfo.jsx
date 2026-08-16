import {
  HiMapPin,
  HiPhone,
  HiEnvelope,
  HiClock,
  HiGlobeAlt,
  HiChatBubbleOvalLeftEllipsis,
  HiArrowTopRightOnSquare,
} from "react-icons/hi2";

const contactItems = [
  {
    id: "address",
    icon: HiMapPin,
    title: "Address",
    value: "TA-39/1, (Lift 6 Flat- D1), Hasna Monjil, Gulshan Badda Link Rd, Dhaka 1212",
    href: "https://www.google.com/maps/place/Codexaa+Ltd/@23.7802959,90.4238998,17z",
    external: true,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    borderColor: "border-emerald-100",
  },
  {
    id: "phone",
    icon: HiPhone,
    title: "Phone",
    value: "+880 1901-516270",
    href: "tel:+8801901516270",
    external: false,
    color: "text-amber-600",
    bg: "bg-amber-50",
    borderColor: "border-amber-100",
  },
  {
    id: "email",
    icon: HiEnvelope,
    title: "Email",
    value: "info@codexaa.com",
    href: "mailto:info@codexaa.com",
    external: false,
    color: "text-violet-600",
    bg: "bg-violet-50",
    borderColor: "border-violet-100",
  },
  {
    id: "hours",
    icon: HiClock,
    title: "Office Hours",
    value: "Sun – Thu: 10:00 AM – 6:00 PM",
    href: null,
    external: false,
    color: "text-[#2470A8]",
    bg: "bg-blue-50",
    borderColor: "border-blue-100",
  },
  {
    id: "website",
    icon: HiGlobeAlt,
    title: "Website",
    value: "www.codexaa.com",
    href: "https://www.codexaa.com",
    external: true,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    borderColor: "border-cyan-100",
  },
  {
    id: "whatsapp",
    icon: HiChatBubbleOvalLeftEllipsis,
    title: "WhatsApp",
    value: "+880 1901-516270",
    href: "https://wa.me/8801901516270",
    external: true,
    color: "text-green-600",
    bg: "bg-green-50",
    borderColor: "border-green-100",
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-4">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Get in Touch
        </h2>
        <p className="text-sm text-slate-600 mt-2">
          Connect with us directly through any of our official channels below or
          visit our campus in Dhaka.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
        {contactItems.map((item) => {
          const Icon = item.icon;
          const isLink = Boolean(item.href);

          const CardContent = (
            <div
              className={`group flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white border ${item.borderColor} shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative`}
            >
              {/* Icon Bubble */}
              <div
                className={`w-11 h-11 rounded-xl ${item.bg} ${item.color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300`}
              >
                <Icon size={22} />
              </div>

              {/* Text Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {item.title}
                  </h3>
                  {isLink && (
                    <HiArrowTopRightOnSquare
                      size={14}
                      className="text-slate-300 group-hover:text-[#3695d0] transition-colors duration-200"
                    />
                  )}
                </div>
                <p className="text-sm font-semibold text-slate-800 mt-1 leading-snug break-words group-hover:text-[#2470A8] transition-colors duration-200">
                  {item.value}
                </p>
              </div>
            </div>
          );

          if (isLink) {
            return (
              <a
                key={item.id}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:rounded-2xl"
              >
                {CardContent}
              </a>
            );
          }

          return <div key={item.id}>{CardContent}</div>;
        })}
      </div>
    </div>
  );
}
