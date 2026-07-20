"use client";

import { FaGithub, FaLink, FaWhatsapp, FaCheck } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { projects } from "@/data/project-en";

export type ProjectsTranslations = {
  title: string;
  titleHighlight: string;
  description: string;
  codeLabel: string;
};

const handleImageClick = () => {
  const imgElement = document.getElementById('project-image');
  if (imgElement?.requestFullscreen) {
    imgElement.requestFullscreen();
  }
};

export function Projects({ t }: { t: ProjectsTranslations }) {
  const router = useRouter();
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.title}{" "}
            <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              {t.titleHighlight}
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{t.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              onClick={() => router.push(`/projects/${project.id}`)}
              key={project.id}
              className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              <Link href={`/projects/${project.id}`} className="block">
                <div className="relative h-48 overflow-hidden">
                  <img
                    id="project-image"
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500 cursor-pointer"
                    // onClick={handleImageClick}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded bg-white/10 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 mb-4 text-xs text-gray-500">
                    {project.keyFeatures.map((feature) => (
                      <span key={feature} className="flex items-center gap-1">
                        <FaCheck size={12} className="text-blue-400" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
              <div className="p-6 pt-0">
                <div className="flex gap-4 pt-4 border-t border-white/10">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
                  >
                    <FaGithub size={16} /> {t.codeLabel}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
