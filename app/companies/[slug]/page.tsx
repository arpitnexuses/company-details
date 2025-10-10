import Link from "next/link"
import { getCompanyBySlug } from "@/data/companies"
import { companyLogos } from "@/data/company-logos"
import { CompanyReport } from "@/components/company-report"

export default async function CompanyReportPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const company = getCompanyBySlug(slug)
  const logo = company ? companyLogos[company.slug] : undefined

  if (!company) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-2xl font-semibold">Report not found</h1>
        <p className="mt-2 text-muted-foreground">We couldn&apos;t find that company.</p>
        <Link href="/" className="mt-6 inline-block text-primary underline">
          Back to list
        </Link>
      </main>
    )
  }

  return (
    <main>
      <CompanyReport company={company} logo={logo} />
      <div className="mx-auto max-w-5xl px-6 pb-10">
        <div className="mt-10 flex items-center gap-4">
          <Link href="/" className="text-primary underline">
            Back to all companies
          </Link>
        </div>
      </div>
    </main>
  )
}
