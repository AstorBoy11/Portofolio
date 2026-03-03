import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Layers,
  Paintbrush,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
  accent: string; // gradient border color
}

const categories: SkillCategory[] = [
  {
    title: "Frontend Core",
    icon: Code2,
    skills: ["React", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
    accent: "from-[#61DAFB] to-[#3178C6]",
  },
  {
    title: "Frameworks",
    icon: Layers,
    skills: ["Next.js", "Laravel", "Inertia.js"],
    accent: "from-[#000000] to-[#808080]",
  },
  {
    title: "Styling & UI",
    icon: Paintbrush,
    skills: ["Tailwind CSS", "Responsive Design", "CSS Modules"],
    accent: "from-[#38BDF8] to-[#818CF8]",
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    skills: ["Git / GitHub", "VS Code",],
    accent: "from-[#F97316] to-[#EAB308]",
  },
];

export default function Skills() {
  return (
    <section className="bg-[#0D1117] px-[5%] py-24" id="skills">
      <div className="mx-auto max-w-[1000px]">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-[2.5rem] font-bold text-foreground max-md:text-[2rem] max-sm:text-[1.8rem]">
            Tech Stack
          </h2>
          <p className="mx-auto max-w-[520px] text-lg text-muted-foreground max-md:text-base">
            Technologies and tools I use to build modern, performant web
            experiences.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]"
              >
                {/* Top accent line */}
                <div
                  className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${cat.accent} opacity-60 transition-opacity group-hover:opacity-100`}
                />

                {/* Category header */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-white/5">
                    <Icon className="size-[18px] text-white/70" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {cat.title}
                  </h3>
                </div>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="rounded-full border-white/10 bg-white/5 px-3.5 py-1.5 text-[0.82rem] font-medium text-white/80 transition-all hover:border-white/25 hover:bg-white/10 hover:text-white"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
