import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Weekday",
    price: "₹800",
    unit: "/hour",
    desc: "Mon – Fri, 6AM – 10PM",
    features: ["Court access", "Equipment rental", "Locker room", "Free WiFi"],
    popular: false,
  },
  {
    name: "Weekend",
    price: "₹1,200",
    unit: "/hour",
    desc: "Sat – Sun, 6AM – 10PM",
    features: ["Court access", "Equipment rental", "Locker room", "Free WiFi", "Priority booking"],
    popular: true,
  },
  {
    name: "Membership",
    price: "₹5,999",
    unit: "/month",
    desc: "Unlimited access",
    features: ["Unlimited court time", "Free equipment", "Locker room", "Cafe discounts", "Tournament entry", "Guest passes"],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-foreground mt-3 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-lg">
            No hidden fees. Just great pickleball.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 border-2 transition-shadow ${
                plan.popular
                  ? "border-primary bg-background shadow-blue"
                  : "border-border bg-background hover:shadow-large"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading font-bold text-xl text-foreground mb-1">
                {plan.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{plan.desc}</p>
              <div className="mb-6">
                <span className="text-4xl font-heading font-bold text-foreground">
                  {plan.price}
                </span>
                <span className="text-muted-foreground text-sm">{plan.unit}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <Check size={16} className="text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#booking"
                className={`block text-center py-3 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? "bg-gradient-primary text-primary-foreground shadow-blue hover:opacity-90"
                    : "bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8">
          Group discounts available for 4+ players.{" "}
          <a href="#events" className="text-primary underline">
            Contact us
          </a>
        </p>
      </div>
    </section>
  );
};

export default Pricing;
