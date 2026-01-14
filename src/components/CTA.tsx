import { Phone, ArrowRight, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";
import AnimatedCounter from "./AnimatedCounter";

const ctaStats = [
  { value: 25, suffix: "+", label: "Years of Excellence" },
  { value: 2500, suffix: "+", label: "Projects Delivered" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
];

const CTA = () => {
  const { ref, isInView } = useScrollAnimation();
  const { ref: statsRef, isInView: statsInView } = useScrollAnimation();

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-leaf rounded-full -translate-x-1/2 -translate-y-1/2"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-80 h-80 bg-gold rounded-full translate-x-1/3 translate-y-1/3"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <motion.div 
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="container-custom relative"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-2 justify-center lg:justify-start mb-4"
            >
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
              <span className="text-primary-foreground/80 ml-2">5-Star Rated Service</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.2 }}
              className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4"
            >
              Ready to Transform Your Yard?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
              className="text-primary-foreground/80 text-lg max-w-xl"
            >
              Get started with a free consultation. Our experts will help you
              design the perfect outdoor space for your home.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start"
            >
              {["Free Estimates", "Licensed & Insured", "Same Day Response"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-primary-foreground/90">
                  <CheckCircle className="h-4 w-4 text-leaf" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-4"
          >
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button className="bg-primary-foreground text-primary px-8 py-6 rounded-full font-medium text-lg transition-all duration-300 hover:bg-leaf hover:text-primary-foreground group">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
            <motion.a
              href="tel:+1234567890"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:bg-primary-foreground/10"
            >
              <Phone className="h-5 w-5" />
              (123) 456-7890
            </motion.a>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          ref={statsRef}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-primary-foreground/20"
        >
          {ctaStats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <p className="font-heading text-3xl md:text-4xl text-leaf font-bold">
                <AnimatedCounter 
                  end={stat.value} 
                  suffix={stat.suffix}
                  duration={2000}
                />
              </p>
              <p className="text-primary-foreground/70 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTA;
