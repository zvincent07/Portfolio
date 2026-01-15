export function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a1a1a]">
      {/* Grid background overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Loading content */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Animated logo/icon */}
        <div className="relative">
          <div 
            className="w-24 h-24 rounded-full p-[3px]"
            style={{
              background: 'conic-gradient(from 0deg, #ef4444 0deg 72deg, #f97316 72deg 144deg, #eab308 144deg 216deg, #22c55e 216deg 288deg, #3b82f6 288deg 360deg)',
              animation: 'spin 2s linear infinite'
            }}
          >
            <div className="w-full h-full rounded-full bg-[#1a1a1a] flex items-center justify-center">
              <div className="text-4xl">😺</div>
            </div>
          </div>
        </div>
        
        {/* Loading text */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-1">
            <span className="text-white text-lg font-medium animate-pulse" style={{ animationDelay: '0ms' }}>L</span>
            <span className="text-white text-lg font-medium animate-pulse" style={{ animationDelay: '100ms' }}>o</span>
            <span className="text-white text-lg font-medium animate-pulse" style={{ animationDelay: '200ms' }}>a</span>
            <span className="text-white text-lg font-medium animate-pulse" style={{ animationDelay: '300ms' }}>d</span>
            <span className="text-white text-lg font-medium animate-pulse" style={{ animationDelay: '400ms' }}>i</span>
            <span className="text-white text-lg font-medium animate-pulse" style={{ animationDelay: '500ms' }}>n</span>
            <span className="text-white text-lg font-medium animate-pulse" style={{ animationDelay: '600ms' }}>g</span>
            <span className="text-white text-lg font-medium animate-pulse" style={{ animationDelay: '700ms' }}>.</span>
            <span className="text-white text-lg font-medium animate-pulse" style={{ animationDelay: '800ms' }}>.</span>
            <span className="text-white text-lg font-medium animate-pulse" style={{ animationDelay: '900ms' }}>.</span>
          </div>
          
          {/* Progress bar */}
          <div className="w-48 h-1 bg-gray-800/50 rounded-full overflow-hidden mt-2">
            <div 
              className="h-full bg-gradient-to-r from-red-400 via-orange-400 via-yellow-400 via-green-400 to-blue-400 rounded-full animate-loading-progress"
              style={{
                width: '100%',
                animation: 'loading-progress 1.5s ease-in-out infinite'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
