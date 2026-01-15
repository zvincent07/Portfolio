export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {/* Placeholder Bento Grid component */}
      <div className="bg-gray-800/50 p-6 rounded-lg">
        <h3 className="text-white font-semibold mb-2">Grid Item 1</h3>
        <p className="text-gray-400 text-sm">Content goes here</p>
      </div>
      <div className="bg-gray-800/50 p-6 rounded-lg">
        <h3 className="text-white font-semibold mb-2">Grid Item 2</h3>
        <p className="text-gray-400 text-sm">Content goes here</p>
      </div>
      <div className="bg-gray-800/50 p-6 rounded-lg">
        <h3 className="text-white font-semibold mb-2">Grid Item 3</h3>
        <p className="text-gray-400 text-sm">Content goes here</p>
      </div>
    </div>
  );
}
