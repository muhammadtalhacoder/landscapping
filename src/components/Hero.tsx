import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Beautiful landscaped garden"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/70 to-forest-dark/40" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-leaf/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-float" />

      {/* Content */}
      <div className="relative container-custom py-32 lg:py-40">
        <div className="max-w-3xl animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-leaf rounded-full animate-pulse" />
            <span className="text-primary-foreground text-sm font-medium">
              Professional Landscaping Services
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground leading-tight mb-6">
            Transform Your
            <span className="block text-leaf">Outdoor Space</span>
            Into Paradise
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-8 leading-relaxed">
            We create stunning outdoor environments that enhance your property's beauty
            and value. From lawn care to complete landscape design, trust the experts.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Button className="btn-primary group">
              Get Free Estimate
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="bg-transparent border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-primary-foreground/10 hover:border-primary-foreground/50">
              <Play className="mr-2 h-4 w-4" />
              Watch Video
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-primary-foreground/20">
            <div>
              <p className="font-heading text-3xl md:text-4xl text-leaf font-bold">25+</p>
              <p className="text-primary-foreground/70 text-sm mt-1">Years Experience</p>
            </div>
            <div>
              <p className="font-heading text-3xl md:text-4xl text-leaf font-bold">2.5K</p>
              <p className="text-primary-foreground/70 text-sm mt-1">Projects Done</p>
            </div>
            <div>
              <p className="font-heading text-3xl md:text-4xl text-leaf font-bold">99%</p>
              <p className="text-primary-foreground/70 text-sm mt-1">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full p-1">
          <div className="w-1.5 h-2.5 bg-primary-foreground/60 rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;