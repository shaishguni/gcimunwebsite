"use client"

import Image from "next/image"
import { motion, type Variants } from "framer-motion"
import { galleryItems } from "./data"



const sectionVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            staggerChildren: 0.12,
        },
    },
} satisfies Variants

const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.45,
            ease: "easeOut",
        },
    },
} satisfies Variants

const Gallery = () => (
    <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="container mx-auto px-4 py-16"
    >
        <motion.div variants={cardVariants} className="max-w-2xl space-y-4">
            <h2 className="text-3xl font-semibold text-neutral-600 md:text-4xl">Conference Gallery</h2>
            <p className="text-sm text-black md:text-base">
                Moments from past GCIMUN conferences capturing diplomacy, leadership, and lasting connections.
            </p>
        </motion.div>

        <motion.div variants={sectionVariants} className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
                <motion.article key={item.src} variants={cardVariants} className="group">
                    <div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-white/5 bg-neutral-900/40">
                        <Image
                            src={item.src}
                            alt=" c"
                            fill
                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                            className="object-cover transition duration-700 group-hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                    
                </motion.article>
            ))}
        </motion.div>
    </motion.section>
)

export default Gallery