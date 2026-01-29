import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import heroSteakImg from '../assets/hero-steak-isolated.png';
import herbImg from '../assets/herb-isolated.png';
import spicesImg from '../assets/spices-isolated.png';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();

    // Parallax for scroll
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = clientX - innerWidth / 2;
        const y = clientY - innerHeight / 2;
        mouseX.set(x);
        mouseY.set(y);
    };

    // Transform values for different layers
    const steakRotateX = useTransform(springY, [-500, 500], [5, -5]);
    const steakRotateY = useTransform(springX, [-500, 500], [-5, 5]);
    const textDescX = useTransform(springX, [-500, 500], [20, -20]);
    const textDescY = useTransform(springY, [-500, 500], [20, -20]);

    return (
        <section
            id="home"
            ref={containerRef}
            className="relative min-h-screen bg-primary overflow-hidden flex items-center justify-center perspective-1000"
            onMouseMove={handleMouseMove}
        >
            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-primary to-primary opacity-80 z-0"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full pt-20">

                {/* Left Side: Typography Layered */}
                <div className="order-2 md:order-1 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        style={{ x: textDescX, y: textDescY }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="h-[1px] w-12 bg-accent"></span>
                            <span className="font-sans text-accent text-sm tracking-[0.3em] uppercase">Est. 1998</span>
                        </div>

                        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white leading-[0.85] mb-8 relative">
                            <span className="block relative z-10">Premium</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700 italic text-7xl md:text-8xl -my-4 ml-12">Authentic</span>
                            <span className="block text-accent relative z-10">Cuts</span>
                        </h1>

                        <p className="font-sans text-text-muted text-lg max-w-md leading-relaxed mb-10 border-l border-accent/20 pl-6">
                            Experience the art of fire and flavor. A culinary journey where every cut is a masterpiece, mastered over open flame.
                        </p>

                        <div className="flex gap-6 items-center">
                            <a href="#reservation" className="group relative px-8 py-4 bg-accent overflow-hidden rounded-sm transition-all hover:scale-105 active:scale-95 duration-300">
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                <span className="relative font-sans text-primary font-bold tracking-widest uppercase text-sm">
                                    Book Table
                                </span>
                            </a>
                            <a href="#menu" className="font-sans text-white text-sm tracking-widest uppercase hover:text-accent transition-colors">
                                View Menu
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: The Star (Steak) */}
                <div className="order-1 md:order-2 relative h-[500px] md:h-[700px] flex items-center justify-center perspective-1000">
                    {/* Background Text Layer (Behind Steak) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
                        <span className="font-serif text-[20vw] text-white/5 leading-none whitespace-nowrap blur-sm">WAGYU</span>
                    </div>

                    {/* Main Steak Image */}
                    <motion.div
                        className="relative z-30 w-[120%] md:w-full max-w-[650px]"
                        style={{
                            rotateX: steakRotateX,
                            rotateY: steakRotateY,
                            y: y1,
                            marginBottom: "-150px" // Negative margin to overlap next section
                        }}
                        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1.2, ease: "circOut" }}
                    >
                        <img
                            src={heroSteakImg}
                            alt="Tomahawk Steak"
                            className="w-full h-full object-contain drop-shadow-[0_50px_60px_rgba(0,0,0,0.6)]"
                        />

                        {/* Floating Ingredients Layers */}
                        <motion.img
                            src={herbImg}
                            className="absolute -top-12 -right-12 w-32 blur-[1px] opacity-80 z-20"
                            style={{ y: useTransform(springY, [-500, 500], [40, -40]) }}
                            animate={{ rotate: [0, 10, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.img
                            src={spicesImg}
                            className="absolute bottom-0 -left-12 w-40 blur-[2px] opacity-60 z-20"
                            style={{ y: useTransform(springY, [-500, 500], [-30, 30]) }}
                            animate={{ rotate: [0, -10, 0] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-20 left-10 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-20"
                style={{ y: y2 }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <span className="text-[10px] uppercase tracking-[0.3em] text-white">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
