"use client";

import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import {
  FaGithub,
  FaLink,
  FaArrowLeft,
  FaCheck,
  FaServer,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";
import { projects } from "@/data/projects";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      {/* Container */}
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-8"
        >
          <FaArrowLeft size={16} />
          Back to projects
        </Link>

        {/* Hero */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            {project.description}
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href={project.github}
              target="_blank"
              className="flex items-center gap-2 px-5 py-2.5 bg-white/10 rounded-lg hover:bg-white/20 transition"
            >
              <FaGithub size={18} /> GitHub
            </a>
            {/* <a
              href={project.live}
              target="_blank"
              className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              <FaLink size={18} /> Live Demo 
            </a> */}
          </div>
        </div>

        {project.details ? (
          // Project Details
          <div className="space-y-12">
            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm rounded-full bg-white/10 text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.metrics &&
                project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="bg-white/5 rounded-xl p-4 text-center border border-white/10"
                  >
                    {/* <metric className="w-6 h-6 text-blue-400 mx-auto mb-2" /> */}
                    <div className="text-2xl font-bold text-white">
                      {metric.value}
                    </div>
                    <div className="text-xs text-gray-400">{metric.label}</div>
                  </div>
                ))}
            </div>

            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-500 pl-4">
                Overview
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {project.details.overview}
              </p>
            </section>

            {/* Architecture */}
            <section>
              <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-500 pl-4">
                Architecture
              </h2>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <pre className="text-gray-300 whitespace-pre-wrap font-sans leading-relaxed">
                  {project.details.architecture}
                </pre>
              </div>
            </section>

            {/* Challenges & Solutions */}
            <section>
              <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-500 pl-4">
                Challenges & Solutions
              </h2>
              <div className="space-y-4">
                {project.details.challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="bg-white/5 rounded-xl p-5 border border-white/10"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-400 text-xs font-bold">
                          !
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-200 font-medium mb-2">
                          {challenge}
                        </p>
                        <div className="flex items-start gap-2 text-green-400">
                          <FaCheck size={16} className="flex-shrink-0 mt-0.5" />
                          <p className="text-gray-400 text-sm">
                            {project.details.solutions[index]}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Tech Stack Breakdown */}
            <section>
              <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-500 pl-4">
                Tech Stack
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-5">
                  <div className="flex items-center gap-2 text-blue-400 mb-3">
                    <FaServer /> Frontend
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.details.fullTechStack.frontend.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded bg-gray-800 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-5">
                  <div className="flex items-center gap-2 text-green-400 mb-3">
                    <FaDatabase /> Backend
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.details.fullTechStack.backend.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded bg-gray-800 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-5">
                  <div className="flex items-center gap-2 text-purple-400 mb-3">
                    <FaCloud /> Infrastructure
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.details.fullTechStack.infrastructure.map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded bg-gray-800 text-gray-300"
                        >
                          {tech}
                        </span>
                      ),
                    )}
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-5">
                  <div className="flex items-center gap-2 text-yellow-400 mb-3">
                    <FaShieldAlt /> Testing
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.details.fullTechStack.testing.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded bg-gray-800 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Screenshots Gallery */}
            <section>
              <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-500 pl-4">
                Screenshots
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.details.images.map((img, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 rounded-xl overflow-hidden border border-white/10"
                  >
                    <img
                      src={img}
                      alt={`Screenshot ${index + 1}`}
                      className="w-full h-48 object-cover hover:scale-105 transition duration-300"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>
        ) : (
          // Generic project details for others
          <div className="bg-white/5 rounded-xl p-8 text-center">
            <p className="text-gray-400">Detailed information coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
}
