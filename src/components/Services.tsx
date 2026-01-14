import { ArrowRight } from "lucide-react";
import serviceLawn from "@/assets/service-lawn.jpg";
import serviceGarden from "@/assets/service-garden.jpg";
import serviceTree from "@/assets/service-tree.jpg";
import serviceHardscape from "@/assets/service-hardscape.jpg";

const services = [
  {
    title: "Lawn Care & Maintenance",
    description: "Professional mowing, edging, fertilization, and seasonal care to keep your lawn lush and healthy year-round.",
    image: serviceLawn,
    features: ["Weekly Mowing", "Fertilization", "Weed Control", "Seasonal Cleanup"],
  },
  {
    title: "Garden Design & Planting",
    description: "Custom flower beds, perennial gardens, and ornamental plantings that bring color and life to your property.",
    image: serviceGarden,
    features: ["Custom Design", "Plant Selection", "Installation", "Maintenance"],
  },
  {
    title: "Tree & Shrub Services",
    description: "Expert pruning, trimming, and removal services to maintain the health and beauty of your trees and shrubs.",
    image: serviceTree,
    features: ["Pruning", "Trimming", "Tree Removal", "Health Treatment"],
  },
  {
    title: "Hardscape & Patios",
    description: "Beautiful stone patios, walkways, retaining walls, and outdoor living spaces built to last.",
    image: serviceHardscape,
    features: ["Patios", "Walkways", "Retaining Walls", "Outdoor Kitchens"],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-cream">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Our Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Complete Landscaping Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From routine maintenance to complete landscape transformations, we offer
            comprehensive services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-background rounded-2xl overflow-hidden shadow-soft card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-heading text-2xl text-primary-foreground">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs font-medium bg-muted text-muted-foreground px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold group/link"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;