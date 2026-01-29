import { motion } from 'framer-motion';
import ScrollElement from '../components/ScrollElement';

const UpcomingEvents = () => {
    const events = [
        {
            date: "OCT 24",
            title: "Wine Tasting Evening",
            time: "19:00 - 22:00",
            description: "A curated journey through Napa Valley's finest vintages, paired with our signature wagyu cuts.",
            delay: 0.2
        },
        {
            date: "NOV 05",
            title: "Jazz & Dining Night",
            time: "20:00 - 23:00",
            description: "Live saxophonist performance accompanying a special 5-course seasonal tasting menu.",
            delay: 0.4
        },
        {
            date: "DEC 31",
            title: "New Year's Gala",
            time: "21:00 - Late",
            description: "Celebrate the new year with champagne, caviar, and an exclusive midnight rooftop toast.",
            delay: 0.6
        }
    ];

    return (
        <section id="events" className="py-16 md:py-24 relative overflow-hidden min-h-screen flex items-center">
            {/* Ambient Background - Placeholder until generation is restored */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2874&auto=format&fit=crop"
                    alt="Restaurant Ambience"
                    className="w-full h-full object-cover opacity-40 blur-[2px]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/90 to-primary"></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 w-full">
                <ScrollElement direction="up" viewport={{ amount: 0.3 }}>
                    <div className="text-center mb-20">
                        <span className="font-script text-accent text-3xl md:text-4xl opacity-90 block mb-2">Mark Your Calendar</span>
                        <h2 className="font-serif text-5xl md:text-7xl text-white tracking-tight">Upcoming Events</h2>
                    </div>
                </ScrollElement>

                <div className="relative">
                    {/* Vertical Gold Line */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute left-[19px] md:left-1/2 top-0 w-[1px] bg-gradient-to-b from-transparent via-accent to-transparent -translate-x-1/2"
                    ></motion.div>

                    <div className="space-y-16">
                        {events.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ amount: 0.5, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: event.delay }}
                                className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Date Bubble */}
                                <div className="absolute left-0 md:left-1/2 w-10 h-10 border border-accent bg-primary rounded-full flex items-center justify-center z-10 -translate-x-1/2 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                                </div>

                                {/* Content Card - Left/Right alternating */}
                                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                                    <div className="group cursor-pointer">
                                        <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                                            <span className="font-sans text-accent text-sm tracking-[0.2em] font-bold mb-2 block">{event.date}</span>
                                            <h3 className="font-serif text-3xl text-white group-hover:text-accent transition-colors duration-300 mb-2">{event.title}</h3>
                                            <span className="inline-block px-3 py-1 border border-white/10 rounded-full text-xs text-secondary/60 tracking-wider mb-4">{event.time}</span>
                                            <p className="font-sans text-gray-400 font-light leading-relaxed text-sm md:max-w-xs">{event.description}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Empty Spacer for the other side */}
                                <div className="hidden md:block w-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-24">
                    <button className="text-accent hover:text-white transition-colors text-sm tracking-[0.2em] uppercase border-b border-accent/30 pb-1 hover:border-white">View Full Calendar</button>
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;
