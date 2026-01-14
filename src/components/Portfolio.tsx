import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const projects = [
  {
    id: 1,
    title: "Luxury Backyard Oasis",
    category: "Residential",
    image: gallery1,
    size: "large",
  },
  {
    id: 2,
    title: "Front Yard Transformation",
    category: "Curb Appeal",
    image: gallery2,
    size: "tall",
  },
  {
    id: 3,
    title: "Outdoor Living Space",
    category: "Hardscape",
    image: gallery3,
    size: "normal",
  },
  {
    id: 4,
    title: "Tranquil Water Feature",
    category: "Water Gardens",
    image: gallery4,
    size: "normal",
  },
];

const Portfolio = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="portfolio" className="section-padding bg-forest-dark">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-leaf font-semibold text-sm uppercase tracking-wider mb-3">
            Our Portfolio
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Explore our latest landscape transformations and see the quality of
            our craftsmanship firsthand.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Project */}
          <div
            className="lg:col-span-2 lg:row-span-1 group relative rounded-2xl overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredId(1)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  hoveredId === 1 ? "scale-110" : "scale-100"
                }`}
              />
            </div>
            <div className={`absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-dark/30 to-transparent transition-opacity duration-300 ${
              hoveredId === 1 ? "opacity-100" : "opacity-70"
            }`} />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block text-leaf text-sm font-medium mb-2">
                {projects[0].category}
              </span>
              <h3 className="font-heading text-2xl md:text-3xl text-primary-foreground mb-2">
                {projects[0].title}
              </h3>
              <div className={`flex items-center gap-2 text-primary-foreground transition-all duration-300 ${
                hoveredId === 1 ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              }`}>
                <span className="font-medium">View Project</span>
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Other Projects */}
          {projects.slice(1).map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className={`overflow-hidden ${project.size === 'tall' ? 'aspect-[3/4]' : 'aspect-square'}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredId === project.id ? "scale-110" : "scale-100"
                  }`}
                />
              </div>
              <div className={`absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-dark/30 to-transparent transition-opacity duration-300 ${
                hoveredId === project.id ? "opacity-100" : "opacity-70"
              }`} />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="inline-block text-leaf text-sm font-medium mb-1">
                  {project.category}
                </span>
                <h3 className="font-heading text-xl text-primary-foreground">
                  {project.title}
                </h3>
                <div className={`flex items-center gap-2 text-primary-foreground text-sm mt-2 transition-all duration-300 ${
                  hoveredId === project.id ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                }`}>
                  <span className="font-medium">View Project</span>
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary-foreground border-2 border-primary-foreground/30 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-primary-foreground hover:text-forest-dark"
          >
            View All Projects
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
