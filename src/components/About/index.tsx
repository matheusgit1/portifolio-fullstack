import {
  FaGraduationCap,
  FaDatabase,
  FaServer,
  FaShieldAlt,
  FaChartLine,
  FaLanguage,
  FaAws,
  FaReact,
} from "react-icons/fa";

type Skill = {
  category: string;
  items: string[];
  level: string;
};

const skillIconMap: Record<string, { icon: React.ComponentType<{ className: string }>; color: string }> = {
  "Backend & Languages": { icon: FaServer, color: "text-green-400" },
  "Backend e Linguagens": { icon: FaServer, color: "text-green-400" },
  Frontend: { icon: FaReact, color: "text-blue-400" },
  "Databases & ORMs": { icon: FaDatabase, color: "text-purple-400" },
  "Bancos de Dados e ORMs": { icon: FaDatabase, color: "text-purple-400" },
  "Cloud & DevOps": { icon: FaAws, color: "text-yellow-400" },
  "Nuvem e DevOps": { icon: FaAws, color: "text-yellow-400" },
  "Architecture & Design": { icon: FaShieldAlt, color: "text-red-400" },
  "Arquitetura e Design": { icon: FaShieldAlt, color: "text-red-400" },
  "Data & AI": { icon: FaChartLine, color: "text-indigo-400" },
  "Dados e IA": { icon: FaChartLine, color: "text-indigo-400" },
};

type EducationItem = {
  degree: string;
  institution: string;
  period: string;
};

type CertificationItem = {
  name: string;
  issuer: string;
  date: string;
  link: string;
};

type LanguageItem = {
  language: string;
  level: string;
};

export type AboutTranslations = {
  sectionTitle: {
    title: string;
    highlight: string;
  };
  description: string;
  profileName: string;
  profileRole: string;
  profileLocation: string;
  bio1: string;
  bio2: string;
  skillsTitle: string;
  skillsHighlight: string;
  languagesTitle: string;
  languageItems: LanguageItem[];
  availabilityTitle: string;
  availabilityItems: string[];
  proficiencyLabel: string;
  educationTitle: string;
  certificationsTitle: string;
  adaptiveNote: string;
  skills: Skill[];
  education: EducationItem[];
  certifications: CertificationItem[];
};

export function About({ t }: { t: AboutTranslations }) {
  const skills = t.skills;
  const certifications = t.certifications;
  const education = t.education;

  return (
    <section
      id="about"
      className="py-20 bg-linear-to-b from-black to-gray-900/20"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.sectionTitle.title}
            <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              {` ${t.sectionTitle.highlight}`}
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{t.description}</p>
        </div>

        {/* Dynamic Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Main Bio */}
          <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-linear-to-r from-blue-500 to-purple-500 flex items-center justify-center text-2xl font-bold">
                MP
              </div>
              <div>
                <h3 className="text-2xl font-bold">{t.profileName}</h3>
                <p className="text-blue-400">{t.profileRole}</p>
                <p className="text-gray-500 text-sm">{t.profileLocation}</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-4">{t.bio1}</p>
            <p className="text-gray-300 leading-relaxed mb-4">{t.bio2}</p>

            <div className="flex flex-wrap gap-3 mt-6">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm">
                🔄 Adaptive
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm">
                🎯 Problem Solver
              </span>
              <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                🏗️ System Architect
              </span>
              <span className="px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm">
                🚀 Fast Learner
              </span>
            </div>
          </div>

          {/* Quick Info */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FaLanguage className="text-blue-400" />
              {t.languagesTitle}
            </h3>
            <div className="space-y-3 mb-6">
              {t.languageItems.map((item) => (
                <div key={item.language}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{item.language}</span>
                    <span className="text-gray-400">{item.level}</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-1.5">
                    <div className="bg-blue-500 h-1.5 rounded-full w-full"></div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FaChartLine className="text-green-400" />
              {t.availabilityTitle}
            </h3>
            <div className="space-y-2">
              {t.availabilityItems.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            {t.skillsTitle}
            <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              {` ${t.skillsHighlight}`}
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => {
              const skillConfig = skillIconMap[skill.category];
              const Icon = skillConfig?.icon || FaServer;
              const color = skillConfig?.color || "text-gray-400";
              return (
                <div
                  key={skill.category}
                  className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 hover:transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className={`w-6 h-6 ${color}`} />
                    <h4 className="font-semibold text-lg">{skill.category}</h4>
                  </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-1 text-xs rounded-md bg-gray-800 text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-3">
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>{t.proficiencyLabel}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-1.5">
                    <div
                      className="bg-linear-to-r from-blue-500 to-purple-500 h-1.5 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <FaGraduationCap className="text-blue-400" />
              {t.educationTitle}
            </h3>
            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="relative pl-6 border-l-2 border-blue-500/30"
                >
                  <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                  <h4 className="font-semibold">{edu.degree}</h4>
                  <p className="text-sm text-gray-400">{edu.institution}</p>
                  <p className="text-xs text-gray-500">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <FaShieldAlt className="text-yellow-400" />
              {t.certificationsTitle}
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <a
                  key={cert.name}
                  href={cert.link}
                  target="_blank"
                  className="flex items-start gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                >
                  <FaAws className="w-8 h-8 text-yellow-500 shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-semibold group-hover:text-blue-400 transition">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-gray-400">{cert.issuer}</p>
                    <p className="text-xs text-gray-500">{cert.date}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Adaptive Profile Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            {t.adaptiveNote}
          </div>
        </div>
      </div>
    </section>
  );
}
