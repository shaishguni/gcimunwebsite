"use client";
import Image from "next/image";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function MinimalHero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Full-screen background image with dark overlay */}
      <Image
        src="/assets/herosection.jpg" // ← replace with your actual image path
        alt="GCI MUN 2026 background"
        fill
        priority
        className="object-cover    brightness-[0.35] contrast-125 sharpness-105"
        quality={85}
      />

      {/* Very subtle dark gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/40 to-black/70" />

      {/* Center content */}
      <div className="relative z-10 text-center px-6">
        <h1
          className={`${poppins.className} flex flex-wrap items-baseline justify-center gap-6 
               text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]`}
        >
          <span className="text-6xl sm:text-9xl md:text-9xl lg:text-[10rem] font-bold tracking-tight leading-none">
            GCI MUN
          </span>
          <span className="text-6xl sm:text-9xl md:text-[10rem] lg:text-[10rem] font-bold tracking-tight leading-none text-blue-300/90">
            2026
          </span>
        </h1>

        <div className="mt-10 sm:mt-16">
          <p className="text-2xl sm:text-4xl md:text-5xl text-white/90 font-light tracking-wider">
            19 – 21 February 2026
          </p>
        </div>
      </div>
    </section>
  );
}