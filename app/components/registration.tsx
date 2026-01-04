import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Mail, Info, CreditCard, Users, Clock } from "lucide-react";

const registrationOptions = [
    {
        id: "delegate",
        title: "Individual Delegate",
        price: "NRs 3,300",
        description: "Standard registration for independent students.",
        features: [
            "Full conference access",
            "3 Meals each day",
            "Participation Certificate",
            "Exclusive Gift Hampers",
            "Conference Materials"
        ],
        link: "https://forms.gle/YOUR_DELEGATE_FORM",
        cta: "Register as Individual",
    },
    {
        id: "group",
        title: "Group / School",
        price: "NRs 3,500",
        description: "Minimum 10 delegates per school/group.",
        features: [
            "Priority Committee Seating",
            "Bulk Delegate Management",
            "Group Discount available",
            "Coordinated logistics",
            "Dedicated Support"
        ],
        link: "https://forms.gle/YOUR_GROUP_FORM",
        cta: "Register Delegation",
    },
    {
        id: "intl-delegation",
        title: "International",
        price: "Contact for Pricing",
        description: "For teams joining us from abroad.",
        features: [
            "Orientation support",
            "Welcome kits",
            "Travel logistics guidance",
            "Visa assistance support",
            "Global networking"
        ],
        link: "https://forms.gle/YOUR_INTL_FORM",
        cta: "Inquire Registration",
    },
    {
        id: "residential",
        title: "Residential",
        price: "Full Package",
        description: "All-inclusive stay for out-of-city teams.",
        features: [
            "On-campus accommodation",
            "All-day meals included",
            "Session proximity",
            "Nightly social access",
            "Dedicated housing support"
        ],
        link: "https://forms.gle/YOUR_RESIDENTIAL_FORM",
        cta: "Secure Residential Slot",
    },
] as const;

export default function RegistrationPage() {
    return (
        <main className="min-h-screen bg-[#fafafa] text-slate-900">
            {/* SECTION 1: HERO HEADER */}
            <section className="bg-white border-b border-slate-200">
                <div className="mx-auto max-w-7xl px-6 py-20 text-center">
                    <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Registration 2026</h2>
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6">
                        Join the Global Discourse
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
                        Choose the registration pathway that best matches your delegation. Each package unlocks the full 
                        GCI MUN experience&mdash;from committee sessions to curated networking moments.
                    </p>
                </div>
            </section>

            {/* SECTION 2: PRICING & REGISTRATION CARDS */}
            <section className="py-20 px-6">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {registrationOptions.map((option) => (
                            <div 
                                key={option.id} 
                                className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{option.title}</h3>
                                    <p className="text-sm text-slate-500 mb-4">{option.description}</p>
                                    <div className="text-2xl font-bold text-blue-600 tracking-tight">
                                        {option.price}
                                    </div>
                                </div>
                                
                                <div className="flex-grow space-y-4 mb-8 border-t border-slate-100 pt-6">
                                    {option.features.map((feature) => (
                                        <div key={feature} className="flex items-start gap-3 text-sm text-slate-600">
                                            <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button asChild className="w-full bg-slate-900 hover:bg-blue-600 text-white transition-colors h-12 rounded-lg">
                                    <Link href={option.link} target="_blank">{option.cta}</Link>
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 3: GUIDELINES & SUPPORT */}
            <section className="bg-white border-t border-slate-200 py-20 px-6">
                <div className="mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Registration Guidelines</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Support */}
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                                <Mail className="w-6 h-6" />
                            </div>
                            <h4 className="text-lg font-bold">Dedicated Support</h4>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Email <a href="mailto:gcimun@gci.edu.np" className="text-blue-600 font-medium">gcimun@gci.edu.np</a> with 
                                delegate lists or special requests. We reply within one business day.
                            </p>
                        </div>

                        {/* Milestones */}
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                                <Clock className="w-6 h-6" />
                            </div>
                            <h4 className="text-lg font-bold">Key Milestones</h4>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Secure slots early for committee preferences. Final payment deadlines 
                                will be sent via email updates after form submission.
                            </p>
                        </div>

                        {/* Flexibility */}
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                                <Users className="w-6 h-6" />
                            </div>
                            <h4 className="text-lg font-bold">Delegation Sizes</h4>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                We accommodate all sizes—from independent delegates to large school contingents—with tailored guidance.
                            </p>
                        </div>
                    </div>

                    {/* Payment Footer */}
                    <div className="mt-16 bg-slate-50 rounded-2xl p-8 border border-slate-200">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center shrink-0">
                                <CreditCard className="w-6 h-6 text-slate-700" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-3 text-slate-900">Payment Process</h4>
                                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                                    Complete payment via bank transfer to the official GCI MUN account. Email the transaction 
                                    confirmation and delegate details to our secretariat for verification.
                                </p>
                                <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
                                    NOTE: LATE FEES APPLY AFTER DEADLINE
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}