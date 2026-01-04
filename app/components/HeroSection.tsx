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
      {/* Background image */}
      <Image
        src="/assets/DSC09161.jpg"
        alt="GCI MUN 2026 background"
        fill
        priority
        className="object-cover contrast-110 saturate-110"
        quality={85}
      />

      {/* Blue gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b 
        from-blue-900/40 
        via-blue-950/60 
        to-black/80" />

      {/* Optional subtle vignette for depth */}
      <div className="absolute inset-0 bg-radial from-transparent to-black/40" />

      {/* Center content */}
      <div className="relative z-10 text-center px-6">
        <h1
          className={`${poppins.className} flex flex-wrap items-baseline justify-center gap-6 
          text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]`}
        >
          <span className="text-6xl sm:text-9xl md:text-9xl lg:text-[10rem] font-bold tracking-tight leading-none">
            GCI MUN
          </span>
          <span className="text-6xl sm:text-9xl md:text-[10rem] lg:text-[10rem] font-bold tracking-tight leading-none text-blue-400">
            2026
          </span>
        </h1>

        <div className=" ">
          <p className="text-1xl sm:text-3xl md:text-4xl text-white/90 font-light tracking-wider font-medium">
            February 19th - 22nd
          </p>
        </div>
      </div>
    </section>
  );
}
