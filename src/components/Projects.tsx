import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AIDA – Ad Intelligence Analytics",
    problem:
      "Businesses lacked real-time insight into ad performance and audience tracking across physical locations.",
    solution:
      "Built a full-stack analytics dashboard with React + TypeScript frontend, Node.js backend, and Python CV modules using YOLOv5 for object detection.",
    features: [
      "Real-time ad tracking dashboard",
      "YOLOv5 object detection pipeline",
      "REST API with MySQL backend",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Python"],
    demoLink: "https://dash.theaida.id/",
  },
  {
    id: 2,
    title: "Attendify – Focus Time Tracker",
    problem:
      "Professionals needed a minimal, distraction-free way to track work hours and set productivity goals.",
    solution:
      "Designed and built a clean time-tracking web app with Next.js, featuring goal setting, session history, and insight reports.",
    features: [
      "Timer with session management",
      "Productivity goal tracking",
      "Clean, minimal dark UI",
    ],
    technologies: ["Next.js", "React", "TypeScript"],
    demoLink: "https://attendify-three-sigma.vercel.app/",
  },
  {
    id: 3,
    title: "Arunika – Coffee E-Commerce",
    problem:
      "Local coffee brands needed a modern online presence to reach a wider audience.",
    solution:
      "Created a full-featured e-commerce platform with product catalog, cart, and checkout using Next.js and Node.js.",
    features: [
      "Product catalog with filtering",
      "Shopping cart & checkout flow",
      "Responsive mobile-first design",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js"],
    githubLink: "https://github.com/AstorBoy11/Arunika.git",
  },
  {
    id: 4,
    title: "FutureIDX – Stock Prediction",
    problem:
      "Retail investors lacked accessible tools for data-driven stock analysis.",
    solution:
      "Built a web app delivering IDX stock insights using Laravel + Inertia.js with React frontend and ML-based predictions.",
    features: [
      "Interactive stock charts",
      "ML-powered predictions",
      "Inertia.js SPA routing",
    ],
    technologies: ["Laravel", "React", "TypeScript", "Inertia.js"],
    githubLink: "https://github.com/AstorBoy11/FutureIDX.git",
  },
  {
    id: 5,
    title: "MAGNET – Internship Recommender",
    problem:
      "Students struggled to find relevant internship opportunities matching their skills and interests.",
    solution:
      "Developed a web-based recommendation system that matches students with suitable internship placements using content-based filtering.",
    features: [
      "Skill-based matching algorithm",
      "Student profile management",
      "Admin dashboard for listings",
    ],
    technologies: ["PHP", "Laravel"],
    githubLink:
      "https://github.com/AstorBoy11/MAGNET-Magang-Network-And-Tracking.git",
  },
  {
    id: 6,
    title: "CBF Tourism Recommender",
    problem:
      "Travelers had difficulty discovering destinations aligned with their preferences.",
    solution:
      "Implemented a content-based filtering algorithm that recommends tourist spots based on user preference data.",
    features: [
      "Content-based filtering engine",
      "Preference-based recommendations",
      "Lightweight vanilla JS interface",
    ],
    technologies: ["JavaScript", "Algorithm"],
    githubLink: "https://github.com/AstorBoy11/CBF-Tourism-Recommender",
  },
];

export default function Projects() {
  return (
    <section className="bg-[#0D1117] px-[5%] py-24" id="projects">
      <div className="mx-auto max-w-[1000px]">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-[2.5rem] font-bold text-foreground max-md:text-[2rem] max-sm:text-[1.8rem]">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-[520px] text-lg text-muted-foreground max-md:text-base">
            Real-world applications I've designed and built — from concept to
            deployment.
          </p>
        </div>

        {/* Project list */}
        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/15 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] max-md:p-6 max-sm:p-5"
            >
              {/* Accent line */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#12B3EB] to-[#5460F9] opacity-50 transition-opacity group-hover:opacity-100" />

              <div className="flex flex-col gap-5">
                {/* Title row */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="mb-1 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      Project {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-2xl font-bold text-white max-md:text-xl max-sm:text-lg">
                      {project.title}
                    </h3>
                  </div>

                  {/* Quick links */}
                  <div className="flex shrink-0 gap-2">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition-all hover:border-white/25 hover:bg-white/10 hover:text-white"
                        aria-label="Live demo"
                      >
                        <ExternalLink className="size-4" />
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition-all hover:border-white/25 hover:bg-white/10 hover:text-white"
                        aria-label="Source code"
                      >
                        <Github className="size-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Problem & Solution */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-[#12B3EB]/80">
                      Problem
                    </h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-[#5460F9]/90">
                      Solution
                    </h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Key features */}
                <ul className="flex flex-wrap gap-x-6 gap-y-1">
                  {project.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-1.5 text-sm text-white/70"
                    >
                      <ArrowUpRight className="size-3 text-[#12B3EB]" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="rounded-full border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
