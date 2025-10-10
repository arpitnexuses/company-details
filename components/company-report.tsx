import type { Company } from "@/data/companies"

type Props = {
  company: Company
  logo?: string
}

export function CompanyReport({ company, logo }: Props) {
  return (
    // override brand tokens to get the warm gold look
    <div className="[--primary:oklch(0.78_0.12_83)] [--secondary:oklch(0.96_0.02_95)]">
      {/* top gold bar */}
      <div className="h-3 bg-primary" aria-hidden="true" />

      <div className="mx-auto max-w-5xl px-6 py-10">
        {/* header area similar to screenshot */}
        <div className="flex items-center gap-4">
          {logo ? (
            <img
              src={logo || "/placeholder.svg"}
              alt={`${company.name} logo`}
              width={80}
              height={80}
              className="h-20 w-20 object-contain rounded-sm border bg-white"
            />
          ) : (
            <div className="h-20 w-20 rounded-sm border bg-white" aria-hidden="true" />
          )}
          <div>
            <h1 className="text-pretty text-3xl font-extrabold tracking-tight">{company.name}</h1>
            <p className="text-muted-foreground">{company.serviceFocus}</p>
          </div>
        </div>

        {/* Company Details section label */}
        <div className="mt-10">
          <div className="inline-block rounded bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
            Company Details
          </div>

          {/* two-column table */}
          <div className="mt-4 overflow-hidden rounded-lg border border-border">
            <table className="report-table w-full text-sm">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left font-medium">Category</th>
                  <th className="px-4 py-3 text-left font-medium">Details</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Company Name", company.name],
                  ["Website", company.website],
                  ["Company Type", company.type],
                  ["Headquarter", company.hq],
                  ["Year Founded", company.yearFounded],
                  ["Employee Size", company.employeeSize],
                  ["Annual Revenue (USD)", company.revenue],
                  ["Industry/Sector", company.industry],
                  ["Regulator/License", company.regulator],
                  ["Listed", company.listed],
                  ["Key Executives", company.keyExecutives],
                ].map(([k, v]) => (
                  <tr key={k as string} className="border-t">
                    <td className="w-1/3 px-4 py-3 font-medium">{k}</td>
                    <td className="px-4 py-3">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Service Focus & Additional Information */}
        <div className="mt-10">
          <div className="inline-block rounded bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
            Service Focus & Additional Information
          </div>

          <div className="mt-4 overflow-hidden rounded-lg border border-border">
            <table className="report-table w-full text-sm">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left font-medium">Description</th>
                  <th className="px-4 py-3 text-left font-medium">Details</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Service Focus", company.serviceFocus],
                  ["Funding Status", company.fundingStatus],
                  ["Additional Notes", company.notes],
                  ["Latest News", company.latestNews],
                ].map(([k, v]) => (
                  <tr key={k as string} className="border-t align-top">
                    <td className="w-1/3 px-4 py-3 font-medium">{k}</td>
                    <td className="px-4 py-3 whitespace-pre-line">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* What CAN Continental Pitch */}
        <div className="mt-10">
          <div className="inline-block rounded bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
            What CAN Continental Pitch:
          </div>
          <div className="mt-4 rounded-lg border border-dashed border-border p-6 text-muted-foreground">
            Add internal pitch notes here.
          </div>
        </div>
      </div>
    </div>
  )
}


