"use client"

import { CakeCardProps } from "@/lib/types"
import Image from "next/image"
import React from "react"
import { Card, CardContent } from "./ui/card"
import { motion } from "framer-motion"

const CakeCard = ({ image, name, description, price }: CakeCardProps) => {
    return (
        <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
            <Card className="group relative overflow-hidden border border-border/40 bg-card rounded-2xl hover:border-coral/60 transition-all duration-300 shadow-sm hover:shadow-xl">

                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-coral/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none" />

                {/* Shimmer overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.4),transparent)] bg-size-[200%_100%] animate-shimmer pointer-events-none" />

                <div className="relative overflow-hidden aspect-square rounded-t-2xl">
                    <motion.div
                        className="w-full h-full"
                        whileHover={{ scale: 1.12 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <Image
                            src={image}
                            alt={name}
                            width={400}
                            height={400}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Animated price badge */}
                    <motion.div
                        className="absolute bottom-4 left-4"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 250, damping: 18 }}
                    >
                        <span className="inline-block bg-coral text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                            {price}
                        </span>
                    </motion.div>
                </div>

                <CardContent className="p-6">
                    <motion.h3
                        className="font-serif text-xl font-semibold text-foreground mb-2"
                        initial={{ opacity: 0, y: 6 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        {name}
                    </motion.h3>

                    <motion.p
                        className="text-muted-foreground text-sm"
                        initial={{ opacity: 0, y: 6 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {description}
                    </motion.p>
                </CardContent>
            </Card>
        </motion.div>
    )
}

export default CakeCard
