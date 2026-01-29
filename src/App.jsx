import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import OurStory from './sections/OurStory';
import Menu from './sections/Menu';
import UpcomingEvents from './sections/UpcomingEvents';
import BestIngredients from './sections/BestIngredients';
import Reservation from './sections/Reservation';
import Footer from './components/Footer';

import { ReactLenis } from 'lenis/react';

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <div className="bg-primary min-h-screen text-text-light selection:bg-accent selection:text-primary">
        <Navbar />
        <main>
          <Hero />
          <OurStory />
          <Menu />
          <UpcomingEvents />
          <BestIngredients />
          <Reservation />
        </main>
        <Footer />

        {/* Fixed Watermark */}
        <a
          href="https://faraidun.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 group"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary/80 backdrop-blur-md border border-white/5 rounded-full shadow-lg hover:border-accent/30 hover:shadow-accent/10 transition-all duration-300">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span className="font-sans text-[10px] text-white/60 group-hover:text-accent tracking-[0.2em] uppercase transition-colors">
              Made by Faraidun
            </span>
          </div>
        </a>
      </div>
    </ReactLenis>
  );
}

export default App;
