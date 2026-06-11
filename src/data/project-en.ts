import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "crash-game",
    title: "Crash Game Engine",
    shortDescription:
      "Multiplayer real-time betting platform with provably fair mechanics and enterprise-grade authentication.",
    description:
      "Real-time multiplayer game platform supporting 10,000+ simultaneous connections, featuring a provably fair system and event-driven architecture.",
    image:
      "https://github.com/matheusgit1/fullstack-challenge/blob/main/crash-game/main%20screen.png?raw=true",
    techStack: [
      "NextJs",
      "NestJS",
      "React",
      "WebSocket",
      "PostgreSQL",
      "RabbitMQ",
      "Jest",
      "Keycloak",
      "Kong Proxy",
      "Docker",
      "Typescript",
    ],
    keyFeatures: [
      "Real-time multiplayer",
      "Provably Fair algorithm",
      "10k concurrent users",
      "Event-driven architecture",
    ],
    metrics: [
      { label: "Concurrent Users", value: "10,000+" },
      { label: "Latency", value: "<50ms" },
      { label: "Uptime", value: "99.99%" },
      { label: "Daily Transactions", value: "100K+" },
    ],
    github: "https://github.com/matheusgit1/fullstack-challenge",
    live: "https://crash-game-demo.com",

    details: {
      overview: `Crash Game is a real-time multiplayer betting platform developed for Jungle Gaming, a software house specialized in iGaming. The system supports thousands of concurrent players with real-time WebSocket synchronization, OIDC authentication using Keycloak, and asynchronous inter-service communication through RabbitMQ.`,

      architecture: `The system is divided into two main bounded contexts: Game Service (manages rounds, bets, and crash logic) and Wallet Service (manages balances and transactions). Communication between them is asynchronous via a message broker, ensuring eventual consistency and high availability.`,

      challenges: [
        "Ensuring consistency between Game and Wallet services with asynchronous communication",
        "Implementing a provably fair algorithm that players can verify",
        "Synchronizing game state in real time for thousands of clients",
        "Preventing race conditions in simultaneous bets",
        "Maintaining monetary precision without floating point errors",
      ],

      solutions: [
        "Implemented saga pattern with compensations for rollbacks",
        "HMAC-SHA256 hash chain with server/client side seeds",
        "Redis Pub/Sub for horizontally scalable broadcasting",
        "Optimistic locking + atomic transactions in PostgreSQL",
        "Use of BIGINT for cents and Decimal.js library",
      ],

      images: [
        "https://github.com/matheusgit1/fullstack-challenge/blob/main/crash-game/main%20screen.png?raw=true",
        "https://github.com/matheusgit1/fullstack-challenge/blob/main/crash-game/login.png?raw=true",
        "https://github.com/matheusgit1/fullstack-challenge/blob/main/crash-game/bets.png?raw=true",
        "https://github.com/matheusgit1/fullstack-challenge/blob/main/crash-game/round%20list.png?raw=true",
        "https://github.com/matheusgit1/fullstack-challenge/blob/main/crash-game/round%20audit%201%20-%201.png?raw=true",
        "https://github.com/matheusgit1/fullstack-challenge/blob/main/crash-game/round%20audit%201%20-%202.png?raw=true",
        "https://github.com/matheusgit1/fullstack-challenge/blob/main/crash-game/round%20audit%201%20-%203.png?raw=true",
      ],

      diagrams: [],

      fullTechStack: {
        frontend: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Socket.io Client",
          "TanStack Query",
          "Zustand",
        ],
        backend: [
          "NestJS",
          "TypeScript",
          "WebSocket Gateway",
          "TypeORM",
          "JWT Authentication",
          "Keycloak",
          "RabbitMQ",
          "Jest",
        ],
        infrastructure: [
          "PostgreSQL",
          "RabbitMQ",
          "Keycloak",
          "Kong API Gateway",
          "Docker",
        ],
        testing: ["Vitest", "Supertest", "React Testing Library", "Playwright"],
      },

      features: [
        {
          title: "Real-time Multiplayer",
          description:
            "Instant synchronization among all players via WebSocket with optimized broadcasting.",
          implementation: "Redis Pub/Sub + Socket.io with round-based rooms",
        },
        {
          title: "Provably Fair System",
          description:
            "Cryptographic algorithm allowing players to verify the integrity of each round.",
          implementation: "HMAC-SHA256 hash chain + server/client side seeds",
        },
        {
          title: "Event-driven Architecture",
          description:
            "Asynchronous communication between microservices ensuring eventual consistency.",
          implementation:
            "RabbitMQ + Outbox pattern with retry and dead letter queue",
        },
        {
          title: "Enterprise Authentication",
          description:
            "OIDC authentication system with support for social logins and refresh tokens.",
          implementation: "Keycloak + JWT with PKCE flow",
        },
        {
          title: "Horizontal Scaling",
          description:
            "Architecture that allows each service to scale horizontally independently.",
          implementation: "Docker Compose + Redis Pub/Sub + Stateless services",
        },
        {
          title: "Monetary Precision",
          description:
            "Financial system with no loss of precision and atomic transactions.",
          implementation: "BIGINT for cents + Decimal.js + Optimistic locking",
        },
      ],
    },
  },
  {
    id: "qr-code-studio",
    title: "QR Code Studio",
    shortDescription:
      "Custom QR Code creation studio with design options, colors, and various output formats.",
    description:
      "Web application for generating dynamic and customized QR codes, allowing users to control size, colors, format, and content, with local history of creations.",
    image:
      "https://github.com/matheusgit1/SUPRANET-DEV-TEST/blob/main/qr%20codes/img1.png?raw=true",
    techStack: [
      "Nuxt 4",
      "Vue 3",
      "Pinia",
      "TypeScript",
      "Bun",
      "Docker",
      "LocalStorage",
      "Composition API",
    ],
    keyFeatures: [
      "Custom QR Code",
      "Local history",
      "Hybrid SSR/SPA",
      "Strong typing",
    ],
    metrics: [
      { label: "Build Time", value: "<10s" },
      { label: "Bundle Size", value: "~150KB" },
      { label: "Response Time", value: "<200ms" },
      { label: "Storage", value: "LocalStorage" },
    ],
    github: "https://github.com/matheusgit1/SUPRANET-DEV-TEST",
    live: "https://qr-code-studio.vercel.app",

    details: {
      overview: `QR Code Studio is a web application developed as part of the Supranet selection process. It allows users to create fully customized QR codes, controlling everything from content to visual details such as size, colors, and output format. The application focuses on user experience, providing real-time preview and local history of creations.`,

      architecture: `The application uses Nuxt 4 in hybrid mode (SSR/SPA), ensuring performance and SEO when needed. Global state is managed by Pinia store with automatic persistence in localStorage to preserve history across sessions. QR code generation is done via the external goQR.me API, with the URL built dynamically based on user choices.`,

      challenges: [
        "Integrating Nuxt 4 SSR with dynamic Canvas/QR Code manipulation",
        "Persisting history without a backend (pure frontend)",
        "Ensuring that inverted colors (e.g., dark background) still produce scannable QR codes",
        "Handling API errors and invalid parameters in a user-friendly way",
        "Maintaining strong typing between store, components, and external API",
      ],

      solutions: [
        "Client-side rendering only for interactive components + loading fallback",
        "Pinia store with persistence plugin synced to localStorage",
        "Contrast validation and fallback to default colors when needed",
        "Try/catch with contextual messages + placeholder fallback",
        "Dedicated type interfaces for goQR.me API parameters",
      ],

      images: [
        "https://github.com/matheusgit1/SUPRANET-DEV-TEST/blob/main/qr%20codes/img1.png?raw=true",
        "https://github.com/matheusgit1/SUPRANET-DEV-TEST/blob/main/qr%20codes/img2.png?raw=true",
        "https://github.com/matheusgit1/SUPRANET-DEV-TEST/blob/main/qr%20codes/img3.png?raw=true",
      ],

      diagrams: [],

      fullTechStack: {
        frontend: [
          "Nuxt 4",
          "Vue 3 Composition API",
          "TypeScript",
          "Pinia",
          "Tailwind CSS",
          "VueUse",
        ],
        backend: ["Nuxt Server Engine", "API Routes (proxy)", "Bun runtime"],
        infrastructure: ["Docker", "Vercel/Netlify (deploy)", "GitHub Actions"],
        testing: ["Vitest", "Vue Test Utils", "Playwright (E2E)"],
      },

      features: [
        {
          title: "Custom QR Code",
          description:
            "Allows users to define content, size, colors, and output format with real-time preview.",
          implementation:
            "Dynamic URL to goQR.me API + reactive updates via form watchers",
        },
        {
          title: "Persistent Local History",
          description:
            "All creations are automatically saved in the browser, allowing reuse without data loss.",
          implementation:
            "Pinia store with persistence plugin synced to localStorage + CRUD actions",
        },
        {
          title: "Hybrid SSR/SPA",
          description:
            "Nuxt 4 delivers initial HTML server-side, but interactive components run on the client.",
          implementation:
            "ClientOnly directives + lazy loading of heavy components",
        },
        {
          title: "Strong Typing with TypeScript",
          description:
            "The entire codebase, including external API parameters, is strongly typed.",
          implementation:
            "Dedicated interfaces in types/ directory for goQR.me and Pinia store",
        },
        {
          title: "Reproducible Builds with Docker",
          description:
            "Consistent environment using Docker + Bun to ensure identical execution anywhere.",
          implementation:
            "Multi-stage Dockerfile with Bun + optimized .dockerignore",
        },
        {
          title: "Robust Error Handling",
          description:
            "User-friendly messages for network failures, invalid parameters, or API downtime.",
          implementation:
            "Try/catch + reactive error state + fallback UI with skeleton loading",
        },
      ],
    },
  },
  {
    id: "codelab",
    title: "CodeLab - Online Courses Platform",
    shortDescription:
      "Complete online courses platform with payment system, modern authentication, and cloud storage.",
    description:
      "Modern online courses platform built with Next.js 15, allowing course creation, management, and sales with integrated payment system (PIX/credit card), Clerk authentication, rich-text editor, and custom video player.",
    image:
      "https://github.com/matheusgit1/CODE-LAB/blob/main/imagens/cursos.png?raw=true",
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Clerk",
      "Prisma",
      "PostgreSQL",
      "Neon",
      "Cloudflare R2",
      "Asaas",
      "Tailwind CSS",
      "shadcn/ui",
      "TipTap",
      "Zustand",
      "TanStack Query",
      "Docker",
    ],
    keyFeatures: [
      "Integrated payment system",
      "Admin dashboard",
      "Rich-text editor",
      "Custom video player",
      "Ranking and gamification",
    ],
    metrics: [
      { label: "Technologies", value: "18+" },
      { label: "Database", value: "PostgreSQL/Neon" },
      { label: "Storage", value: "Cloudflare R2" },
      { label: "Gateway", value: "Asaas (PIX/Credit)" },
    ],
    github: "https://github.com/matheusgit1/CODE-LAB",
    live: "https://codelab-demo.vercel.app",

    details: {
      overview: `CodeLab is a complete online courses platform developed as a full-stack project using the latest market technologies. The platform allows course creation, management, and sales, featuring modern authentication via Clerk, integrated payment system with Asaas (PIX and credit card), cloud storage with Cloudflare R2, and a responsive UI built with shadcn/ui and Tailwind CSS.

Differentiators include a rich-text editor (TipTap), custom video player (VidStack), user ranking, comment and rating system, real-time notifications, and a full administrative dashboard.`,

      architecture: `The application follows the modern Next.js 15 architecture with App Router, using Server Components for performance and Client Components for interactivity. The PostgreSQL database is managed via Neon (serverless), with Prisma as the ORM for type-safe database access.

Authentication is delegated to Clerk, which manages sessions, webhooks, and user synchronization with the local database. File storage (thumbnails, videos, materials) is handled by Cloudflare R2 (S3-compatible), with uploads via presigned URLs.

The payment system integrates with Asaas via webhooks for processing PIX and credit card payments, automatically updating enrollment status. During local development, ngrok is used to expose webhooks locally.`,

      challenges: [
        "Synchronizing Clerk users with local database via webhooks",
        "Implementing large file uploads (videos) to Cloudflare R2",
        "Processing PIX and credit card payments with asynchronous webhook confirmation",
        "Building a rich-text editor with embedded image uploads",
        "Ensuring performance with SSR/SSG on course listing pages",
        "Implementing a video player with progress tracking and automatic saving",
      ],

      solutions: [
        "Clerk webhooks + Prisma upsert to maintain consistency",
        "Chunked uploads + R2 presigned URLs + retry mechanism",
        "Asaas webhook + status machine (pending/paid/failed/canceled) + idempotency keys",
        "TipTap + custom extension for upload via R2 + paste/drag-and-drop",
        "Static pages with ISR (Incremental Static Regeneration) + revalidation every 60s",
        "VidStack + Intersection Observer + API routes to save progress every 10s",
      ],

      images: [
        "https://github.com/matheusgit1/CODE-LAB/blob/main/imagens/login.png?raw=true",
        "https://github.com/matheusgit1/CODE-LAB/blob/main/imagens/cursos.png?raw=true",
        "https://github.com/matheusgit1/CODE-LAB/blob/main/imagens/cursos%202.png?raw=true",
        "https://github.com/matheusgit1/CODE-LAB/blob/main/imagens/checkout.png?raw=true",
      ],

      diagrams: [],

      fullTechStack: {
        frontend: [
          "Next.js 15 (App Router)",
          "TypeScript",
          "Tailwind CSS",
          "shadcn/ui",
          "Radix UI",
          "Zustand",
          "TanStack Query",
          "React Hook Form",
          "Zod",
          "TipTap (editor)",
          "VidStack (player)",
        ],
        backend: [
          "Next.js API Routes",
          "Prisma ORM",
          "PostgreSQL (Neon)",
          "Clerk Auth",
          "Asaas API (payments)",
          "Cloudflare R2 (storage)",
          "Webhooks (Clerk/Asaas)",
          "Ngrok (tunneling)",
        ],
        infrastructure: [
          "Docker Compose",
          "PostgreSQL container",
          "PgAdmin container",
          "Vercel (deploy)",
          "Cloudflare R2",
          "Neon (serverless DB)",
        ],
        testing: ["Jest", "React Testing Library", "Playwright (E2E)"],
      },

      features: [
        {
          title: "Modern Authentication with Clerk",
          description:
            "Complete authentication system supporting social login (Google, GitHub), magic links, and session management.",
          implementation:
            "Clerk Next.js SDK + webhooks for Prisma sync + middleware for protected routes",
        },
        {
          title: "Payment System (PIX/Credit Card)",
          description:
            "Full integration with Asaas allowing checkout via PIX or credit card, with asynchronous webhook confirmation.",
          implementation:
            "API Routes for charge creation + Asaas webhook + status machine + email sending with certificate",
        },
        {
          title: "Rich-Text Editor (TipTap)",
          description:
            "Content editor with rich formatting support, image uploads, video embeds, and markdown.",
          implementation:
            "TipTap + custom extension for R2 upload + paste/drag-and-drop + live preview",
        },
        {
          title: "Custom Video Player",
          description:
            "Player with custom controls, progress saving, playback speed, and adaptive quality.",
          implementation:
            "VidStack + API routes for progress + localStorage + hotkeys",
        },
        {
          title: "Admin Dashboard",
          description:
            "Complete panel for managing courses, lessons, students, sales, and analytics with charts.",
          implementation:
            "Clerk middleware protected routes + Server Actions + TanStack Query for real-time updates",
        },
        {
          title: "Ranking and Gamification",
          description:
            "Points, achievements, and ranking system based on lesson completion and reviews.",
          implementation:
            "Optimized Prisma queries + event hooks + leaderboard with Redis caching",
        },
      ],
    },
  },
  {
    id: "ecommerce-dotnet",
    title: "Ecommerce Microservices .NET 8",
    shortDescription:
      "Complete e-commerce platform with microservices architecture, CQRS, Event-Driven, gRPC, and API Gateway.",
    description:
      "Distributed e-commerce system built with .NET 8, implementing independent microservices for Catalog, Basket, Discount, and Ordering. Uses advanced patterns such as CQRS, Vertical Slice Architecture, Event-Driven with RabbitMQ, synchronous gRPC communication, and YARP API Gateway.",
    image:
      "https://github.com/matheusgit1/Ecommerce-Shop/blob/main/src/Images/aplica%C3%A7%C3%A3o.png?raw=true",
    techStack: [
      ".NET 8",
      "C# 12",
      "ASP.NET Core",
      "gRPC",
      "YARP Gateway",
      "RabbitMQ",
      "Redis",
      "PostgreSQL",
      "SQL Server",
      "MassTransit",
      "MediatR",
      "Docker",
    ],
    keyFeatures: [
      "Distributed microservices",
      "CQRS + Vertical Slice",
      "Event-Driven Architecture",
      "YARP API Gateway",
      "Distributed Redis cache",
      "Observability with OpenTelemetry",
    ],
    metrics: [
      { label: "Microservices", value: "4" },
      { label: "Databases", value: "4 types" },
      { label: "Communication", value: "gRPC + RabbitMQ" },
      { label: "Cache", value: "Redis" },
    ],
    github: "https://github.com/matheusgit1/Ecommerce-Shop",
    live: "https://ecommerce-shop-demo.com",

    details: {
      overview: `This project implements a complete e-commerce system using microservices architecture with .NET 8. Each business domain (Catalog, Basket, Discount, Ordering) is an independent microservice with its own database and specific responsibilities.

The system demonstrates expertise in advanced patterns: CQRS for command/query separation, Vertical Slice Architecture to organize features by resource, Event-Driven Architecture for asynchronous inter-service communication, and gRPC for high-performance synchronous communication.`,

      architecture: `The architecture consists of 4 main microservices:

1. **Catalog Service**: Manages products and categories. Uses PostgreSQL with Marten (Document DB) and CQRS pattern via MediatR.

2. **Basket Service**: Manages user shopping carts. Uses Redis as distributed cache and consumes Discount Service via gRPC.

3. **Discount Service**: gRPC service for discount calculations. Uses SQLite with Entity Framework Core.

4. **Ordering Service**: Manages orders and event consumption. Implements DDD, Clean Architecture, and consumes RabbitMQ via MassTransit.

**Communication**: 
- Synchronous: Basket ↔ Discount via gRPC
- Asynchronous: Basket → Ordering via RabbitMQ (BasketCheckout event)

**API Gateway**: YARP unifies access to microservices, applies rate limiting, and routing.`,

      challenges: [
        "Coordinating synchronous (gRPC) and asynchronous (RabbitMQ) communication between services",
        "Managing eventual consistency across services and different databases",
        "Implementing distributed cache (Redis) with Cache-Aside pattern in Basket Service",
        "Handling transactions and automatic migrations across 4 different databases (PostgreSQL, SQL Server, SQLite, Redis)",
        "Configuring dynamic routing and rate limiting in YARP API Gateway",
        "Implementing telemetry and distributed tracing with OpenTelemetry",
      ],

      solutions: [
        "gRPC for low-latency discounts + MassTransit with RabbitMQ for events",
        "Saga pattern with compensations and outbox pattern in Ordering Service",
        "Proxy/Decorator pattern with IDistributedCache and Redis",
        "Entity Framework Core with auto-migration + Marten for Document DB",
        "Declarative route configuration in appsettings.json + rate limiting policies",
        "OpenTelemetry Collector + Jaeger + Prometheus + Grafana",
      ],

      images: [
        "https://github.com/matheusgit1/Ecommerce-Shop/blob/main/src/Images/aplica%C3%A7%C3%A3o.png?raw=true",
        "https://github.com/matheusgit1/Ecommerce-Shop/blob/main/src/Images/arquitetura.png?raw=true",
        "https://github.com/matheusgit1/Ecommerce-Shop/blob/main/src/Images/shop.png?raw=true",
        "https://github.com/matheusgit1/Ecommerce-Shop/blob/main/src/Images/telemetry.png?raw=true",
      ],

      diagrams: [],

      fullTechStack: {
        frontend: [
          "ASP.NET Core Razor Pages",
          "Bootstrap 5",
          "JavaScript",
          "HTML5/CSS3",
        ],
        backend: [
          ".NET 8",
          "C# 12",
          "ASP.NET Core Web API",
          "gRPC",
          "MassTransit",
          "MediatR",
          "FluentValidation",
          "Mapster",
          "YARP API Gateway",
        ],
        infrastructure: [
          "PostgreSQL (Catalog/Basket)",
          "SQL Server (Ordering)",
          "SQLite (Discount)",
          "Redis (Cache)",
          "RabbitMQ (Message Broker)",
          "Docker Compose",
          "OpenTelemetry",
        ],
        testing: ["xUnit", "Moq", "FluentAssertions"],
      },

      features: [
        {
          title: "Distributed Microservices",
          description:
            "4 independent services with dedicated databases and unique responsibilities.",
          implementation:
            "Catalog (PostgreSQL/Marten), Basket (PostgreSQL/Redis), Discount (SQLite/gRPC), Ordering (SQL Server/DDD)",
        },
        {
          title: "CQRS + Vertical Slice",
          description:
            "Separation of commands and queries with organization by feature instead of technical layers.",
          implementation:
            "MediatR + Feature Folders + FluentValidation for each operation",
        },
        {
          title: "Hybrid Communication",
          description:
            "gRPC for high-performance synchronous calls and RabbitMQ for asynchronous events.",
          implementation:
            "Basket ↔ Discount via gRPC; Basket → Ordering via MassTransit/RabbitMQ",
        },
        {
          title: "YARP API Gateway",
          description:
            "Reverse proxy with dynamic routing, rate limiting, and gateway policies.",
          implementation:
            "YARP (Yet Another Reverse Proxy) from Microsoft with declarative configuration",
        },
        {
          title: "Distributed Cache",
          description:
            "Redis with Cache-Aside pattern to improve basket performance.",
          implementation:
            "IDistributedCache + Redis + Proxy/Decorator pattern in Basket Service",
        },
        {
          title: "Full Observability",
          description:
            "Distributed tracing, metrics, and centralized logging with OpenTelemetry.",
          implementation:
            "OpenTelemetry Collector + Jaeger (tracing) + Prometheus (metrics) + Grafana",
        },
      ],
    },
  },
];
