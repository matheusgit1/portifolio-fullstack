"use client";

import { FaArrowRight } from "react-icons/fa";
import {
  SiNestjs,
  SiNextdotjs,
  SiNuxt,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiDotnet,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiRabbitmq,
  SiJest,
  SiSocketdotio,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";

export type HeroTranslations = {
  badge: string;
  titlePart1: string;
  titleHighlight: string;
  titlePart2: string;
  subtitle: string;
  description: string;
  techStackLabel: string;
  cvLabel: string;
  cvSublabel: string;
  workButtonLabel: string;
};

export function Hero({ t }: { t: HeroTranslations }) {
  const technologies = [
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: ".NET", icon: SiDotnet, color: "#512BD4" },
    { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "Nuxt.js", icon: SiNuxt, color: "#00DC82" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "SQL Server", icon: DiMsqlServer, color: "#CC2929" },
    { name: "Redis", icon: SiRedis, color: "#DC382D" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "RabbitMQ", icon: SiRabbitmq, color: "#FF6600" },
    { name: "Jest", icon: SiJest, color: "#C21325" },
    { name: "Socket.IO", icon: SiSocketdotio, color: "#010101" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-block mb-8">
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium">
              {t.badge}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
            {t.titlePart1}{" "}
            <span className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {t.titleHighlight}
            </span>
          </h1>

          <p className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-400 mb-4">
            {t.titlePart2}
          </p>
          <p className="text-xl md:text-2xl text-gray-500 mb-3">{t.subtitle}</p>

          <p className="text-lg text-gray-500 mb-8 max-w-2xl">
            {t.description}
          </p>

          {/* Technologies Grid */}
          <div className="mb-12">
            <p className="text-sm text-gray-400 mb-4 tracking-wide">
              {t.techStackLabel}
            </p>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="group relative px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    <tech.icon
                      size={16}
                      style={{ color: tech.color }}
                      className="group-hover:scale-110 transition-transform"
                    />
                    <span className="text-xs text-gray-300 group-hover:text-white transition">
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-12 mb-12">
            <div className="group cursor-pointer">
              <div className="flex items-center gap-2">
                <span className="text-3xl md:text-4xl font-bold text-white group-hover:text-blue-400 transition">
                  {t.cvLabel}
                </span>
                <FaArrowRight
                  size={24}
                  className="text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all"
                />
              </div>
              <span className="text-xs text-gray-500">{t.cvSublabel}</span>
            </div>

            <div className="w-px h-12 bg-gray-800"></div>
          </div>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-lg text-white font-medium hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300"
          >
            {t.workButtonLabel}
            <FaArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
