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
		<section id="committees" className="relative overflow-hidden">
			<div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8 mt-4 lg:px-10">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center md:text-left"
				>
					<span className="text-[0.7rem] font-semibold uppercase tracking-[0.6em] text-slate-500">
						Our Committees
					</span>
					<h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
						Develop Diplomats of Tomorrow
					</h2>
					<p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-slate-600 md:ml-0 md:text-base">
						Explore a curated set of councils, courts, and press teams designed to sharpen debate,
						negotiation, and storytelling. Each committee pairs real-world urgency with dynamic
						learning inside the GCIMUN experience.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ delay: 0.1, duration: 0.6 }}
					className="mt-16 grid gap-10 lg:grid-cols-2"
				>
					{committees.map((committee, index) => {
						const Icon = committee.icon;
						return (
							<motion.article
								key={committee.title}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-40px" }}
								transition={{ duration: 0.55, delay: index * 0.05 }}
								className="group relative overflow-hidden rounded-3xl bg-white/95 shadow-lg ring-1 ring-slate-200 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
							>
								<div
									className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-linear-to-r ${committee.gradient}`}
								/>

								<div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[minmax(0,220px),1fr] lg:items-center">
									<div className="relative overflow-hidden rounded-2xl px-6 py-10">
										<div
											className={`absolute inset-0 bg-linear-to-br ${committee.gradient} opacity-10 transition-opacity duration-500 group-hover:opacity-20`}
										/>
										<div className="relative flex flex-col items-start gap-4">
											<span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-slate-700 shadow-sm">
												{committee.title}
											</span>
											<div className="flex size-16 items-center justify-center rounded-2xl bg-white/80 shadow-md backdrop-blur">
												<Icon className="size-7 text-slate-800" />
											</div>
										</div>
									</div>

									<div className="flex flex-col justify-between">
										<div>
											<h3 className="text-xl font-semibold text-slate-900">
												{committee.fullName}
											</h3>
											<p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
												{committee.desc}
											</p>
										</div>

										<div className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-600">
											<span className="h-2 w-2 rounded-full bg-amber-500" />
											Agenda: {committee.agenda}
										</div>
									</div>
								</div>
							</motion.article>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
};

export default Committees;


