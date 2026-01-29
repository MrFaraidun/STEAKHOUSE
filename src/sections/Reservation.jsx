// import { motion } from 'framer-motion';
import ScrollElement from '../components/ScrollElement';

const Reservation = () => {
    return (
        <section id="reservation" className="relative h-[80vh] flex justify-center items-center overflow-hidden">
            {/* Cinematic Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2000&auto=format&fit=crop"
                    alt="Elegant Dining Room"
                    className="w-full h-full object-cover transition-transform duration-[20s] hover:scale-105"
                />
                {/* Heavy dark overlay for text contrast */}
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/40"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 text-center">
                <ScrollElement direction="up" viewport={{ amount: 0.5 }}>
                    <div className="inline-block mb-4 relative">
                        <span className="font-script text-accent text-5xl md:text-6xl relative z-10">
                            Book Your Table
                        </span>
                        {/* Subtle glow behind script text */}
                        <div className="absolute inset-0 bg-accent/20 blur-xl -z-10 rounded-full"></div>
                    </div>

                    <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-12 max-w-4xl mx-auto leading-[0.9]">
                        Experience Culinary <br /> <span className="text-gray-300 italic">Perfection</span>
                    </h2>

                    <button className="group relative inline-flex items-center justify-center px-12 py-4 bg-transparent overflow-hidden transition-all duration-300">
                        {/* Button Border */}
                        <div className="absolute inset-0 border border-accent/50 group-hover:border-accent transition-colors duration-300"></div>

                        {/* Hover Fill Effect */}
                        <div className="absolute inset-0 bg-accent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom ease-out"></div>

                        {/* Text */}
                        <span className="relative z-10 font-sans text-sm tracking-[0.3em] uppercase text-accent group-hover:text-primary transition-colors duration-300 font-bold">
                            Make A Reservation
                        </span>
                    </button>

                    <div className="mt-12 flex justify-center gap-8 opacity-60">
                        <div className="flex flex-col items-center">
                            <span className="text-accent font-serif text-xl">Dinner</span>
                            <span className="text-white text-xs uppercase tracking-widest">5pm - 11pm</span>
                        </div>
                        <div className="w-[1px] h-10 bg-white/20"></div>
                        <div className="flex flex-col items-center">
                            <span className="text-accent font-serif text-xl">Bar</span>
                            <span className="text-white text-xs uppercase tracking-widest">4pm - 12am</span>
                        </div>
                    </div>
                </ScrollElement>
            </div>
        </section>
    );
};

export default Reservation;
