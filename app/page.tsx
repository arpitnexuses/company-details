"use client"
import { companies } from "@/data/companies"
import { CompanyTable } from "@/components/company-table"

export default function HomePage() {

  return (
    // Override brand tokens locally to achieve the gold styling while staying on tokens
    <main className="[--primary:#00153D] [--primary-foreground:#ffffff] [--secondary:oklch(0.96_0.02_95)] [--muted:oklch(0.97_0_0)]">
      <header className="h-2 bg-[#00153D]" aria-hidden="true" />

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-balance text-3xl font-semibold tracking-tight">ADGM Company Insight</h1>
          <img
            src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Nexuses-full-logo-dark_8d412ea3-bf11-4fc6-af9c-bee7e51ef494.png"
            alt="Nexuses Logo"
            className="h-8 w-auto sm:h-10"
          />
        </div>

        <div className="mt-6">
          <CompanyTable data={companies} />
        </div>
      </section>
    </main>
  )
}
