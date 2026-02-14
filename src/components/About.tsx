import { motion } from "framer-motion";
import { Trophy, Users, Zap, Star } from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "Professional Courts",
    desc: "Tournament-grade surfaces with perfect bounce and grip for competitive play.",
  },
  {
    icon: Users,
    title: "Community Driven",
    desc: "Join a thriving community of players, from beginners to pros.",
  },
  {
    icon: Zap,
    title: "Premium Experience",
    desc: "State-of-the-art lighting, equipment, and facilities for the best game.",
  },
  {
    icon: Star,
    title: "Cafe & Lounge",
    desc: "Refuel with gourmet coffee, smoothies, and healthy bites after your game.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            About Us
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-foreground mt-3 mb-6">
            Not Just a Court.
            <br />
            <span className="text-gradient">A Movement.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Offground is Bangalore's answer to the global pickleball revolution.
            We've built a premium arena that combines world-class courts with an
            unmatched social experience — because the best games deserve the best
            vibes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gradient-card rounded-xl p-6 border border-border hover:shadow-blue transition-shadow group"
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <f.icon className="text-primary-foreground" size={22} />
              </div>
              <h3 className="text-foreground font-heading font-bold text-lg mb-2">
                {f.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
