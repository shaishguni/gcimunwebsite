"use client"

import { Github, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { useState } from 'react';
import { Check } from 'lucide-react';

const footerLinks = {
    company: [
        { name: "About", href: "/about" },
        { name: "Events", href: "/events" },
        { name: "Contact", href: "/contact" }
    ]
};

const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" }
];

export default function Footer() {
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubscribed(true);
        setTimeout(() => setIsSubscribed(false), 3000);
    };

    return (
        <footer className="w-full bg-black border-gray-200">
            <div className="max-w-6xl mx-auto px-4 md:px-24 py-12">
                {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                GCI MUN
                            </h2>
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
                                        className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                                    >
                                        <social.icon className="w-5 h-5" />
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
