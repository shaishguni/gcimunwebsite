"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import teamMembers from "./data";

const MeetTheTeam: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      
      {/* HEADER SECTION */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-40 pb-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold uppercase tracking-[0.1em] text-slate-900"
        > 
          OUR TEAM
        </motion.h2>
      </div>
      
      {/* TEAM GRID */}
      
      <div className="relative mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="group relative flex flex-col items-center overflow-hidden rounded-5xl bg-white shadow-md ring-1 ring-slate-200 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* BLUE GRADIENT OVERLAY (Added this part) */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-blue-500/60 to-transparent pointer-events-none" />

                {/* Bio Hover Overlay */}
                <div className="absolute inset-0 z-10 flex flex-col justify-end bg-slate-800/85 backdrop-blur-sm p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="max-h-full overflow-y-auto scrollbar-hide">
                    <p className="text-sm leading-relaxed text-white font-medium">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full p-6 text-center">
                <h3 className="text-xl font-bold text-slate-900">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-slate-500">
                  {member.role}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MeetTheTeam;