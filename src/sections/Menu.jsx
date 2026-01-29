import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import appetizerImg from '../assets/menu_appetizer_1769720173908.png';
import mainImg from '../assets/menu_main_1769720188996.png';
import sideImg from '../assets/menu_side_1769720202043.png';
import dessertImg from '../assets/menu_dessert_1769720215251.png';

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState(null);
    const [hoveredCategory, setHoveredCategory] = useState(null);

    const categories = [
        {
            id: 'appetizers',
            title: 'Appetizers',
            img: appetizerImg,
            items: [
                { name: "Wagyu Beef Carpaccio", price: "28", desc: "Truffle oil, shaved parmesan, capers" },
                { name: "Pan-Seared Scallops", price: "24", desc: "Cauliflower purée, crispy pancetta" },
                { name: "Steak Tartare", price: "26", desc: "Hand-cut filet mignon, quail egg" },
            ]
        },
        {
            id: 'mains',
            title: 'Main Courses',
            img: mainImg,
            items: [
                { name: "Dry-Aged Ribeye", price: "65", desc: "45-day dry-aged, rosemary butter" },
                { name: "Filet Mignon", price: "58", desc: "Red wine reduction, truffle mash" },
                { name: "Tomahawk Steak", price: "120", desc: "Served tableside with signature sauces" },
            ]
        },
        {
            id: 'sides',
            title: 'Sides',
            img: sideImg,
            items: [
                { name: "Truffle Mac & Cheese", price: "16", desc: "Cave-aged gruyère, herb crust" },
                { name: "Grilled Asparagus", price: "14", desc: "Lemon zest, shaved parmesan" },
            ]
        },
        {
            id: 'desserts',
            title: 'Desserts',
            img: dessertImg,
            items: [
                { name: "Molten Chocolate Cake", price: "18", desc: "Valrhona chocolate, vanilla bean" },
                { name: "New York Cheesecake", price: "16", desc: "Berry compote, chantilly cream" },
            ]
        }
    ];

    return (
        <section id="menu" className="bg-secondary relative min-h-screen py-16 md:py-24 flex items-center justify-center overflow-hidden">

            {/* Base Background - Always Visible */}
            <div className="absolute inset-0 bg-secondary">
                <img
                    src={appetizerImg}
                    alt="Menu Background"
                    className="w-full h-full object-cover opacity-30 blur-sm"
                />
                <div className="absolute inset-0 bg-primary/70"></div>
            </div>

            {/* Animated Overlay - Crossfades Between Images */}
            {categories.map((category) => (
                <div
                    key={category.id}
                    className="absolute inset-0 pointer-events-none transition-opacity duration-700"
                    style={{
                        opacity: (hoveredCategory === category.id || activeCategory === category.id) ? 0.4 : 0,
                        transform: 'translateZ(0)',
                        backfaceVisibility: 'hidden'
                    }}
                >
                    <img
                        src={category.img}
                        alt={category.title}
                        className="w-full h-full object-cover blur-sm"
                    />
                </div>
            ))}
            <div className="absolute inset-0 bg-primary/60"></div>


            <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                <div className="text-center mb-20">
                    <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-accent mb-4 block">
                        The Selection
                    </span>
                    <h2 className="font-serif text-5xl text-white">Seasonal Menu</h2>
                </div>

                <div className="space-y-4">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="border-b border-white/10 last:border-none"
                            onMouseEnter={() => setHoveredCategory(category.id)}
                            onMouseLeave={() => setHoveredCategory(null)}
                        >
                            <button
                                onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
                                className="w-full py-8 flex items-baseline justify-between group text-left focus:outline-none"
                            >
                                <span className={`font-serif text-4xl md:text-6xl transition-colors duration-300 ${activeCategory === category.id ? 'text-accent' : 'text-white group-hover:text-white/80'}`}>
                                    {category.title}
                                </span>
                                <span className={`font-sans text-xs uppercase tracking-widest transition-transform duration-300 ${activeCategory === category.id ? 'rotate-180 text-accent' : 'text-white/30'}`}>
                                    {activeCategory === category.id ? 'Close' : 'View'}
                                </span>
                            </button>

                            <AnimatePresence>
                                {activeCategory === category.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-12 pt-2 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                                            {category.items.map((item, idx) => (
                                                <div key={idx} className="flex justify-between items-start group/item cursor-default">
                                                    <div>
                                                        <h4 className="font-serif text-xl text-white mb-1 group-hover/item:text-accent transition-colors">{item.name}</h4>
                                                        <p className="font-sans text-sm text-text-muted font-light">{item.desc}</p>
                                                    </div>
                                                    <span className="font-sans text-lg text-accent font-light">${item.price}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu;
