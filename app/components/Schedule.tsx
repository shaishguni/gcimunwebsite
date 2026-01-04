"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, Coffee, Award, Globe, Mic, 
  FileText, Download, BookOpen, Users 
} from "lucide-react";

// Committees Data - Update the 'image' string to your actual file paths
const committees = [
  { name: "UNSC", image: "/assets/logos/unsc.png", color: "bg-blue-700", desc: "Security Council", link: "/guides/unsc.pdf" },
  { name: "UNHCR", image: "/assets/logos/unhcr.png", color: "bg-cyan-600", desc: "Refugee Agency", link: "/guides/unhcr.pdf" },
  { name: "IP", image: "/assets/logos/ip.png", color: "bg-purple-600", desc: "International Press", link: "/guides/ip.pdf" },
  { name: "ICJ", image: "/assets/logos/icj.png", color: "bg-indigo-700", desc: "Court of Justice", link: "/guides/icj.pdf" },
  { name: "AU", image: "/assets/logos/au.png", color: "bg-amber-600", desc: "African Union", link: "/guides/au.pdf" },
  { name: "SPECPOL", image: "/assets/logos/specpol.png", color: "bg-emerald-600", desc: "Political & Decolonization", link: "/guides/specpol.pdf" },
  { name: "UNICEF", image: "/assets/logos/unicef.png", color: "bg-blue-500", desc: "Children's Fund", link: "/guides/unicef.pdf" },
];

