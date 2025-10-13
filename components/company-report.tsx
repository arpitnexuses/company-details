import type { Company } from "@/data/companies"

type Props = {
  company: Company
  logo?: string
}


export function CompanyReport({ company, logo }: Props) {
  return (
    <div className="bg-gradient-to-br from-background via-background to-muted/20 min-h-screen">
      {/* Report Header */}
      <div className="relative bg-[#00153D] p-4 sm:p-6 lg:p-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00153D]/90 to-transparent"></div>
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-primary-foreground/5 rounded-full -translate-y-24 translate-x-24 sm:-translate-y-32 sm:translate-x-32 lg:-translate-y-48 lg:translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-primary-foreground/5 rounded-full translate-y-16 -translate-x-16 sm:translate-y-24 sm:-translate-x-24 lg:translate-y-32 lg:-translate-x-32"></div>
        
        <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 lg:gap-8">
          {company.logoLink ? (
            <div className="relative flex-shrink-0">
              <img
                src={company.logoLink}
              alt={`${company.name} logo`}
                width={120}
                height={120}
                className="h-16 w-16 sm:h-20 sm:w-20 lg:h-28 lg:w-28 object-contain rounded-xl sm:rounded-2xl border-2 sm:border-4 border-primary-foreground/20 bg-background p-2 sm:p-3 shadow-xl sm:shadow-2xl"
              />
              <div className="absolute -inset-1 sm:-inset-2 bg-primary-foreground/10 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl"></div>
            </div>
          ) : (
            <div className="h-16 w-16 sm:h-20 sm:w-20 lg:h-28 lg:w-28 rounded-xl sm:rounded-2xl border-2 sm:border-4 border-primary-foreground/20 bg-primary-foreground/10 flex items-center justify-center shadow-xl sm:shadow-2xl flex-shrink-0">
              <span className="text-primary-foreground/60 text-xs sm:text-sm font-semibold">LOGO</span>
            </div>
          )}
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-2xl text-white sm:text-3xl lg:text-5xl font-black mb-2 sm:mb-3 tracking-tight">{company.name}</h1>
            <p className="text-primary-foreground/90 text-sm sm:text-lg lg:text-xl mb-3 sm:mb-4 font-medium">{company.type}</p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-4 lg:gap-6 text-xs sm:text-sm">
              <div className="flex items-center gap-1 sm:gap-2 bg-white px-2 sm:px-3 py-1 sm:py-2 rounded-full">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#00153D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.5 8c0 5.25-7.5 11-7.5 11S4.5 13.25 4.5 8a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="font-medium">{company.hq} (HQ)</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 bg-white px-2 sm:px-3 py-1 sm:py-2 rounded-full">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#00153D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3M5 11h14M5 21h14a2 2 0 002-2v-8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span className="font-medium">Founded: {company.yearFounded}</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 bg-white px-2 sm:px-3 py-1 sm:py-2 rounded-full">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#00153D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87M12 12a4 4 0 100-8 4 4 0 000 8z" />
                </svg>
                <span className="font-medium">{company.employeeSize} employees</span>
              </div>
              <span className={`px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg ${
                company.permissibility === 'High' ? 'bg-green-500 text-white' : 
                company.permissibility === 'Medium' ? 'bg-yellow-500 text-white' : 
                'bg-red-500 text-white'
              }`}>
                {company.permissibility} Priority
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Report Content */}
      <div className="p-4 sm:p-6 lg:p-10 space-y-6 sm:space-y-8 lg:space-y-10">
        {/* Executive Summary */}
        <div className="bg-gradient-to-br from-card via-card to-muted/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-border/50 backdrop-blur-sm">
          <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-1.5 sm:w-2 h-6 sm:h-8 lg:h-10 bg-[#00153D] rounded-full"></div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-card-foreground">Executive Summary</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
          </div>
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            <p className="text-card-foreground leading-relaxed text-sm sm:text-base lg:text-lg font-medium">{company.companyOverview}</p>
          </div>
        </div>

        {/* Company Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Basic Information */}
          <div className="bg-gradient-to-br from-card via-card to-card/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-border/50 backdrop-blur-sm">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-[#00153D] rounded-full"></div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-card-foreground">Company Information</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Website Card */}
              <div className="group bg-card/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 border hover:shadow-xl hover:-translate-y-1 shadow-lg" style={{ borderColor: '#00153D80' }}>
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-md sm:rounded-lg flex items-center justify-center transition-colors duration-300" style={{ backgroundColor: '#00153D1A' }}>
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" style={{ color: '#00153D' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-card-foreground text-sm sm:text-base">Website</h4>
                </div>
                <a href={`https://${company.website}`} target="_blank" rel="noopener noreferrer" className="font-medium text-xs sm:text-sm transition-colors group-hover:underline break-all" style={{ color: '#00153D' }}>
                  {company.website}
                </a>
              </div>

              {/* Email Card */}
              <div className="group bg-card/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 border hover:shadow-xl hover:-translate-y-1 shadow-lg" style={{ borderColor: '#00153D80' }}>
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-md sm:rounded-lg flex items-center justify-center transition-colors duration-300" style={{ backgroundColor: '#00153D1A' }}>
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" style={{ color: '#00153D' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-card-foreground text-sm sm:text-base">Email</h4>
                </div>
                <p className="text-card-foreground text-xs sm:text-sm font-medium break-all">{company.companyEmail}</p>
              </div>

              {/* LinkedIn Card */}
              <div className="group bg-card/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 border hover:shadow-xl hover:-translate-y-1 shadow-lg" style={{ borderColor: '#00153D80' }}>
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-md sm:rounded-lg flex items-center justify-center transition-colors duration-300" style={{ backgroundColor: '#00153D1A' }}>
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" style={{ color: '#00153D' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-card-foreground text-sm sm:text-base">LinkedIn</h4>
                </div>
                <a href={`https://${company.companyLinkedIn}`} target="_blank" rel="noopener noreferrer" className="font-medium text-xs sm:text-sm transition-colors group-hover:underline" style={{ color: '#00153D' }}>
                  View Company
                </a>
              </div>

              {/* Revenue Card */}
              <div className="group bg-card/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 border hover:shadow-xl hover:-translate-y-1 shadow-lg" style={{ borderColor: '#00153D80' }}>
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-md sm:rounded-lg flex items-center justify-center transition-colors duration-300" style={{ backgroundColor: '#00153D1A' }}>
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" style={{ color: '#00153D' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-card-foreground text-sm sm:text-base">Revenue</h4>
                </div>
                <p className="text-card-foreground text-xs sm:text-sm font-medium">{company.revenue}</p>
              </div>
            </div>
          </div>

          {/* Service Focus */}
          <div className="bg-gradient-to-br from-card via-card to-card/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-border/50 backdrop-blur-sm">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-[#00153D] rounded-full"></div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-card-foreground">Business Focus</h3>
            </div>
            <div className="bg-gradient-to-r from-muted/30 to-muted/10 rounded-lg p-3 sm:p-4 border border-border/20 mb-3 sm:mb-4">
              <div className="prose prose-sm sm:prose-base max-w-none">
                <p className="text-card-foreground leading-relaxed font-medium text-sm sm:text-base">{company.serviceFocus}</p>
              </div>
            </div>

            {/* Regulatory Information Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Regulator Card */}
              <div className="group bg-card/50 backdrop-blur-sm rounded-xl p-5 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 shadow-lg" style={{ borderColor: '#00153D80' }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300" style={{ backgroundColor: '#00153D1A' }}>
                    <svg className="w-4 h-4" style={{ color: '#00153D' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-card-foreground text-base">Regulator</h4>
                </div>
                <p className="text-card-foreground text-sm font-medium">{company.regulator}</p>
              </div>

              {/* Listed Card */}
              <div className="group bg-card/50 backdrop-blur-sm rounded-xl p-5 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 shadow-lg" style={{ borderColor: '#00153D80' }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300" style={{ backgroundColor: '#00153D1A' }}>
                    <svg className="w-4 h-4" style={{ color: '#00153D' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-card-foreground text-base">Listed</h4>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  company.listed === 'Yes' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-muted text-muted-foreground'
                }`}>
                  {company.listed}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Decision Makers */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 className="text-2xl font-bold text-card-foreground mb-6 flex items-center gap-3">
            <div className="w-2 h-8 bg-[#00153D] rounded"></div>
            Key Decision Makers
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { 
                role: "Primary Contact", 
                name: company.decisionMaker1, 
                linkedin: company.decisionMaker1LinkedIn,
                priority: "High Priority",
                icon: "1"
              },
              { 
                role: "Secondary Contact", 
                name: company.decisionMaker2, 
                linkedin: company.decisionMaker2LinkedIn,
                priority: "Medium Priority",
                icon: "2"
              },
              { 
                role: "Tertiary Contact", 
                name: company.decisionMaker3, 
                linkedin: company.decisionMaker3LinkedIn,
                priority: "Low Priority",
                icon: "3"
              },
            ].map((contact, index) => (
              <div key={index} className="border border-border rounded-lg p-4 bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#00153D] rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {contact.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground text-base">{contact.role}</h4>
                    <span className="text-xs font-medium text-muted-foreground">{contact.priority}</span>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="mb-4">
                  <p className="text-card-foreground font-medium text-sm leading-relaxed">{contact.name}</p>
                </div>

                {/* LinkedIn Button aligned to bottom */}
                <div className="mt-auto">
                  {contact.linkedin ? (
                    <a 
                      href={contact.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#00153D] text-primary-foreground rounded-lg hover:bg-[#00153D]/90 transition-colors duration-200 font-medium text-sm"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      Connect
                    </a>
                  ) : (
                    <div className="h-10" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pitch Opportunities */}
        <div className="bg-gradient-to-br from-[#00153D]/5 via-[#00153D]/3 to-accent/5 border border-[#00153D]/20 rounded-xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-[#00153D] rounded-full"></div>
            <h3 className="text-2xl font-bold text-card-foreground">Continental Pitch Opportunities</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent"></div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-primary/10 shadow-inner">
            <div className="prose prose-sm max-w-none">
              <p className="text-card-foreground leading-relaxed text-base whitespace-pre-line font-medium">{company.notes}</p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        {company.additionalNotes && (
          <div className="bg-gradient-to-br from-card via-card to-card/80 rounded-2xl p-8 shadow-lg border border-border/50 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-2 h-10 bg-[#00153D] rounded-full"></div>
              <h3 className="text-3xl font-bold text-card-foreground">Additional Insights</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
            </div>
            <div className="prose prose-base max-w-none">
              <p className="text-card-foreground leading-relaxed font-medium">{company.additionalNotes}</p>
            </div>
          </div>
        )}

        {/* Latest News */}
        <div className="bg-gradient-to-br from-card via-card to-card/80 rounded-2xl p-8 shadow-lg border border-border/50 backdrop-blur-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-2 h-10 bg-[#00153D] rounded-full"></div>
            <h3 className="text-3xl font-bold text-card-foreground">Latest News & Updates</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
          </div>
          <div className="bg-gradient-to-br from-[#00153D]/5 via-[#00153D]/3 to-accent/5 rounded-xl p-6 border border-[#00153D]/20 shadow-inner">
            <div className="prose prose-base max-w-none">
              <p className="text-card-foreground mb-4 font-medium leading-relaxed">{company.latestNews}</p>
              {company.latestNewsLink && (
                <a 
                  href={company.latestNewsLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#00153D] hover:text-[#00153D]/80 font-semibold transition-colors group"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Source
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Report Footer */}
        <div className="bg-gradient-to-r from-muted/50 via-muted/30 to-muted/50 rounded-2xl p-6 text-center border border-border/30">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <div className="w-2 h-2 bg-[#00153D] rounded-full"></div>
            <p className="font-medium">Report generated on {new Date().toLocaleDateString()} | Continental Financial Services</p>
            <div className="w-2 h-2 bg-[#00153D] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}


