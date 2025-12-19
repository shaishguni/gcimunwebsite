"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Coffee, Users, Award, Globe, Mic, PartyPopper } from "lucide-react";

const conferenceSchedule = [
	{
		day: "Day 1 - February 19, 2026",
		theme: "Opening & Orientation",
		gradient: "from-blue-500 to-cyan-500",
		bgGradient: "bg-blue-50",
		borderColor: "border-blue-500",
		icon: Calendar,
		sessions: [
			{ time: "8:00 AM - 9:30 AM", title: "Registration & Check-in", desc: "Delegate registration and welcome kit distribution" },
			{ time: "9:30 AM - 10:30 AM", title: "Opening Ceremony", desc: "Keynote address and conference inauguration" },
			{ time: "10:30 AM - 11:00 AM", title: "Coffee Break", desc: "Networking opportunity with fellow delegates" },
			{ time: "11:00 AM - 1:00 PM", title: "Committee Session I", desc: "Introduction to agendas and preliminary debate" },
			{ time: "1:00 PM - 2:00 PM", title: "Lunch Break", desc: "Catered lunch and informal discussions" },
			{ time: "2:00 PM - 5:00 PM", title: "Committee Session II", desc: "Moderated caucuses and resolution drafting" },
			{ time: "7:00 PM - 9:00 PM", title: "Social Night", desc: "Delegate mixer and cultural exchange" },
		],
	},
	{
		day: "Day 2 - February 20, 2026",
		theme: "Debate & Deliberation",
		gradient: "from-purple-500 to-pink-500",
		bgGradient: "bg-purple-50",
		borderColor: "border-purple-500",
		icon: Mic,
		sessions: [
			{ time: "9:00 AM - 11:00 AM", title: "Committee Session III", desc: "Unmoderated caucuses and bloc formation" },
			{ time: "11:00 AM - 11:30 AM", title: "Coffee Break", desc: "Refreshments and networking" },
			{ time: "11:30 AM - 1:30 PM", title: "Committee Session IV", desc: "Amendment debates and voting procedures" },
			{ time: "1:30 PM - 2:30 PM", title: "Lunch Break", desc: "Catered lunch" },
			{ time: "2:30 PM - 5:30 PM", title: "Committee Session V", desc: "Final debates and resolution passing" },
			{ time: "8:00 PM - 11:00 PM", title: "Delegate Dance", desc: "Evening gala and entertainment" },
		],
	},
	{
		day: "Day 3 - February 21, 2026",
		theme: "Resolution & Closing",
		gradient: "from-amber-500 to-orange-500",
		bgGradient: "bg-amber-50",
		borderColor: "border-amber-500",
		icon: Award,
		sessions: [
			{ time: "9:00 AM - 11:00 AM", title: "Committee Session VI", desc: "Final voting and resolution adoption" },
			{ time: "11:00 AM - 11:30 AM", title: "Coffee Break", desc: "Last networking opportunity" },
			{ time: "11:30 AM - 1:00 PM", title: "General Assembly", desc: "Presentation of resolutions from all committees" },
			{ time: "1:00 PM - 2:00 PM", title: "Lunch Break", desc: "Final meal together" },
			{ time: "2:00 PM - 4:00 PM", title: "Closing Ceremony", desc: "Award distribution and closing remarks" },
			{ time: "4:00 PM", title: "Departure", desc: "Farewell and safe travels" },
		],
	},
];

const Schedule = () => {
	return (
<section id="schedule" className="relative bg-linear-to-br from-white via-blue-50/20 to-purple-50/20 overflow-hidden py-20 md:py-28">
			{/* Decorative blobs */}
			<div className="absolute top-0 left-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl" />
			<div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl" />
			
			<div className="relative mx-auto max-w-7xl px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<div className="mb-3 text-xs font-semibold uppercase tracking-widest bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
						Conference Schedule
					</div>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
						Three Days of{" "}
						<span className="bg-linear-to-r from-blue-600 via-cyan-600 to-cyan-600 bg-clip-text text-transparent">
							Diplomacy
						</span>
					</h2>
					<p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
						From opening ceremony to closing awards, experience an immersive journey 
						through international relations and global leadership.
					</p>
				</motion.div>

				<div className="max-w-5xl mx-auto space-y-8">
					{conferenceSchedule.map((day, i) => {
						const Icon = day.icon;
						return (
<motion.div
								key={day.day}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-50px" }}
								transition={{ duration: 0.6, delay: i * 0.15 }}
								className="relative"
							>
								{/* Timeline connector */}
								{i !== conferenceSchedule.length - 1 && (
									<div className="absolute left-8 top-24 bottom-0 w-0.5 bg-linear-to-b from-border to-transparent -mb-8 hidden md:block" />
								)}

								<div className="flex gap-6">
									{/* Day indicator */}
									<div className="flex-shrink-0 pt-1 hidden md:block">
										<div className={`size-16 rounded-2xl flex items-center justify-center bg-linear-to-br ${day.gradient} shadow-lg`}>
											<Icon className="size-8 text-white" />
										</div>
									</div>

									{/* Content */}
									<div className="flex-1">
										<div className={`rounded-2xl border-2 ${day.borderColor} ${day.bgGradient} p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300`}>
											<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
												<div>
													<h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
														{day.day}
													</h3>
													<p className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-linear-to-r ${day.gradient} text-white`}>
														<Globe className="size-4" />
														{day.theme}
													</p>
												</div>
											</div>

											<div className="space-y-3">
												{day.sessions.map((session, idx) => (
<motion.div
														key={idx}
														initial={{ opacity: 0, x: -20 }}
														whileInView={{ opacity: 1, x: 0 }}
														viewport={{ once: true }}
														transition={{ duration: 0.4, delay: idx * 0.05 }}
														className="group rounded-xl border border-border bg-card/80 backdrop-blur-sm p-4 hover:bg-card hover:shadow-md transition-all duration-200"
													>
														<div className="flex flex-col md:flex-row md:items-start gap-3">
															<div className="flex items-center gap-2 md:min-w-[160px]">
																<Coffee className="size-4 text-muted-foreground" />
																<span className="text-sm font-semibold text-foreground whitespace-nowrap">
																	{session.time}
																</span>
															</div>
															<div className="flex-1">
																<h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
																	{session.title}
																</h4>
																<p className="text-sm text-muted-foreground">
																	{session.desc}
																</p>
															</div>
														</div>
													</motion.div>
												))}
											</div>
										</div>
									</div>
								</div>
							</motion.div>
						);
					})}
				</div>

				{/* CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="text-center mt-16 pt-12 border-t border-border"
				>
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-500/10 to-purple-500/10 border border-border mb-4">
						<PartyPopper className="size-4 text-primary" />
						<span className="text-sm font-medium text-foreground">
							February 19-21, 2026 • GCI Campus
						</span>
					</div>
					<p className="text-sm text-muted-foreground">
						Mark your calendars and prepare for an unforgettable diplomatic experience!
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default Schedule;