const conferenceSchedule = [
  {
    day: "Day 1 - February 19, 2026",
    theme: "Opening & Orientation",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "bg-blue-50",
    borderColor: "border-blue-500",
   
    sessions: [
      { time: "8:00 AM - 9:30 AM", title: "Registration & Check-in", desc: "Delegate registration and welcome kit distribution" },
      { time: "9:30 AM - 10:30 AM", title: "Opening Ceremony", desc: "Keynote address and conference inauguration" },
      { time: "10:30 AM - 11:00 AM", title: "Coffee Break", desc: "Networking opportunity with fellow delegates" },
      { time: "11:00 AM - 1:00 PM", title: "Committee Session I", desc: "Introduction to agendas and preliminary debate" },
      { time: "1:00 PM - 2:00 PM", title: "Lunch Break", desc: "Catered lunch and informal discussions" },
      { time: "2:00 PM - 5:00 PM", title: "Committee Session II", desc: "Moderated caucuses and resolution drafting" },
      { time: "7:00 PM - 9:00 PM", title: "Social Night", desc: "Delegate mixer and cultural exchange" },
    ],
  },
  {
    day: "Day 2 - February 20, 2026",
    theme: "Debate & Deliberation",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "bg-purple-50",
    borderColor: "border-purple-500",
    
    sessions: [
      { time: "9:00 AM - 11:00 AM", title: "Committee Session III", desc: "Unmoderated caucuses and bloc formation" },
      { time: "11:00 AM - 11:30 AM", title: "Coffee Break", desc: "Refreshments and networking" },
      { time: "11:30 AM - 1:30 PM", title: "Committee Session IV", desc: "Amendment debates and voting procedures" },
      { time: "1:30 PM - 2:30 PM", title: "Lunch Break", desc: "Catered lunch" },
      { time: "2:30 PM - 5:30 PM", title: "Committee Session V", desc: "Final debates and resolution passing" },
      { time: "8:00 PM - 11:00 PM", title: "Delegate Dance", desc: "Evening gala and entertainment" },
    ],
  },
  {
    day: "Day 3 - February 21, 2026",
    theme: "Resolution & Closing",
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "bg-amber-50",
    borderColor: "border-amber-500",
    
    sessions: [
      { time: "9:00 AM - 11:00 AM", title: "Committee Session VI", desc: "Final voting and resolution adoption" },
      { time: "11:00 AM - 11:30 AM", title: "Coffee Break", desc: "Last networking opportunity" },
      { time: "11:30 AM - 1:00 PM", title: "General Assembly", desc: "Presentation of resolutions from all committees" },
      { time: "1:00 PM - 2:00 PM", title: "Lunch Break", desc: "Final meal together" },
      { time: "2:00 PM - 4:00 PM", title: "Closing Ceremony", desc: "Award distribution and closing remarks" },
      { time: "4:00 PM", title: "Departure", desc: "Farewell and safe travels" },
    ],
  },
];

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section className="relative bg-slate-50 overflow-hidden py-20 md:py-28">
      <div className="relative mx-auto max-w-7xl px-6">
        
        {/* SECTION: COMMITTEE RESOURCES */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Study Guides</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Access the official background guides for your committees to prepare for the debate.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {committees.map((com) => (
              <motion.a
                key={com.name}
                href={com.link}
                whileHover={{ y: -8 }}
                className={`${com.color} p-8 rounded-3xl text-white shadow-lg transition-all group relative overflow-hidden flex flex-col items-center text-center`}
              >
                <div className="relative z-10 flex flex-col items-center w-full">
                  {/* Image Logo Container */}
                  <div className="mb-6 bg-white/20 w-24 h-24 p-4 rounded-full backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={com.image} 
                      alt={`${com.name} Logo`} 
                      className="w-full h-full object-contain brightness-0 invert" 
                    />
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-2">{com.name}</h3>
                  <p className="text-white/90 font-medium mb-8 leading-tight">{com.desc}</p>
                  
                  <div className="inline-flex items-center gap-2 bg-white text-slate-900 px-5 py-2.5 rounded-xl group-hover:bg-slate-100 transition-colors shadow-sm">
                    <FileText className="size-4" />
                    <span className="text-sm font-bold uppercase tracking-wider">View Guide</span>
                  </div>
                </div>

                {/* Background decorative watermark */}
                <div className="absolute -bottom-6 -right-6 opacity-10 group-hover:scale-110 transition-transform duration-500">
                   <img src={com.image} alt="" className="size-40 object-contain brightness-0 invert" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* SECTION: CONFERENCE ITINERARY */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Conference Itinerary</h2>
            
            <div className="flex flex-wrap justify-center gap-3">
              {conferenceSchedule.map((day, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveDay(idx)}
                  className={`px-8 py-3 rounded-full font-bold transition-all shadow-md ${
                    activeDay === idx 
                    ? "bg-blue-900 text-white scale-105" 
                    : "bg-white text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  Day {idx + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {conferenceSchedule.map((day, i) => i === activeDay && (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    

                    <div className="flex-1">
                      <div className={`rounded-2xl border-2 ${day.borderColor} ${day.bgGradient} p-6 md:p-8 shadow-sm`}>
                        <div className="mb-8">
                          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{day.day}</h3>
                          <p className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${day.gradient} text-white`}>
                            <Globe className="size-4" />
                            {day.theme}
                          </p>
                        </div>

                        <div className="space-y-4">
                          {day.sessions.map((session, idx) => (
                            <div key={idx} className="group rounded-xl border border-slate-200 bg-white p-4 hover:shadow-md transition-all">
                              <div className="flex flex-col md:flex-row md:items-start gap-3">
                                <div className="flex items-center gap-2 md:min-w-40">
                                  <Coffee className="size-4 text-slate-400" />
                                  <span className="text-sm font-bold text-slate-900">{session.time}</span>
                                </div>
                                <div>
                                  <h4 className="font-bold text-slate-800">{session.title}</h4>
                                  <p className="text-sm text-slate-500">{session.desc}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* SECTION: DELEGATE HANDBOOK */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-blue-900 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center md:justify-start gap-3">
              <BookOpen className="size-8 text-blue-400" />
              Delegate Handbook
            </h2>
            <p className="text-blue-100 text-lg">
              Download the official GCI MUN 2026 handbook for full details on code of conduct, 
              position paper requirements, and logistics.
            </p>
          </div>
          <a 
            href="/handbook.pdf" 
            className="flex items-center gap-3 bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all shadow-lg"
          >
            <Download className="size-5" />
            DOWNLOAD PDF
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Schedule;