import { motion } from "framer-motion";
import { Trophy, Calendar, Users, Building2 } from "lucide-react";

const events = [
  {
    icon: Trophy,
    title: "Weekend Tournaments",
    desc: "Compete in our weekly singles and doubles tournaments with prizes and rankings.",
    cta: "Register Now",
  },
  {
    icon: Calendar,
    title: "League Sign-ups",
    desc: "Join our seasonal league and track your progress on the Offground leaderboard.",
    cta: "Join League",
  },
  {
    icon: Users,
    title: "Private Events",
    desc: "Host birthday parties, team outings, or celebrations at our venue.",
    cta: "Enquire Now",
  },
  {
    icon: Building2,
    title: "Corporate Bookings",
    desc: "Team building, corporate tournaments, and wellness programs for companies.",
    cta: "Get Quote",
  },
];

const Events = () => {
  return (
    <section id="events" className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Events & Tournaments
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-foreground mt-3 mb-4">
            Host Your Event at Offground
          </h2>
          <p className="text-muted-foreground text-lg">
            From casual meetups to competitive tournaments — we've got the space and the energy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {events.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background rounded-2xl p-8 border border-border hover:shadow-blue transition-shadow group"
            >
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <e.icon className="text-primary-foreground" size={26} />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                {e.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {e.desc}
              </p>
              <a
                href="#booking"
                className="text-primary font-semibold text-sm hover:underline"
              >
                {e.cta} →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
