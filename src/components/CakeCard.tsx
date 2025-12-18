"use client"

import { motion, useMotionValue, useTransform } from "framer-motion"
import Image from "next/image"

interface CakeCardProps {
    image: string
    name: string
    description: string
    price: string
    bestSeller?: boolean
}

/* ✨ Sparkle particle */
const Sparkle = ({ x, y }: { x: number; y: number }) => (
    <motion.span
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ left: `${x}%`, top: `${y}%` }}
        className="absolute h-1.5 w-1.5 rounded-full bg-white 
               shadow-[0_0_10px_rgba(255,255,255,0.9)]"
    />
)

const sparkles = [
    { x: 20, y: 30 },
    { x: 75, y: 25 },
    { x: 45, y: 60 },
    { x: 80, y: 55 },
]

const CakeCard = ({
    image,
    name,
    description,
    price,
    bestSeller = false,
}: CakeCardProps) => {
    /* 🎥 Parallax motion */
    const y = useMotionValue(0)
    const yTransform = useTransform(y, [-50, 50], [10, -10])

    return (
        <motion.div
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className="group relative md:h-[350px] flex flex-col
               rounded-3xl bg-white/80 backdrop-blur-md 
               border border-white/60 shadow-lg hover:shadow-2xl 
               overflow-hidden"
        >

            {/* ✨ Pulse Highlight on Hover */}
            <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
                style={{
                    boxShadow: "0 0 0 2px rgba(255,126,95,0.35)",
                }}
            />

            {/* 🎂 Best Seller Ribbon */}
            {bestSeller && (
                <motion.div
                    initial={{ x: -60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className="absolute top-4 left-4 z-20"
                >
                    <span className="inline-flex items-center gap-1 rounded-full 
                           bg-coral px-4 py-1 text-xs font-semibold 
                           text-white shadow-lg">
                        🎂 Best Seller
                    </span>
                </motion.div>
            )}

            {/* 🖼 Image + Sparkles */}
            <motion.div
                className="relative h-60 overflow-hidden"
                style={{ y: yTransform }}
                onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect()
                    y.set(e.clientY - rect.top - rect.height / 2)
                }}
                onMouseLeave={() => y.set(0)}
            >
                {/* ✨ Sparkles */}
                <motion.div
                    className="absolute inset-0 pointer-events-none z-10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                >
                    {sparkles.map((s, i) => (
                        <Sparkle key={i} x={s.x} y={s.y} />
                    ))}
                </motion.div>

                <Image
                    src={image}
                    alt={name}
                    fill
                    priority={false}
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-linear-to-t 
                        from-black/40 via-black/10 to-transparent" />

                {/* 💰 Price & CTA (hover reveal) */}
                <div
                    className="absolute bottom-0 left-0 right-0 z-20 
               px-5 pb-5 pt-10
               bg-linear-to-t from-black/70 via-black/30 to-transparent
               opacity-0 translate-y-6
               group-hover:opacity-100 
               group-hover:translate-y-0
               transition-all duration-400 ease-out"
                >
                    <div className="flex items-center justify-between">
                        <span className="text-white font-semibold text-sm">
                            {price}
                        </span>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="rounded-full bg-coral px-5 py-2 text-xs 
                       font-semibold text-white shadow-lg
                       hover:bg-coral/90"
                        >
                            Order
                        </motion.button>
                    </div>
                </div>

            </motion.div>

            {/* 🧁 Content */}
            <div className="relative p-6 text-center">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                    {name}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {description}
                </p>
            </div>
        </motion.div>
    )
}

export default CakeCard
