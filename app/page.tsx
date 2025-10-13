"use client"
import { useEffect, useState } from "react"
import { companies } from "@/data/companies"
import { CompanyTable } from "@/components/company-table"

export default function HomePage() {
  const [authorized, setAuthorized] = useState(false)
  const [password, setPassword] = useState("")
  const [show, setShow] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const ok = typeof window !== 'undefined' && sessionStorage.getItem("authorized") === "true"
    if (ok) setAuthorized(true)
  }, [])

  const expected = process.env.NEXT_PUBLIC_ACCESS_PASSWORD || ""

  const tryUnlock = () => {
    if (password === expected && expected) {
      setAuthorized(true)
      sessionStorage.setItem("authorized", "true")
      setError("")
    } else {
      setError("Incorrect password")
    }
  }

  return (
    // Override brand tokens locally to achieve the gold styling while staying on tokens
    <main className="[--primary:#00153D] [--primary-foreground:#ffffff] [--secondary:oklch(0.96_0.02_95)] [--muted:oklch(0.97_0_0)]">
      <header className="h-2 bg-[#00153D]" aria-hidden="true" />

      {/* Password Gate Overlay */}
      {!authorized && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div className="absolute inset-0 backdrop-blur-xl bg-gradient-to-br from-black/30 via-black/20 to-black/30" />
          {/* Auth Card */}
          <div className="relative z-10 w-[92%] max-w-md">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-6 shadow-[0_8px_32px_rgba(31,38,135,0.37)] backdrop-blur-2xl">
              {/* Lock Avatar */}
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#00153D]/15 ring-1 ring-[#00153D]/30">
                <svg className="h-6 w-6 text-[#00153D]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.657 0 3 1.343 3 3v2H9v-2c0-1.657 1.343-3 3-3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11V8a5 5 0 1110 0v3m-9 5h8a2 2 0 002-2v-1a2 2 0 00-2-2H8a2 2 0 00-2 2v1a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="mb-1 text-center text-xl font-semibold text-white">Secure Access</h2>
              <p className="mb-4 text-center text-xs text-white/70">Enter the password to continue</p>

              <div className="relative mb-3">
                <input
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') tryUnlock() }}
                  placeholder="Password"
                  className={`h-11 w-full rounded-lg border bg-white/80 px-3 pr-10 text-sm outline-none backdrop-blur-sm focus:border-[#00153D] focus:ring-2 focus:ring-[#00153D]/40 ${error ? 'border-red-500' : 'border-[#00153D]'}`}
                />
                <button
                  type="button"
                  aria-label="Toggle visibility"
                  onClick={() => setShow((s) => !s)}
                  className="absolute inset-y-0 right-2 my-auto inline-flex h-7 w-7 items-center justify-center rounded-md text-[#00153D] hover:bg-white/60"
                >
                  {show ? (
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a10.05 10.05 0 012.157-3.368M6.225 6.225A9.953 9.953 0 0112 5c4.477 0 8.268 2.943 9.542 7a10.05 10.05 0 01-3.006 4.294M3 3l18 18" />
                    </svg>
                  )}
                </button>
              </div>

              {error && <p className="mb-3 text-center text-xs font-medium text-red-300">{error}</p>}

              <button
                onClick={tryUnlock}
                className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#00153D] px-4 text-sm font-semibold text-white shadow hover:bg-[#2f83d2] focus:outline-none focus:ring-2 focus:ring-[#00153D]/40"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                Unlock
              </button>

              <div className="mt-3 text-center text-[11px] text-white/60">
                Press <span className="rounded bg-white/20 px-1 py-0.5">Enter</span> to submit
              </div>
            </div>
            {/* Glow ring */}
            <div className="pointer-events-none -z-10 mt-[-2rem] h-32 w-full rounded-full bg-[#00153D]/30 blur-3xl" />
          </div>
        </div>
      )}

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-balance text-3xl font-semibold tracking-tight">ADGP Company Insight</h1>
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
