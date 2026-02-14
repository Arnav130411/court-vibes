import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-hero-overlay" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            🏓 Bangalore's Premium Pickleball Arena
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6">
            Where Pickleball
            <br />
            <span className="text-primary-foreground/90">Meets Vibes.</span>
          </h1>

          <p className="text-lg sm:text-xl text-primary-foreground/75 max-w-2xl mx-auto mb-10 font-body">
            Bangalore's premium pickleball arena and cafe experience. Play hard,
            chill harder.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#booking"
              className="w-full sm:w-auto bg-primary-foreground text-primary px-8 py-4 rounded-lg text-base font-bold shadow-large hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              Book Now <ChevronRight size={18} />
            </a>
            <a
              href="#booking"
              className="w-full sm:w-auto border-2 border-primary-foreground/40 text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              Reserve Court
            </a>
            <a
              href="#cafe"
              className="w-full sm:w-auto bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-primary-foreground/20 transition-colors"
            >
              ☕ Visit Cafe
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-1.5"
          >
            <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
