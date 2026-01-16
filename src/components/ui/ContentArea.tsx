import { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';

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

  const content: Record<string, JSX.Element> = {
    'About Me': (
      <div className="space-y-8">
        {/* Hero Section - Matching Navbar Profile */}
        <div className="flex items-center gap-6 lg:gap-8 mb-12 pb-12 border-b border-gray-800/50">
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
                  {/* Placeholder for profile image - you can replace with actual image */}
                  <div className="text-6xl sm:text-7xl lg:text-8xl">😺</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Terminal-style Text - Side by Side */}
          <div className="flex flex-col justify-center">
            <div className="font-mono w-full relative">
              <div className="text-2xl sm:text-3xl lg:text-4xl text-white min-h-[2.5rem] sm:min-h-[3rem] lg:min-h-[3.5rem] flex items-center justify-center relative">
                <span className="text-gray-400 absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none">⌞</span>
                <div className="w-[400px] sm:w-[500px] lg:w-[600px] text-center">
                  <Typewriter
                    options={{
                      strings: ['Hello, I\'m John Vincent.'],
                      autoStart: true,
                      loop: true,
                      cursor: "|",
                    }}
                  />
                </div>
                <span className="text-gray-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">⌝</span>
              </div>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 font-light mt-4">Developer & Designer</p>
          </div>
        </div>

        <p className="text-gray-300 leading-relaxed">
          Welcome to my portfolio! I'm a passionate developer and designer who loves creating 
          beautiful and functional digital experiences. With a strong foundation in modern web 
          technologies, I strive to build applications that are both visually appealing and 
          highly performant.
        </p>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Figma', 'UI/UX Design'].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Interests</h2>
          <p className="text-gray-300 leading-relaxed">
            When I'm not coding, I enjoy exploring new technologies, contributing to open-source 
            projects, and continuously learning to stay at the forefront of web development. 
            I'm also passionate about design systems and creating reusable component libraries.
          </p>
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
      {sections.map((section, index) => {
        const isActive = activeItem === section;
        return (
          <section
            key={section}
            ref={(el) => {
              sectionRefs.current[section] = el;
            }}
            id={`section-${section.toLowerCase().replace(/\s+/g, '-')}`}
            className="min-h-screen flex flex-col justify-start items-center p-4 sm:p-6 md:p-8 lg:p-12 pb-16 sm:pb-20 scroll-snap-start"
            style={{
              scrollSnapAlign: 'start',
              scrollSnapStop: 'normal'
            }}
          >
            <h1 
              className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 transition-all duration-500 text-center w-full px-2"
              style={{
                opacity: isActive ? 1 : 0.3,
                transform: isActive ? 'translateX(0)' : 'translateX(-20px)'
              }}
            >
              {section}
            </h1>
            <div 
              className="space-y-6 transition-all duration-700 w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl"
              style={{
                opacity: isActive ? 1 : 0.4,
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
