import { Building2, CalendarDays, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  skills: string[];
  logo: string;
  credentialUrl?: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Fundamental Junior Web Developer",
    issuer: "Kominfo & Digitalent - VSGA",
    date: "2025-08",
    skills: [
      "Front-End",
      "Algorithmic Logic",
      "Code Structuring",
      "Core Programming",
    ],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7FG5PKov0Sz4PWEvWYszQcE375pse_qJeuQ&s",
    credentialUrl:
      "https://drive.google.com/file/d/1eLydQwMsjfOoha0ayAvkQVnyKbuM4OhR/view?usp=sharing",
  },
  {
    id: 2,
    title: "Intermediate Junior Web Developer",
    issuer: "Kominfo & Digitalent - VSGA",
    date: "2025-09",
    skills: [
      "Coding Standards",
      "Structured Design",
      "Component Integration",
    ],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7FG5PKov0Sz4PWEvWYszQcE375pse_qJeuQ&s",
    credentialUrl:
      "https://drive.google.com/file/d/1B0lUYVnXtSLgfdjQe0xMEoT9ix7goMnL/view?usp=sharing",
  },
];

export default function Certification() {
  return (
    <section className="bg-[#0D1117] py-20" id="certification">
      <div className="mx-auto max-w-[1200px] px-5">
        <h2 className="mb-12 text-center text-[2.5rem] font-bold text-foreground max-md:text-[2rem] max-md:mb-8 max-sm:text-[1.75rem]">
          Certifications
        </h2>

        <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 max-md:grid-cols-1 max-md:gap-5 max-md:px-2.5">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group relative overflow-hidden rounded-2xl border border-[rgba(42,51,66,0.9)] bg-card p-8 transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] max-md:p-5 max-sm:p-4"
            >
              {/* Logo */}
              <div className="mb-5">
                <div className="flex size-20 items-center justify-center overflow-hidden rounded-xl border border-[rgba(42,51,66,0.8)] bg-[rgba(13,17,23,0.9)] shadow-[0_6px_16px_rgba(0,0,0,0.4)] max-md:size-[60px] max-sm:size-[50px]">
                  <img
                    src={cert.logo}
                    alt={cert.issuer}
                    className="size-full object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="mb-5 text-2xl font-semibold leading-snug text-white max-md:text-xl max-md:mb-4 max-sm:text-lg">
                {cert.title}
              </h3>

              {/* Info */}
              <div className="mb-5 flex flex-col gap-2.5 max-md:gap-2 max-md:mb-4">
                <div className="flex items-center gap-2 text-[0.95rem] text-white/80 max-md:text-[0.85rem] max-sm:text-[0.8rem]">
                  <Building2 className="size-4 opacity-70" />
                  {cert.issuer}
                </div>
                <div className="flex items-center gap-2 text-[0.95rem] text-white/80 max-md:text-[0.85rem] max-sm:text-[0.8rem]">
                  <CalendarDays className="size-4 opacity-70" />
                  Issued: {cert.date}
                </div>
              </div>

              {/* Skills */}
              <div className="mt-5 flex flex-wrap gap-2.5 max-md:gap-2 max-md:mt-4">
                {cert.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="rounded-full border-[rgba(102,126,234,0.35)] bg-[rgba(102,126,234,0.12)] px-4 py-2 text-[0.85rem] font-medium text-white transition-all hover:border-[rgba(102,126,234,0.6)] hover:bg-[rgba(102,126,234,0.25)] max-md:px-3 max-md:py-1.5 max-md:text-xs max-sm:px-2.5 max-sm:py-1 max-sm:text-[0.75rem]"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* Credential Button */}
              {cert.credentialUrl && (
                <Button
                  asChild
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 px-6 py-3 text-[0.95rem] font-semibold text-white shadow-[0_4px_12px_rgba(59,130,246,0.3)] transition-all hover:-translate-y-0.5 hover:from-blue-600 hover:to-blue-800 hover:shadow-[0_6px_16px_rgba(59,130,246,0.4)] max-md:w-full max-md:justify-center max-md:text-sm"
                >
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Credential
                    <ExternalLink className="size-4" />
                  </a>
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
