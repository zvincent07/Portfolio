import {
  ExternalLinkIcon,
  SmartphoneIcon,
  LayoutDashboardIcon,
} from "./Icons";

export function ProjectsSection() {
  return (
    <div className="space-y-8">
      <div className="group bg-zinc-900/20 border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-all overflow-hidden">
        <div className="grid md:grid-cols-12 gap-0">
          <div className="md:col-span-5 p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-zinc-800/50 bg-zinc-900/20">
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                InvenTrack
              </h3>
              <p className="text-zinc-500 text-sm mb-4">
                GSO Inventory Management System
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "PostgreSQL",
                  "Express.js",
                  "React.js",
                  "Node.js",
                  "Tailwind CSS",
                  "RBAC",
                  "Analytics",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium px-2 py-1 rounded bg-zinc-800 text-zinc-400 border border-zinc-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://inventrackgso.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black text-xs font-bold hover:bg-zinc-200 transition-colors"
              >
                View Live <ExternalLinkIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-7 p-6 flex flex-col justify-center">
            <div className="space-y-4 text-sm leading-relaxed">
              <div>
                <span className="text-red-400 font-bold uppercase tracking-wider text-xs">
                  The Challenge:
                </span>
                <p className="text-zinc-400 mt-1">
                  The GSO faced difficulties with{" "}
                  <span className="text-zinc-200">
                    manual inventory monitoring
                  </span>
                  , leading to data redundancy, inaccurate stock records, and
                  time-consuming report generation during audits.
                </p>
              </div>
              <div>
                <span className="text-emerald-400 font-bold uppercase tracking-wider text-xs">
                  The Fix:
                </span>
                <p className="text-zinc-400 mt-1">
                  A centralized <strong>Web-Based Inventory System</strong>{" "}
                  that digitizes the entire asset lifecycle. Features{" "}
                  <span className="text-zinc-200">
                    real-time stock level monitoring
                  </span>
                  , instant item search/filtering, and{" "}
                  <strong>automated report generation</strong> for seamless
                  auditing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="group bg-zinc-900/20 border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-all overflow-hidden">
        <div className="grid md:grid-cols-12 gap-0">
          <div className="md:col-span-5 p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-zinc-800/50 bg-zinc-900/20">
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                QRoom
              </h3>
              <p className="text-zinc-500 text-sm mb-4">
                Campus Room Management
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "MySQL",
                  "Express.js",
                  "React.js",
                  "Node.js",
                  "Bootstrap",
                  "RBAC",
                  "Real-time API",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium px-2 py-1 rounded bg-zinc-800 text-zinc-400 border border-zinc-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://qroom-omega.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black text-xs font-bold hover:bg-zinc-200 transition-colors"
              >
                View Live <ExternalLinkIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-7 p-6 flex flex-col justify-center">
            <div className="space-y-4 text-sm leading-relaxed">
              <div>
                <span className="text-red-400 font-bold uppercase tracking-wider text-xs">
                  The Challenge:
                </span>
                <p className="text-zinc-400 mt-1">
                  Campuses struggle with{" "}
                  <span className="text-zinc-200">
                    lack of visibility on room availability
                  </span>
                  , making it hard to schedule classes or track room
                  conditions.
                </p>
              </div>
              <div>
                <span className="text-emerald-400 font-bold uppercase tracking-wider text-xs">
                  The Fix:
                </span>
                <p className="text-zinc-400 mt-1">
                  A centralized dashboard with <strong>QR scanning</strong>{" "}
                  for instant room status. Features a{" "}
                  <span className="text-zinc-200">
                    utilization analytics board
                  </span>{" "}
                  and condition reporting module.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a
          href="https://github.com/xKobeni/SoundSprint"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-5 rounded-xl border border-zinc-800/50 hover:bg-zinc-900/40 hover:border-zinc-700 transition-all group"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800">
                <SmartphoneIcon className="w-4.5 h-4.5 text-blue-400" />
              </div>
              <h4 className="font-bold text-zinc-300 group-hover:text-white">
                SoundSprint
              </h4>
            </div>
            <ExternalLinkIcon className="w-3.5 h-3.5 text-zinc-600 group-hover:text-white" />
          </div>
          <p className="text-xs text-zinc-500 leading-relaxed mb-3 line-clamp-2">
            Flutter mobile app. Contributed to UI state management and
            cross-platform responsive layouts.
          </p>
          <div className="flex gap-2">
            {["Flutter", "Dart", "Mobile"].map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-wider text-zinc-600 font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </a>

        <a
          href="https://github.com/zvincent07/Login-Admin-Dashboard-Themeplate"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-5 rounded-xl border border-zinc-800/50 hover:bg-zinc-900/40 hover:border-zinc-700 transition-all group"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800">
                <LayoutDashboardIcon className="w-4.5 h-4.5 text-purple-400" />
              </div>
              <h4 className="font-bold text-zinc-300 group-hover:text-white">
                RBAC Admin Dashboard
              </h4>
            </div>
            <ExternalLinkIcon className="w-3.5 h-3.5 text-zinc-600 group-hover:text-white" />
          </div>
          <p className="text-xs text-zinc-500 leading-relaxed mb-3 line-clamp-2">
            Open-source MERN boilerplate with secure Role-Based Access Control
            and JWT authentication.
          </p>
          <div className="flex gap-2">
            {["MERN", "Security", "Open Source"].map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-wider text-zinc-600 font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </a>
      </div>
    </div>
  );
}
