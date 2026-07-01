import { Building2, CalendarDays } from "lucide-react";

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  logo: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "Frontend JS Intern",
    company: "PT Utero Kreatif Indonesia",
    period: "January 2026 - June 2026",
    description:
    "",
      // "Build Dashboard Mamagement website using Next.js, Tailwind CSS, and TypeScript.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr9kLuAfN1PXDXPF3FB8800Avl0PZkxnut1g&s",
  },
  {
    id: 2,
    title: "Digital Transformation Intern",
    company: "PT PAL Indonesia",
    period: "July 2026 - December 2026",
    description:
      "",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt5EIt8oVWVXGFXtt1VrOMqMi9_hlpCNfvvQWBk1evvQ&s=10",
  },
];

export default function Experience() {
  return (
    <section className="bg-[#0D1117] py-20" id="experience">
      <div className="mx-auto max-w-[1200px] px-5">
        <h2 className="mb-12 text-center text-[2.5rem] font-bold text-foreground max-md:text-[2rem] max-sm:text-[1.75rem]">
          Work Experience
        </h2>

        <div
          className={`grid gap-8 mx-auto ${
            experiences.length === 1
              ? "grid-cols-1 max-w-[400px]"
              : experiences.length === 2
                ? "grid-cols-1 md:grid-cols-2 max-w-[800px]"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group relative flex flex-col h-full overflow-hidden rounded-2xl border border-[rgba(42,51,66,0.9)] bg-gradient-to-br from-[#1b2330] to-[#20293a] p-8 transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] max-md:p-6 max-sm:p-5"
            >
              {/* Top gradient bar */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#12B3EB] to-[#5460F9]" />

              {/* Logo */}
              <div className="mb-5">
                <div className="flex size-20 items-center justify-center overflow-hidden rounded-xl border border-[rgba(42,51,66,0.8)] bg-[rgba(13,17,23,0.9)] shadow-[0_6px_16px_rgba(0,0,0,0.4)] max-md:size-[60px]">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="size-full object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="mb-5 text-2xl font-semibold leading-snug text-white max-md:text-xl max-sm:text-lg">
                {exp.title}
              </h3>

              {/* Info */}
              <div className="mb-5 flex flex-col gap-2.5">
                <div className="flex items-center gap-2 text-[0.95rem] text-white/90 max-sm:text-sm">
                  <Building2 className="size-4 opacity-70" />
                  {exp.company}
                </div>
                <div className="flex items-center gap-2 text-[0.95rem] text-white/90 max-sm:text-sm">
                  <CalendarDays className="size-4 opacity-70" />
                  {exp.period}
                </div>
              </div>

              {/* Description */}
              <p className="mb-5 text-base leading-relaxed text-white/85 max-sm:text-sm">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
