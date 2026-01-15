import { useState, useEffect, useRef } from 'react';
import { Sidebar } from './components/ui/Sidebar';
import { ContentArea } from './components/ui/ContentArea';
import { Loading } from './components/ui/Loading';

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

function App() {
  const [activeNavItem, setActiveNavItem] = useState('About Me');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const mainRef = useRef<HTMLElement>(null);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  // Handle scroll wheel for section navigation
  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    let scrollAccumulator = 0;
    const SCROLL_THRESHOLD = 50; // Minimum scroll delta to trigger navigation

    const handleWheel = (e: WheelEvent) => {
      if (isScrollingRef.current) {
        e.preventDefault();
        return;
      }

      scrollAccumulator += Math.abs(e.deltaY);
      
      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // If scroll is significant, navigate to next/previous section
      if (scrollAccumulator > SCROLL_THRESHOLD) {
        const currentIndex = sections.indexOf(activeNavItem);
        const direction = e.deltaY > 0 ? 1 : -1;
        const nextIndex = Math.max(0, Math.min(sections.length - 1, currentIndex + direction));
        
        if (nextIndex !== currentIndex) {
          isScrollingRef.current = true;
          setActiveNavItem(sections[nextIndex]);
          
          // Reset after animation completes
          setTimeout(() => {
            isScrollingRef.current = false;
          }, 800);
        }
        
        scrollAccumulator = 0;
        e.preventDefault();
      }

      // Reset accumulator after a short delay
      scrollTimeoutRef.current = setTimeout(() => {
        scrollAccumulator = 0;
      }, 150);
    };

    main.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      main.removeEventListener('wheel', handleWheel);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [activeNavItem]);

  const handleNavChange = (item: string) => {
    setActiveNavItem(item);
    // Close sidebar on mobile after selection
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  const handleSectionChange = (section: string) => {
    if (!isScrollingRef.current) {
      setActiveNavItem(section);
    }
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
        className="fixed inset-0 lg:top-16 lg:bottom-16 lg:left-16 lg:right-[416px] bg-transparent lg:bg-[#1a1a1a]/95 lg:backdrop-blur-sm lg:border lg:border-gray-800/50 lg:shadow-2xl overflow-y-auto overflow-x-hidden z-10"
        style={{
          WebkitOverflowScrolling: 'touch',
          overscrollBehavior: 'contain',
          scrollBehavior: 'smooth',
          scrollPaddingTop: '0'
        }}
      >
        <div className="w-full max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
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
