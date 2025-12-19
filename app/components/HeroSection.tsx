"use client";

import React from "react";
import Image from "next/image";
import { Users, MapPin, Calendar, Award } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative flex w-full min-h-[80vh] bg-linear-to-br from-blue-50 via-white to-indigo-100">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-linear-to-tr from-blue-100/40 via-white/60 to-indigo-200/40 blur-2xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 pt-20 pb-16 md:pt-32 md:pb-20 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm border border-gray-200/50"
          >
            <Users className="h-4 w-4 text-primary" />
            100+ Delegates
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm border border-gray-200/50"
          >
            <MapPin className="h-4 w-4 text-primary" />
            GCI Campus
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm border border-gray-200/50"
          >
            <Calendar className="h-4 w-4 text-primary" />
            February 2026 
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm border border-gray-200/50"
          >
            <Award className="h-4 w-4 text-amber-500" />
            Premier Conference
          </motion.div>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-tight">
              Empowering Leaders,
              <br />
              <span className="bg-linear-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Shaping Tomorrow
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Join over 100 delegates at the most prestigious international Model United Nations conference of the year. 
              Engage in critical global discussions, develop diplomatic skills, and build lasting connections.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="text-base shadow-lg hover:shadow-xl transition-shadow">
                <Link href="/register">Start Registration</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base border-2">
                <Link href="/committees">View Committees</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-6 max-w-md"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">6+</div>
                <div className="text-sm text-muted-foreground mt-1">Committees</div>
              </div>
              <div className="text-center border-x border-border px-2">
                <div className="text-3xl font-bold text-foreground">3+</div>
                <div className="text-sm text-muted-foreground mt-1">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">3</div>
                <div className="text-sm text-muted-foreground mt-1">Days</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-border/50">
              <Image
                src="/assets/hero.png"
                alt="GCI MUN Conference"
                fill
                className="object-cover"
                priority
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-border/50"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Award className="size-6" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Award-Winning</div>
                  <div className="text-sm text-muted-foreground">Best Delegate Awards</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
