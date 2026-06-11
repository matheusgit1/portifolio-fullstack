import { FaGithub, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export type ContactTranslations = {
  title: string;
  highlight: string;
  description: string;
  copyright: string;
};

export function Contact({ t }: { t: ContactTranslations }) {
  return (
    <section id="contact" className="py-20 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.title}{" "}
            <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              {t.highlight}
            </span>
          </h2>
          <p className="text-gray-400 mb-8">{t.description}</p>
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
            <a
              href="https://wa.me/5527997822665"
              target="_blank"
              className="text-gray-400 hover:text-white transition"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-gray-500 text-sm">
            <p>
              {t.copyright.replace(
                "{year}",
                new Date().getFullYear().toString(),
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
