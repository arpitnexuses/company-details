import { companies } from "@/data/companies"
import { CompanyTable } from "@/components/company-table"

export default function HomePage() {
  return (
    // Override brand tokens locally to achieve the gold styling while staying on tokens
    <main className="[--primary:oklch(0.78_0.12_83)] [--secondary:oklch(0.96_0.02_95)] [--muted:oklch(0.97_0_0)]">
      <header className="h-2 bg-primary" aria-hidden="true" />
      <section className="mx-auto max-w-6xl px-6 py-8">
        <h1 className="text-balance text-3xl font-semibold tracking-tight">Company Reports</h1>
        <p className="mt-2 text-muted-foreground">
          Click any row to open a full, detailed report styled like the reference.
        </p>

        <div className="mt-6">
          <CompanyTable data={companies} />
        </div>
      </section>
    </main>
  )
}
