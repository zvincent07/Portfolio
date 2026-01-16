import { useState, useEffect, useRef } from 'react';
import { Sidebar } from './components/ui/Sidebar';
import { ContentArea } from './components/ui/ContentArea';
import { Loading } from './components/ui/Loading';

// Mobile Menu Icons
const MenuIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

// Bottom Nav Icons
const UserIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const DocumentIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const BriefcaseIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ContactIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

function App() {
  const [activeNavItem, setActiveNavItem] = useState('About Me');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const mainRef = useRef<HTMLElement>(null);

  // Handle loading animation on mount
  useEffect(() => {
    // Simulate loading time (you can adjust this or wait for actual content to load)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  // Prevent scrolling while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  // Open sidebar by default on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };
    
    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle scroll wheel for section navigation (disabled for smoother scrolling)
  // Removed aggressive scroll handling to allow natural smooth scrolling

  const handleNavChange = (item: string) => {
    setActiveNavItem(item);
    // Close sidebar on mobile after selection
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  const handleSectionChange = (section: string) => {
    setActiveNavItem(section);
  };

  return (
    <div className="min-h-screen relative">
      {/* Loading Screen */}
      <div 
        className={`fixed inset-0 z-50 transition-opacity duration-700 ease-in-out ${
          isLoading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <Loading />
      </div>
      
      {/* Mobile Top Bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#1a1a1a]/95 backdrop-blur-xl border-b border-gray-800/50 z-30 flex items-center px-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full p-[2px]"
            style={{
              background: 'conic-gradient(from 0deg, #ef4444 0deg 72deg, #f97316 72deg 144deg, #eab308 144deg 216deg, #22c55e 216deg 288deg, #3b82f6 288deg 360deg)'
            }}
          >
            <div className="w-full h-full rounded-full bg-[#1a1a1a] p-[1px]">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/background/Joan Alter.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-sm font-bold text-white">zvincent07</h1>
            <p className="text-xs text-gray-400">Dev & Analyst</p>
          </div>
        </div>
      </header>

      {/* Content Area */}
      <main 
        ref={mainRef}
        className="fixed inset-0 pt-16 pb-16 lg:pt-0 lg:pb-0 lg:top-16 lg:bottom-16 lg:left-16 lg:right-[416px] bg-transparent lg:bg-[#1a1a1a]/95 lg:backdrop-blur-sm lg:border lg:border-gray-800/50 lg:shadow-2xl overflow-y-auto overflow-x-hidden z-10"
        style={{
          WebkitOverflowScrolling: 'touch',
          overscrollBehavior: 'auto',
          scrollBehavior: 'smooth',
          scrollPaddingTop: '4rem',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(255, 255, 255, 0.1) transparent'
        }}
      >
        <div className="w-full max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
          <ContentArea activeItem={activeNavItem} onSectionChange={handleSectionChange} />
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-[#1a1a1a]/95 backdrop-blur-xl border-t border-gray-800/50 z-30">
        <div className="flex items-center justify-around h-full px-2">
          {[
            { name: 'About Me', icon: <UserIcon className="w-5 h-5" /> },
            { name: 'Projects', icon: <DocumentIcon className="w-5 h-5" /> },
            { name: 'Experience', icon: <BriefcaseIcon className="w-5 h-5" /> },
            { name: 'Contact Me', icon: <ContactIcon className="w-5 h-5" /> },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setActiveNavItem(item.name);
                setSidebarOpen(false);
              }}
              className={`flex items-center justify-center px-3 py-2 rounded-lg transition-all ${
                activeNavItem === item.name
                  ? 'text-white bg-gray-800/50'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
              }`}
            >
              {item.icon}
            </button>
          ))}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`flex items-center justify-center px-3 py-2 rounded-lg transition-all ${
              sidebarOpen
                ? 'text-white bg-gray-800/50'
                : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
            }`}
          >
            <MenuIcon className="w-5 h-5" />
          </button>
        </div>
      </nav>
      
      {/* Sidebar */}
      <Sidebar 
        activeItem={activeNavItem} 
        onNavChange={handleNavChange}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />
      </div>
  );
}

export default App;
