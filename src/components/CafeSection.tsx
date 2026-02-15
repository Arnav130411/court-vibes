import { motion } from "framer-motion";
import { Coffee, Leaf, Zap, UtensilsCrossed } from "lucide-react";
import cafeCounter from "@/assets/cafe-counter.jpg";
import cafeLounge from "@/assets/cafe-lounge.jpg";
import cafeSeating from "@/assets/cafe-seating.jpg";
import mangoMatcha from "@/assets/mango-matcha.jpg";
import berryMatcha from "@/assets/berry-matcha.jpg";
import coconutMatcha from "@/assets/coconut-matcha.png";

const menuItems = [
  { icon: Coffee, name: "Artisan Coffee", desc: "Espresso, cappuccino, cold brew", price: "From ₹150" },
  { icon: Zap, name: "Matcha Lineup", desc: "Mango, Berry & Coconut Float", price: "From ₹200" },
  { icon: Leaf, name: "Health Bowls", desc: "Acai bowls, granola, fresh fruit", price: "From ₹250" },
  { icon: UtensilsCrossed, name: "Snacks & Bites", desc: "Wraps, sandwiches, energy bars", price: "From ₹120" },
];

const drinkImages = [
  { src: mangoMatcha, alt: "Mango Matcha", label: "Mango Matcha" },
  { src: berryMatcha, alt: "Berry Matcha", label: "Berry Matcha" },
  { src: coconutMatcha, alt: "Coconut Float Matcha", label: "Coconut Float" },
];

const CafeSection = () => {
  return (
    <section id="cafe" className="relative overflow-hidden">
      {/* Background - dark moody cafe aesthetic */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${cafeSeating})` }}
      />
      <div className="absolute inset-0 bg-hero-overlay opacity-90" />

      <div className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto">
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

          {/* Cafe Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-14">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <img src={cafeCounter} alt="Offground cafe counter" className="w-full h-full object-cover" loading="lazy" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <img src={cafeLounge} alt="Offground cafe lounge" className="w-full h-full object-cover" loading="lazy" />
            </motion.div>
          </div>

          {/* Signature Drinks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <h3 className="text-center font-heading font-bold text-primary-foreground text-2xl mb-8">
              Our Signature <span className="text-accent">Matchas</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {drinkImages.map((drink, i) => (
                <motion.div
                  key={drink.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="group relative rounded-2xl overflow-hidden aspect-[3/4]"
                >
                  <img
                    src={drink.src}
                    alt={drink.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-lg font-heading font-bold text-sm">
                      {drink.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Menu Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
