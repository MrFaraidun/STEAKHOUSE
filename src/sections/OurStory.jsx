// import { motion } from 'framer-motion';
import ScrollElement from '../components/ScrollElement';

const OurStory = () => {
    return (
        <section id="about" className="py-16 md:py-24 bg-primary overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">

                    {/* 1. Text Content Side (Left) */}
                    <div className="w-full md:w-5/12 relative z-10 order-2 md:order-1">
                        <ScrollElement direction="up" viewport={{ amount: 0.3 }}>
                            <div className="mb-8">
                                <span className="font-serif text-8xl md:text-9xl text-white/5 font-bold absolute -top-16 -left-8 -z-10 select-none">
                                    1998
                                </span>
                                <span className="font-script text-accent text-3xl md:text-4xl block mb-2">The Legacy</span>
                                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                                    Forged in <br /> <span className="text-gray-500 italic">Flame</span>
                                </h2>
                            </div>

                            <p className="font-sans text-text-muted text-lg leading-relaxed mb-8 font-light border-l border-accent/20 pl-6">
                                What started as a humble butcher shop has evolved into a sanctuary for meat lovers. We don't just cook steak; we honor it. Our philosophy is rooted in age-old traditions, where patience is the most important ingredient.
                            </p>

                            <div className="flex flex-col gap-6 mb-10">
                                <div className="flex items-start gap-4">
                                    <span className="text-accent font-serif text-2xl">01.</span>
                                    <div>
                                        <h4 className="text-white font-serif text-xl mb-1">Dry Aging Room</h4>
                                        <p className="text-text-muted/60 text-sm font-light">Custom-built Himalayan salt chamber for 45+ day aging.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="text-accent font-serif text-2xl">02.</span>
                                    <div>
                                        <h4 className="text-white font-serif text-xl mb-1">Open Fire</h4>
                                        <p className="text-text-muted/60 text-sm font-light">Grilled over locally sourced white oak and fruitwood.</p>
                                    </div>
                                </div>
                            </div>

                            <button className="group text-white flex items-center gap-3 uppercase tracking-widest text-xs font-bold hover:text-accent transition-colors">
                                Read Full History
                                <span className="block w-8 h-[1px] bg-white group-hover:bg-accent group-hover:w-12 transition-all duration-300"></span>
                            </button>
                        </ScrollElement>
                    </div>

                    {/* 2. Visual Side (Right) */}
                    <div className="w-full md:w-7/12 relative h-[600px] order-1 md:order-2">
                        <ScrollElement direction="left" delay={0.2} viewport={{ amount: 0.3 }} className="h-full">
                            <div className="relative w-full h-full">
                                {/* Main Image - Chef/Fire */}
                                <div className="absolute inset-0 top-12 left-0 w-[85%] h-full z-10 overflow-hidden rounded-sm group">
                                    <img
                                        src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop"
                                        alt="Chef Cooking"
                                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 saturate-[.8] contrast-125"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
                                </div>



                                {/* Decorative Box */}
                                <div className="absolute bottom-12 -left-6 z-30 bg-secondary p-6 shadow-luxury border-l-2 border-accent hidden md:block">
                                    <p className="font-serif text-2xl text-white italic">"Perfection takes time."</p>
                                    <p className="font-sans text-xs text-accent uppercase mt-2 tracking-widest text-right">- Head Chef</p>
                                </div>
                            </div>
                        </ScrollElement>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
