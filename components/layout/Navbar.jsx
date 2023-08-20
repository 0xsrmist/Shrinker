export default function Navbar() {
  return (
    <header className="bg-black">
      <div className="mx-auto flex h-16 items-center gap-8 px-4 sm:px-6 lg:px-8 ">
        <a className="block text-white" href="/">
          <span className="font-title">Shrinker</span>
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block"></nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className=" rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-black transition hover:text-gray-600/75 sm:block"
                href="/"
              >
                Developer
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
