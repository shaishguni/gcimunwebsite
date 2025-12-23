"use client";

// import React from "react";
import Image from "next/image";
// import { Users, MapPin, Calendar, Award } from "lucide-react";
import { motion } from "framer-motion";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { EB_Garamond } from "next/font/google";

// const eb = EB_Garamond({ subsets: ["latin"] });

// const HeroSection = () => {
//   return (
//     <section className="relative flex w-full min-h-[80vh] bg-gradient-to-b from-[#0a1a2b] to-[#102a47] text-white">
//       <div className="absolute inset-0 pointer-events-none z-0">
//         <div className="w-full h-full bg-gradient-to-tr from-white/5 via-transparent to-white/10 blur-xl" />
//       </div>

//       <div className="mx-auto max-w-7xl px-4 pt-20 pb-16 md:pt-32 md:pb-20 relative z-10 w-full">
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mb-6 text-center md:text-left"
//         >
//           <div className="inline-block uppercase tracking-[0.25em] text-xs text-blue-100/90">
//             Global Leadership & Diplomacy
//           </div>
//         </motion.div>

//         <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -24 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7, delay: 0.15 }}
//           >
//             <h1 className={`${eb.className} text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight`}>
//               GCI Model United Nations
//             </h1>

//             <div className="mt-4 flex flex-wrap items-center gap-4 text-blue-100/90">
//               <div className="flex items-center gap-2">
//                 <Calendar className="h-4 w-4 text-blue-200" />
//                 <span>February 2026</span>
//               </div>
//               <span className="h-4 w-px bg-blue-300/30" />
//               <div className="flex items-center gap-2">
//                 <MapPin className="h-4 w-4 text-blue-200" />
//                 <span>GCI Campus</span>
//               </div>
//               <span className="h-4 w-px bg-blue-300/30" />
//               <div className="flex items-center gap-2">
//                 <Users className="h-4 w-4 text-blue-200" />
//                 <span>100+ Delegates</span>
//               </div>
//             </div>

//             <p className="mt-6 text-lg md:text-xl text-blue-100/90 max-w-2xl leading-relaxed">
//               A distinguished forum for diplomacy and debate. Join delegates from around the world to engage in rigorous discussion,
//               develop policy, and build lifelong connections within a tradition of excellence.
//             </p>

//             <motion.div
//               initial={{ opacity: 0, y: 16 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.35 }}
//               className="mt-10 flex flex-col sm:flex-row gap-4"
//             >
//               <Button asChild size="lg" className="text-base bg-amber-500 text-black hover:bg-amber-600 shadow-md">
//                 <Link href="/register">Register</Link>
//               </Button>
//               <Button asChild size="lg" variant="outline" className="text-base border-blue-200 text-blue-100 hover:bg-white/10">
//                 <Link href="/committees">Committees</Link>
//               </Button>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.5 }}
//               className="mt-12 grid grid-cols-3 gap-6 max-w-md"
//             >
//               <div className="text-center">
//                 <div className={`${eb.className} text-3xl font-semibold`}>100+</div>
//                 <div className="text-sm text-blue-100/80 mt-1">Delegations</div>
//               </div>
//               <div className="text-center border-x border-white/15 px-2">
//                 <div className={`${eb.className} text-3xl font-semibold`}>6+</div>
//                 <div className="text-sm text-blue-100/80 mt-1">Committees</div>
//               </div>
//               <div className="text-center">
//                 <div className={`${eb.className} text-3xl font-semibold`}>3</div>
//                 <div className="text-sm text-blue-100/80 mt-1">Days</div>
//               </div>
//             </motion.div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.25 }}
//             className="relative"
//           >
//             <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
//               <Image
//                 src="/assets/hero.png"
//                 alt="GCI Model United Nations"
//                 fill
//                 className="object-cover"
//                 priority
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a2b]/70 via-transparent to-transparent" />
//             </div>

//             <motion.div
//               initial={{ opacity: 0, y: 16 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//               className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl ring-1 ring-black/5"
//             >
//               <div className="flex items-center gap-3">
//                 <div className="flex size-12 items-center justify-center rounded-lg bg-amber-500 text-black">
//                   <Award className="size-6" />
//                 </div>
//                 <div>
//                   <div className="font-semibold text-gray-900">Premier Conference</div>
//                   <div className="text-sm text-gray-600">Tradition of Excellence</div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-between overflow-hidden">
      <Image 
        src="/assets/bg.png"
        alt="GCI MUN HeroSection"
        fill
        className="object-cover"
        priority
      />
      {/* <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">GCI Model United Nations</h1>
        <p className="text-xl md:text-2xl">Global Leadership & Diplomacy</p>
      </div> */}
    </section>
  );
}
export default HeroSection;
