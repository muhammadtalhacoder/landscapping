import { Leaf, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

const Footer = () => {
  const { ref, isInView } = useScrollAnimation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-forest-dark text-primary-foreground overflow-hidden">
      <motion.div 
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="container-custom py-16"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div variants={staggerItem} className="lg:col-span-1">
            <motion.a 
              href="#home" 
              className="flex items-center gap-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="p-2 bg-primary rounded-full"
                whileHover={{ rotate: 15 }}
              >
                <Leaf className="h-6 w-6 text-primary-foreground" />
              </motion.div>
              <span className="font-heading text-2xl font-bold">GreenScape</span>
            </motion.a>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Creating beautiful outdoor spaces since 1999. Your trusted partner
              for all landscaping needs.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center transition-all hover:bg-leaf hover:text-primary-foreground"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={staggerItem}>
            <h3 className="font-heading text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Portfolio", "Testimonials", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <motion.a
                      href={`#${link.toLowerCase().replace(" ", "")}`}
                      whileHover={{ x: 4 }}
                      className="text-primary-foreground/70 transition-colors hover:text-leaf inline-block"
                    >
                      {link}
                    </motion.a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={staggerItem}>
            <h3 className="font-heading text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Lawn Care",
                "Garden Design",
                "Tree Services",
                "Hardscaping",
                "Irrigation Systems",
                "Landscape Lighting",
              ].map((service) => (
                <li key={service}>
                  <motion.a
                    href="#services"
                    whileHover={{ x: 4 }}
                    className="text-primary-foreground/70 transition-colors hover:text-leaf inline-block"
                  >
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={staggerItem}>
            <h3 className="font-heading text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-primary-foreground/70 mb-4">
              Subscribe for tips, seasonal advice, and special offers.
            </p>
            <form className="flex gap-2">
              <motion.input
                type="email"
                placeholder="Your email"
                whileFocus={{ scale: 1.02 }}
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-leaf transition-all"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-3 bg-leaf text-primary-foreground rounded-lg font-medium transition-all hover:brightness-110"
              >
                Join
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} GreenScape Landscaping. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <motion.a 
              href="#" 
              whileHover={{ y: -2 }}
              className="text-primary-foreground/60 text-sm hover:text-leaf transition-colors"
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ y: -2 }}
              className="text-primary-foreground/60 text-sm hover:text-leaf transition-colors"
            >
              Terms of Service
            </motion.a>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center transition-all hover:bg-leaf"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
