"use client"

import { X } from 'lucide-react';
import { SiFacebook, SiInstagram } from "@icons-pack/react-simple-icons";
import Link from 'next/link';
import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-primary-foreground py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <h3 className="font-serif text-2xl font-bold mb-4">
                            Wilhade<span className="text-gold">Bakers</span>
                        </h3>
                        <p className="text-primary-foreground/70 max-w-sm">
                            Crafting memorable moments with artisan cakes since 2020.
                            Every cake tells a story, and we&apos;re honored to be part of yours.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#home" className="text-primary-foreground/70 hover:text-gold transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#cakes" className="text-primary-foreground/70 hover:text-gold transition-colors">
                                    Our Cakes
                                </Link>
                            </li>
                            <li>
                                <Link href="#about" className="text-primary-foreground/70 hover:text-gold transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-primary-foreground/70 hover:text-gold transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-semibold mb-4">Follow Us</h4>
                        <div className="flex gap-4">
                            <Link
                                href="#"
                                aria-label="Facebook"
                                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold transition-colors"
                            >
                                <SiFacebook className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#"
                                aria-label="Instagram"
                                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold transition-colors"
                            >
                                <SiInstagram className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#"
                                aria-label="Twitter"
                                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-primary-foreground/10 text-center text-primary-foreground/60 text-sm">
                    <p>© {currentYear} Wilhade Bakers. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
