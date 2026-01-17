import { BriefcaseIcon } from "./Icons";

export function ExperienceSection() {
  return (
    <div className="relative space-y-0">
      <div className="absolute left-3 top-0 bottom-0 w-0.5">
        <div
          className="absolute top-0 w-full"
          style={{
            height: "calc(100% - 100px)",
            background:
              "linear-gradient(to bottom, rgba(59, 130, 246, 0.6) 0%, rgba(59, 130, 246, 0.3) 50%, rgba(59, 130, 246, 0.1) 100%)",
          }}
        />

        <div
          className="absolute bottom-0 w-full border-l border-dashed border-blue-500/20"
          style={{
            height: "100px",
          }}
        />
      </div>

      <div className="relative pl-8 group experience-glow">
        <div className="absolute -left-[20px] top-0 z-10">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping-slow" />
            <div className="relative p-2 bg-zinc-950 border border-blue-500/50 rounded-full group-hover:border-blue-500 transition-colors">
              <BriefcaseIcon className="text-blue-400 w-4.5 h-4.5" />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
          <h3 className="text-lg font-bold text-white">
            Freelance Technical Consultant
          </h3>
          <span className="font-mono text-xs font-medium px-2 py-1 rounded border border-blue-500/20 bg-blue-500/10 text-blue-400 w-fit mt-1 sm:mt-0">
            2022 - Present
          </span>
        </div>

        <p className="text-zinc-500 text-sm mb-4">
          Self-Employed • Various Clients
        </p>

        <p className="text-zinc-400 leading-relaxed mb-6 text-sm">
          Providing on-demand technical solutions for students and small
          businesses. I handle diverse tasks requiring quick adaptation to
          different tools and technologies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="px-3 py-2 rounded-lg bg-blue-500/5 border border-blue-500/10 hover:bg-blue-500/10 hover:border-blue-500/20 transition-all">
            <h4 className="font-mono text-xs font-semibold text-blue-300 mb-1">
              Technical Research & Docs
            </h4>
            <p className="text-xs text-zinc-400 leading-snug">
              Assisting with academic papers, system documentation, and
              requirements analysis.
            </p>
          </div>

          <div className="px-3 py-2 rounded-lg bg-blue-500/5 border border-blue-500/10 hover:bg-blue-500/10 hover:border-blue-500/20 transition-all">
            <h4 className="font-mono text-xs font-semibold text-blue-300 mb-1">
              Network Engineering
            </h4>
            <p className="text-xs text-zinc-400 leading-snug">
              Configuring topologies and simulations in Cisco Packet Tracer.
            </p>
          </div>

          <div className="px-3 py-2 rounded-lg bg-blue-500/5 border border-blue-500/10 hover:bg-blue-500/10 hover:border-blue-500/20 transition-all">
            <h4 className="font-mono text-xs font-semibold text-blue-300 mb-1">
              Scripting & Automation
            </h4>
            <p className="text-xs text-zinc-400 leading-snug">
              Data processing tasks using Python and Google Colab.
            </p>
          </div>

          <div className="px-3 py-2 rounded-lg bg-blue-500/5 border border-blue-500/10 hover:bg-blue-500/10 hover:border-blue-500/20 transition-all">
            <h4 className="font-mono text-xs font-semibold text-blue-300 mb-1">
              UI/UX Design
            </h4>
            <p className="text-xs text-zinc-400 leading-snug">
              Creating prototypes and wireframes in Figma.
            </p>
          </div>
        </div>
      </div>

      <div className="relative pl-8 group py-4" style={{ opacity: 0.65 }}>
        <div className="absolute -left-[20px] top-[1.5rem] z-10">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-3 h-3 rounded-full bg-emerald-500/40 animate-ping-slow" />
            <div className="relative w-2 h-2 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50" />
          </div>
        </div>

        <h3 className="text-lg font-bold text-zinc-400 leading-tight">
          Open to Work
        </h3>
        <p className="text-zinc-500 text-sm mt-1">
          Ready for full-time opportunities or internships.
        </p>
      </div>
    </div>
  );
}
