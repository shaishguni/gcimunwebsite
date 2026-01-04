import React from 'react'
import Image from 'next/image'
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-geist-sans",
});


interface LearnMoreProps {
  image: string;
  title: string;
  link: string;
}

const links: LearnMoreProps[] = [
  {
    image: '/learn/about.jpg',
    title: 'About US',
    link: '/about',
  },
  {
    image: '/learn/gallery.jpg',
    title: 'Gallery',
    link: '/gallery',
  },
  {
    image: '/learn/register.jpg',
    title: 'Registration',
    link: '/registration',
  },

];


const LearnMore = () => {
  return (
    <section className={`${font.variable} py-16 px-4 `}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">LEARN MORE</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {links.map((item) => (
            <a
              key={item.link}
              href={item.link}
              className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center font-medium">
                  <h3 className={`text-white text-3xl ${font.className}`}>{item.title}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LearnMore