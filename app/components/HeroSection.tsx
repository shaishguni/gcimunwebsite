"use client";



import {  Calendar } from "lucide-react";
import { motion } from "framer-motion";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { EB_Garamond } from "next/font/google";
import { Poppins } from "next/font/google";
import Image from "next/image";

const eb = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const HeroSection = () => {


  return (
    <section className="relative bg-[#030b35] py-56 justify-between items-center  bg-blend-darken text-white overflow-visible">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-32">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8 max-w-4xl"
            >
            <h1
              className={`${eb.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight`}
            >
              GCI MUN 2026
            </h1>
            <div className="relative mx-auto h-56 w-full max-w-3xl sm:h-72 md:h-96">
              <Image
              src="/assets/herosection.jpg"
              alt="GCI MUN 2026 Logo"
              fill
              priority
              className="rounded-lg object-cover"
              />
            </div>


            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-blue-100/90 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-blue-200" />
                <span>19-21, February 2026</span>
              </div>
             
            </div>
          </motion.div>

       
         
        </div>


      </div>
    </section>
  );
};

export default HeroSection;