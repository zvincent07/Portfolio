import { BookOpenIcon } from "./Icons";

export function EducationSection() {
  return (
    <div className="space-y-8">
      <div className="relative border-l border-zinc-800 ml-3 space-y-12">
        <div className="relative pl-8 group">
          <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-zinc-900 group-hover:ring-blue-500/20 transition-all"></div>

          <h3 className="text-xl font-bold text-white">
            Bachelor of Science in Information Technology
          </h3>
          <p className="text-blue-400 font-medium mt-1">
            Major in Business Analytics
          </p>
          <p className="text-zinc-500 text-sm mt-1">
            Batangas State University
          </p>

          <p className="text-zinc-400 mt-4 leading-relaxed max-w-2xl">
            Specialized in data-driven decision making and software
            engineering. Bridged the gap between raw data and actionable
            business insights through full-stack development.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Enterprise Data Management",
              "Analytics Modeling",
              "Systems Analysis & Design",
              "Technopreneurship",
            ].map((course) => (
              <div
                key={course}
                className="flex items-center gap-1.5 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-xs text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors cursor-default"
              >
                <BookOpenIcon className="w-3 h-3 text-blue-500/50" />
                {course}
              </div>
            ))}
          </div>
        </div>

        <div className="relative pl-8 group">
          <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-purple-500 ring-4 ring-zinc-900 group-hover:ring-purple-500/20 transition-all"></div>

          <h3 className="text-xl font-bold text-white">
            Senior High School Diploma
          </h3>
          <p className="text-purple-400 font-medium mt-1">
            Science, Technology, Engineering & Mathematics (STEM)
          </p>
          <p className="text-zinc-500 text-sm mt-1">The Mabini Academy</p>

          <p className="text-zinc-400 mt-4 leading-relaxed max-w-2xl">
            Built a strong foundation in logic, calculus, and scientific
            research methods, preparing for intensive technical coursework in
            university.
          </p>
        </div>
      </div>
    </div>
  );
}

