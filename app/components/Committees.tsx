"use client";

import React from "react";
import { motion } from "framer-motion";
import { Scale, Globe, Building2, Heart, Shield, Activity, Newspaper } from "lucide-react";

const committees = [
	{
		title: "UNSC",
		fullName: "United Nations Security Council",
		desc: "Maintaining international peace and security",
		agenda: "To be declared",
		icon: Shield,
		gradient: "from-blue-500 to-cyan-500",
		bgGradient: "from-blue-50 to-cyan-50",
	},
	{
		title: "UNHCR",
		fullName: "United Nations High Commissioner for Refugees",
		desc: "Protecting and supporting refugees and displaced persons",
		agenda: "To be declared",
		icon: Heart,
		gradient: "from-rose-500 to-red-500",
		bgGradient: "from-rose-50 to-red-50",
	},
	{
		title: "SPECPOL",
		fullName: "Special Political and Decolonization Committee",
		desc: "Addressing decolonization and special political issues",
		agenda: "To be declared",
		icon: Scale,
		gradient: "from-indigo-500 to-blue-500",
		bgGradient: "from-indigo-50 to-blue-50",
	},
	{
		title: "UNICEF",
		fullName: "United Nations Children’s Fund",
		desc: "Advancing children’s rights, health, and education",
		agenda: "To be declared",
		icon: Activity,
		gradient: "from-teal-500 to-emerald-500",
		bgGradient: "from-teal-50 to-emerald-50",
	},
	{
		title: "AU",
		fullName: "African Union",
		desc: "Promoting unity and development across Africa",
		agenda: "To be declared",
		icon: Globe,
		gradient: "from-yellow-500 to-orange-500",
		bgGradient: "from-yellow-50 to-orange-50",
	},
	{
		title: "ICJ",
		fullName: "International Court of Justice",
		desc: "Settling legal disputes between states and giving advisory opinions",
		agenda: "To be declared",
		icon: Building2,
		gradient: "from-slate-600 to-slate-400",
		bgGradient: "from-slate-50 to-slate-100",
	},
	{
		title: "IP",
		fullName: "International Press",
		desc: "Reporting on conference proceedings and press coverage",
		agenda: "To be declared",
		icon: Newspaper,
		gradient: "from-amber-500 to-orange-500",
		bgGradient: "from-amber-50 to-orange-50",
	},
];

const Committees = () => {
	return (
		<section id="committees" className="relative bg-linear-to-br from-white via-blue-50/20 to-purple-50/20 overflow-hidden">
			{/* Decorative blobs */}
			<div className="absolute top-0 left-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl" />
			<div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl" />
			
			<div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="mb-3 text-xs font-semibold uppercase tracking-widest bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
				>
					Our Committees
				</motion.div>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					viewport={{ once: true }}
					className="text-3xl md:text-5xl font-bold text-foreground"
				>
					Engage in{" "}
					<span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
						Global Dialogue
					</span>
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
					className="mt-3 text-muted-foreground max-w-2xl"
				>
					Choose from our diverse range of committees, each tackling critical global issues 
					and providing unique opportunities for diplomatic engagement.
				</motion.p>
				<div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
					{committees.map((committee, i) => {
						const Icon = committee.icon;
						return (
							<motion.div
								key={committee.title}
								initial={{ opacity: 0, y: 16 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-100px" }}
								transition={{ duration: 0.5, delay: i * 0.08 }}
								whileHover={{ y: -6, scale: 1.02 }}
								className="group relative rounded-2xl border border-border/50 bg-card p-6 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
							>
								{/* Gradient background blob */}
								<div
									className={`pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-linear-to-br ${committee.bgGradient} opacity-50 group-hover:opacity-70 transition-opacity duration-300`}
								/>
								
								{/* Icon */}
								<div className={`relative flex size-12 items-center justify-center rounded-xl bg-linear-to-br ${committee.gradient} shadow-lg mb-4`}>
									<Icon className="size-6 text-white" />
								</div>

								{/* Content */}
								<div className="relative">
									<h3 className="text-xl font-bold text-foreground mb-1">
										{committee.title}
									</h3>
									<p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wide">
										{committee.fullName}
									</p>
									<p className="text-sm text-muted-foreground mb-4 leading-relaxed">
										{committee.desc}
									</p>
									<div className="inline-flex items-center gap-2 rounded-lg border border-border/50 bg-background/50 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur-sm">
										<span className="size-1.5 rounded-full bg-amber-500 animate-pulse" />
										Agenda: {committee.agenda}
									</div>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Committees;


