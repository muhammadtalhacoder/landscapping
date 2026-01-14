import { CheckCircle, Award, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutTeam from "@/assets/about-team.jpg";

const features = [
  "Licensed & Insured Professionals",
  "Eco-Friendly Practices",
  "Custom Design Solutions",
  "Satisfaction Guaranteed",
];

const stats = [
  { icon: Award, value: "25+", label: "Years Experience" },
  { icon: Users, value: "50+", label: "Team Members" },
  { icon: Clock, value: "24/7", label: "Customer Support" },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img
                src={aboutTeam}
                alt="Our landscaping team"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-4 md:right-8 bg-primary text-primary-foreground p-6 rounded-2xl shadow-strong max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-leaf rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="h-8 w-8" />
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold">Best In Class</p>
                  <p className="text-primary-foreground/80 text-sm">Award Winning Service</p>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-leaf rounded-2xl -z-10" />
          </div>

          {/* Content Side */}
          <div>
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
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button className="btn-primary">
              Learn Our Story
            </Button>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-heading text-2xl md:text-3xl text-foreground font-bold">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;