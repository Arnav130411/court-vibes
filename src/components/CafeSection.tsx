import { motion } from "framer-motion";
import { Coffee, Leaf, Zap, UtensilsCrossed } from "lucide-react";
import cafeBg from "@/assets/cafe-bg.jpg";

const menuItems = [
  { icon: Coffee, name: "Artisan Coffee", desc: "Espresso, cappuccino, cold brew", price: "From ₹150" },
  { icon: Zap, name: "Energy Smoothies", desc: "Protein blends, acai, mango", price: "From ₹200" },
  { icon: Leaf, name: "Health Bowls", desc: "Acai bowls, granola, fresh fruit", price: "From ₹250" },
  { icon: UtensilsCrossed, name: "Snacks & Bites", desc: "Wraps, sandwiches, energy bars", price: "From ₹120" },
];

const CafeSection = () => {
  return (
    <section id="cafe" className="relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${cafeBg})` }}
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="relative z-10 section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              The Cafe
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-primary-foreground mt-3 mb-4">
              Refuel. Recharge. Repeat.
            </h2>
            <p className="text-primary-foreground/60 text-lg max-w-xl mx-auto">
              Our in-house cafe serves up premium fuel for athletes and good-time seekers alike.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {menuItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/10 rounded-xl p-6 hover:bg-primary-foreground/15 transition-colors"
              >
                <item.icon className="text-accent mb-3" size={28} />
                <h3 className="font-heading font-bold text-primary-foreground text-lg mb-1">
                  {item.name}
                </h3>
                <p className="text-primary-foreground/60 text-sm mb-3">{item.desc}</p>
                <span className="text-accent font-semibold text-sm">{item.price}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="#booking"
              className="bg-primary-foreground text-primary px-8 py-3.5 rounded-xl font-bold hover:scale-105 transition-transform"
            >
              Visit the Cafe
            </a>
            <a
              href="#events"
              className="border-2 border-primary-foreground/40 text-primary-foreground px-8 py-3.5 rounded-xl font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              Host a Hangout
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CafeSection;
