import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
   {
    id:0,
    title: "QuickAI -Powerful AI Tools",
    description:
      "Fully Responsive React SAAS- Web Application With Authentication And Features PERN stack Project ",
    image: "/projects/Screenshot 2025-07-21 163855.png",
    tags: ["Express","Postgress","API","React", "Node.js", "JavaScript","HTML","CSS"],
    demoUrl: "https://quick-ai-main.vercel.app/",
    githubUrl: "https://github.com/DevangPatel2006/QuickAI",
  },
   {
    id: 1,
    title: "Hirrd",
    description:description: `A user-friendly platform where recruiters can post jobs and candidates can easily apply. Built with a clean design and smooth functionality to streamline job listings and applications. Simple, responsive, and effective for real-world hiring needs.`,

    image: "/projects/hirrd.png",
       tags: ["Express","SupaBase","API","React", "Node.js", "JavaScript","HTML","CSS"],
    demoUrl: "https://hirrd-peach.vercel.app/",
    githubUrl: "https://github.com/DevangPatel2006/Hirrd",
  },
  {
    id: 2,
    title: "SENSAI",
    description: "An AI-Powered Career Coach Currently Working Full Stack Project With Authentication And Gemini-AI.",
    image: "/projects/Screenshot 2025-07-12 134815.png",
    tags: ["Next.Js","Postgress","Shadcn","React", "TailwindCSS"],
    demoUrl: "https://sens-ai-puce.vercel.app/",
    githubUrl: "https://github.com/DevangPatel2006/sensAI",
  },
 
  {
    id: 3,
    title: "LanzaR",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/lanzar.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://lanzar-ai.vercel.app/",
    githubUrl: "https://github.com/DevangPatel2006/lanzar-ai",
  },
 
  {
    id: 4,
    title: "Recipe's App ",
    description:
      "Interactive And Responsive Web App To Find Any Recipe.",
    image: "/projects/recipe.png",
    tags: ["API", "React", "JavaScript"],
    demoUrl: "https://devangpatel2006.github.io/Recipe-WebApp/",
    githubUrl: "https://github.com/DevangPatel2006/Recipe-WebApp",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/DevangPatel2006"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
