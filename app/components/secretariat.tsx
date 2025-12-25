"use client";

import Image from "next/image"
import Letter from "./letter"
import { Inter } from 'next/font/google'
import { motion } from "framer-motion"



const font = Inter({ subsets: ["latin"], weight: ["400", "700"], display: "swap", variable: '--font-sans' })

const Secretariat = () => {
  return (
    <section className="relative   w-full flex space-x-6 items-center  justify-between overflow-hidden">

      <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <Letter />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center"
          >
            <div className="flex w-full max-w-sm mb-60 flex-col items-center gap-3 px-4">
                <div className="relative rounded-2xl border border-border/50 bg-card shadow-2xl overflow-hidden ring-1 ring-black/5 w-full">
                <div className="absolute inset-0  " />
                <Image
                  src="/photos/secretariat.jpg"
                  alt="Secretariat"
                  width={2000}
                  height={2000}
                  className="relative w-full h-auto rounded-lg  object-cover"
                />
                </div>

              <div className={`${font.className} text-center`}>
                <p className="text-sm font-semibold text-slate-900">Raunak Shrestha</p>
                <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase">Secretary-General of GCI MUN VII</p>
              </div>

              <div className="h-px w-16  bg-slate-200" />

              <blockquote className={`${font.className} text-center text-xl text-muted-foreground italic leading-relaxed`}>
                &ldquo;The structure of world peace cannot be the work of one man, or one party, or one nation. It must be a peace which rests on the cooperative effort of the whole world.&rdquo;
              </blockquote>

              <p className={`${font.className} text-xs font-medium uppercase tracking-[0.2em] text-blue-600`}>&mdash; Franklin D. Roosevelt, 1945</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Secretariat
