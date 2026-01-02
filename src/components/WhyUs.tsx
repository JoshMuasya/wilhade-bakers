"use client"

import { easeInOut, motion, Variants } from "framer-motion"
import { Cake, Palette, Truck, Heart } from "lucide-react"

const values = [
  {
    icon: Cake,
    title: "Freshly Baked on Order",
    description:
      "Every cake is prepared only after you place your order—never pre-made, always fresh and full of flavor."
  },
  {
    icon: Palette,
    title: "Custom Designs for Every Occasion",
    description:
      "We bring your ideas to life with personalized designs tailored to birthdays, weddings, and special moments."
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description:
      "Your cake arrives on time, beautifully packaged and ready to impress—so you can relax and celebrate."
  },
  {
    icon: Heart,
    title: "Made with Love & Premium Ingredients",
    description:
      "We bake with passion using high-quality ingredients, because every celebration deserves something special."
  }
]

/* ------------------ Motion Variants ------------------ */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18
    }
  }
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

const floatAnimation = {
  y: [0, -6, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: easeInOut // ✅ correct for keyframes
  }
}

export default function WhyWilhideBakers() {
  return (
    <section className="relative py-28 px-6 bg-linear-to-b from-[#fff8f1] via-white to-[#fff8f1] overflow-hidden">
      
      {/* Soft background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto text-center"
      >
        {/* Header */}
        <motion.h2
          variants={cardVariants}
          className="text-3xl md:text-4xl font-semibold text-gray-900"
        >
          Why Wilhide Bakers?
        </motion.h2>

        <motion.p
          variants={cardVariants}
          className="mt-4 max-w-2xl mx-auto text-gray-600"
        >
          Thoughtfully crafted cakes that turn moments into memories.
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {values.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                animate={floatAnimation}
                whileHover={{
                  y: -10,
                  rotateX: 4,
                  rotateY: -4
                }}
                transition={{ type: "spring", stiffness: 120 }}
                className="group relative rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl transition-shadow"
              >
                {/* Hover gradient ring */}
                <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-pink-200/40 via-transparent to-amber-200/40 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Icon */}
                <div className="relative mb-6 flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-50 text-pink-600 shadow-inner"
                  >
                    <Icon className="h-8 w-8" />
                  </motion.div>
                </div>

                <h3 className="relative text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="relative text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Trust line */}
        <motion.p
          variants={cardVariants}
          className="mt-20 text-sm text-gray-500"
        >
          Hundreds of celebrations trusted to Wilhide Bakers.
        </motion.p>
      </motion.div>
    </section>
  )
}
