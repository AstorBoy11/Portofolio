import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Threads from "@/components/Threads";

const techStack = ["React", "TypeScript", "Next.js", "Tailwind CSS"];

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-[5%] py-24"
      id="home"
    >
      {/* Threads animated background */}
      <div className="absolute inset-0 z-0">
        <Threads
          color={[0.32, 0.15, 1]}
          amplitude={1}
          distance={0}
          enableMouseInteraction
          style={{ pointerEvents: "auto" }}
        />
      </div>

      {/* Gradient glow orbs */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[#12B3EB]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[400px] w-[400px] rounded-full bg-[#5460F9]/10 blur-[120px]" />

      <div className="relative z-10 w-full max-w-[900px] text-center">
        {/* Status badge */}
        {/* <div className="mb-8 animate-[fadeInUp_0.8s_ease-out_0.2s_backwards]">
          <Badge className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400 backdrop-blur-sm">
            <span className="mr-2 inline-block size-2 animate-pulse rounded-full bg-emerald-400" />
            Available for opportunities
          </Badge>
        </div> */}

        {/* Name */}
        <h1 className="mb-4 animate-[fadeInUp_0.8s_ease-out_0.3s_backwards] text-[3.5rem] font-extrabold leading-[1.1] tracking-tight text-white lg:text-6xl max-md:text-[2.5rem] max-sm:text-[2rem]">
          Aril Ibbet Ardana Putra
        </h1>

        {/* Value proposition */}
        <p className="mx-auto mb-6 max-w-[640px] animate-[fadeInUp_0.8s_ease-out_0.4s_backwards] text-xl leading-relaxed text-white/80 max-md:text-lg max-sm:text-base">
          I build{" "}
          <span className="font-semibold text-white">
            fast, accessible &amp; scalable
          </span>{" "}
          web applications with{" "}
          <span className="inline-block bg-gradient-to-r from-[#12B3EB] to-[#5460F9] bg-clip-text font-semibold text-transparent">
            JavaScript &amp; TypeScript
          </span>
          .
        </p>

        {/* Tech badges */}
        {/* <div className="mb-10 flex flex-wrap justify-center gap-2 animate-[fadeInUp_0.8s_ease-out_0.5s_backwards]">
          {techStack.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="rounded-full border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/80 backdrop-blur-sm transition-colors hover:border-white/30 hover:bg-white/10"
            >
              {tech}
            </Badge>
          ))}
        </div> */}

        {/* CTA */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-[fadeInUp_0.8s_ease-out_0.6s_backwards] max-sm:flex-col max-sm:w-full">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-gradient-to-r from-[#12B3EB] to-[#5460F9] px-8 py-6 text-base font-semibold shadow-[0_4px_20px_rgba(84,96,249,0.4)] transition-all hover:-translate-y-[2px] hover:shadow-[0_8px_30px_rgba(84,96,249,0.5)]"
          >
            <a href="#projects">
              View Projects
              <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full border-white/20 bg-white/5 px-8 py-6 text-base font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-[2px] hover:border-white/40 hover:bg-white/10"
          >
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
