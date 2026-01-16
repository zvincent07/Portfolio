import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';

// Icon components for CTAs
const ArrowRightIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const DownloadIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

// Tech Icons
const ReactIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
    <path stroke="currentColor" strokeWidth="1" fill="none" d="M12 10a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2zm-8 0a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2zm16 0a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2z"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="currentColor" strokeWidth="1" fill="none"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(120 12 12)"/>
  </svg>
);

const TypeScriptIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <rect x="2" y="2" width="20" height="20" rx="2" fill="#3178C6"/>
    <path d="M13.5 11.5v-1h-3v1h1v5h-1v1h3v-1h-1v-5zm4-1h-1v7h1v-7zm-7-1h-1v1h.5v6h-1v1h2v-1h-.5v-6h.5v-1z" fill="white"/>
  </svg>
);

const NodeIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.236,0.228-0.236h1.049c0.124,0,0.228,0.094,0.228,0.236v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.648-0.375-1.281-1.296-1.281-2.202V6.921 c0-0.903,0.633-1.831,1.281-2.216l8.795-5.082c0.649-0.375,1.703-0.375,2.35,0l8.794,5.082c0.648,0.38,1.282,1.313,1.282,2.216 v9.554c0,0.894-0.634,1.829-1.282,2.218l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z" fill="#339933"/>
    <path d="M8.625,15.933c0-0.036,0.017-0.123,0.033-0.18c0.163-0.551,0.549-1.003,1.111-1.301 c0.562-0.297,1.119-0.446,1.67-0.446c0.55,0,0.787,0.111,1.003,0.223c0.216,0.111,0.36,0.26,0.36,0.445c0,0.416-0.324,0.703-0.972,0.859 c-0.649,0.156-1.536,0.341-2.663,0.556c-0.562,0.108-1.003,0.26-1.323,0.456c-0.32,0.196-0.48,0.445-0.48,0.747 c0,0.551,0.433,0.972,1.3,1.263c0.866,0.29,1.893,0.436,3.08,0.436c1.188,0,2.188-0.145,3-0.436c0.813-0.29,1.219-0.703,1.219-1.239 c0-0.26-0.108-0.48-0.324-0.66c-0.216-0.18-0.52-0.324-0.912-0.432c-0.393-0.108-0.912-0.216-1.56-0.324 c-0.649-0.108-1.188-0.216-1.62-0.324c-0.433-0.108-0.747-0.26-0.943-0.456C8.717,16.189,8.625,16.069,8.625,15.933z" fill="white"/>
  </svg>
);

const MongoIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.533 3.682-4.533 10.02 0 7.029 5.597 11.32 6.512 11.835.913.52 1.652.302 1.983-.43.52-1.17 2.388-6.51 2.388-6.51.364-1.25.179-1.733-.898-1.733-.52 0-.792.07-1.112.18-.064-.495-.104-1.06-.135-1.53-.011-.204-.02-.38-.02-.52 0-.282.024-.42.024-.42s.688.27 1.975.405c.52.054 1.2.06 1.897.06.697 0 1.377-.006 1.897-.06 1.287-.135 1.975-.405 1.975-.405s.024.138.024.42c0 .14-.009.316-.02.52-.031.47-.071 1.035-.135 1.53-.32-.11-.592-.18-1.112-.18-1.077 0-1.262.483-.898 1.733 0 0 1.868 5.34 2.388 6.51.331.732 1.07.95 1.983.43.915-.515 6.512-4.806 6.512-11.835 0-6.338-3.81-9.454-4.533-10.02-.468-.499-.487-.689-.523-1.184-.205.486-.455 1.046-.735 1.44-.321.701-3.31 2.535-4.573 8.115z" fill="#47A248"/>
  </svg>
);

const TailwindIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1.01 2.12 2.19 4.59 2.19 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.47 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1.01 2.12 2.19 4.59 2.19 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.47 12 7 12z" fill="#06B6D4"/>
  </svg>
);

const FigmaIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.48 2.005 4.48 4.49s-2.004 4.491-4.48 4.491zM12.264 7.51h3.588c1.665 0 3.013-1.349 3.013-3.01s-1.349-3.01-3.013-3.01h-3.588V7.51zm0 1.471H8.352c-2.476 0-4.48-2.005-4.48-4.49S5.876 0 8.352 0h3.912v8.981zm-3.912-7.51c-1.665 0-3.013 1.349-3.013 3.01s1.349 3.01 3.013 3.01h3.912V1.471H8.352zm3.912 15.019H8.352c-2.476 0-4.48-2.005-4.48-4.49s2.004-4.491 4.48-4.491h3.912v8.981zM8.352 8.981c-1.665 0-3.013 1.349-3.013 3.01s1.349 3.01 3.013 3.01h3.912V8.981H8.352zm4.588 7.509H8.352c-2.476 0-4.48-2.005-4.48-4.49s2.004-4.491 4.48-4.491h4.588c2.476 0 4.48 2.005 4.48 4.491s-2.004 4.49-4.48 4.49zm0-8.981H8.352c-1.665 0-3.013 1.349-3.013 3.01s1.349 3.01 3.013 3.01h4.588c1.665 0 3.013-1.349 3.013-3.01s-1.349-3.01-3.013-3.01z" fill="#F24E1E"/>
  </svg>
);

const ZapIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const PenToolIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
);

// Database & Backend Icons
const DatabaseIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
);

const PythonIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.5 2.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5S12.2 1 13 1s1.5.7 1.5 1.5zm-1.5 1.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm-1.5 1.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm-1.5 1.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm-1.5 1.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm-1.5 1.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm-1.5 1.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm-1.5 1.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm-1.5 1.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm-1.5 1.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm-1.5 1.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm-1.5 1.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5z"/>
  </svg>
);

const GitIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.546 10.93L13.067 0.45c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.44.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.083 1.903.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-2.007l-2.497-2.49c-.05.02-.1.041-.15.062l-4.803 4.795c-.645.223-1.39.083-1.906-.435-.72-.72-.72-1.884 0-2.604.719-.719 1.881-.719 2.6 0 .539.539.673 1.334.402 2.004l2.507 2.498c.05-.019.098-.039.146-.057l3.407 3.4c-.215.644-.07 1.398.44 1.889.515.516 1.258.658 1.903.438l2.658 2.66c.223.646.082 1.388-.435 1.903-.72.721-1.884.721-2.604 0-.72-.72-.72-1.884 0-2.604.512-.513 1.233-.658 1.937-.405l-2.658-2.66c-.645.223-1.387.082-1.902-.435-.72-.72-.72-1.884 0-2.604.719-.719 1.881-.719 2.6 0 .539.541.673 1.337.403 2.006l2.658 2.66c.05-.02.098-.04.146-.057l1.407-1.402-4.803-4.795c-.05.02-.1.04-.15.062L9.19 8.45c-.215.645-.07 1.398.44 1.89.516.515 1.258.657 1.903.437l2.658 2.658c.223.644.082 1.388-.435 1.902-.72.722-1.884.722-2.604 0-.72-.72-.72-1.884 0-2.604.512-.514 1.234-.658 1.937-.405l-2.658-2.658c-.645.22-1.387.08-1.902-.435-.72-.72-.72-1.884 0-2.604.719-.72 1.881-.72 2.6 0 .539.539.673 1.335.403 2.004L8.708 7.55l-2.76-2.76L.45 10.93c-.603.604-.603 1.582 0 2.186l10.479 10.478c.604.604 1.582.604 2.186 0l10.431-10.429c.605-.603.605-1.582 0-2.186z"/>
  </svg>
);

interface ContentAreaProps {
  activeItem: string;
  onSectionChange: (section: string) => void;
}

const sections = [
  'About Me',
  'Education',
  'Projects',
  'Experience',
  'Tools',
  'Micro Credentials',
  'Events',
  'Contact Me'
];

