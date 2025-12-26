"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail,  } from "lucide-react";
import { Instagram } from "lucide-react";
import Image from "next/image";
import teamMembers from "./team";





const MeetTheTeam: React.FC = () => {
  


  return (
    <section className="relative bg-linear-to-br from-white via-blue-50/20 to-purple-50/20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="mb-3 text-xs font-semibold uppercase tracking-widest bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            The Secretariat
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our{" "}
            <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Leadership
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dedicated individuals committed to making GCI MUN an unforgettable experience 
            of diplomacy, debate, and global awareness.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl border border-border/50 bg-card p-6 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${member.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              {/* Avatar */}
              <div className="relative mb-4 flex justify-center">
                <div className={`relative size-24 rounded-full overflow-hidden ring-4 ring-offset-2 ring-offset-card bg-linear-to-br ${member.gradient} p-0.5`}>
                  <div className="size-full rounded-full overflow-hidden bg-card flex items-center justify-center">
                    {/* <User className="size-12 text-muted-foreground" /> */}
                    {/* Replace User icon with actual image when available */}
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative text-center">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-muted-foreground mb-1">
                  {member.role}
                </p>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 mt-3">
                  {member.bio}
                </p>

                {/* Social links */}
                <div className="flex justify-center gap-2">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="flex size-9 items-center justify-center rounded-lg border border-border bg-background/50 hover:bg-accent transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="size-4" />
                    </a>
                  )}
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-9 items-center justify-center rounded-lg border border-border bg-background/50 hover:bg-accent transition-colors"
                      aria-label={`Instagram profile of ${member.name}`}
                    >
                      <Instagram className="size-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;