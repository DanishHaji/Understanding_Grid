export default function Home() {
  return (
    <div>
      <div className="grid grid-rows-[100px_200px_200px_100px] grid-cols-3 gap-5">
        {/* Header */}
        <div className="bg-purple-200 col-span-3 text-[24px] sm:text-[24px] lg:text-[40px] font-bold text-center flex items-center justify-center border-2 border-black sm:bg-purple-400 lg:bg-purple-800">
          Header
        </div>

        {/* Sidebar */}
        <div className="bg-green-200 row-span-2 text-[24px] sm:text-[24px] lg:text-[40px] font-bold text-center flex items-center justify-center border-2 border-black sm:bg-green-400 lg:bg-green-700">
          Sidebar
        </div>

        {/* Content-1 */}
        <div className="bg-blue-200 col-span-2 text-[24px] sm:text-[24px] lg:text-[40px] font-bold text-center flex items-center justify-center border-2 border-black sm:bg-blue-400 lg:bg-blue-800">
          Content-1
        </div>

        {/* Content-2 */}
        <div className="bg-yellow-200 text-[24px] sm:text-[24px] lg:text-[40px] font-bold text-center flex items-center justify-center border-2 border-black sm:bg-yellow-400 lg:bg-yellow-700">
          Content-2
        </div>

        {/* Content-3 */}
        <div className="bg-orange-200 text-[24px] sm:text-[24px] lg:text-[40px] font-bold text-center flex items-center justify-center border-2 border-black sm:bg-orange-400 lg:bg-orange-700">
          Content-3
        </div>

        {/* Footer */}
        <div className="bg-pink-200 col-span-3 text-[24px] sm:text-[24px] lg:text-[40px] font-bold text-center flex items-center justify-center border-2 border-black sm:bg-pink-400 lg:bg-pink-700">
          Footer
        </div>
      </div>
    </div>
  );
}
