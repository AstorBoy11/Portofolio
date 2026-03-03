export default function About() {
  return (
    <section className="bg-[#0D1117] px-[5%] py-24" id="about">
      <div className="mx-auto max-w-[1000px]">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-[2.5rem] font-bold text-foreground max-md:text-[2rem] max-sm:text-[1.8rem]">
            About Me
          </h2>
        </div>

        <div className="mx-auto max-w-[720px] space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground max-md:text-base">
            I'm a <span className="font-medium text-white">Frontend Developer</span> specializing
            in the React ecosystem — React, Next.js, TypeScript, and Tailwind CSS.
            Currently working as a{" "}
            <span className="font-medium text-white">Frontend JS Intern</span> at
            Utero Kreatif Indonesia, building production marketplace websites.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground max-md:text-base">
            I care deeply about <span className="font-medium text-white">clean architecture</span>,{" "}
            <span className="font-medium text-white">accessible interfaces</span>, and
            writing code that scales. I believe great frontend engineering is
            invisible — users just feel that things <em>work</em>.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground max-md:text-base">
            When I'm not coding, I explore new web technologies, contribute to
            open-source projects, and refine my craft through side projects.
          </p>
        </div>
      </div>
    </section>
  );
}
