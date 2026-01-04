"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);
    
    // Independent states for dropdowns
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isConferenceOpen, setIsConferenceOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { 
            name: "About", 
            href: "#", 
            isOpen: isAboutOpen,
            setOpen: setIsAboutOpen,
            dropdown: [
                { name: "About GCI MUN", href: "/about" },
                { name: "Secretariat", href: "/secretariat" }
            ] 
        },
        { 
            name: "Conference", 
            href: "#", 
            isOpen: isConferenceOpen,
            setOpen: setIsConferenceOpen,
            dropdown: [
                { name: "Committees", href: "/committees" },
                { name: "Resources", href: "/schedule" }
            ] 
        },
        { name: "Registration", href: "/registration" }, 
        { name: "Contact", href: "/contact" },
    ];

    return (
        <motion.header 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-0 right-0 left-0 bg-white w-full z-50 transition-all duration-500 ${
                mounted && scrolled 
                    ? 'backdrop-blur-xl shadow-lg border-b' 
                    : 'dark:shadow-lg'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between m-2 p-2 h-20">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="shrink-0"
                    >
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="relative w-24 h-12 rounded-lg flex items-center justify-center">
                                <Image
                                    src="/assets/logo.png"
                                    alt="GCI MUN Conference"
                                    className="object-contain"
                                    height={300}
                                    width={300}
                                />
                            </div>
                        </Link>
                    </motion.div>

                    {/* DESKTOP NAV */}
                    <nav className="hidden lg:flex items-center gap-2">
                        {navLinks.map((item, index) => {
                            if (item.dropdown) {
                                return (
                                    <div 
                                        key={item.name}
                                        className="relative"
                                        onMouseEnter={() => item.setOpen?.(true)}
                                        onMouseLeave={() => item.setOpen?.(false)}
                                    >
                                        <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg text-gray-700 hover:text-indigo-400 transition-all">
                                            {item.name}
                                            <ChevronDown className={`w-4 h-4 transition-transform ${item.isOpen ? 'rotate-180' : ''}`} />
                                        </button>
                                        
                                        <AnimatePresence>
                                            {item.isOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    className="absolute left-0 mt-1 w-48 bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden py-2"
                                                >
                                                    {item.dropdown.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            }

                            return (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                                >
                                    <Link 
                                        href={item.href}
                                        className="px-4 py-2 text-sm font-medium rounded-lg text-gray-700 hover:text-indigo-400 transition-all"
                                    >
                                       {item.name}
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </nav>

                    <motion.button
                        type="button"
                        className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </motion.button>
                </div>
            </div>

            {/* MOBILE NAV */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-2">
                            {navLinks.map((item) => (
                                <div key={item.name}>
                                    {item.dropdown ? (
                                        <div className="space-y-1">
                                            <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                                                {item.name}
                                            </div>
                                            {item.dropdown.map((sub) => (
                                                <Link
                                                    key={sub.name}
                                                    href={sub.href}
                                                    className="block px-8 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-indigo-50"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="block px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;