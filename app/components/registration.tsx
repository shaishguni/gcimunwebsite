import Link from "next/link"
import { Button } from "@/components/ui/button"

const registrationOptions = [
    {
        id: "delegate",
        title: "Individual Delegate Registration",
        price: "NRs 3,300",
        description:
            "Individual delegates receive access to conference materials, plenaries, three meals each day during the conference, participate certificate along with gift hampers!",
        link: "https://forms.gle/YOUR_DELEGATE_FORM",
        navLabel: "Individual Delegate",
        cta: "Register as Individual",
    },
    {
        id: "group",
        title: "Group / School Registration",
        price: "NRs 3,300 (minimum 10 delegates)",
        description:
            "Group packages include priority seating for all delegates and a discount on additional delegates.",
        link: "https://forms.gle/YOUR_GROUP_FORM",
        navLabel: "School / Group",
        cta: "Register Your Delegation",
    },
    {
        id: "intl-delegation",
        title: "International Delegation Registration",
        price: "Pricing & Support Available",
        description:
            "International delegations gain full conference access plus orientation support, welcome kits, and guidance for travel logistics.",
        link: "https://forms.gle/YOUR_INTL_FORM",
        navLabel: "International Delegation",
        cta: "Start International Registration",
    },
    {
        id: "residential",
        title: "Residential Delegation Registration",
        price: "Includes Accommodation + Meals",
        description:
            "Residential delegates enjoy on-campus accommodation, meals during conference days, and access to all sessions.",
        link: "https://forms.gle/YOUR_RESIDENTIAL_FORM",
        navLabel: "Residential Delegation",
        cta: "Secure Residential Slot",
    },
] as const

const supportHighlights = [
    {
        title: "Dedicated Registration Support",
        description:
            "Email our secretariat at gcimun@gci.edu.np with delegate lists, payment confirmations, or special requests. We aim to reply within one business day.",
    },
    {
        title: "Key Milestones",
        description:
            "Secure your delegation slots early to access committee preferences and housing selection. Final payment deadlines will be announced via email updates.",
    },
    {
        title: "Flexible Delegation Sizes",
        description:
            "We accommodate delegations of every size—from independent delegates to large schools and international contingents—with tailored guidance at each step.",
    },
] as const

const highlightIcons = [
    (
        <svg
            key="grid"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 4h16v16H4z" />
            <path d="M4 9h16" />
            <path d="M9 4v16" />
        </svg>
    ),
    (
        <svg
            key="clock"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    ),
    (
        <svg
            key="users"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="8.5" cy="7" r="4" />
            <path d="M20 8v6" />
            <path d="M23 11h-6" />
        </svg>
    ),
] as const

export default function RegistrationPage() {
    return (
        <main className="min-h-screen bg-white text-slate-900">
            <div id="site-navbar" aria-hidden="true" />

            <section className="border-b border-slate-200 bg-white">
                <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
                    <div className="flex flex-col items-center gap-6 text-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
                            <span className="text-sm font-medium text-blue-600">Registration 2026</span>
                        </div>
                        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl md:text-5xl">
                            Secure Your Delegate Experience
                        </h1>
                        <p className="max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
                            Choose the registration pathway that best matches your delegation. Each package unlocks the full
                            GCI MUN experience&mdash;from committee sessions and plenaries to curated networking moments across the
                            conference weekend.
                        </p>

                        <nav className="mt-6 flex flex-wrap justify-center gap-3">
                            {registrationOptions.map((option) => (
                                <Button
                                    key={option.id}
                                    asChild
                                    className="border border-blue-100 bg-white text-blue-600 hover:bg-blue-50"
                                >
                                    <a href={`#${option.id}`}>{option.navLabel}</a>
                                </Button>
                            ))}
                        </nav>
                    </div>
                </div>
            </section>

            <section id="registration" className="py-16 sm:py-20">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 md:grid-cols-2">
                        <div className="space-y-8">
                            <div className="space-y-3">
                                <h2 className="text-3xl font-semibold text-slate-900">Plan Your Delegation</h2>
                                <p className="text-base leading-relaxed text-slate-600">
                                    Explore the routes available to independent delegates, schools, and international teams. Our
                                    secretariat will guide you through registration, payment, and housing once you submit your form.
                                </p>
                            </div>

                            <div className="space-y-5">
                                {supportHighlights.map((highlight, index) => (
                                    <div
                                        key={highlight.title}
                                        className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200"
                                    >
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                                            {highlightIcons[index]}
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="text-base font-semibold text-slate-900">{highlight.title}</h3>
                                            <p className="text-sm leading-relaxed text-slate-600">{highlight.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6 rounded-2xl border border-slate-200 bg-gray-50 p-6 shadow-sm">
                            <div className="space-y-2 text-left">
                                <h3 className="text-2xl font-semibold text-slate-900">Choose Your Pathway</h3>
                                <p className="text-sm leading-relaxed text-slate-600">
                                    Use the quick links below or scroll to the registration cards to find the option that matches your
                                    delegation.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {registrationOptions.map((option) => (
                                    <Button
                                        key={`${option.id}-nav`}
                                        asChild
                                        className="border border-blue-100 bg-white text-blue-600 hover:bg-blue-50"
                                    >
                                        <a href={`#${option.id}`}>{option.navLabel}</a>
                                    </Button>
                                ))}
                            </div>

                            <div className="grid gap-6">
                                {registrationOptions.map((option) => (
                                    <section
                                        key={option.id}
                                        id={option.id}
                                        className="rounded-xl border border-transparent bg-white p-5 shadow transition hover:border-indigo-200"
                                    >
                                        <div className="flex flex-col gap-3">
                                            <div>
                                                <h4 className="text-lg font-semibold text-slate-900">{option.title}</h4>
                                                <p className="mt-1 text-xs font-medium uppercase tracking-[0.3em] text-blue-600/80">
                                                    Registration Fee
                                                </p>
                                                <p className="text-base font-semibold text-blue-600">{option.price}</p>
                                            </div>

                                            <p className="text-sm leading-relaxed text-slate-600">{option.description}</p>

                                            <Button asChild className="w-fit bg-blue-600 text-white hover:bg-blue-700">
                                                <Link href={option.link} target="_blank" rel="noreferrer">
                                                    {option.cta}
                                                </Link>
                                            </Button>
                                        </div>
                                    </section>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-xl font-semibold text-slate-900">Payment Details</h3>
                            <p className="text-sm leading-relaxed text-slate-600">
                                Complete payment via bank transfer to the official GCI MUN account and email the transaction
                                confirmation, delegate names, and contact information to
                                <a
                                    className="ml-1 font-medium text-blue-600 hover:text-blue-700"
                                    href="mailto:gcimun@gci.edu.np"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    gcimun@gci.edu.np
                                </a>
                                .
                            </p>
                            <p className="text-sm leading-relaxed text-slate-600">
                                Payment deadlines will be shared closer to conference weekend. Late submissions may incur additional
                                processing fees.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
