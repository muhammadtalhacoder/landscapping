import { CheckCircle, Award, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useScrollAnimation, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";
import AnimatedCounter from "./AnimatedCounter";
import aboutTeam from "@/assets/about-team.jpg";

const features = [
  "Licensed & Insured Professionals",
  "Eco-Friendly Practices",
  "Custom Design Solutions",
  "Satisfaction Guaranteed",
];

const stats = [
  { icon: Award, value: 25, suffix: "+", label: "Years Experience" },
  { icon: Users, value: 50, suffix: "+", label: "Team Members" },
  { icon: Clock, value: 24, suffix: "/7", label: "Customer Support" },
];

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  
  const { ref: imageRef, isInView: imageInView } = useScrollAnimation();
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation();

  return (
    <section ref={containerRef} id="about" className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div 
            ref={imageRef}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
            variants={fadeInLeft}
            className="relative"
          >
            {/* Main Image */}
            <motion.div 
              style={{ y: imageY }}
              className="relative rounded-2xl overflow-hidden shadow-strong"
            >
              <motion.img
                src={aboutTeam}
                alt="Our landscaping team"
                className="w-full h-auto object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>

            {/* Floating Card */}
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={imageInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.9 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="absolute -bottom-8 -right-4 md:right-8 bg-primary text-primary-foreground p-6 rounded-2xl shadow-strong max-w-xs"
            >
              <div className="flex items-center gap-4">
                <motion.div 
                  className="w-16 h-16 bg-leaf rounded-full flex items-center justify-center flex-shrink-0"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Award className="h-8 w-8" />
                </motion.div>
                <div>
                  <p className="font-heading text-2xl font-bold">Best In Class</p>
                  <p className="text-primary-foreground/80 text-sm">Award Winning Service</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Element */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={imageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="absolute -top-4 -left-4 w-24 h-24 border-2 border-leaf rounded-2xl -z-10"
            />
          </motion.div>

          {/* Content Side */}
          <motion.div
            ref={contentRef}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            variants={fadeInRight}
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              About GreenScape
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Creating Beautiful Outdoor Spaces Since 1999
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              For over two decades, GreenScape has been the trusted choice for homeowners
              and businesses seeking exceptional landscaping services. Our team of certified
              professionals combines artistry with expertise to transform ordinary yards
              into extraordinary outdoor living spaces.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We believe every property has unique potential. That's why we take a
              personalized approach to every project, ensuring your vision becomes reality
              while exceeding industry standards.
            </p>

            {/* Features List */}
            <motion.div 
              initial="hidden"
              animate={contentInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 gap-4 mb-8"
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={feature} 
                  variants={staggerItem}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={contentInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  </motion.div>
                  <span className="text-foreground font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Button className="btn-primary">
                Learn Our Story
              </Button>
            </motion.div>

            {/* Stats with Animated Counters */}
            <motion.div 
              initial="hidden"
              animate={contentInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border"
            >
              {stats.map((stat) => (
                <motion.div 
                  key={stat.label} 
                  variants={staggerItem}
                  whileHover={{ scale: 1.1 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  </motion.div>
                  <p className="font-heading text-2xl md:text-3xl text-foreground font-bold">
                    <AnimatedCounter 
                      end={stat.value} 
                      suffix={stat.suffix}
                      duration={2000}
                    />
                  </p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
