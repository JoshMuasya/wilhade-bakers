"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// --- Pricing Config ---
const SIZE_PRICES: Record<string, number | null> = {
    "0.5kg": 1500,
    "1kg": 2800,
    "2kg": 5000,
    custom: null,
}

const FLAVOR_PRICES: Record<string, number> = {
    vanilla: 0,
    chocolate: 200,
    "red-velvet": 300,
    fruit: 250,
}

const OCCASION_PRICES: Record<string, number> = {
    birthday: 0,
    wedding: 1000,
    custom: 500,
}

export default function BuildYourCakeHero() {
    const [occasion, setOccasion] = useState<string>("birthday")
    const [flavor, setFlavor] = useState<string>("vanilla")
    const [size, setSize] = useState<string>("1kg")

    const cakeImage = useMemo(() => {
        if (occasion === "wedding") return "/cake-wedding.png"
        if (occasion === "birthday") return "/cake-birthday.png"
        return "/cake-custom.png"
    }, [occasion])

    const price = useMemo(() => {
        const base = SIZE_PRICES[size]
        if (base === null) return null
        return base + FLAVOR_PRICES[flavor] + OCCASION_PRICES[occasion]
    }, [occasion, flavor, size])

    const handleCompleteOrder = () => {
        const params = new URLSearchParams({
            occasion,
            flavor,
            size,
            price: price ? price.toString() : "from-5000",
        })

        const section = document.getElementById("order-form")
        section?.scrollIntoView({ behavior: "smooth" })

        // Optional: push params to URL
        window.history.replaceState(null, "", `?${params.toString()}`)
    }

    return (
        <section className="w-full relative min-h-screen overflow-hidden bg-linear-to-br from-pink-50 via-white to-amber-50 px-6 py-24">
            {/* Light blobs */}
            <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-pink-300/30 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-300/30 blur-3xl" />

            {/* Floating sparkles */}
            <motion.div
                className="pointer-events-none absolute left-1/4 top-1/3 h-2 w-2 rounded-full bg-pink-400"
                animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
                className="pointer-events-none absolute left-1/3 top-2/3 h-1.5 w-1.5 rounded-full bg-amber-400"
                animate={{ y: [0, -15, 0], opacity: [0.2, 0.7, 0.2] }}
                transition={{ duration: 5, repeat: Infinity }}
            />
            {/* Floating decorative cake */}
            <motion.img
                key={cakeImage}
                src="velvet.jpg"
                alt="Decorative cake"
                className="pointer-events-none absolute -right-20 top-1/2 hidden w-[380px] -translate-y-1/2 opacity-30 md:block"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-2">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center justify-center text-center"
                >
                    {/* Hero Cake */}
                    <motion.div
                        className="mb-10 rounded-3xl bg-linear-to-br from-pink-50 via-white to-amber-100 p-3 shadow-2xl"
                        animate={{ y: [0, -14, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <img
                            src="/herocake.jpg"
                            alt="Signature cake"
                            className="h-56 w-56 rounded-2xl object-cover md:h-72 md:w-72"
                        />
                    </motion.div>

                    <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl">
                        Your Cake.{" "}
                        <span className="text-pink-600">Your Style.</span>
                        <br />
                        Baked Fresh.
                    </h1>

                    <p className="mt-6 max-w-xl text-lg text-gray-600">
                        Start customizing your cake in seconds. No online payments — just tell us
                        what you want and we’ll handle the rest.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-700">
                        <span>✔ Baked fresh on order</span>
                        <span>✔ Custom designs available</span>
                        <span>✔ WhatsApp ordering</span>
                    </div>
                </motion.div>

                {/* Cake Builder Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Card className="relative rounded-2xl shadow-2xl backdrop-blur-lg bg-white/60 overflow-hidden">
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-linear-to-br from-pink-200/30 via-purple-200/20 to-blue-200/30 pointer-events-none rounded-2xl" />

                        <CardHeader className="relative">
                            <CardTitle className="text-xl">Build Your Cake</CardTitle>
                        </CardHeader>

                        <CardContent className="relative space-y-6">
                            {/* Occasion */}
                            <div>
                                <label className="mb-2 block text-sm font-medium">Occasion</label>
                                <Select value={occasion} onValueChange={setOccasion}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="birthday">Birthday</SelectItem>
                                        <SelectItem value="wedding">Wedding</SelectItem>
                                        <SelectItem value="custom">Custom</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Flavor */}
                            <div>
                                <label className="mb-2 block text-sm font-medium">Flavor</label>
                                <Select value={flavor} onValueChange={setFlavor}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="vanilla">Vanilla</SelectItem>
                                        <SelectItem value="chocolate">Chocolate</SelectItem>
                                        <SelectItem value="red-velvet">Red Velvet</SelectItem>
                                        <SelectItem value="fruit">Fruit</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Size */}
                            <div>
                                <label className="mb-2 block text-sm font-medium">Size</label>
                                <Select value={size} onValueChange={setSize}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="0.5kg">0.5 kg</SelectItem>
                                        <SelectItem value="1kg">1 kg</SelectItem>
                                        <SelectItem value="2kg">2 kg</SelectItem>
                                        <SelectItem value="custom">Custom size</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Price */}
                            <div className="relative overflow-hidden rounded-xl bg-gray-100/80 p-4 backdrop-blur-sm">
                                <p className="text-sm text-gray-600">Estimated Price</p>
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={price ?? "custom"}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="mt-1 text-2xl font-bold text-gray-900"
                                    >
                                        {price ? `KES ${price.toLocaleString()}` : "From KES 5,000"}
                                    </motion.p>
                                </AnimatePresence>
                                <p className="mt-1 text-xs text-gray-600">
                                    Final price may vary based on design & decoration.
                                </p>
                            </div>

                            <Button
                                onClick={handleCompleteOrder}
                                size="lg"
                                className="w-full rounded-xl bg-pink-600 text-white hover:bg-pink-700"
                            >
                                Complete Order
                            </Button>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
