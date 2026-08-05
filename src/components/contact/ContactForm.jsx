import { useState } from "react";
import {
  HiUser,
  HiEnvelope,
  HiPhone,
  HiAcademicCap,
  HiChatBubbleBottomCenterText,
  HiArrowRight,
  HiCheckCircle,
  HiSparkles,
} from "react-icons/hi2";

const coursesOptions = [
  "Software Development",
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Data Science",
  "Cyber Security",
  "DevOps & Cloud",
  "AI & Machine Learning",
];

const popularPills = [
  "Web Development",
  "Software Development",
  "UI/UX Design",
  "AI & Machine Learning",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const selectCoursePill = (courseName) => {
    setFormData((prev) => ({ ...prev, course: courseName }));
    if (errors.course) {
      setErrors((prev) => ({ ...prev, course: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.course) newErrors.course = "Please select a course";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        course: "",
        subject: "",
        message: "",
      });
    }, 900);
  };

  return (
    <div className="relative rounded-3xl bg-white p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-2xl shadow-slate-900/5">
      {/* Decorative top accent gradient */}
      <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-linear-to-r from-[#5BAFE6] via-[#3695d0] to-[#2470A8]" />

      <div className="mb-6 sm:mb-8">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            Send Us a Message
          </h3>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-[#2470A8] border border-blue-100">
            <HiSparkles size={13} className="text-[#3695d0]" />
            Fast Response Guaranteed
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 mt-1.5">
          Fill out the details below and our admissions team will contact you within 2 hours.
        </p>
      </div>

      {isSubmitted ? (
        <div className="p-8 sm:p-10 rounded-2xl bg-linear-to-br from-emerald-50/90 to-emerald-100/50 border border-emerald-200 text-center space-y-4 animate-fade-in shadow-inner">
          <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-300/50">
            <HiCheckCircle size={36} />
          </div>
          <h4 className="text-2xl font-bold text-slate-900">
            Thank You for Reaching Out!
          </h4>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Your message has been received successfully. One of our senior course advisors will contact you shortly via email or phone.
          </p>
          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="mt-2 px-6 py-2.5 rounded-full bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors shadow-md shadow-emerald-600/20"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <HiUser size={18} />
                </div>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50/60 focus:bg-white focus:outline-none transition-all duration-200 ${
                    errors.fullName
                      ? "border-red-400 focus:ring-2 focus:ring-red-200"
                      : "border-slate-200 focus:border-[#3695d0] focus:ring-2 focus:ring-blue-100"
                  }`}
                />
              </div>
              {errors.fullName && (
                <p className="text-xs text-red-500 mt-1 font-medium">
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <HiEnvelope size={18} />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50/60 focus:bg-white focus:outline-none transition-all duration-200 ${
                    errors.email
                      ? "border-red-400 focus:ring-2 focus:ring-red-200"
                      : "border-slate-200 focus:border-[#3695d0] focus:ring-2 focus:ring-blue-100"
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-500 mt-1 font-medium">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <HiPhone size={18} />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+880 1700-000000"
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50/60 focus:bg-white focus:outline-none transition-all duration-200 ${
                    errors.phone
                      ? "border-red-400 focus:ring-2 focus:ring-red-200"
                      : "border-slate-200 focus:border-[#3695d0] focus:ring-2 focus:ring-blue-100"
                  }`}
                />
              </div>
              {errors.phone && (
                <p className="text-xs text-red-500 mt-1 font-medium">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Course Interested In */}
            <div>
              <label
                htmlFor="course"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                Course Interested In <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <HiAcademicCap size={18} />
                </div>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50/60 focus:bg-white focus:outline-none transition-all duration-200 appearance-none cursor-pointer ${
                    errors.course
                      ? "border-red-400 focus:ring-2 focus:ring-red-200"
                      : "border-slate-200 focus:border-[#3695d0] focus:ring-2 focus:ring-blue-100"
                  }`}
                >
                  <option value="" disabled>
                    Select a Course
                  </option>
                  {coursesOptions.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              {errors.course && (
                <p className="text-xs text-red-500 mt-1 font-medium">
                  {errors.course}
                </p>
              )}
            </div>
          </div>

          {/* Quick select pills */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Quick Pick Course:
            </span>
            <div className="flex flex-wrap gap-2">
              {popularPills.map((pill) => (
                <button
                  key={pill}
                  type="button"
                  onClick={() => selectCoursePill(pill)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                    formData.course === pill
                      ? "bg-[#2470A8] text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-[#2470A8]"
                  }`}
                >
                  {pill}
                </button>
              ))}
            </div>
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
            >
              Subject <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <HiChatBubbleBottomCenterText size={18} />
              </div>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Course Inquiry / Admission details"
                className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50/60 focus:bg-white focus:outline-none transition-all duration-200 ${
                  errors.subject
                    ? "border-red-400 focus:ring-2 focus:ring-red-200"
                    : "border-slate-200 focus:border-[#3695d0] focus:ring-2 focus:ring-blue-100"
                }`}
              />
            </div>
            {errors.subject && (
              <p className="text-xs text-red-500 mt-1 font-medium">
                {errors.subject}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label
                htmlFor="message"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <span className="text-[11px] text-slate-400">
                {formData.message.length}/500 chars
              </span>
            </div>
            <textarea
              id="message"
              name="message"
              rows={4}
              maxLength={500}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about your background, career goals, or any specific questions you have..."
              className={`w-full p-4 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50/60 focus:bg-white focus:outline-none transition-all duration-200 ${
                errors.message
                  ? "border-red-400 focus:ring-2 focus:ring-red-200"
                  : "border-slate-200 focus:border-[#3695d0] focus:ring-2 focus:ring-blue-100"
              }`}
            />
            {errors.message && (
              <p className="text-xs text-red-500 mt-1 font-medium">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="
              group relative overflow-hidden flex items-center justify-center gap-2 w-full py-4 rounded-xl
              bg-linear-to-r from-[#5BAFE6] via-[#3695d0] to-[#2470A8]
              text-white text-base font-bold shadow-md shadow-blue-200
              hover:shadow-xl hover:shadow-blue-400/30 hover:-translate-y-0.5
              active:translate-y-0 transition-all duration-200
              disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer
            "
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                <span>Sending Your Message...</span>
              </div>
            ) : (
              <>
                <span>Send Message</span>
                <HiArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
