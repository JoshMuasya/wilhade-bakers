"use client"

import { easeInOut, motion } from "framer-motion"
import type { Variants } from "framer-motion"
import {
  Cake,
  Heart,
  Baby,
  Building2,
  Gift,
} from "lucide-react"

const occasions = [
  {
    title: "Birthdays",
    desc: "From fun kids’ themes to elegant milestone cakes, we make every birthday unforgettable.",
    icon: Cake,
    glow: "from-pink-200/40 to-rose-200/40",
  },
  {
    title: "Weddings",
    desc: "Elegant, multi-tier wedding cakes designed to match your love story and wow your guests.",
    icon: Heart,
    glow: "from-red-200/40 to-pink-200/40",
  },
  {
    title: "Baby Showers",
    desc: "Adorable, soft-themed cakes perfect for celebrating new beginnings.",
    icon: Baby,
    glow: "from-blue-200/40 to-cyan-200/40",
  },
  {
    title: "Corporate Events",
    desc: "Professional, logo-branded cakes for launches, meetings, and company celebrations.",
    icon: Building2,
    glow: "from-amber-200/40 to-yellow-200/40",
  },
  {
    title: "Anniversaries",
    desc: "Romantic, personalized cakes to celebrate love and milestones together.",
    icon: Gift,
    glow: "from-purple-200/40 to-pink-200/40",
  },
]

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
}

const card: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

const float = {
  y: [0, -6, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: easeInOut
  },
}

export default function OccasionsSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Occasions We Bake For
          </h2>
          <p className="text-gray-600 text-lg">
            Every celebration deserves a cake that feels personal, thoughtful, and unforgettable.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {occasions.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                variants={card}
                whileHover={{ y: -10, scale: 1.03 }}
                className="relative group"
              >
                {/* Glow */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-linear-to-br ${item.glow} opacity-0 group-hover:opacity-100 blur-xl transition-opacity`}
                />

                {/* Card */}
                <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm group-hover:shadow-xl transition-shadow">
                  <motion.div
                    animate={float}
                    className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-pink-100 text-pink-600"
                  >
                    <motion.div whileHover={{ rotate: 8 }}>
                      <Icon size={28} />
                    </motion.div>
                  </motion.div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <motion.a
            href="#order"
            animate={{
              boxShadow: [
                "0 0 0 rgba(236,72,153,0)",
                "0 0 30px rgba(236,72,153,0.35)",
                "0 0 0 rgba(236,72,153,0)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-pink-600 text-white px-12 py-4 rounded-full font-semibold shadow-lg hover:bg-pink-700 transition-colors"
          >
            Order for Your Occasion
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
