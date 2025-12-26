"use client";

import Image from "next/image";
import { Compass, Globe2, Target, Users } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "Inclusivity & Growth",
    description:
      "We welcome delegates at every experience level so that first-time participants and seasoned chairs learn side by side.",
    icon: Users,
    iconColor: "text-blue-900",
    iconBg: "bg-blue-50",
  },
  {
    title: "Diplomatic Excellence",
    description:
      "Seven dynamic committees including UNSC, UNHCR, UNICEF, SPECPOL, ICJ, African Union, and International Press tackle urgent global challenges.",
    icon: Compass,
    iconColor: "text-blue-900",
    iconBg: "bg-blue-50",
  },
  {
    title: "Theme-Driven Dialogue",
    description:
      "Our 2026 theme, Growing Challenge in Political Stability, examines unrest from Gen Z movements in Asia to conflicts in Ukraine, Palestine, and South Asia.",
    icon: Globe2,
    iconColor: "text-blue-900",
    iconBg: "bg-blue-50",
  },
];

const approachPoints = [
  "Policy analysis and resolution drafting",
  "Cross-cultural collaboration",
  "Public speaking and negotiation",
  "Consensus-based problem solving",
];

const About = () => {
  return (
    <section className="relative bg-slate-50 border-y border-slate-200">
      <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-blue-700"
        >
          About GCI MUN
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-3"
        >
          Where Diplomacy Meets{" "}
          <span className="text-slate-700">Global Citizenship</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10 max-w-2xl text-sm md:text-base text-slate-600"
        >
          Global College International Model United Nations (GCI MUN) brings together students from diverse
          backgrounds to engage in diplomacy, debate, and collaborative problem solving. Since its start in 2017 as
          UGCI MUN and its independent evolution after 2019, the conference has grown into one of Nepal&apos;s most
          respected MUN platforms, now entering its seventh edition in 2026.
        </motion.p>
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg md:text-xl font-semibold text-blue-900 mb-2">
                Our Mission
              </h3>
              <p className="text-sm md:text-base text-slate-600">
                GCI MUN fosters leadership, critical thinking, and global awareness for learners from Grade 8 through the
                undergraduate level. Structured committee sessions, inclusive networking, and high-quality training equip
                every delegate to explore complex international issues and propose actionable solutions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg md:text-xl font-semibold text-blue-900">
                What We Stand For
              </h3>
              <div className="space-y-4">
                {pillars.map((pillar, index) => {
                  const Icon = pillar.icon;
                  return (
                    <motion.div
                      key={pillar.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
                      viewport={{ once: true }}
                      className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md"
                    >
                      <div className="flex items-start gap-3">
                        <span className={`flex size-10 items-center justify-center rounded-xl ${pillar.iconBg} ${pillar.iconColor}`}>
                          <Icon className="size-5" />
                        </span>
                        <div>
                          <h4 className="text-base font-semibold text-blue-900">
                            {pillar.title}
                          </h4>
                          <p className="mt-1 text-sm text-slate-600">
                            {pillar.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-blue-100 text-blue-900">
                  <Target className="size-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900">
                    Our Approach
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Delegates build confidence and diplomacy through hands-on experiences:
                  </p>
                  <ul className="mt-3 grid gap-2 text-sm text-blue-900 md:grid-cols-2">
                    {approachPoints.map((point) => (
                      <li key={point} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-700" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-blue-900">
                A Legacy of Youth Diplomacy
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                From the landmark fifth edition in 2024 to the upcoming seventh edition in 2026, GCI MUN continues to
                inspire future leaders. An experienced Executive Board from across Asia and vibrant socials featuring
                renowned artists transform the conference into a celebration of youth diplomacy.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm"
            >
              <p>
                Guided by our motto, &ldquo;न स्थैर्यं शक्त्या, स्थैर्यं न्यायेन।&rdquo; — Stability is not achieved by power, but
                by justice — we cultivate respectful, professional, and intellectually engaging committee rooms where
                justice-driven dialogue takes center stage.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              viewport={{ once: true }}
            >
              <a
                href="/committees"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-900 hover:text-blue-700 transition-all"
              >
                Explore Our Committees
                <span aria-hidden className="text-blue-700">→</span>
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
          >
            <div className="relative rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden">
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
