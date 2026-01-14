import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, staggerContainer, staggerItem, fadeInLeft, fadeInRight } from "@/hooks/useScrollAnimation";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    details: ["123 Garden Street", "Green Valley, CA 90210"],
  },
  {
    icon: Phone,
    title: "Phone Number",
    details: ["(123) 456-7890", "(123) 456-7891"],
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["info@greenscape.com", "support@greenscape.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Fri: 8AM - 6PM", "Sat: 9AM - 4PM"],
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: infoRef, isInView: infoInView } = useScrollAnimation();
  const { ref: formRef, isInView: formInView } = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <section id="contact" className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div 
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Contact Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Get Your Free Quote Today
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to transform your outdoor space? Contact us for a free
            consultation and estimate.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div 
            ref={infoRef}
            initial="hidden"
            animate={infoInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="lg:col-span-1 space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                variants={staggerItem}
                whileHover={{ x: 8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex gap-4 p-6 bg-muted rounded-xl transition-all hover:shadow-soft cursor-pointer"
              >
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <info.icon className="h-6 w-6 text-primary-foreground" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            ref={formRef}
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
            variants={fadeInRight}
            className="lg:col-span-2"
          >
            <motion.form
              onSubmit={handleSubmit}
              className="bg-card p-8 md:p-10 rounded-2xl shadow-soft"
              whileHover={{ boxShadow: "0 20px 40px hsl(142 45% 28% / 0.15)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border-border focus:border-primary focus:ring-primary transition-all hover:border-primary/50"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border-border focus:border-primary focus:ring-primary transition-all hover:border-primary/50"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="(123) 456-7890"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border-border focus:border-primary focus:ring-primary transition-all hover:border-primary/50"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-primary focus:ring-primary focus:outline-none transition-all hover:border-primary/50"
                  >
                    <option value="">Select a service</option>
                    <option value="lawn-care">Lawn Care & Maintenance</option>
                    <option value="garden-design">Garden Design</option>
                    <option value="tree-service">Tree & Shrub Services</option>
                    <option value="hardscape">Hardscape & Patios</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>
              </div>
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <Textarea
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border-border focus:border-primary focus:ring-primary min-h-[150px] transition-all hover:border-primary/50"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button type="submit" className="btn-primary w-full sm:w-auto">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
