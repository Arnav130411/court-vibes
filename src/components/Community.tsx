import { motion } from "framer-motion";
import { Star, MessageCircle } from "lucide-react";

const testimonials = [
  {
    name: "Priya S.",
    role: "Regular Player",
    text: "Offground has the best courts in Bangalore, hands down. The vibe is unmatched and the cafe smoothies are killer!",
  },
  {
    name: "Rahul M.",
    role: "Tournament Player",
    text: "Finally a place that takes pickleball seriously. The tournaments are well-organized and the community is amazing.",
  },
  {
    name: "Ananya K.",
    role: "Weekend Player",
    text: "Came for pickleball, stayed for the cafe. My weekend ritual is now a game followed by their cold brew. Perfect.",
  },
];

const Community = () => {
  return (
    <section id="community" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Community
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-foreground mt-3 mb-4">
            What Players Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gradient-card rounded-2xl p-6 border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-4">
                "{t.text}"
              </p>
              <div>
                <div className="font-heading font-bold text-foreground text-sm">
                  {t.name}
                </div>
                <div className="text-muted-foreground text-xs">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://wa.me/919876543210?text=Hi%20Offground!%20I'd%20like%20to%20know%20more."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[hsl(142,70%,45%)] text-primary-foreground px-6 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={20} />
            Chat with us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
