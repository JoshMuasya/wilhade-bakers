"use client"

import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center bg-gradient-hero pt-20">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="text-center lg:text-left animate-fade-in-up">
                        <p className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-widest uppercase mb-4">
                            Wilhide <span className="text-accent">Bakers</span>
                        </p>
                        <h1 className="font-serif font-bold text-foreground leading-tight mb-6">
                            <span className="text-accent">For all your{" "}</span>
                            Blissful Bites
                        </h1>
                        <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
                            From elegant wedding cakes to delightful birthday treats, we create
                            memorable desserts with premium ingredients and artisan craftsmanship.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button asChild className='bg-accent hover:bg-accent/60'>
                                <Link href="#cakes">Explore Our Cakes</Link>
                            </Button>
                            <Button variant="outline" asChild>
                                <Link href="#contact">Place an Order</Link>
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
                            <div>
                                <p className="font-serif text-3xl font-bold text-primary">500+</p>
                                <p className="text-muted-foreground text-sm">Happy Customers</p>
                            </div>
                            <div>
                                <p className="font-serif text-3xl font-bold text-primary">50+</p>
                                <p className="text-muted-foreground text-sm">Cake Varieties</p>
                            </div>
                            <div>
                                <p className="font-serif text-3xl font-bold text-primary">10+</p>
                                <p className="text-muted-foreground text-sm">Years Experience</p>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                        <div className="relative z-10">
                            <Image
                                src="/herocake.jpg"
                                alt="Beautiful three-tier wedding cake with elegant decorations"
                                width={800}
                                height={600}
                                className="w-full rounded-2xl shadow-elevated"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-coral/20 rounded-full blur-2xl" />
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-rose/30 rounded-full blur-2xl" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
