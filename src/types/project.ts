export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  techStack: string[];
  keyFeatures: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  github: string;
  live: string;
  details: {
    overview: string;
    architecture: string;
    challenges: string[];
    solutions: string[];
    images: string[];
    diagrams?: string[];
    fullTechStack: {
      frontend: string[];
      backend: string[];
      infrastructure: string[];
      testing: string[];
    };
    features: {
      title: string;
      description: string;
      implementation: string;
    }[];
  };
}
