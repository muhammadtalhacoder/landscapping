import { Leaf, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-forest-dark text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-primary rounded-full">
                <Leaf className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-heading text-2xl font-bold">GreenScape</span>
            </a>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Creating beautiful outdoor spaces since 1999. Your trusted partner
              for all landscaping needs.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center transition-all hover:bg-leaf hover:text-primary-foreground"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Portfolio", "Testimonials", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "")}`}
                      className="text-primary-foreground/70 transition-colors hover:text-leaf"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
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
                  <a
                    href="#services"
                    className="text-primary-foreground/70 transition-colors hover:text-leaf"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-primary-foreground/70 mb-4">
              Subscribe for tips, seasonal advice, and special offers.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-leaf"
              />
              <button
                type="submit"
                className="px-4 py-3 bg-leaf text-primary-foreground rounded-lg font-medium transition-all hover:brightness-110"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} GreenScape Landscaping. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-primary-foreground/60 text-sm hover:text-leaf transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 text-sm hover:text-leaf transition-colors">
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center transition-all hover:bg-leaf"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;