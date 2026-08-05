import CompanyCard from "../trusted/CompanyCard";
import { companies } from "../../data/companyData";
import { HiBuildingOffice2 } from "react-icons/hi2";

export default function CompaniesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#2470A8]">
            <HiBuildingOffice2 size={16} className="text-[#3695d0]" />
            <span>Top Employer Network</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Companies Hiring Our Graduates
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-xl mx-auto">
            From leading multinational enterprises to top national tech firms.
          </p>
        </div>

        {/* Company Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      </div>
    </section>
  );
}
