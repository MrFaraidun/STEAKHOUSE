import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-primary pt-24 pb-12 border-t border-luxury">
            <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-3 gap-16 mb-20 text-center md:text-left">

                {/* Contact Info */}
                <div>
                    <h3 className="font-serif text-2xl text-text-light mb-6">Contact</h3>
                    <p className="font-sans text-text-muted mb-2">Erbil, Kurdistan Region, Iraq</p>
                    <p className="font-sans text-text-muted mb-2">+964 7702394422</p>
                    <a href="mailto:info@steakhouse.com" className="font-sans text-accent hover:text-white transition-colors">
                        info@steakhouse.com
                    </a>
                </div>

                {/* Brand / Logo */}
                <div className="flex flex-col items-center">
                    <div className="text-3xl font-serif text-text-light tracking-wide font-bold mb-6">
                        STEAK<span className="text-accent">HOUSE</span>
                    </div>
                    <div className="flex space-x-6">
                        <a href="https://www.facebook.com/mrfaraidun" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors"><Instagram size={20} /></a>
                        <a href="https://www.facebook.com/mrfaraidun" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors"><Facebook size={20} /></a>
                        <a href="https://www.facebook.com/mrfaraidun" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors"><Twitter size={20} /></a>
                    </div>
                </div>

                {/* Hours */}
                <div className="md:text-right">
                    <h3 className="font-serif text-2xl text-text-light mb-6">Opening Hours</h3>
                    <div className="font-sans text-text-muted space-y-2">
                        <p><span className="text-text-light">Mon - Thu:</span> 17:00 - 22:00</p>
                        <p><span className="text-text-light">Fri - Sat:</span> 17:00 - 23:00</p>
                        <p><span className="text-text-light">Sun:</span> 16:00 - 21:00</p>
                    </div>
                </div>
            </div>

            <div className="text-center border-t border-white/5 pt-8">
                <p className="font-sans text-xs text-text-muted tracking-wider mb-4">
                    &copy; {new Date().getFullYear()} PREMIUM STEAKHOUSE. ALL RIGHTS RESERVED.
                </p>
                <a
                    href="https://faraidun.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xs text-accent/60 hover:text-accent transition-colors tracking-widest"
                >
                    Made by Faraidun
                </a>
            </div>
        </footer>
    );
};

export default Footer;
