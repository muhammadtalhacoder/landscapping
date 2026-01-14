import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-leaf rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container-custom relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4">
              Ready to Transform Your Yard?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl">
              Get started with a free consultation. Our experts will help you
              design the perfect outdoor space for your home.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-primary-foreground text-primary px-8 py-6 rounded-full font-medium text-lg transition-all duration-300 hover:bg-leaf hover:text-primary-foreground group">
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:bg-primary-foreground/10"
            >
              <Phone className="h-5 w-5" />
              (123) 456-7890
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;