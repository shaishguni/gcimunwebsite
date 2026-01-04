"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { committees } from "./data";

const Committees = () => {
  return (
    <section id="committees" className="relative overflow-hidden bg-slate-50">
      <div className="relative mx-auto max-w-6xl px-6 pt-30 pb-20 sm:px-8 lg:px-10">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-semibold uppercase tracking-[0.1em] text-slate-900">
            OUR COMMITTEES
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
            Explore a curated set of councils, courts, and press teams designed to sharpen debate,
            negotiation, and storytelling inside the GCIMUN experience.
          </p>
        </motion.div>

        {/* COMMITTEE GRID */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-16 grid gap-16 lg:grid-cols-2"
        >
          {committees.map((committee, index) => {
            return (
              <motion.article
                key={committee.fullName}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                className="group relative overflow-hidden"
              >
                <div className="grid gap-8 lg:grid-cols-[220px,1fr] lg:items-center">
                  
                  {/* IMAGE PANEL */}
                  <div className="relative h-64 overflow-hidden rounded-2xl shadow-sm">
                    <Image
                      src={committee.cover}
                      alt={committee.fullName}
                      fill
                      className="object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/55 via-blue-800/45 to-slate-900/55" />

                    {/* Larger Icon Badge */}
                    <div className="relative z-10 flex h-full items-end p-5">
                      <div className="flex size-20 items-center justify-center rounded-2xl bg-white/95 backdrop-blur shadow-md">
                        <Image
                          src={committee.icon}
                          alt={`${committee.fullName} logo`}
                          width={48} 
                          height={48}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  {/* TEXT CONTENT */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {committee.fullName}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        {committee.desc}
                      </p>
                    </div>

                    {/* Agenda Tag */}
                    <div className="mt-6 flex items-center gap-2 self-start rounded-full border border-slate-200 bg-slate-100/50 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-600">
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