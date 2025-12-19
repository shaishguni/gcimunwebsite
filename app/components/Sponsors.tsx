"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Globe, Users, Award, Handshake, Zap } from "lucide-react";

const sponsors = [
	{ name: "United Nations Association", icon: Globe },
	{ name: "Diplomatic Solutions", icon: Handshake },
	{ name: "Global Youth Initiative", icon: Users },
	{ name: "International Affairs Council", icon: Award },
	{ name: "Future Leaders Fund", icon: Zap },
	{ name: "WorldBridge Partners", icon: Building2 },
];

const Sponsors = () => {
	return (
		<section id="sponsors" className="relative bg-white py-16 md:py-20">
			<div className="mx-auto max-w-7xl px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center"
				>
					<h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-8 md:mb-12">
						Sponsored By
					</h3>
					
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center">
						{sponsors.map((sponsor, idx) => {
							const Icon = sponsor.icon;
							return (
								<motion.div
									key={sponsor.name}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: idx * 0.1 }}
									className="flex flex-col items-center gap-3 group"
								>
									<div className="size-12 md:size-14 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground/70 group-hover:bg-muted group-hover:text-foreground transition-all duration-300">
										<Icon className="size-6 md:size-7" />
									</div>
									<span className="text-xs md:text-sm font-medium text-muted-foreground text-center group-hover:text-foreground transition-colors">
										{sponsor.name}
									</span>
								</motion.div>
							);
						})}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Sponsors;
