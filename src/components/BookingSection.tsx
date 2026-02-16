import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin, ChevronRight } from "lucide-react";
import courtArena from "@/assets/court-arena.jpg";
import courtPickle from "@/assets/court-pickle.jpg";

const timeSlots = [
  "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
  "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM",
];

const courts = [
  { id: 1, name: "Court 1 — Indoor", image: courtArena, desc: "Tournament-grade surface" },
  { id: 2, name: "Court 2 — Indoor", image: courtPickle, desc: "Premium playing experience" },
];

const BookingSection = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedCourt, setSelectedCourt] = useState<number | null>(null);

  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="booking" className="section-padding bg-gradient-dark">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            Book Your Court
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-primary-foreground mt-3 mb-4">
            Ready to Play?
          </h2>
          <p className="text-primary-foreground/60 text-lg">
            Pick your date, time and court — we'll handle the rest.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-2xl p-6 sm:p-8 shadow-large"
        >
          {/* Date */}
          <div className="mb-6">
            <label className="flex items-center gap-2 text-card-foreground font-semibold mb-3">
              <CalendarDays size={18} className="text-accent" />
              Select Date
            </label>
            <input
              type="date"
              min={today}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full bg-secondary border border-border text-foreground rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* Time */}
          <div className="mb-6">
            <label className="flex items-center gap-2 text-card-foreground font-semibold mb-3">
              <Clock size={18} className="text-accent" />
              Select Time Slot
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {timeSlots.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTime(t)}
                  className={`py-2.5 rounded-lg text-sm font-medium transition-all ${
                    selectedTime === t
                      ? "bg-gradient-primary text-primary-foreground shadow-blue"
                      : "bg-secondary text-foreground hover:bg-muted"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Court Selection with Images */}
          <div className="mb-8">
            <label className="flex items-center gap-2 text-card-foreground font-semibold mb-3">
              <MapPin size={18} className="text-accent" />
              Select Court
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {courts.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCourt(c.id)}
                  className={`relative rounded-xl overflow-hidden border-2 transition-all group ${
                    selectedCourt === c.id
                      ? "border-accent shadow-blue"
                      : "border-border hover:border-primary"
                  }`}
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="text-primary-foreground font-heading font-bold text-lg">{c.name}</div>
                    <div className="text-primary-foreground/70 text-sm">{c.desc}</div>
                    <div className="text-accent font-semibold text-sm mt-1">₹800/hour</div>
                  </div>
                  {selectedCourt === c.id && (
                    <div className="absolute top-3 right-3 bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                      ✓
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <button
            className="w-full bg-gradient-primary text-primary-foreground py-4 rounded-xl font-bold text-lg shadow-blue hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            Book Now <ChevronRight size={20} />
          </button>

          <p className="text-center text-muted-foreground text-sm mt-4">
            Need to book for events or tournaments?{" "}
            <a href="#events" className="text-accent underline">
              Request a Quote
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
