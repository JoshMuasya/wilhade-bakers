"use client"

import React from "react"
import { motion, Variants } from "framer-motion"
import CakeCard from "./CakeCard"

const cakes = [
    {
        image: "/chocolate.jpg",
        name: "Chocolate Dream",
        description:
            "Rich dark chocolate layers with silky ganache and chocolate shavings",
        price: "From KES 2,500",
        bestSeller: true,
    },
    {
        image: "/strawberry.jpg",
        name: "Strawberry Delight",
        description:
            "Fresh strawberries with light whipped cream and delicate sponge",
        price: "From KES 2,000",
    },
    {
        image: "/carrot.jpg",
        name: "Classic Carrot",
        description:
            "Moist carrot cake with cream cheese frosting and candied walnuts",
        price: "From KES 3,000",
        bestSeller: true,
    },
    {
        image: "/velvet.jpg",
        name: "Red Velvet",
        description:
            "Velvety red layers with luxurious cream cheese frosting",
        price: "From KES 4,000",
    },
    {
        image: "/lemon.jpg",
        name: "Lemon Drizzle",
        description:
            "Zesty lemon sponge with sweet glaze and fresh citrus notes",
        price: "From KES 2,000",
    },
    {
        image: "/herocake.jpg",
        name: "Wedding Elegance",
        description:
            "Custom multi-tier cakes designed for unforgettable celebrations",
        price: "From KES 6,000",
    },
]

/* Animation Variants */
const container: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
}

const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 120,
            damping: 18,
        },
    },
}


const CakeSection = () => {
    return (
        <section
            id="cakes"
            className="relative py-28 bg-linear-to-b from-pink-50/70 via-white to-amber-50 overflow-hidden"
        >
            {/* Floating accents */}
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl" />
            <div className="absolute top-1/3 -right-24 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl" />

            {/* Soft fade from hero */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-linear-to-b from-background/80 to-transparent" />

            <div className="relative container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-20"
                >
                    <p className="text-coral font-semibold tracking-widest uppercase mb-4">
                        Our Signature Menu
                    </p>

                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Cakes Made to Be Remembered
                    </h2>

                    <p className="text-muted-foreground text-lg leading-relaxed">
                        From everyday treats to once-in-a-lifetime celebrations, each cake
                        is handcrafted with premium ingredients and a touch of artistry.
                    </p>
                </motion.div>

                {/* Cake Cards */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    {cakes.map((cake) => (
                        <motion.div key={cake.name} variants={item}>
                            <CakeCard {...cake} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-center mt-24"
                >
                    <p className="text-muted-foreground mb-6">
                        Looking for a custom design or special flavor?
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center justify-center rounded-full 
                       bg-coral px-10 py-4 text-white font-semibold 
                       shadow-lg hover:bg-coral/90 transition"
                    >
                        Request a Custom Cake
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}

export default CakeSection
