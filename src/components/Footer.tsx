import { Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-dark text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <span className="font-heading text-2xl font-bold tracking-tighter">
              OFF<span className="text-gradient">GROUND</span>
            </span>
            <p className="text-primary-foreground/50 text-sm mt-3 leading-relaxed">
              Bangalore's premium pickleball arena and cafe. Where every game is a good time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/60">
              <li><a href="#about" className="hover:text-primary-foreground transition-colors">About</a></li>
              <li><a href="#booking" className="hover:text-primary-foreground transition-colors">Book a Court</a></li>
              <li><a href="#pricing" className="hover:text-primary-foreground transition-colors">Pricing</a></li>
              <li><a href="#events" className="hover:text-primary-foreground transition-colors">Events</a></li>
              <li><a href="#cafe" className="hover:text-primary-foreground transition-colors">Cafe</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5 text-accent" />
                <span>123 Sports Avenue, Indiranagar, Bangalore 560038</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <a href="tel:+919876543210" className="hover:text-primary-foreground transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <a href="mailto:hello@offground.in" className="hover:text-primary-foreground transition-colors">
                  hello@offground.in
                </a>
              </li>
            </ul>
          </div>

          {/* Social / Map */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest mb-4">
              Follow Us
            </h4>
            <a
              href="https://www.instagram.com/offground.blr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
            >
              <Instagram size={18} />
              @offground.blr
            </a>
            <div className="mt-4 rounded-lg overflow-hidden">
              <iframe
                title="Offground Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.64!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzEyLjAiTiA3N8KwMzgnMjQuMCJF!5e0!3m2!1sen!2sin!4v1600000000000"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/40">
          <p>© 2025 Offground. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
