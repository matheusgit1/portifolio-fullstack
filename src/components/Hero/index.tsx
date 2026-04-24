import { FaArrowRight } from "react-icons/fa";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-8">
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium">
              full-stack developer/ multistack developer
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
            Making The{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Impossible
            </span>
          </h1>

          <p className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-400 mb-4">
            Possible.
          </p>
          <p className="text-xl md:text-2xl text-gray-500 mb-3">
            Using I's and O's.
          </p>

          <p className="text-lg text-gray-500 mb-12 max-w-2xl">
            Problem solving is what makes me unique.
          </p>

          <div className="flex items-center gap-12 mb-12">
            <div className="group cursor-pointer">
              <div className="flex items-center gap-2">
                <span className="text-3xl md:text-4xl font-bold text-white group-hover:text-blue-400 transition">
                  GO
                </span>
                <FaArrowRight
                  size={24}
                  className="text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all"
                />
              </div>
              <span className="text-xs text-gray-500">View CV</span>
            </div>

            <div className="w-px h-12 bg-gray-800"></div>

            {/* <div>
              <div className="text-3xl md:text-4xl font-bold text-white">
                210
              </div>
              <div className="text-xs text-gray-500">Projects</div>
            </div> */}
          </div>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-lg text-white font-medium hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300"
          >
            View my work
            <FaArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
