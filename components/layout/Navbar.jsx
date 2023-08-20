export default function Navbar() {
  return (
    <nav class="fixed right-4 left-4 top-8 py-2 px-4 md:right-20 md:left-20 lg:right-24 lg:left-24 z-50 flex justify-between items-center border-2 rounded-2xl backdrop-blur-md mix-blend-difference">
      <div className="flex justify-center">
        <h1 class="text-white font-title text-3xl md:text-center">Shrinker</h1>
      </div>
      <div class="text-sm md:text-lg text-white flex items-center absolute right-1/2 translate-x-1/2"></div>
      <div class="flex items-center text-white">
        <div class="hidden md:block">
          <span className="text-white font-medium">Developer</span>
        </div>
      </div>
    </nav>
  );
}
