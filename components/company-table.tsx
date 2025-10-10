"use client"
import Link from "next/link"
import type { Company } from "@/data/companies"
import { useMemo, useState } from "react"
import { companyLogos } from "@/data/company-logos"
import { CompanyReport } from "@/components/company-report"
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet"

type Props = {
  data: Company[]
}

export function CompanyTable({ data }: Props) {
  const [open, setOpen] = useState(false)
  const [activeSlug, setActiveSlug] = useState<string | null>(null)

  const activeCompany = useMemo(() => data.find((c) => c.slug === activeSlug), [data, activeSlug])
  const activeLogo = activeCompany ? companyLogos[activeCompany.slug] : undefined

  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="report-table min-w-[720px] w-full text-sm">
        <thead>
          <tr>
            <th className="px-4 py-3 text-left font-medium">Company</th>
            <th className="px-4 py-3 text-left font-medium">Headquarters</th>
            <th className="px-4 py-3 text-left font-medium">Founded</th>
            <th className="px-4 py-3 text-left font-medium">Employees</th>
            <th className="px-4 py-3 text-left font-medium">Industry</th>
            <th className="px-4 py-3 text-left font-medium">Listed</th>
          </tr>
        </thead>
        <tbody>
          {data.map((c) => (
            <tr
              key={c.slug}
              className="border-t hover:bg-accent/50 transition-colors cursor-pointer"
              onClick={() => {
                setActiveSlug(c.slug)
                setOpen(true)
              }}
            >
              <td className="px-4 py-3">
                <div className="flex flex-col">
                  <span className="font-medium">{c.name}</span>
                  <span className="text-muted-foreground">{new URL(c.website).host}</span>
                </div>
              </td>
              <td className="px-4 py-3">{c.hq}</td>
              <td className="px-4 py-3">{c.yearFounded}</td>
              <td className="px-4 py-3">{c.employeeSize}</td>
              <td className="px-4 py-3">{c.industry}</td>
              <td className="px-4 py-3">{c.listed}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-[700px] max-w-none sm:max-w-none p-0 h-full overflow-y-auto">
          {/* Accessibility: Dialog requires a title */}
          <SheetTitle className="sr-only">
            {activeCompany ? `${activeCompany.name} Report` : "Company Report"}
          </SheetTitle>
          {activeCompany && <CompanyReport company={activeCompany} logo={activeLogo} />}
        </SheetContent>
      </Sheet>
    </div>
  )
}
