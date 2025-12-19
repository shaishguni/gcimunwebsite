"use client";

import React from "react";
import Image from "next/image";
import { Globe, Users, Target } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    text: "Experience authentic diplomatic negotiations and debate on pressing global issues",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    text: "Develop critical skills in public speaking, research, and international relations",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    text: "Network with passionate delegates from across the region and build lasting connections",
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-500/10 to-orange-500/10",
  },
];

const About = () => {
  return (
    <section className="relative bg-linear-to-br from-white via-blue-50/30 to-purple-50/30 overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-3 text-xs font-semibold uppercase tracking-widest bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          About GCI MUN
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold text-foreground mb-3"
        >
          Where Diplomacy Meets{" "}
          <span className="bg-linear-to-r from-blue-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent">
            Excellence
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10 max-w-2xl text-sm md:text-base text-muted-foreground"
        >
          GCI Model United Nations brings together the brightest minds to engage in meaningful dialogue, 
          tackle global challenges, and shape the leaders of tomorrow.
        </motion.p>
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <ul className="space-y-6">
            {highlights.map((item, index) => (
              <motion.li
                key={item.text}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 group"
              >
                <div className={`flex size-10 items-center justify-center rounded-xl bg-linear-to-br ${item.bgGradient} border border-white/20 shadow-sm mt-0.5 group-hover:scale-110 group-hover:shadow-md transition-all duration-300`}>
                  <div className={`bg-linear-to-br ${item.gradient} bg-clip-text text-transparent`}>
                    {index === 0 && <Globe className="size-5" style={{ color: 'rgb(59 130 246)' }} />}
                    {index === 1 && <Target className="size-5" style={{ color: 'rgb(168 85 247)' }} />}
                    {index === 2 && <Users className="size-5" style={{ color: 'rgb(251 146 60)' }} />}
                  </div>
                </div>
                <span className="text-base md:text-lg leading-relaxed text-foreground">{item.text}</span>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-2"
            >
              <a
                href="/committees"
                className="inline-flex items-center gap-2 text-sm font-semibold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Explore Our Committees
                <span aria-hidden className="text-blue-600">→</span>
              </a>
            </motion.li>
          </ul>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute -inset-4 bg-linear-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl border border-border/50 bg-card shadow-2xl overflow-hidden ring-1 ring-black/5">
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-purple-500/10 to-transparent" />
              <Image
                src="/assets/about.jpg"
                alt="GCI MUN Conference"
                width={720}
                height={460}
                className="relative h-auto w-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;