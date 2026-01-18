import Typewriter from "typewriter-effect";
import {
  ArrowRightIcon,
  DownloadIcon,
  ReactIcon,
  TypeScriptIcon,
  NodeIcon,
  MongoIcon,
  TailwindIcon,
  FigmaIcon,
  ZapIcon,
  PenToolIcon,
  PostgresIcon,
  MySQLIcon,
  PythonIcon,
  GitIcon,
} from "./Icons";

export function AboutSection() {
  const handleViewMyWork = () => {
    const element = document.getElementById("section-projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 lg:gap-8 mb-8 pb-8 border-b border-gray-800/50">
        <div className="relative flex-shrink-0">
          <div
            className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full p-[4px]"
            style={{
              background:
                "conic-gradient(from 0deg, #ef4444 0deg 72deg, #f97316 72deg 144deg, #eab308 144deg 216deg, #22c55e 216deg 288deg, #3b82f6 288deg 360deg)",
            }}
          >
            <div className="w-full h-full rounded-full bg-[#1a1a1a] p-[3px]">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 flex items-center justify-center overflow-hidden ring-2 ring-gray-700/50">
                <img
                  src="/images/profile/avatar.png"
                  alt="John Vincent"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center sm:items-start text-center sm:text-left w-full sm:w-auto">
          <div className="font-mono w-full">
            <div className="text-2xl sm:text-3xl lg:text-4xl text-white min-h-[2.5rem] sm:min-h-[3rem] lg:min-h-[3.5rem] flex items-center justify-center sm:justify-start">
              <Typewriter
                options={{
                  strings: ["Hello, I'm John Vincent."],
                  autoStart: true,
                  loop: true,
                  cursor: "|",
                }}
              />
            </div>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-zinc-200 font-medium mt-2 sm:mt-4">
            Developer & Business Analyst
          </p>
        </div>
      </div>

      <p className="text-gray-300 leading-relaxed max-w-4xl">
        I am a Developer & Business Analyst who bridges the gap between technical
        complexity and business goals. I build scalable full-stack applications
        (MERN/PERN) with a focus on data integrity and seamless user experiences.
      </p>

      <div className="flex flex-wrap gap-3 mt-6">
        <button
          type="button"
          onClick={handleViewMyWork}
          className="flex items-center gap-2 px-4 py-2 text-sm bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 group"
        >
          View My Work
          <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
        <button className="flex items-center gap-2 px-4 py-2 text-sm bg-gray-800/50 text-white border border-gray-700 rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 group">
          <DownloadIcon className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          Download CV
        </button>
      </div>

      <div className="space-y-6 mt-8">
        <div className="space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
            Frontend & Design
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              {
                name: "React",
                color: "bg-blue-500/20 text-blue-300 border-blue-500/40",
                icon: <ReactIcon />,
              },
              {
                name: "TypeScript",
                color: "bg-blue-600/20 text-blue-200 border-blue-600/40",
                icon: <TypeScriptIcon />,
              },
              {
                name: "Tailwind CSS",
                color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
                icon: <TailwindIcon />,
              },
              {
                name: "Figma",
                color: "bg-purple-500/20 text-purple-300 border-purple-500/40",
                icon: <FigmaIcon />,
              },
            ].map((skill) => (
              <span
                key={skill.name}
                className={`px-3 py-1.5 ${skill.color} border rounded-lg text-xs font-medium flex items-center gap-1.5`}
              >
                {skill.icon}
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
            Backend & Data
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              {
                name: "Node.js",
                color: "bg-green-500/20 text-green-300 border-green-500/40",
                icon: <NodeIcon />,
              },
              {
                name: "MongoDB",
                color: "bg-green-600/20 text-green-200 border-green-600/40",
                icon: <MongoIcon />,
              },
              {
                name: "PostgreSQL",
                color: "bg-blue-700/20 text-blue-300 border-blue-700/40",
                icon: <PostgresIcon />,
              },
              {
                name: "MySQL",
                color: "bg-orange-600/20 text-orange-300 border-orange-600/40",
                icon: <MySQLIcon />,
              },
              {
                name: "Python",
                color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/40",
                icon: <PythonIcon />,
              },
              {
                name: "Git",
                color: "bg-gray-600/20 text-gray-300 border-gray-600/40",
                icon: <GitIcon />,
              },
            ].map((skill) => (
              <span
                key={skill.name}
                className={`px-3 py-1.5 ${skill.color} border rounded-lg text-xs font-medium flex items-center gap-1.5`}
              >
                {skill.icon}
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-zinc-800/50 flex items-center gap-4 text-sm">
        <span className="text-xs font-bold text-zinc-600 uppercase tracking-widest">
          Current Focus
        </span>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-zinc-400 px-2 py-1 rounded-md bg-zinc-900/50 border border-zinc-800/50">
            <ZapIcon className="w-3.5 h-3.5 text-yellow-500" />
            <span>Next.js Patterns</span>
          </div>

          <div className="flex items-center gap-2 text-zinc-400 px-2 py-1 rounded-md bg-zinc-900/50 border border-zinc-800/50">
            <PenToolIcon className="w-3.5 h-3.5 text-purple-500" />
            <span>Design Systems</span>
          </div>
        </div>
      </div>
    </div>
  );
}
