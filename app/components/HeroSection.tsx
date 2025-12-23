"use client";

import { useState } from "react";
import Modal from "./Modal";
import { Users, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { EB_Garamond } from "next/font/google";
import { Poppins } from "next/font/google";

const eb = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const HeroSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative bg-[#030b35]  bg-blend-darken text-white overflow-hidden">
      {/* Optional subtle background glows - uncomment if desired */}
      {/* <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-64 w-64 bg-blue-600/30 blur-3xl" />
        <div className="absolute right-0 top-20 h-72 w-72 bg-amber-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-60 w-60 bg-cyan-400/15 blur-3xl" />
      </div> */}

      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 lg:py-32">
        <div className="flex flex-col items-center text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8 max-w-4xl"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2  mt-12  rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs uppercase tracking-[0.3em] text-blue-100/90">
              Global Leadership & Diplomacy
            </div>

            {/* Title */}
            <h1
              className={`${eb.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight`}
            >
              GCI MUN 2026
            </h1>

            {/* Event Details - Cleaner mobile layout */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-blue-100/90 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-blue-200" />
                <span>19-21, February 2026</span>
              </div>
              <div className="hidden sm:block h-5 w-px bg-blue-300/30" />
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-200" />
                <span>GCI Campus</span>
              </div>
              <div className="hidden sm:block h-5 w-px bg-blue-300/30" />
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-blue-200" />
                <span>100+ Delegates</span>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-2xl text-base sm:text-lg lg:text-xl text-blue-100/90 leading-relaxed"
          >
            A distinguished forum for diplomacy and debate. Join delegates from
            around the world to engage in rigorous discussion, develop policy,
            and build lifelong connections within a tradition of excellence.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto px-8 text-base bg-yellow-300 text-black font-medium hover:bg-yellow-400 shadow-lg transition-all"
            >
              <Link href="/register">Register Now</Link>
            </Button>
            <Button
              size="lg"
              className="w-full sm:w-auto px-8 text-base bg-amber-500 text-black font-medium hover:bg-amber-600 shadow-lg transition-all"

            >
              Learn More
            </Button>
          </motion.div>
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </section>
  );
};

export default HeroSection;