export function ContentArea({ activeItem, onSectionChange }: ContentAreaProps) {
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const isScrollingRef = useRef(false);
  const lastActiveRef = useRef(activeItem);

  // Set up Intersection Observer to detect which section is in view
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    let timeoutId: ReturnType<typeof setTimeout>;

    sections.forEach((section) => {
      const element = sectionRefs.current[section];
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          if (isScrollingRef.current) return;
          
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              // Debounce to avoid rapid updates during scrolling
              clearTimeout(timeoutId);
              timeoutId = setTimeout(() => {
                onSectionChange(section);
              }, 100);
            }
          });
        },
        {
          threshold: [0.5, 0.75],
          rootMargin: '-20% 0px -20% 0px'
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      clearTimeout(timeoutId);
      observers.forEach((observer) => observer.disconnect());
    };
  }, [onSectionChange]);

  // Scroll to section when navigation item is clicked or changed
  useEffect(() => {
    if (lastActiveRef.current === activeItem) return;
    lastActiveRef.current = activeItem;

    const element = sectionRefs.current[activeItem];
    if (element) {
      isScrollingRef.current = true;
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
    }
  }, [activeItem]);

  const content: Record<string, React.ReactElement> = {
    'About Me': (
      <div className="space-y-8">
        {/* Hero Section - Stacked on Mobile, Side-by-side on Desktop */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 lg:gap-8 mb-8 pb-8 border-b border-gray-800/50">
          {/* Circular Profile Picture with Solid Color Segments Border */}
          <div className="relative flex-shrink-0">
            <div 
              className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full p-[4px]"
              style={{
                background: 'conic-gradient(from 0deg, #ef4444 0deg 72deg, #f97316 72deg 144deg, #eab308 144deg 216deg, #22c55e 216deg 288deg, #3b82f6 288deg 360deg)'
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
          
          {/* Name and Title - Centered on Mobile, Left Aligned on Desktop */}
          <div className="flex flex-col justify-center items-center sm:items-start text-center sm:text-left w-full sm:w-auto">
            <div className="font-mono w-full">
              <div className="text-2xl sm:text-3xl lg:text-4xl text-white min-h-[2.5rem] sm:min-h-[3rem] lg:min-h-[3.5rem] flex items-center justify-center sm:justify-start">
                <Typewriter
                  options={{
                    strings: ['Hello, I\'m John Vincent.'],
                    autoStart: true,
                    loop: true,
                    cursor: "|",
                  }}
                />
              </div>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-zinc-200 font-medium mt-2 sm:mt-4">Developer & Business Analyst</p>
          </div>
        </div>

        <p className="text-gray-300 leading-relaxed max-w-4xl">
          I am a Developer & Business Analyst who bridges the gap between technical complexity and business goals. 
          I build scalable full-stack applications (MERN/PERN) with a focus on data integrity and seamless user experiences.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap gap-3 mt-6">
          <button className="flex items-center gap-2 px-4 py-2 text-sm bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 group">
            View My Work
            <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm bg-gray-800/50 text-white border border-gray-700 rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 group">
            <DownloadIcon className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            Download CV
          </button>
        </div>

        {/* Skills Section - Reorganized */}
        <div className="space-y-6 mt-8">
          
          {/* Frontend & Design */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">Frontend & Design</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { name: 'React', color: 'bg-blue-500/20 text-blue-300 border-blue-500/40', icon: <ReactIcon /> },
                { name: 'TypeScript', color: 'bg-blue-600/20 text-blue-200 border-blue-600/40', icon: <TypeScriptIcon /> },
                { name: 'Tailwind CSS', color: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40', icon: <TailwindIcon /> },
                { name: 'Figma', color: 'bg-purple-500/20 text-purple-300 border-purple-500/40', icon: <FigmaIcon /> },
              ].map((skill) => (
                <span key={skill.name} className={`px-3 py-1.5 ${skill.color} border rounded-lg text-xs font-medium flex items-center gap-1.5`}>
                  {skill.icon}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Backend & Data */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">Backend & Data</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { name: 'Node.js', color: 'bg-green-500/20 text-green-300 border-green-500/40', icon: <NodeIcon /> },
                { name: 'MongoDB', color: 'bg-green-600/20 text-green-200 border-green-600/40', icon: <MongoIcon /> },
                { name: 'PostgreSQL', color: 'bg-blue-500/20 text-blue-300 border-blue-500/40', icon: <DatabaseIcon /> },
                { name: 'MySQL', color: 'bg-orange-500/20 text-orange-300 border-orange-500/40', icon: <DatabaseIcon /> },
                { name: 'Python', color: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40', icon: <PythonIcon /> },
                { name: 'Git', color: 'bg-gray-500/20 text-gray-300 border-gray-500/40', icon: <GitIcon /> },
              ].map((skill) => (
                <span key={skill.name} className={`px-3 py-1.5 ${skill.color} border rounded-lg text-xs font-medium flex items-center gap-1.5`}>
                  {skill.icon}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Refined Focus Section */}
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
    ),
    'Education': (
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="border-l-2 border-gray-700 pl-6 space-y-2">
            <h2 className="text-2xl font-semibold text-white">Bachelor of Science in Information Technology</h2>
            <p className="text-gray-400">University Name</p>
            <p className="text-gray-500 text-sm">2020 - 2024</p>
            <p className="text-gray-300 mt-2">
              Focused on software engineering, web development, and database management. 
              Completed coursework in algorithms, data structures, and software design patterns.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Relevant Coursework</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Web Development & Design</li>
            <li>Database Systems</li>
            <li>Software Engineering</li>
            <li>User Interface Design</li>
            <li>Mobile Application Development</li>
          </ul>
        </div>
      </div>
    ),
    'Projects': (
      <div className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: 'E-Commerce Platform',
              description: 'Full-stack e-commerce solution with payment integration and admin dashboard.',
              tech: ['React', 'Node.js', 'MongoDB', 'Stripe']
            },
            {
              title: 'Task Management App',
              description: 'Collaborative task management tool with real-time updates and team collaboration features.',
              tech: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL']
            },
            {
              title: 'Portfolio Website',
              description: 'Modern, responsive portfolio website showcasing projects and skills.',
              tech: ['React', 'Tailwind CSS', 'Vite']
            },
            {
              title: 'Weather Dashboard',
              description: 'Real-time weather application with location-based forecasts and interactive maps.',
              tech: ['React', 'OpenWeather API', 'Chart.js']
            }
          ].map((project, index) => (
            <div key={index} className="p-6 bg-gray-800/30 border border-gray-700/50 space-y-3">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    'Experience': (
      <div className="space-y-6">
        <div className="space-y-6">
          <div className="border-l-2 border-gray-700 pl-6 space-y-2">
            <h2 className="text-2xl font-semibold text-white">Frontend Developer</h2>
            <p className="text-gray-400">Company Name</p>
            <p className="text-gray-500 text-sm">2023 - Present</p>
            <ul className="list-disc list-inside space-y-1 text-gray-300 mt-3">
              <li>Developed responsive web applications using React and TypeScript</li>
              <li>Collaborated with design team to implement UI/UX designs</li>
              <li>Optimized application performance and improved load times</li>
              <li>Participated in code reviews and maintained coding standards</li>
            </ul>
          </div>
          <div className="border-l-2 border-gray-700 pl-6 space-y-2">
            <h2 className="text-2xl font-semibold text-white">Web Developer Intern</h2>
            <p className="text-gray-400">Startup Company</p>
            <p className="text-gray-500 text-sm">2022 - 2023</p>
            <ul className="list-disc list-inside space-y-1 text-gray-300 mt-3">
              <li>Built and maintained company website and internal tools</li>
              <li>Assisted in developing RESTful APIs</li>
              <li>Worked with version control systems (Git)</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    'Tools': (
      <div className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { category: 'Frontend', tools: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
            { category: 'Backend', tools: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'] },
            { category: 'Design', tools: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator'] },
            { category: 'DevOps', tools: ['Git', 'Docker', 'AWS', 'Vercel', 'GitHub Actions'] },
            { category: 'Testing', tools: ['Jest', 'React Testing Library', 'Cypress'] },
            { category: 'Other', tools: ['VS Code', 'Postman', 'MongoDB Compass', 'Chrome DevTools'] }
          ].map((section, index) => (
            <div key={index} className="p-6 bg-gray-800/30 border border-gray-700/50 space-y-3">
              <h3 className="text-xl font-semibold text-white">{section.category}</h3>
              <div className="flex flex-wrap gap-2">
                {section.tools.map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    'Micro Credentials': (
      <div className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: 'AWS Certified Cloud Practitioner',
              issuer: 'Amazon Web Services',
              date: '2024'
            },
            {
              title: 'React Developer Certification',
              issuer: 'Meta',
              date: '2023'
            },
            {
              title: 'MongoDB Certified Developer',
              issuer: 'MongoDB University',
              date: '2023'
            },
            {
              title: 'UI/UX Design Specialization',
              issuer: 'Coursera',
              date: '2022'
            }
          ].map((credential, index) => (
            <div key={index} className="p-6 bg-gray-800/30 border border-gray-700/50 space-y-2">
              <h3 className="text-xl font-semibold text-white">{credential.title}</h3>
              <p className="text-gray-400">{credential.issuer}</p>
              <p className="text-gray-500 text-sm">{credential.date}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    'Events': (
      <div className="space-y-6">
        <div className="space-y-6">
          {[
            {
              title: 'Tech Conference 2024',
              type: 'Conference',
              date: 'March 2024',
              description: 'Attended workshops on modern web development and networking with industry professionals.'
            },
            {
              title: 'Hackathon Winner',
              type: 'Competition',
              date: 'January 2024',
              description: 'Won first place in a 48-hour hackathon with a team project focused on sustainability.'
            },
            {
              title: 'Open Source Contributor',
              type: 'Contribution',
              date: 'Ongoing',
              description: 'Active contributor to various open-source projects, focusing on React ecosystem libraries.'
            },
            {
              title: 'Web Development Workshop',
              type: 'Workshop',
              date: 'November 2023',
              description: 'Conducted a workshop on building modern web applications for university students.'
            }
          ].map((event, index) => (
            <div key={index} className="p-6 bg-gray-800/30 border border-gray-700/50 space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                  <p className="text-gray-400 text-sm">{event.type}</p>
                </div>
                <span className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded">
                  {event.date}
                </span>
              </div>
              <p className="text-gray-300 mt-2">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    'Contact Me': (
      <div className="space-y-6">
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 bg-gray-800/30 border border-gray-700/50 space-y-3">
            <h3 className="text-xl font-semibold text-white">Email</h3>
            <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-white transition-colors">
              your.email@example.com
            </a>
          </div>
          <div className="p-6 bg-gray-800/30 border border-gray-700/50 space-y-3">
            <h3 className="text-xl font-semibold text-white">Location</h3>
            <p className="text-gray-300">Available for remote work</p>
          </div>
        </div>
        <div className="p-6 bg-gray-800/30 border border-gray-700/50 space-y-4">
          <h3 className="text-xl font-semibold text-white">Send a Message</h3>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-gray-600"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-gray-600"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 resize-none"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    )
  };

  return (
    <div>
      {sections.map((section) => {
        const isActive = activeItem === section;
        return (
          <section
            key={section}
            ref={(el) => {
              sectionRefs.current[section] = el as HTMLDivElement | null;
            }}
            id={`section-${section.toLowerCase().replace(/\s+/g, '-')}`}
            className="flex flex-col justify-start items-start pt-2 pb-8 px-4 sm:pt-4 sm:pb-12 sm:px-6 md:px-8 lg:pt-6 lg:px-12"
          >
            {section !== 'About Me' && (
              <h1 
                className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 transition-all duration-500 w-full"
                style={{
                  opacity: isActive ? 1 : 0,
                  visibility: isActive ? 'visible' : 'hidden',
                  transform: isActive ? 'translateX(0)' : 'translateX(-20px)'
                }}
              >
                {section}
              </h1>
            )}
            <div 
              className="space-y-6 transition-all duration-700 w-full max-w-4xl mb-12"
              style={{
                opacity: isActive ? 1 : 0,
                visibility: isActive ? 'visible' : 'hidden',
                transform: isActive ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              {content[section] || (
                <p className="text-gray-300">Content coming soon...</p>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}
