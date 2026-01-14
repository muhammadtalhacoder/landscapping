import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation, fadeInUp, fadeInLeft } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    content: "GreenScape completely transformed our backyard into a stunning outdoor retreat. Their attention to detail and professionalism exceeded all expectations. We couldn't be happier!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Property Manager",
    content: "We've been using GreenScape for our commercial properties for 5 years. Their consistent quality and reliable service make them our go-to landscaping partner.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Homeowner",
    content: "From design to installation, the team was fantastic. They listened to our ideas and created a landscape that's even better than we imagined. Highly recommend!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const { ref: sectionRef, isInView } = useScrollAnimation();

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" as const }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.4 }
    })
  };

  return (
    <section ref={sectionRef} id="testimonials" className="section-padding bg-cream relative overflow-hidden">
      {/* Background Decoration */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 right-0 w-1/2 h-full bg-muted/50 -skew-x-12 origin-top-right"
      />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Header */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInLeft}
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Testimonials
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              What Our Clients Say About Us
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Don't just take our word for it. Here's what homeowners and
              businesses have to say about working with GreenScape.
            </p>

            {/* Navigation */}
            <div className="flex items-center gap-4">
              <motion.button
                onClick={prevTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full border-2 border-primary text-primary flex items-center justify-center transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronLeft className="h-5 w-5" />
              </motion.button>
              <motion.button
                onClick={nextTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full border-2 border-primary text-primary flex items-center justify-center transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronRight className="h-5 w-5" />
              </motion.button>
              <span className="text-muted-foreground ml-4">
                {currentIndex + 1} / {testimonials.length}
              </span>
            </div>
          </motion.div>

          {/* Right Side - Testimonial Card */}
          <motion.div 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="relative"
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="bg-background rounded-2xl p-8 md:p-10 shadow-strong relative"
              >
                {/* Quote Icon */}
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="absolute -top-6 left-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center"
                >
                  <Quote className="h-6 w-6 text-primary-foreground" />
                </motion.div>

                {/* Rating */}
                <div className="flex gap-1 mb-6 mt-2">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      <Star className="h-5 w-5 fill-gold text-gold" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <motion.img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div>
                    <p className="font-heading text-lg text-foreground font-semibold">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  whileHover={{ scale: 1.2 }}
                  animate={{
                    width: index === currentIndex ? 32 : 8,
                    backgroundColor: index === currentIndex ? "hsl(var(--primary))" : "hsl(var(--border))"
                  }}
                  className="h-2 rounded-full transition-all"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
