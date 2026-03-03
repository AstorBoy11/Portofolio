import { Blocks, Gauge, Accessibility, GitBranch } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Principle {
  icon: LucideIcon;
  title: string;
  description: string;
}

const principles: Principle[] = [
  {
    icon: Blocks,
    title: "Component-Driven Development",
    description:
      "I build UIs from small, reusable components — composable by design, easy to test, and maintainable at scale. Every piece has a single responsibility.",
  },
  {
    icon: Gauge,
    title: "Performance First",
    description:
      "Fast load times and smooth interactions aren't optional. I leverage code splitting, lazy loading, and efficient rendering to keep apps snappy.",
  },
  {
    icon: Accessibility,
    title: "Accessible by Default",
    description:
      "Semantic HTML, keyboard navigation, and ARIA patterns are part of my workflow — not an afterthought. The web should work for everyone.",
  },
  {
    icon: GitBranch,
    title: "Clean Code & Conventions",
    description:
      "Consistent naming, typed interfaces, and clear file structure make codebases a joy to work with. I write code that future-me (and teammates) can read.",
  },
];

export default function Philosophy() {
  return (
    <section className="bg-[#0D1117] px-[5%] py-24" id="philosophy">
      <div className="mx-auto max-w-[1000px]">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-[2.5rem] font-bold text-foreground max-md:text-[2rem] max-sm:text-[1.8rem]">
            How I Build
          </h2>
          <p className="mx-auto max-w-[520px] text-lg text-muted-foreground max-md:text-base">
            Principles that guide every line of code I write.
          </p>
        </div>

        {/* Principles grid */}
        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]"
              >
                {/* Icon */}
                <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#12B3EB]/15 to-[#5460F9]/15">
                  <Icon className="size-5 text-[#12B3EB]" />
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
