import { MapPinHouse, Mail, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/AstorBoy11",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aril-ibbet-ardana-putra-250484284/",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/aril_2.4/",
    icon: Instagram,
  },
];

export default function Contact() {
  return (
    <section className="bg-[#0D1117] px-[5%] py-24" id="contact">
      <div className="mx-auto max-w-[640px] text-center">
        {/* Header */}
        <h2 className="mb-4 text-[2.5rem] font-bold text-foreground max-md:text-[2rem] max-sm:text-[1.8rem]">
          Let's Work Together
        </h2>
        <p className="mx-auto mb-10 max-w-[480px] text-lg leading-relaxed text-muted-foreground max-md:text-base">
          I'm open to freelance projects, full-time roles, and interesting
          collaborations. Let's talk.
        </p>

        {/* Contact info */}
        <div className="mb-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
          <a
            href="mailto:arilardana111@gmail.com"
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-white"
          >
            <Mail className="size-4 text-[#12B3EB]" />
            <span className="text-sm">arilardana111@gmail.com</span>
          </a>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPinHouse className="size-4 text-[#12B3EB]" />
            <span className="text-sm">Indonesia</span>
          </div>
        </div>

        {/* Social icons */}
        <div className="mb-10 flex justify-center gap-3">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all hover:-translate-y-1 hover:border-white/25 hover:bg-white/10 hover:text-white"
              >
                <Icon className="size-[18px]" />
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <Button
          asChild
          size="lg"
          className="rounded-full bg-gradient-to-r from-[#12B3EB] to-[#5460F9] px-10 py-6 text-base font-semibold shadow-[0_4px_20px_rgba(84,96,249,0.35)] transition-all hover:-translate-y-[2px] hover:shadow-[0_8px_30px_rgba(84,96,249,0.5)]"
        >
          <a href="mailto:arilardana111@gmail.com">Send me an email</a>
        </Button>
      </div>
    </section>
  );
}
