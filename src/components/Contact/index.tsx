import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-gray-400 mb-8">
            I'm always interested in hearing about new opportunities
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/matheusgit1"
              target="_blank"
              className="text-gray-400 hover:text-white transition"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/matheus-ap/"
              target="_blank"
              className="text-gray-400 hover:text-white transition"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-gray-500 text-sm">
            <p>
              © {new Date().getFullYear()} Matheus Alves Pereira. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
