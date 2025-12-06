"use client"

import React, { useState } from 'react'
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggler from './Theme/ThemeToggler';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#cakes", label: "Our Cakes" },
        { href: "#about", label: "About" },
        { href: "#testimonials", label: "Reviews" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-sm border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="#home" className="flex items-center gap-2">
                        <Image
                            src="/TopLogo.png"
                            alt="Wilhide Bakers Logo"
                            width={75}   // bigger on desktop
                            height={75}
                            className="md:w-[75px] md:h-[75px] w-[45px] h-[45px]" // slightly smaller but still bigger on mobile
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-foreground/80 hover:text-primary transition-colors font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center gap-4">
                        <ThemeToggler />
                        <Button asChild>
                            <Link href="#contact">Order Now</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </Button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden py-4 border-t border-border">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <ThemeToggler />
                            <Button className="mt-2" asChild>
                                <Link href="#contact" onClick={() => setIsMenuOpen(false)}>Order Now</Link>
                            </Button>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    )
}

export default Header
