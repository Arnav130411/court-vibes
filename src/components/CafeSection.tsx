import { motion } from "framer-motion";
import { Coffee, Leaf, Zap, UtensilsCrossed } from "lucide-react";
import cafeSeating from "@/assets/cafe-seating.jpg";
import mangoMatcha from "@/assets/mango-matcha.jpg";
import berryMatcha from "@/assets/berry-matcha.jpg";
import coconutMatcha from "@/assets/coconut-matcha.png";

const drinks = [
  { src: mangoMatcha, name: "Mango Matcha", price: "₹250" },
  { src: berryMatcha, name: "Berry Matcha", price: "₹250" },
  { src: coconutMatcha, name: "Coconut Float", price: "₹280" },
];

const menuItems = [
  { icon: Coffee, name: "Artisan Coffee", desc: "Espresso, cappuccino, cold brew", price: "From ₹150" },
  { icon: Zap, name: "Matcha Lineup", desc: "Mango, Berry & Coconut Float", price: "From ₹200" },
  { icon: Leaf, name: "Health Bowls", desc: "Acai bowls, granola, fresh fruit", price: "From ₹250" },
  { icon: UtensilsCrossed, name: "Snacks & Bites", desc: "Wraps, sandwiches, energy bars", price: "From ₹120" },
];

const CafeSection = () => {
  return (
    <section id="cafe" className="relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${cafeSeating})` }}
      />
      <div className="absolute inset-0 bg-primary opacity-95" />

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

          {/* Signature Drinks Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
            {drinks.map((drink, i) => (
              <motion.div
                key={drink.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group relative rounded-2xl overflow-hidden aspect-[3/4]"
              >
                <img
                  src={drink.src}
                  alt={drink.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-heading font-bold text-primary-foreground text-lg">{drink.name}</h3>
                  <span className="text-accent font-semibold text-sm">{drink.price}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Menu Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {menuItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 hover:shadow-blue transition-shadow"
              >
                <item.icon className="text-accent mb-3" size={28} />
                <h3 className="font-heading font-bold text-card-foreground text-lg mb-1">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">{item.desc}</p>
                <span className="text-accent font-semibold text-sm">{item.price}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#booking"
              className="bg-primary-foreground text-primary px-8 py-3.5 rounded-full font-bold hover:scale-105 transition-transform"
            >
              Visit the Cafe
            </a>
            <a
              href="#events"
              className="border-2 border-primary-foreground text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:bg-primary-foreground hover:text-primary transition-colors"
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
