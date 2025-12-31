"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import teamMembers from "./data";

const MeetTheTeam: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8 mt-4 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.6em] text-slate-500">
            Our Secretariat
          </span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
            Learn Today, Lead Tomorrow
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-slate-600 md:ml-0 md:text-base">
            The GCIMUN leadership collective pairs experience with creativity to guide every
            committee, delegate, and initiative. Explore the team that plans each moment of
            conference weekend with precision and purpose.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-16 grid gap-10 lg:grid-cols-3"
        >
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-3xl bg-white/95 shadow-lg ring-1 ring-slate-200 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div
                className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-linear-to-r ${member.gradient}`}
              />

              <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[minmax(0,240px),1fr] lg:items-stretch">
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-slate-900/5" />
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${member.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-25`}
                  />
                  <figure className="relative aspect-4/5 w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(min-width: 1024px) 240px, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/55 via-slate-900/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="absolute bottom-4 left-4 inline-flex items-center rounded-full bg-white/90 px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-slate-700 shadow-sm">
                      {member.role}
                    </span>
                  </figure>
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900">
                      {member.name}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
