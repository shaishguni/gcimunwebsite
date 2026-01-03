"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import teamMembers from "./data";

const MeetTheTeam: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      
      {/* HEADER WITH BACKGROUND IMAGE */}
      <div className="relative w-full">
        <div className="relative h-[480px] w-full overflow-hidden">
          <Image
            src="/assets/secretariat-bg.JPG" 
            alt="GCIMUN Secretariat"
            fill
            priority
            className="object-cover"
          />

          {/* DARKER OVERLAY: Increased opacity and used black for better contrast */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Header text */}
          <div className="relative z-10 flex h-full items-center justify-center pt-12">

            <motion.h2

              initial={{ opacity: 0, y: 24 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{ duration: 0.6 }}

              className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white"

            > 
              OUR TEAM
            </motion.h2>
          </div>
        </div>
      </div>

      {/* TEAM GRID */}
      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
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
              className="group relative flex flex-col items-center overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-slate-200 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Bio Hover Overlay: Grayish with Blur for readability */}
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
                <div
                  className={`mx-auto mt-4 h-1 w-12 rounded-full bg-gradient-to-r ${member.gradient}`}
                />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MeetTheTeam;