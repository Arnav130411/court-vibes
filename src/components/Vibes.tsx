import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import courtArena from "@/assets/court-arena.jpg";
import cafeLounge from "@/assets/cafe-lounge.jpg";
import offgroundExterior from "@/assets/offground-exterior.jpg";

const images = [
  { src: offgroundExterior, alt: "Offground exterior at night", span: "col-span-2" },
  { src: courtArena, alt: "Pickleball courts in action", span: "" },
  { src: cafeLounge, alt: "Cozy cafe lounge", span: "" },
];

const Vibes = () => {
  return (
    <section id="vibes" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            The Vibes
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-foreground mt-3 mb-4">
            More Than a Game.
            <br />
            <span className="text-gradient">It's a Vibe.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            From intense rallies to chill cafe hangs — Offground is where Bangalore
            comes to play and stay.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`overflow-hidden rounded-xl aspect-[16/10] ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://www.instagram.com/offground.blr/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-6 py-3 rounded-full font-semibold shadow-blue hover:opacity-90 transition-opacity"
          >
            <Instagram size={20} />
            Follow @offground.blr
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Vibes;
