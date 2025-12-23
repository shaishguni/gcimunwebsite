import Image from "next/image"
import Letter from "./letter"
import { Inter } from 'next/font/google'

const font  = Inter({ subsets: ["latin"], weight: ["400", "700"], display: "swap", variable: '--font-sans' })

const Secretariat = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full">

      <div className="flex-1">
        <Letter />
      </div>
      

      <div className="hidden md:flex md:flex-col md:flex-1 pt-60 items-center"> 
        <div className="flex w-full max-w-sm flex-col items-center gap-4">
          <Image
            src="/photos/secretariat.jpg"
            alt="Secretariat"
            width={480}
            height={600}
            className="w-full rounded-lg shadow-lg object-cover"
          />

          <div className={`${font.className} text-center`}>
            <p className="text-lg font-semibold text-slate-900">Raunak Shrestha</p>
            <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase">Secretary-General of GCI MUN VII</p>
          </div>

          <div className="h-px w-20 bg-slate-200" />

          <blockquote className={`${font.className} text-center text-base text-muted-foreground italic leading-relaxed`}>
            &ldquo;The structure of world peace cannot be the work of one man, or one party, or one nation. It must be a peace which rests on the cooperative effort of the whole world.&rdquo;
          </blockquote>

          <p className={`${font.className} text-xs font-medium uppercase tracking-[0.2em] text-slate-500`}>&mdash; Franklin D. Roosevelt, 1945</p>
        </div>
      </div>
    </div>
  )
}

export default Secretariat
