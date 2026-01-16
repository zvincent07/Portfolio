import { useState, useEffect, useRef } from 'react';
import { Sidebar } from './components/ui/Sidebar';
import { ContentArea } from './components/ui/ContentArea';
import { Loading } from './components/ui/Loading';

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
      
      {/* Content Area */}
      <main 
        ref={mainRef}
        className="fixed inset-0 lg:top-16 lg:bottom-16 lg:left-16 lg:right-[416px] bg-transparent lg:bg-[#1a1a1a]/95 lg:backdrop-blur-sm lg:shadow-2xl overflow-y-auto overflow-x-hidden z-10"
        style={{
          WebkitOverflowScrolling: 'touch',
          overscrollBehavior: 'auto',
          scrollBehavior: 'smooth',
          scrollPaddingTop: '0',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(255, 255, 255, 0.1) transparent'
        }}
      >
        <div className="w-full max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
          <ContentArea activeItem={activeNavItem} onSectionChange={handleSectionChange} />
        </div>
      </main>
      
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
