import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Menu', href: '#menu' },
        { name: 'Events', href: '#events' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/95 backdrop-blur-sm py-4 shadow-luxury' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-serif text-text-light tracking-wide font-bold">
                    STEAK<span className="text-accent">HOUSE</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative text-text-light font-sans text-sm tracking-wider uppercase hover:text-accent transition-colors group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                    <a
                        href="#reservation"
                        className="px-6 py-2 border border-accent text-accent font-sans text-sm tracking-widest uppercase rounded hover:bg-accent hover:text-primary transition-all duration-300"
                    >
                        Reservation
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-text-light hover:text-accent transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-secondary border-t border-luxury absolute w-full"
                    >
                        <div className="flex flex-col items-center py-8 space-y-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-text-light font-sans text-lg tracking-wider hover:text-accent transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#reservation"
                                className="mt-4 px-8 py-3 border border-accent text-accent font-sans text-lg tracking-widest uppercase rounded hover:bg-accent hover:text-primary transition-all duration-300"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Reservation
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
