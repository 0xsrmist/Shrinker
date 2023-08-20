export default function Navbar() {
  return (
    <nav className="fixed right-4 left-4 top-8 py-2 px-4 md:right-20 md:left-20 lg:right-24 lg:left-24 z-50 flex justify-between items-center border-2 rounded-2xl backdrop-blur-md mix-blend-difference">
      <div classNameName="flex justify-center">
        <h1 className="text-white font-title text-xl sm:text-3xl mx-auto">
          Shrinker
        </h1>
      </div>
      <div className="text-sm md:text-lg text-white flex items-center absolute right-1/2 translate-x-1/2"></div>
      <div className="flex items-center text-white">
        <div className=" md:block">
          <a
            href="https://twitter.com/0xsrmist"
            classNameName="text-white font-title hover:underline "
          >
            <span className="text-sm sm:text-lg">By TPHxSRMIST🚀</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
