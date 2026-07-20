import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "flashconcurseiro",
    title: "FlashConcurseiro",
    shortDescription:
      "App de flashcards com arquitetura moderna, sincronização em tempo real e sistema de repetição espaçada para concursos públicos.",
    description:
      "Plataforma mobile de estudos com flashcards, desenvolvida com React Native (Expo) e Firebase. O aplicativo permite criar, revisar e acompanhar o progresso em flashcards de concursos públicos, com arquitetura escalável, autenticação, sincronização em tempo real e sistema de repetição espaçada para otimizar a retenção de conhecimento.",
    image:
      "https://github.com/matheusgit1/FlashConcurseiro/blob/main/screenshots/screenshot_3.jpeg?raw=true",
    techStack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Firebase",
      "Firestore",
      "Firebase Auth",
      "Expo Router",
      "React Native Reanimated",
    ],
    keyFeatures: [
      "Sistema de repetição espaçada (ESR)",
      "Sincronização em tempo real",
      "Offline-first",
      "Navegação com Expo Router",
      "Autenticação com Firebase",
    ],
    metrics: [
      { label: "Flashcards", value: "200+" },
      { label: "Disciplinas", value: "6" },
      { label: "Concursos", value: "1" },
      { label: "Usuários", value: "100+" },
    ],
    github: "https://github.com/matheusgit1/flashconcurseiro",
    live: "https://flashconcurseiro-demo.com",
    details: {
      overview:
        "FlashConcurseiro é um aplicativo mobile desenvolvido para otimizar os estudos de concursos públicos por meio de flashcards. O sistema utiliza o algoritmo de repetição espaçada (ESR) para revisões inteligentes, garantindo maior retenção de conteúdo com base na curva do esquecimento de Ebbinghaus.\n\nA aplicação foi construída com React Native (Expo), TypeScript e Firebase, oferecendo autenticação, sincronização em tempo real e capacidade offline-first. A arquitetura é modular, com separação de responsabilidades entre telas, serviços e estados, garantindo manutenibilidade e escalabilidade.",
      architecture:
        "A arquitetura do FlashConcurseiro segue o padrão de separação de responsabilidades com as seguintes camadas:\n\n1. **Camada de Apresentação**: Telas desenvolvidas com React Native e Expo Router para navegação híbrida (tabs + stack). O estado global dos usuários é gerenciado por Context API.\n\n2. **Camada de Serviços**: Integração com Firebase (Auth, Firestore) para persistência e autenticação. Serviços específicos para cada entidade (flashcards, concursos, disciplinas).\n\n3. **Camada de Modelagem de Dados**: Entidades tipadas com TypeScript, garantindo segurança e consistência.\n\n4. **Camada de Reutilização**: Componentes UI e estilos globais via tema centralizado, garantindo consistência visual.\n\n**Fluxo de navegação**: O usuário começa na tela de autenticação (login/registro), depois navega por uma estrutura de abas principais (Início, Concursos, Flashcards, Estatísticas, Perfil) e pode acessar detalhes (disciplinas, concursos, flashcards) via stack de navegação aninhada.\n\n**Sincronização em tempo real**: O Firestore oferece atualizações instantâneas, permitindo que múltiplos dispositivos visualizem o mesmo progresso.",
      challenges: [
        "Projetar uma navegação híbrida (tabs + stack) que fosse intuitiva e escalável para o usuário",
        "Implementar filtros dinâmicos por concurso, disciplina e dificuldade na listagem de flashcards",
        "Criar um sistema de revisão com swipe (deslizar) que oferecesse feedback visual imediato",
        "Gerenciar o estado de autenticação e sincronização com Firebase durante a navegação",
        "Construir um sistema de progresso personalizado que mostrasse evolução por disciplina e concurso",
      ],
      solutions: [
        "Expo Router com navegação aninhada: abas principais + stacks para detalhes, garantindo fluxo contínuo",
        "Filtros dinâmicos implementados com React hooks, atualizando a lista automaticamente a cada alteração",
        "Animações com React Native Reanimated para feedback tátil e visual durante o swipe",
        "Context API para estado de autenticação + listeners do Firestore para dados em tempo real",
        "Barra de progresso customizada com métricas por disciplina e concurso, baseada em dados do Firestore",
      ],
      images: [
        "https://github.com/matheusgit1/FlashConcurseiro/blob/main/screenshots/screenshot_1.jpeg?raw=true",
        "https://github.com/matheusgit1/FlashConcurseiro/blob/main/screenshots/screenshot_2.jpeg?raw=true",
        "https://github.com/matheusgit1/FlashConcurseiro/blob/main/screenshots/screenshot_3.jpeg?raw=true",
        "https://github.com/matheusgit1/FlashConcurseiro/blob/main/screenshots/screenshot_4.jpeg?raw=true",
        "https://github.com/matheusgit1/FlashConcurseiro/blob/main/screenshots/screenshot_5.jpeg?raw=true",
        "https://github.com/matheusgit1/FlashConcurseiro/blob/main/screenshots/screenshot_6.jpeg?raw=true",
        "https://github.com/matheusgit1/FlashConcurseiro/blob/main/screenshots/screenshot_7.jpeg?raw=true",
        "https://github.com/matheusgit1/FlashConcurseiro/blob/main/screenshots/screenshot_8.jpeg?raw=true",
        "https://github.com/matheusgit1/FlashConcurseiro/blob/main/screenshots/screenshot_9.jpeg?raw=true",
      ],
      diagrams: [],
      fullTechStack: {
        frontend: [
          "React Native",
          "Expo 51",
          "TypeScript",
          "Expo Router",
          "React Native Reanimated",
          "React Native Gesture Handler",
          "React Native Safe Area Context",
        ],
        backend: [
          "Firebase Authentication",
          "Firestore",
          "Firebase Security Rules",
          "Firebase Admin SDK",
        ],
        infrastructure: [
          "Firebase Hosting",
          "EAS Build",
          "Docker (ambiente local)",
          "Google Cloud Platform",
        ],
        testing: ["Jest", "React Native Testing Library", "Detox"],
      },
      features: [
        {
          title: "Sistema de Repetição Espaçada",
          description:
            "Algoritmo inteligente que agenda revisões com base no desempenho do usuário, otimizando a retenção de conhecimento.",
          implementation:
            "Função de agendamento que calcula a próxima revisão com base na dificuldade e acertos/erros do usuário.",
        },
        {
          title: "Navegação Híbrida",
          description:
            "Navegação fluida combinando abas principais com stacks aninhadas para detalhes, garantindo experiência nativa.",
          implementation:
            "Expo Router com navegação aninhada: abas principais + stacks para detalhes.",
        },
        {
          title: "Filtros Dinâmicos",
          description:
            "Sistema de filtros por concurso, disciplina e dificuldade com atualização em tempo real da lista de flashcards.",
          implementation:
            "Filtros dinâmicos implementados com React hooks, atualizando a lista automaticamente a cada alteração.",
        },
        {
          title: "Sistema de Revisão com Swipe",
          description:
            "Interface de revisão com gestos de deslizar para esquerda (erro) ou direita (acerto), com feedback visual imediato.",
          implementation:
            "Animações com React Native Reanimated para feedback tátil e visual durante o swipe.",
        },
        {
          title: "Autenticação com Firebase",
          description:
            "Sistema de login e registro com Firebase, integrando autenticação por email/senha e Google.",
          implementation:
            "Firebase Authentication com Context API para gerenciamento de estado global.",
        },
      ],
    },
  },
  {
    id: "crash-game",
    title: "Crash Game Engine",
    shortDescription:
      "Multiplayer real-time betting platform with provably fair mechanics and enterprise-grade authentication.",
    description:
      "Plataforma de jogo multiplayer em tempo real que suporta 10.000+ conexões simultâneas, com sistema provably fair e arquitetura baseada em eventos.",
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
      overview: `O Crash Game é uma plataforma de jogo multiplayer em tempo real desenvolvida para a Jungle Gaming, 
      uma software house especializada em iGaming. O sistema suporta milhares de jogadores simultâneos com 
      sincronização em tempo real via WebSocket, autenticação OIDC com Keycloak, e comunicação assíncrona 
      entre microsserviços via RabbitMQ.`,

      architecture: `O sistema é dividido em dois bounded contexts principais: Game Service (gerencia rodadas, 
      apostas e lógica do crash) e Wallet Service (gerencia saldos e transações). A comunicação entre eles é 
      assíncrona via message broker, garantindo consistência eventual e alta disponibilidade.`,

      challenges: [
        "Garantir consistência entre Game e Wallet services com comunicação assíncrona",
        "Implementar algoritmo provably fair verificável pelo jogador",
        "Sincronizar estado do jogo em tempo real para milhares de clientes",
        "Prevenir race conditions em apostas simultâneas",
        "Manter precisão monetária sem ponto flutuante",
      ],

      solutions: [
        "Implementação de saga pattern com compensações para rollback",
        "Hash chain com HMAC-SHA256 + seeds server/client side",
        "Redis Pub/Sub para broadcast horizontalmente escalável",
        "Otimistic locking + transações atômicas no PostgreSQL",
        "Uso de BIGINT para centavos e biblioteca Decimal.js",
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
            "Sincronização instantânea entre todos os jogadores via WebSocket com broadcast otimizado.",
          implementation: "Redis Pub/Sub + Socket.io com rooms por rodada",
        },
        {
          title: "Provably Fair System",
          description:
            "Algoritmo criptográfico que permite jogadores verificarem a integridade de cada rodada.",
          implementation:
            "Hash chain com HMAC-SHA256 + seeds server/client side",
        },
        {
          title: "Event-driven Architecture",
          description:
            "Comunicação assíncrona entre microsserviços garantindo consistência eventual.",
          implementation:
            "RabbitMQ + Outbox pattern com retry e dead letter queue",
        },
        {
          title: "Enterprise Authentication",
          description:
            "Sistema de autenticação OIDC com suporte a social logins e refresh tokens.",
          implementation: "Keycloak + JWT com PKCE flow",
        },
        {
          title: "Horizontal Scaling",
          description:
            "Arquitetura que permite escalar horizontalmente cada serviço independentemente.",
          implementation: "Docker Compose + Redis Pub/Sub + Stateless services",
        },
        {
          title: "Monetary Precision",
          description:
            "Sistema financeiro sem perda de precisão com transações atômicas.",
          implementation:
            "BIGINT para centavos + Decimal.js + Otimistic locking",
        },
      ],
    },
  },
  {
    id: "qr-code-studio",
    title: "QR Code Studio",
    shortDescription:
      "Estúdio de criação de QR Codes personalizados com opções de design, cores e formatos variados.",
    description:
      "Aplicação web para geração de QR Codes dinâmicos e personalizados, permitindo ao usuário controlar tamanho, cores, formato e conteúdo do QR Code com histórico local das criações.",
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
      "QR Code personalizado",
      "Histórico local",
      "SSR/SPA híbrido",
      "Tipagem forte",
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
      overview: `O QR Code Studio é uma aplicação web desenvolvida como parte do processo seletivo da Supranet. 
    O projeto permite aos usuários criar QR Codes totalmente personalizados, controlando desde o conteúdo 
    até detalhes visuais como tamanho, cores e formato de saída. A aplicação foi construída com foco em 
    experiência do usuário, oferecendo preview em tempo real e histórico local das criações.`,

      architecture: `A aplicação utiliza Nuxt 4 em modo híbrido (SSR/SPA), garantindo performance e SEO 
    quando necessário. O estado global é gerenciado pelo Pinia Store com persistência automática em 
    localStorage para preservar o histórico entre sessões. A geração do QR Code é feita via API externa 
    do goQR.me, com a URL sendo montada dinamicamente baseada nas escolhas do usuário.`,

      challenges: [
        "Integrar SSR do Nuxt 4 com manipulação dinâmica de Canvas/QR Code",
        "Persistir histórico sem backend (apenas frontend)",
        "Garantir que cores invertidas (ex: fundo escuro) gerem QR Codes escaneáveis",
        "Tratar erros de API e parâmetros inválidos de forma amigável",
        "Manter tipagem forte entre store, componentes e API externa",
      ],

      solutions: [
        "Uso de client-side rendering apenas para componentes interativos + fallback de loading",
        "Pinia store com plugin de persistência syncado com localStorage",
        "Validação de contraste e fallback para cores padrão quando necessário",
        "Try/catch com mensagens contextuais + fallback de placeholder",
        "Interface de tipagem dedicada para parâmetros da API goQR.me",
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
          title: "QR Code Personalizado",
          description:
            "Permite ao usuário definir conteúdo, tamanho, cores e formato de saída do QR Code com preview em tempo real.",
          implementation:
            "URL dinâmica para API goQR.me + atualização reativa via watch nos formulários",
        },
        {
          title: "Histórico Local Persistente",
          description:
            "Todas as criações são salvas automaticamente no navegador, permitindo reuso sem perder dados.",
          implementation:
            "Pinia store com plugin de persistência syncado com localStorage + ações para CRUD",
        },
        {
          title: "SSR/SPA Híbrido",
          description:
            "Nuxt 4 entrega HTML inicial no servidor, mas componentes interativos rodam no cliente.",
          implementation:
            "Directivas ClientOnly + lazy loading de componentes pesados",
        },
        {
          title: "Tipagem Forte com TypeScript",
          description:
            "Todo o código, incluindo parâmetros da API externa, é fortemente tipado.",
          implementation:
            "Interfaces dedicadas no diretório types/ para goQR.me e Pinia store",
        },
        {
          title: "Build Reprodutível com Docker",
          description:
            "Ambiente consistente via Docker + Bun para garantir mesma execução em qualquer lugar.",
          implementation:
            "Dockerfile multi-stage com Bun + .dockerignore otimizado",
        },
        {
          title: "Tratamento de Erros Robusto",
          description:
            "Mensagens amigáveis para falhas de rede, parâmetros inválidos ou API fora do ar.",
          implementation:
            "Try/catch + estado reativo de erro + fallback UI com skeleton loading",
        },
      ],
    },
  },
  {
    id: "codelab",
    title: "CodeLab - Plataforma de Cursos Online",
    shortDescription:
      "Plataforma completa de cursos online com sistema de pagamentos, autenticação moderna e armazenamento em nuvem.",
    description:
      "Plataforma moderna de cursos online desenvolvida com Next.js 15, permitindo criação, gerenciamento e venda de cursos com sistema de pagamentos integrado (PIX/cartão), autenticação Clerk, editor rich-text e player de vídeo personalizado.",
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
      "Sistema de pagamentos integrado",
      "Dashboard administrativo",
      "Editor de rich text",
      "Player de vídeo customizado",
      "Ranking e gamificação",
    ],
    metrics: [
      { label: "Tecnologias", value: "18+" },
      { label: "Banco de Dados", value: "PostgreSQL/Neon" },
      { label: "Storage", value: "Cloudflare R2" },
      { label: "Gateway", value: "Asaas (PIX/Cartão)" },
    ],
    github: "https://github.com/matheusgit1/CODE-LAB",
    live: "https://codelab-demo.vercel.app",

    details: {
      overview: `O CodeLab é uma plataforma completa de cursos online desenvolvida como projeto full-stack utilizando as tecnologias mais recentes do mercado. A plataforma permite a criação, gerenciamento e venda de cursos, com autenticação moderna via Clerk, sistema de pagamentos integrado com Asaas (PIX e cartão de crédito), armazenamento em nuvem com Cloudflare R2 e interface responsiva construída com shadcn/ui e Tailwind CSS.

    Diferenciais incluem editor de texto rico (TipTap), player de vídeo customizado (VidStack), ranking de usuários, sistema de comentários e avaliações, notificações em tempo real e dashboard administrativo completo.`,

      architecture: `A aplicação segue a arquitetura moderna do Next.js 15 com App Router, utilizando Server Components para performance e Client Components para interatividade. O banco de dados PostgreSQL é gerenciado via Neon (serverless), com Prisma como ORM para type-safe database access.

    A autenticação é delegada ao Clerk, que gerencia sessões, webhooks e sincronização de usuários com o banco local. O armazenamento de arquivos (thumbnails, vídeos, materiais) é feito no Cloudflare R2 (S3-compatible), com uploads via presigned URLs.

    O sistema de pagamentos integra com Asaas via webhooks para processamento de PIX e cartão de crédito, atualizando automaticamente o status de matrículas. Durante desenvolvimento local, ngrok é usado para expor webhooks localmente.`,

      challenges: [
        "Sincronizar usuários do Clerk com banco de dados local via webhooks",
        "Implementar upload de arquivos grande (vídeos) para Cloudflare R2",
        "Processar pagamentos PIX e cartão com confirmação assíncrona via webhook",
        "Construir editor rich-text com upload de imagens embutidas",
        "Garantir performance com SSR/SSG em páginas de listagem de cursos",
        "Implementar player de vídeo com marcação de progresso e salvamento automático",
      ],

      solutions: [
        "Webhooks Clerk + Prisma upsert para manter consistência",
        "Upload em partes (chunked) + presigned URLs R2 + retry mechanism",
        "Webhook Asaas + status machine (pending/paid/failed/canceled) + idempotency keys",
        "TipTap + custom extension para upload via R2 + paste/drag-and-drop",
        "Páginas estáticas com ISR (Incremental Static Regeneration) + revalidação a cada 60s",
        "VidStack + Intersection Observer + API routes para salvar progresso a cada 10s",
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
          "Asaas API (pagamentos)",
          "Cloudflare R2 (storage)",
          "Webhooks (Clerk/Asaas)",
          "Ngrok (tunelamento)",
        ],
        infrastructure: [
          "Docker Compose",
          "PostgreSQL container",
          "PgAdmin container",
          "Vercel (deploy)",
          "Cloudflare R2",
          "Neon (DB serverless)",
        ],
        testing: ["Jest", "React Testing Library", "Playwright (E2E)"],
      },

      features: [
        {
          title: "Autenticação Moderna com Clerk",
          description:
            "Sistema completo de autenticação com suporte a social login (Google, GitHub), magic links e gerenciamento de sessões.",
          implementation:
            "Clerk Next.js SDK + webhooks para sync com Prisma + middleware para rotas protegidas",
        },
        {
          title: "Sistema de Pagamentos (PIX/Cartão)",
          description:
            "Integração completa com Asaas permitindo checkout com PIX ou cartão de crédito, com confirmação assíncrona via webhook.",
          implementation:
            "API Routes para criação de cobranças + webhook Asaas + status machine + envio de e-mail com certificado",
        },
        {
          title: "Editor Rich-Text (TipTap)",
          description:
            "Editor de conteúdo com suporte a formatação rica, upload de imagens, embed de vídeos e markdown.",
          implementation:
            "TipTap + custom extension para upload via R2 + paste/drag-and-drop + live preview",
        },
        {
          title: "Player de Vídeo Customizado",
          description:
            "Player com controles personalizados, salvamento de progresso, velocidade de reprodução e qualidade adaptativa.",
          implementation:
            "VidStack + API routes para progresso + localStorage + hotkeys (teclado)",
        },
        {
          title: "Dashboard Administrativo",
          description:
            "Painel completo para gestão de cursos, aulas, alunos, vendas e análises com gráficos.",
          implementation:
            "Rotas protegidas com middleware Clerk + Server Actions + TanStack Query para real-time updates",
        },
        {
          title: "Ranking e Gamificação",
          description:
            "Sistema de pontos, conquistas e ranking baseado em conclusão de aulas e avaliações.",
          implementation:
            "Prisma queries otimizadas + hooks para eventos + leaderboard com Redis caching",
        },
      ],
    },
  },
  {
    id: "ecommerce-dotnet",
    title: "Ecommerce Microsserviços .NET 8",
    shortDescription:
      "Plataforma completa de e-commerce com arquitetura de microsserviços, CQRS, Event-Driven, gRPC e API Gateway.",
    description:
      "Sistema de e-commerce distribuído construído com .NET 8, implementando microsserviços independentes para Catálogo, Carrinho, Descontos e Pedidos. Utiliza padrões avançados como CQRS, Vertical Slice Architecture, Event-Driven com RabbitMQ, comunicação síncrona via gRPC e API Gateway com YARP.",
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
      "Microsserviços distribuídos",
      "CQRS + Vertical Slice",
      "Event-Driven Architecture",
      "API Gateway com YARP",
      "Cache distribuído com Redis",
      "Observabilidade com OpenTelemetry",
    ],
    metrics: [
      { label: "Microsserviços", value: "4" },
      { label: "Bancos de Dados", value: "4 tipos" },
      { label: "Comunicação", value: "gRPC + RabbitMQ" },
      { label: "Cache", value: "Redis" },
    ],
    github: "https://github.com/matheusgit1/Ecommerce-Shop",
    live: "https://ecommerce-shop-demo.com",

    details: {
      overview: `Este projeto implementa um e-commerce completo utilizando arquitetura de microsserviços com .NET 8. Cada domínio de negócio (Catálogo, Carrinho, Descontos, Pedidos) é um microsserviço independente, com seu próprio banco de dados e responsabilidades específicas.

O sistema demonstra domínio em padrões avançados: CQRS para separação de comandos e queries, Vertical Slice Architecture para organizar funcionalidades por recurso, Event-Driven Architecture para comunicação assíncrona entre serviços, e gRPC para comunicação síncrona de alta performance.`,

      architecture: `A arquitetura é composta por 4 microsserviços principais:

1. **Catalog Service**: Gerencia produtos e categorias. Utiliza PostgreSQL com Marten (Document DB) e padrão CQRS via MediatR.

2. **Basket Service**: Gerencia carrinho de compras do usuário. Utiliza Redis como cache distribuído e consome Discount Service via gRPC.

3. **Discount Service**: Serviço gRPC para cálculos de desconto. Utiliza SQLite com Entity Framework Core.

4. **Ordering Service**: Gerencia pedidos e consumo de eventos. Implementa DDD, Clean Architecture e consome RabbitMQ via MassTransit.

**Comunicação**: 
- Síncrona: Basket ↔ Discount via gRPC
- Assíncrona: Basket → Ordering via RabbitMQ (evento BasketCheckout)

**API Gateway**: YARP unifica acesso aos microsserviços, aplica rate limiting e roteamento.`,

      challenges: [
        "Coordenar comunicação síncrona (gRPC) com assíncrona (RabbitMQ) entre serviços",
        "Gerenciar consistência eventual entre serviços e bancos diferentes",
        "Implementar cache distribuído (Redis) com padrão Cache-Aside no Basket Service",
        "Manter transações e migrações automáticas entre 4 bancos diferentes (PostgreSQL, SQL Server, SQLite, Redis)",
        "Configurar roteamento dinâmico e rate limiting no YARP API Gateway",
        "Implementar telemetria e tracing distribuído com OpenTelemetry",
      ],

      solutions: [
        "gRPC para baixa latência em descontos + MassTransit com RabbitMQ para eventos",
        "Saga pattern com compensações e outbox pattern no Ordering Service",
        "Padrão Proxy + Decorator com IDistributedCache e Redis",
        "Entity Framework Core com auto-migração + Marten para Document DB",
        "Configuração declarativa de rotas no appsettings.json + rate limiting policies",
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
          title: "Microsserviços Distribuídos",
          description:
            "4 serviços independentes com bancos de dados dedicados e responsabilidades únicas.",
          implementation:
            "Catalog (PostgreSQL/Marten), Basket (PostgreSQL/Redis), Discount (SQLite/gRPC), Ordering (SQL Server/DDD)",
        },
        {
          title: "CQRS + Vertical Slice",
          description:
            "Separação de comandos e queries com organização por recurso ao invés de camadas técnicas.",
          implementation:
            "MediatR + Feature Folders + FluentValidation para cada operação",
        },
        {
          title: "Comunicação Híbrida",
          description:
            "gRPC para alta performance síncrona e RabbitMQ para eventos assíncrono.",
          implementation:
            "Basket ↔ Discount via gRPC; Basket → Ordering via MassTransit/RabbitMQ",
        },
        {
          title: "API Gateway com YARP",
          description:
            "Proxy reverso com roteamento dinâmico, rate limiting e políticas de gateway.",
          implementation:
            "YARP (Yet Another Reverse Proxy) da Microsoft com configuração declarativa",
        },
        {
          title: "Cache Distribuído",
          description:
            "Redis com padrão Cache-Aside para melhorar performance do carrinho.",
          implementation:
            "IDistributedCache + Redis + padrão Proxy/Decorator no Basket Service",
        },
        {
          title: "Observabilidade Completa",
          description:
            "Tracing distribuído, métricas e logs centralizados com OpenTelemetry.",
          implementation:
            "OpenTelemetry Collector + Jaeger (tracing) + Prometheus (métricas) + Grafana",
        },
      ],
    },
  },
];
