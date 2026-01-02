"use client"


import { Badge } from "@/components/ui/badge";
import TikTok from './icons/tiktok';    
import Instagram from './icons/instagram';
import Image from "next/image";



const footerLinks = {
    company: [
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" }
    ]
};

const socialLinks = [

    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/gcimun.np/" },
    { name: "TikTok", icon: TikTok, href: "https://www.tiktok.com/@gcimun2026" }

];

export default function Footer() {
    

    return (
        <footer className="w-full bg-neutral-900 border-gray-200">
            <div className="max-w-6xl mx-auto px-4 md:px-24 py-12">
                {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="space-y-6">
                            <div className="relative w-24 h-12 rounded-lg  flex items-center justify-center transition-colors duration-200">
                                                            <Image
                                                                src="/assets/logo.png"
                                                                alt="GCI MUN Conference"
                                                                className="object-contain"
                                                                height={300}
                                                                width={300}
                                                            />
                                                        </div>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                                Empowering the next generation of global leaders through Model United Nations.
                            </p>
                            <div className="flex space-x-6">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400  hover:text-white transition-all duration-300 hover:scale-110"
                                    >
                                        <social.icon />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex justify-end">
                        <div className="space-y-6">
                            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                                Quick Links
                            </h3>
                            <ul className="space-y-3">
                                {footerLinks.company.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                                        >
                                            <span className="w-0 group-hover:w-2 h-px bg-white/50 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Subscribe Section */}
                <div className="border-t border-white/10 pt-8 mb-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
                            <p className="text-sm text-gray-400">Get the latest MUN updates and event information.</p>
                        </div>

                       
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-gray-400 text-sm">
                        © 2023-{new Date().getFullYear()} GCI MUN. All rights reserved.
                    </div>
                    <div className="flex items-center gap-4">
                        <Badge variant="outline" className="border-white/20 text-white/80 bg-white/5">
                            Version 1.0.0
                        </Badge>
                    </div>
                </div>
            </div>
        </footer>
    );
}
