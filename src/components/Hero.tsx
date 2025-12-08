"use client"

import React, { useEffect, useRef } from "react"
import { Button } from "./ui/button"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import gsap from "gsap"

const Hero = () => {
    const sprinkleRefs = useRef<HTMLDivElement[]>([])
    const imageRef = useRef<HTMLDivElement | null>(null)
    const auraRef = useRef<HTMLDivElement | null>(null)

    // Floating Loop Animation
    useEffect(() => {
        gsap.to(imageRef.current, {
            y: -20,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        })
    }, [])

    // Mouse-follow parallax
    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            if (!imageRef.current) return
            const x = (e.clientX / window.innerWidth - 0.5) * 10
            const y = (e.clientY / window.innerHeight - 0.5) * 10

            gsap.to(imageRef.current, {
                rotateX: -y,
                rotateY: x,
                transformPerspective: 800,
                duration: 0.4,
            })
        }

        window.addEventListener("mousemove", handleMove)
        return () => window.removeEventListener("mousemove", handleMove)
    }, [])

    useEffect(() => {
        // GSAP floating loop
        sprinkleRefs.current.forEach((el) => {
            gsap.to(el, {
                y: -20,
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
            })
        })
    }, [])

    return (
        <section
            id="home"
            className="min-h-screen w-full flex items-center relative overflow-hidden bg-linear-to-b from-pink-50 via-rose-50 to-white dark:from-neutral-900 dark:via-neutral-950 dark:to-black pt-20 md:pt-24 pb-10"
        >
            {/* Sprinkles */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                {[1, 2, 3, 4, 5].map((i) => (
                    <div
                        key={i}
                        ref={(el) => {
                            sprinkleRefs.current[i] = el!;
                        }}

                        className="absolute w-3 h-3 rounded-sm rotate-45 bg-accent animate-float-medium"
                        style={{
                            top: `${20 * i}%`,
                            left: `${15 * i}%`,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center lg:text-left"
                    >
                        <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wider uppercase mb-4 text-accent">
                            Wilhide Bakers
                        </p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-foreground font-serif font-bold leading-[1.2] text-4xl md:text-5xl lg:text-6xl mb-6"
                        >
                            Baking <span className="text-accent">Joy</span> Into Every Slice
                        </motion.h1>

                        <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
                            Step into a world of sweetness! From dreamy wedding cakes to fun birthday creations,
                            we craft delicious moments sprinkled with love, flavor, and pure artistry.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button asChild className="bg-accent hover:bg-accent/70 shadow-lg shadow-accent/30">
                                <Link href="#cakes">Discover Our Cakes</Link>
                            </Button>

                            <Button variant="outline" asChild className="border-accent text-accent hover:bg-accent/10">
                                <Link href="#contact">Order Your Treat</Link>
                            </Button>
                        </div>

                        {/* Stats Section with gradient dividers + floating crumbs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="relative mt-16 pt-14"
                        >

                            {/* 🌈 Gradient Divider */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] 
                  bg-gradient-to-r from-transparent via-accent/70 to-transparent" />

                            {/* 🧁 Floating Sprinkles */}
                            <div className="pointer-events-none">
                                <motion.div
                                    animate={{ y: [0, -10, 0], opacity: [0.8, 1, 0.8], rotate: [0, 15, -15, 0] }}
                                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                    className="absolute -top-4 left-8 w-2 h-2 bg-rose-400 rounded-full"
                                />

                                <motion.div
                                    animate={{ y: [0, -12, 0], opacity: [0.7, 1, 0.7], rotate: [0, -10, 10, 0] }}
                                    transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                                    className="absolute -top-6 right-10 w-3 h-3 bg-coral-400 rounded-full"
                                />

                                <motion.div
                                    animate={{ y: [0, -8, 0], opacity: [0.8, 1, 0.8], rotate: [0, 20, -20, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                    className="absolute top-10 left-1/4 w-2 h-2 bg-amber-300 rounded-full"
                                />

                                <motion.div
                                    animate={{ y: [0, -14, 0], opacity: [0.6, 1, 0.6], rotate: [0, -25, 25, 0] }}
                                    transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                                    className="absolute top-16 right-1/3 w-2 h-2 bg-purple-400 rounded-full"
                                />
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-8">
                                {/* Item 1 */}
                                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                                    <p className="font-serif text-5xl font-bold text-primary leading-none">500+</p>
                                    <p className="text-muted-foreground text-base mt-2 tracking-wide">
                                        Sweet Smiles
                                    </p>
                                </div>

                                {/* 🌈 Vertical Gradient Divider for Desktop */}
                                <div className="hidden sm:block h-20 w-0.5 bg-linear-to-b from-transparent via-accent/50 to-transparent mx-auto" />

                                {/* Item 2 */}
                                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                                    <p className="font-serif text-5xl font-bold text-primary leading-none">50+</p>
                                    <p className="text-muted-foreground text-base mt-2 tracking-wide">
                                        Signature Flavors
                                    </p>
                                </div>

                                {/* 🌈 Divider */}
                                <div className="hidden sm:block h-20 w-0.5 bg-linear-to-b from-transparent via-accent/50 to-transparent mx-auto" />

                                {/* Item 3 */}
                                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                                    <p className="font-serif text-5xl font-bold text-primary leading-none">10+</p>
                                    <p className="text-muted-foreground text-base mt-2 tracking-wide">
                                        Years of Magic
                                    </p>
                                </div>
                            </div>
                        </motion.div>


                    </motion.div>

                    {/* RIGHT IMAGE */}
                    <motion.div
                        ref={imageRef}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="relative w-full"
                    >
                        {/* Animated Aura Background */}
                        <motion.div
                            ref={auraRef}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0 blur-3xl rounded-[40px] opacity-60"
                            style={{
                                background:
                                    "radial-gradient(circle at 50% 50%, rgba(255,182,193,0.6), rgba(255,160,180,0.3), transparent)",
                            }}
                        />

                        {/* Cake Image */}
                        <Image
                            src="/herocake.jpg"
                            alt="Cake"
                            width={800}
                            height={600}
                            className="relative w-full rounded-[35px] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.25)]"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default Hero
