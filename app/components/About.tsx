"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Inclusivity & Growth",
    description:
      "We welcome delegates at every experience level so that first-time participants and seasoned chairs learn side by side.",
  },
  {
    title: "Diplomatic Excellence",
    description:
      "Seven dynamic committees including UNSC, UNHCR, and UNICEF tackle urgent global challenges with rigor.",
  },
  {
    title: "Theme-Driven Dialogue",
    description:
      "Our 2026 theme examines political stability and Gen Z movements across the globe.",
  },
];

const About = () => {
  const fadeInVariant = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="relative bg-slate-50 border-y border-slate-200 py-20 md:py-32">
      <div className="mx-auto max-w-4xl px-6 ">
        
        {/* SECTION: WHAT IS GCI MUN */}
        <div className="mb-24">
          <motion.h2 
            
            className="text-3xl md:text-5xl  text-blue-900 mb-8 font-semibold"
          >
            What is GCI MUN?
          </motion.h2>

          <motion.div 
            {...fadeInVariant}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-base md:text-lg text-slate-600 leading-relaxed"
          >
            <p>
              Global College International Model United Nations (GCI MUN) is a premier platform where 
              diplomacy meets global citizenship. Established in 2017, the conference has evolved 
              into one of Nepal's most respected academic simulations, entering its seventh edition in 2026.
            </p>
            <p>
              We bring together students from Grade 8 to the undergraduate level to engage in 
              high-stakes debate and collaborative problem-solving. Guided by our motto, 
              <span className="italic font-medium text-blue-900"> “न स्थैर्यं शक्त्या, स्थैर्यं न्यायेन”</span> 
              — Stability is not achieved by power, but by justice.
            </p>
          </motion.div>
          {/* ADDED IMAGE SECTION */}
          <motion.div 
            {...fadeInVariant}
            transition={{ delay: 0.3 }}
            className="mt-12 overflow-hidden "
          >
            <img 
              src="/assets/DSC09489.jpg" 
              alt="GCI MUN Delegates in Discussion" 
              className="w-full h-[200px] md:h-[400px] object-cover "
            />
          </motion.div>
        </div>

        

        {/* SECTION: WHY GCI MUN */}
        <div className="text-center">
          <motion.h2 
            {...fadeInVariant}
           
            className="text-3xl md:text-5xl font-semibold text-blue-900 mb-12"
          >
            WHY GCI MUN?
          </motion.h2>

          <div className="grid gap-12 sm:grid-cols-3">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                {/* Removed font-bold, set to font-normal */}
                <h3 className="text-lg font-normal text-blue-900 mb-3 uppercase tracking-wide italic">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
          
            
          <motion.div 
            {...fadeInVariant}
            transition={{ delay: 0.4 }}
            className="mt-20 p-8  rounded-3xl"
          >
            <hr className="border-slate-400 mb-24" />
            {/* Removed font-bold */}
            <h3 className="text-xl font-normal italic text-blue-900 mb-4 uppercase tracking-tight ">
              A Legacy of Excellence
            </h3>
            <p className="text-slate-600 text-base max-w-2xl mx-auto">
              Beyond the committee rooms, we offer a transformative experience featuring an international 
              Executive Board and vibrant socials. Our approach focuses on policy analysis, 
              public speaking, and consensus-based problem solving that prepares you for the real world.
            </p>
            
            <div className="mt-8">
              <a
                href="/committees"
                
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900 transition-all group"
              >
                EXPLORE THE 2026 COMMITTEES
                <span className="transform transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </motion.div>
        </div>
            
      </div>
    </section>
  );
};

export default About;