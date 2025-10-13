"use client"
import Link from "next/link"
import type { Company } from "@/data/companies"
import { useMemo, useState } from "react"
import { companyLogos } from "@/data/company-logos"
import { CompanyReport } from "@/components/company-report"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

type Props = {
  data: Company[]
}

export function CompanyTable({ data }: Props) {
  const [open, setOpen] = useState(false)
  const [activeSlug, setActiveSlug] = useState<string | null>(null)
  const [query, setQuery] = useState("")
  const [filterType, setFilterType] = useState("")
  const [filterListed, setFilterListed] = useState("")
  const [filterPermissibility, setFilterPermissibility] = useState("")

  const activeCompany = useMemo(() => data.find((c) => c.slug === activeSlug), [data, activeSlug])
  const filteredData = useMemo(() => {
    const q = query.trim().toLowerCase()
    return data.filter((c) => {
      const matchesQuery = !q || [
        c.name,
        c.website,
        c.companyEmail,
        c.hq,
        c.type,
        c.serviceFocus,
      ].some((v) => (v || "").toLowerCase().includes(q))

      const matchesType = !filterType || c.type === filterType
      const matchesListed =
        !filterListed || (c.listed || "").toLowerCase().includes(filterListed.toLowerCase())
      const matchesPerm = !filterPermissibility || c.permissibility === filterPermissibility

      return matchesQuery && matchesType && matchesListed && matchesPerm
    })
  }, [data, query, filterType, filterListed, filterPermissibility])
  const activeLogo = activeCompany ? companyLogos[activeCompany.slug] : undefined

  const uniqueTypes = useMemo(() => Array.from(new Set(data.map((d) => d.type).filter(Boolean))).sort(), [data])
  const uniquePerms = useMemo(() => Array.from(new Set(data.map((d) => d.permissibility).filter(Boolean))).sort(), [data])

  return (
    <>
      {/* Filters */}
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, website, email, HQ, focus..."
            className="h-9 w-full rounded-md border border-[#00153D] bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-[#00153D]"
          />
        </div>
        <div className="w-full md:w-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-none md:flex md:items-center gap-3">
          
          <select
            value={filterListed}
            onChange={(e) => setFilterListed(e.target.value)}
            className="h-9 min-w-[10rem] rounded-md border border-[#00153D] bg-background px-3 text-sm"
          >
            <option value="">All Listed</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <select
            value={filterPermissibility}
            onChange={(e) => setFilterPermissibility(e.target.value)}
            className="h-9 min-w-[10rem] rounded-md border border-[#00153D] bg-background px-3 text-sm"
          >
            <option value="">All Priority</option>
            {uniquePerms.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto rounded-lg border border-border">
        <table className="report-table min-w-[900px] w-full text-sm">
          <thead className="bg-[#00153D] text-white">
            <tr>
              <th className="px-4 py-3 text-left font-medium">Company</th>
              <th className="px-4 py-3 text-left font-medium">Type</th>
              <th className="px-4 py-3 text-left font-medium">Headquarters</th>
              <th className="px-4 py-3 text-left font-medium">Founded</th>
              <th className="px-4 py-3 text-left font-medium">Employees</th>
              <th className="px-4 py-3 text-left font-medium">Revenue</th>
              <th className="px-4 py-3 text-left font-medium">Listed</th>
              <th className="px-4 py-3 text-left font-medium">Permissibility</th>
            </tr>
          </thead>
        <tbody>
          {filteredData.map((c) => (
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
                    <span className="text-muted-foreground text-xs">{c.website}</span>
                    <span className="text-muted-foreground text-xs">{c.companyEmail}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="text-xs">{c.type}</span>
                </td>
                <td className="px-4 py-3">{c.hq}</td>
                <td className="px-4 py-3">{c.yearFounded}</td>
                <td className="px-4 py-3">{c.employeeSize}</td>
                <td className="px-4 py-3">{c.revenue}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded text-xs ${
                    c.listed === 'Yes' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {c.listed}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded text-xs ${
                    c.permissibility === 'High' ? 'bg-green-100 text-green-800' : 
                    c.permissibility === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-red-100 text-red-800'
                  }`}>
                    {c.permissibility}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-3 p-4">
        {filteredData.map((c) => (
          <div
            key={c.slug}
            className="bg-card border border-border rounded-lg p-4 hover:bg-accent/50 transition-colors cursor-pointer"
            onClick={() => {
              setActiveSlug(c.slug)
              setOpen(true)
            }}
          >
            <div className="space-y-3">
              {/* Company Header */}
              <div>
                <h3 className="font-semibold text-lg">{c.name}</h3>
                <p className="text-muted-foreground text-sm">{c.type}</p>
              </div>

              {/* Company Details Grid */}
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-muted-foreground">Headquarters:</span>
                  <p className="font-medium">{c.hq}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Founded:</span>
                  <p className="font-medium">{c.yearFounded}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Employees:</span>
                  <p className="font-medium">{c.employeeSize}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Revenue:</span>
                  <p className="font-medium">{c.revenue}</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-1">
                <p className="text-muted-foreground text-xs">{c.website}</p>
                <p className="text-muted-foreground text-xs">{c.companyEmail}</p>
              </div>

              {/* Status Badges */}
              <div className="flex gap-2 flex-wrap">
                <span className={`px-2 py-1 rounded text-xs ${
                  c.listed === 'Yes' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  Listed: {c.listed}
                </span>
                <span className={`px-2 py-1 rounded text-xs ${
                  c.permissibility === 'High' ? 'bg-green-100 text-green-800' : 
                  c.permissibility === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                  'bg-red-100 text-red-800'
                }`}>
                  {c.permissibility} Priority
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="!max-w-[95vw] !w-[95vw] max-h-[95vh] overflow-y-auto p-0 sm:!max-w-[80vw] sm:!w-[80vw]" style={{ width: '95vw', maxWidth: '95vw' }}>
          <DialogTitle className="sr-only">
            {activeCompany ? `${activeCompany.name} Report` : "Company Report"}
          </DialogTitle>
          {activeCompany && <CompanyReport company={activeCompany} logo={activeLogo} />}
        </DialogContent>
      </Dialog>
    </>
  )
}
