// import { motion } from 'framer-motion';
import ScrollElement from '../components/ScrollElement';

const BestIngredients = () => {
    return (
        <section className="bg-primary py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <ScrollElement direction="up" viewport={{ amount: 0.1 }}>
                    <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-4 h-auto md:h-[800px]">

                        {/* 1. Main Hero Image (Large Span) */}
                        <div className="md:col-span-8 md:row-span-2 relative group overflow-hidden rounded-sm">
                            <img
                                src="https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=1200&auto=format&fit=crop"
                                alt="Raw Wagyu"
                                className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-8 left-8">
                                <span className="inline-block px-3 py-1 border border-white/30 text-xs tracking-widest uppercase text-white mb-4 backdrop-blur-md">
                                    The Crown Jewel
                                </span>
                                <h3 className="font-serif text-4xl text-white">Japanese A5 Wagyu</h3>
                            </div>
                        </div>

                        {/* 2. Title Block (Top Right) */}
                        <div className="md:col-span-4 bg-secondary border border-white/5 p-8 flex flex-col justify-center relative overflow-hidden rounded-sm group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors duration-500"></div>
                            <span className="font-script text-accent text-4xl mb-2">Uncompromising</span>
                            <h2 className="font-serif text-5xl text-white leading-[0.9]">
                                Quality <br />
                                <span className="text-gray-500 italic">Control</span>
                            </h2>
                        </div>

                        {/* 3. Detail Block 1: Marbling (Middle Right) */}
                        <div className="md:col-span-2 bg-[#1a1a1a] border border-white/5 p-6 flex flex-col justify-between rounded-sm hover:border-accent/30 transition-colors duration-300">
                            <div className="flex justify-between items-start">
                                <span className="text-4xl text-white font-serif">12</span>
                                <div className="w-2 h-2 rounded-full bg-accent"></div>
                            </div>
                            <p className="font-sans text-xs text-text-muted uppercase tracking-widest mt-4">Marbling Score</p>
                        </div>

                        {/* 4. Detail Block 2: Organic (Middle Right) */}
                        <div className="md:col-span-2 bg-accent text-primary p-6 flex flex-col justify-between rounded-sm">
                            <span className="font-sans text-xs font-bold uppercase tracking-widest">Sourcing</span>
                            <p className="font-serif text-2xl leading-tight">100% Verified <br /> Organic Farms</p>
                        </div>

                        {/* 5. Text / Philosophy Block (Bottom Right) */}
                        <div className="md:col-span-4 bg-transparent border border-white/10 p-8 flex items-center rounded-sm">
                            <p className="font-sans text-text-muted font-light leading-relaxed text-sm">
                                "We don't just cook steak; we curate an experience. Every cut is selected by hand, ensuring that only the absolute pinnacle of flavor reaches your plate."
                            </p>
                        </div>
                    </div>
                </ScrollElement>
            </div>
        </section>
    );
};

export default BestIngredients;
