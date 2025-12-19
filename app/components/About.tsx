"use client";

import React from "react";
import Image from "next/image";
import { Globe, Users, Target } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  "Experience authentic diplomatic negotiations and debate on pressing global issues",
  "Develop critical skills in public speaking, research, and international relations",
  "Network with passionate delegates from across the region and build lasting connections",
];

const About = () => {
  return (
    <section className="bg-linear-to-br from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-900"
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
          Where Diplomacy Meets Excellence
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
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 group"
              >
                <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary mt-0.5 group-hover:bg-primary/20 transition-colors">
                  {index === 0 && <Globe className="size-4" />}
                  {index === 1 && <Target className="size-4" />}
                  {index === 2 && <Users className="size-4" />}
                </div>
                <span className="text-base md:text-lg leading-relaxed text-foreground">{item}</span>
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
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Explore Our Committees
                <span aria-hidden>→</span>
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
            <div className="rounded-2xl border border-border bg-card shadow-lg overflow-hidden">
              <Image
                src="/assets/about.jpg"
                alt="GCI MUN Conference"
                width={720}
                height={460}
                className="h-auto w-full object-cover"
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