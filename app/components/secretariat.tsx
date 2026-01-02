"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EB_Garamond, Inter } from "next/font/google";
import { Poppins } from "next/font/google";

const poopins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});
import Letter from "./letter";

const eb = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const Secretariat = () => {
  return (
    <section className={`${eb.variable} ${inter.variable} relative w-full bg-linear-to-b from-slate-50 to-white py-20 md:py-32 overflow-hidden`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Letter Component */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <Letter />
          </motion.div>

          {/* Right - Photo + Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-full max-w-md space-y-8">
              {/* Photo with modern glassmorphic frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/15 border border-white/60 bg-white/40 backdrop-blur-xl">
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent z-10" />
                <Image
                  src="/photos/secretariat.jpg"
                  alt="Raunak Shrestha - Secretary-General of GCI MUN VII"
                  width={1200}
                  height={1200}
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>

              {/* Name & Title */}
              <div className={`${inter.className} text-center space-y-2`}>
                <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">
                  Raunak Shrestha
                </h3>
                <p className="text-sm md:text-base font-medium uppercase tracking-[0.35em] text-blue-600/90">
                  Secretary-General
                  <br />
                  GCI MUN VII
                </p>
              </div>

              {/* Subtle divider */}
              <div className="flex justify-center">
                <div className="h-px w-20 bg-linear-to-r from-transparent via-slate-300 to-transparent" />
              </div>

              {/* Quote */}
              <div className={`${poopins.className} space-y-4 text-center`}>
                <blockquote className="text-xl md:text-2xl font-medium italic text-slate-700 leading-relaxed tracking-wide">
                  &ldquo;The structure of world peace cannot be the work of one man, or one party, or one nation. It must be a peace which rests on the cooperative effort of the whole world.&rdquo;
                </blockquote>

                <p className="text-sm font-medium uppercase tracking-wider text-blue-700/80">
                  — Franklin D. Roosevelt, 1945
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Secretariat;