import React from 'react'
import CakeCard from './CakeCard';

const Menu = () => {
    const cakes = [
        {
            image: '/chocolate.jpg',
            name: "Chocolate Dream",
            description: "Rich dark chocolate layers with silky ganache and chocolate shavings",
            price: "From $45",
        },
        {
            image: '/strawberry.jpg',
            name: "Strawberry Delight",
            description: "Fresh strawberries with light whipped cream and delicate sponge",
            price: "From $40",
        },
        {
            image: '/carrot.jpg',
            name: "Classic Carrot",
            description: "Moist carrot cake with cream cheese frosting and candied walnuts",
            price: "From $38",
        },
        {
            image: '/velvet.jpg',
            name: "Red Velvet",
            description: "Velvety red layers with luxurious cream cheese frosting",
            price: "From $42",
        },
        {
            image: '/lemon.jpg',
            name: "Lemon Drizzle",
            description: "Zesty lemon sponge with sweet glaze and fresh citrus notes",
            price: "From $35",
        },
        {
            image: '/herocake.jpg',
            name: "Wedding Elegance",
            description: "Custom multi-tier cakes with elegant decorations for your special day",
            price: "From $200",
        },
    ];

    return (
        <section id="cakes" className="py-20 bg-gradient-warm">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-coral font-semibold tracking-widest uppercase mb-4">
                        Our Menu
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        Signature Cakes
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Each cake is crafted with love using the finest ingredients.
                        Custom orders and dietary options available upon request.
                    </p>
                </div>

                {/* Cakes Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cakes.map((cake, index) => (
                        <div
                            key={cake.name}
                            className="animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <CakeCard {...cake} />
                        </div>
                    ))}
                </div>

                {/* Note */}
                <p className="text-center text-muted-foreground mt-12">
                    Custom designs and flavors available. Contact us for special orders.
                </p>
            </div>
        </section>
    )
}

export default Menu
