"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { 
    Sparkles, 
    Menu,
    X 
} from "lucide-react";


const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();



   

    useEffect(() => {
        if (!mounted) return;
        
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };


        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [mounted]);

  
    const navLinks = [
  { name: "Home", href: "/" },
  { name: "Committees", href: "/committees" },
  { name: "Secretariat", href: "/secretariat" },
  { name: "Schedule", href: "/schedule" },
  { name: "Sponsors", href: "/sponsors" },
]

    return (
        <motion.header 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-0  w-full z-50 transition-all duration-500 ${
                mounted && scrolled 
                    ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-gray-800/50' 
                    : ' bg-white/80 dark:bg-gray-950/80 dark:backdrop-blur-xl dark:shadow-lg dark:border-b  dark:border-gray-800/50'
            }`}
            
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between  m-2 p-2 h-20">
                    
                    {/* Logo - Clean and professional */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="shrink-0"
                    >
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="relative w-24 h-12 rounded-lg flex items-center justify-center transition-colors duration-200">
                                <Image
                                    src="/assets/logo.png"
                                    alt="GCI MUN Conference"
                                    // fill
                                    className="object-contain"
                                    height={300}
                                    width={300}
                                />
                            </div>
                           
                            
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation - Centered */}
                    <nav className="hidden lg:flex ml-96 items-center gap-1">
                        {navLinks.map((item, index) => {
                            const isActive = pathname === item.href || 
                                           (item.href.includes('#') && pathname === '/');
                            return (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                                >
                                    <Link 
                                        href={item.href}
                                        className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 text-gray-700 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400'
                                        }`}
                                    >
                                       {item.name}
                                       
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </nav>

                    {/* Desktop Auth Buttons */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="hidden lg:flex items-center gap-3"
                    >
                       
                    </motion.div>

                    {/* Mobile menu button */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        type="button"
                        className="lg:hidden p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="sr-only">Toggle menu</span>
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                        ) : (
                            <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                        )}
                    </motion.button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {/* Mobile Navigation Links */}
                            <div className="space-y-2">
                                {navLinks.map((item, index) => {

                                    return (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.2, delay: index * 0.05 }}
                                        >
                                            <Link
                                                href={item.href}
                                                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${

                                                         'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                                }`}
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;
