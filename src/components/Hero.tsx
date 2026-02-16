import { motion } from "framer-motion";
import { ChevronRight, Coffee, Zap } from "lucide-react";
import courtArena from "@/assets/court-arena.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background image with heavy dark overlay for that stony vibe */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ backgroundImage: `url(${courtArena})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/70 to-primary/95" />

      {/* Grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Pill badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-card text-card-foreground text-sm font-medium px-5 py-2 rounded-full mb-8 shadow-large"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Pickleball × Coffee — RR Nagar, Bangalore
          </motion.div>

          {/* Main headline - big, stony, editorial */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-heading font-bold text-primary-foreground leading-[0.95] mb-8 tracking-tighter">
            PLAY HARD.
            <br />
            <span className="text-gradient">CHILL HARDER.</span>
          </h1>

          <p className="text-lg sm:text-xl text-primary-foreground/60 max-w-lg mx-auto mb-12 font-body leading-relaxed">
            Premium pickleball courts meet artisan cafe. 
            The only spot in Bangalore where game day feels like a vibe.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#booking"
              className="w-full sm:w-auto bg-primary-foreground text-primary px-10 py-4 rounded-full text-base font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-large"
            >
              Book a Court <ChevronRight size={18} />
            </a>
            <a
              href="#cafe"
              className="w-full sm:w-auto border-2 border-primary-foreground text-primary-foreground px-10 py-4 rounded-full text-base font-semibold hover:bg-primary-foreground hover:text-primary transition-colors flex items-center justify-center gap-2"
            >
              <Coffee size={18} /> Visit Cafe
            </a>
          </div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex items-center justify-center gap-8 sm:gap-12 mt-16 text-primary-foreground/40"
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-heading font-bold text-primary-foreground">2</div>
              <div className="text-xs uppercase tracking-wider mt-1">Courts</div>
            </div>
            <div className="w-px h-8 bg-primary-foreground/15" />
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-heading font-bold text-primary-foreground">16</div>
              <div className="text-xs uppercase tracking-wider mt-1">Hours/Day</div>
            </div>
            <div className="w-px h-8 bg-primary-foreground/15" />
            <div className="text-center">
              <div className="flex items-center gap-1 justify-center">
                <Zap size={16} className="text-accent" />
                <span className="text-2xl sm:text-3xl font-heading font-bold text-primary-foreground">∞</span>
              </div>
              <div className="text-xs uppercase tracking-wider mt-1">Vibes</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-5 h-8 rounded-full border border-primary-foreground/25 flex items-start justify-center p-1"
          >
            <div className="w-1 h-2.5 bg-primary-foreground/40 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
