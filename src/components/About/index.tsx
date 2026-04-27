import {
  FaGraduationCap,
  FaCode,
  FaCloud,
  FaDatabase,
  FaServer,
  FaShieldAlt,
  FaChartLine,
  FaLanguage,
  FaAws,
  FaDocker,
  FaPython,
  FaJava,
  FaJs,
  FaReact,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNestjs,
  SiDotnet,
  SiPostgresql,
  SiMongodb,
  SiRedis,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export function About() {
  const skills = [
    {
      category: "Backend & Languages",
      icon: FaServer,
      color: "text-green-400",
      items: [
        "TypeScript",
        "JavaScript",
        "C# .NET",
        "Node.js",
        "NestJS",
        // "Java",
        "Python",
      ],
      level: "95",
    },
    {
      category: "Frontend",
      icon: FaReact,
      color: "text-blue-400",
      items: ["React.js", "Next.js", "Tailwind CSS", "shadcn/ui"],
      level: "85",
    },
    {
      category: "Databases & ORMs",
      icon: FaDatabase,
      color: "text-purple-400",
      items: [
        "PostgreSQL",
        "MongoDB",
        "SQL Server",
        "MySQL",
        "Prisma",
        "TypeORM",
        "Entity Framework",
      ],
      level: "90",
    },
    {
      category: "Cloud & DevOps",
      icon: FaAws,
      color: "text-yellow-400",
      items: [
        "AWS (12+ services)",
        "Docker",
        "Kubernetes",
        "CI/CD Pipelines",
        "Grafana",
        "Datadog",
      ],
      level: "88",
    },
    {
      category: "Architecture & Design",
      icon: FaShieldAlt,
      color: "text-red-400",
      items: [
        "Microservices",
        "Event-Driven",
        "Clean Architecture",
        "DDD",
        "CQRS",
        "Saga Pattern",
      ],
      level: "92",
    },
    {
      category: "Data & AI",
      icon: FaChartLine,
      color: "text-indigo-400",
      items: [
        "Data Analysis",
        "Python Data Processing",
        "Machine Learning Fundamentals",
        "LLM Integration",
      ],
      level: "75",
    },
  ];

  const certifications = [
    {
      name: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "2024 - 2027",
      link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/d26f05cc2deb4c21867a18f71a6f74a1",
      icon: FaAws,
    },
  ];

  const education = [
    {
      degree: "Postgraduate in Information Technology",
      institution: "UNIMINAS",
      period: "2024 - 2025",
      icon: FaGraduationCap,
    },
    {
      degree: "Specialization in Data Science",
      institution: "ADA",
      period: "2023 - 2024",
      icon: FaChartLine,
    },
    {
      degree: "Engineering - Control & Automation",
      institution: "IFES",
      period: "2019 - 2024",
      icon: FaGraduationCap,
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-black to-gray-900/20"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Software engineer specialized in backend systems, distributed
            architectures, and scalable solutions
          </p>
        </div>

        {/* Dynamic Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Main Bio */}
          <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-2xl font-bold">
                MP
              </div>
              <div>
                <h3 className="text-2xl font-bold">Matheus Pereira</h3>
                <p className="text-blue-400">
                  Mid-level Full-Stack Developer / Software Architect
                </p>
                <p className="text-gray-500 text-sm">Linhares, ES - Brazil</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-4">
              Software developer with focus on backend and solid experience in
              designing, developing and maintaining scalable systems in
              corporate and high-availability environments. Strong experience in
              NodeJS and .NET ecosystems, with extensive use of TypeScript and
              cloud platforms.
            </p>

            <p className="text-gray-300 leading-relaxed mb-4">
              Experience in DevOps practices, containerized environments, CI/CD
              pipelines, monitoring and software architecture. Also possesses
              fundamental knowledge in data science and automation.
            </p>

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
              Languages
            </h3>
            <div className="space-y-3 mb-6">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>🇵🇹 Portuguese</span>
                  <span className="text-gray-400">Native</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5">
                  <div className="bg-blue-500 h-1.5 rounded-full w-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>🇺🇸 English</span>
                  <span className="text-gray-400">Advanced (C1)</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5">
                  <div className="bg-purple-500 h-1.5 rounded-full w-[85%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>🇪🇸 Spanish</span>
                  <span className="text-gray-400">Basic</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5">
                  <div className="bg-gray-500 h-1.5 rounded-full w-[30%]"></div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FaChartLine className="text-green-400" />
              Availability
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm">Open for opportunities</span>
              </div>
              {/* <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Remote / Hybrid / On-site</span>
              </div> */}
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm">Worldwide availability</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.category}
                className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <skill.icon className={`w-6 h-6 ${skill.color}`} />
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
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-1.5">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <FaGraduationCap className="text-blue-400" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="relative pl-6 border-l-2 border-blue-500/30"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
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
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <a
                  key={cert.name}
                  href={cert.link}
                  target="_blank"
                  className="flex items-start gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                >
                  <cert.icon className="w-8 h-8 text-yellow-500 flex-shrink-0" />
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
            🧠 Dynamic & Adaptive Profile — Always learning, always evolving
          </div>
        </div>
      </div>
    </section>
  );
}
