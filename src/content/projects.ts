import type { Locale } from "@/types/content";
import type { LocalizedProjects, Project } from "@/types/project";

const cantinhoGalleryPt = [
  [
    "Hero visual da marca",
    "Página inicial do Cantinho do Açaí com a identidade visual da marca e seus proprietários.",
    "wide",
    "/projects/cantinho-do-acai/cantinho-hero.png",
  ],
  [
    "Monte seu Açaí",
    "Tela do Cantinho do Açaí para montar um açaí tradicional com acompanhamentos.",
    "wide",
    "/projects/cantinho-do-acai/cantinho-monte-seu-acai.png",
  ],
  [
    "Escolhas da casa",
    "Seleção de produtos em destaque do Cantinho do Açaí.",
    "wide",
    "/projects/cantinho-do-acai/cantinho-escolhas-da-casa.png",
  ],
  [
    "Cardápio",
    "Cardápio do Cantinho do Açaí exibindo produtos, preços e opções de montagem.",
    "wide",
    "/projects/cantinho-do-acai/cantinho-cardapio.png",
  ],
  [
    "Checkout",
    "Checkout do Cantinho do Açaí com resumo do pedido e dados de entrega.",
    "wide",
    "/projects/cantinho-do-acai/cantinho-checkout.png",
  ],
  [
    "Painel administrativo",
    "Painel administrativo do Cantinho do Açaí para gestão de produtos.",
    "wide",
    "/projects/cantinho-do-acai/cantinho-admin.png",
  ],
  [
    "Home mobile",
    "Página inicial do Cantinho do Açaí em dispositivo móvel.",
    "mobile",
    "/projects/cantinho-do-acai/cantinho-mobile-home.png",
  ],
  [
    "Cardápio mobile",
    "Cardápio do Cantinho do Açaí em dispositivo móvel.",
    "mobile",
    "/projects/cantinho-do-acai/cantinho-mobile-cardapio.png",
  ],
  [
    "Checkout mobile",
    "Checkout do Cantinho do Açaí em dispositivo móvel.",
    "mobile",
    "/projects/cantinho-do-acai/cantinho-mobile-checkout.png",
  ],
  [
    "Painel administrativo mobile",
    "Painel administrativo do Cantinho do Açaí em dispositivo móvel.",
    "mobile",
    "/projects/cantinho-do-acai/cantinho-mobile-admin.png",
  ],
].map(([label, alt, layout, src]) => ({
  type: "image" as const,
  label,
  alt,
  layout: layout as "wide" | "mobile",
  src,
}));

const cantinhoGalleryEn = [
  [
    "Brand hero",
    "Cantinho do Açaí home page showing the brand identity and its owners.",
    "wide",
    "/projects/cantinho-do-acai/cantinho-hero.png",
  ],
  [
    "Build your açaí",
    "Cantinho do Açaí screen for building a traditional açaí with add-ons.",
    "wide",
    "/projects/cantinho-do-acai/cantinho-monte-seu-acai.png",
  ],
  [
    "House picks",
    "Cantinho do Açaí featured product selection.",
    "wide",
    "/projects/cantinho-do-acai/cantinho-escolhas-da-casa.png",
  ],
  [
    "Menu",
    "Cantinho do Açaí menu showing products, prices and customization options.",
    "wide",
    "/projects/cantinho-do-acai/cantinho-cardapio.png",
  ],
  [
    "Checkout",
    "Cantinho do Açaí checkout with order summary and delivery information.",
    "wide",
    "/projects/cantinho-do-acai/cantinho-checkout.png",
  ],
  [
    "Admin dashboard",
    "Cantinho do Açaí administrative dashboard for product management.",
    "wide",
    "/projects/cantinho-do-acai/cantinho-admin.png",
  ],
  [
    "Mobile home",
    "Cantinho do Açaí home page on a mobile device.",
    "mobile",
    "/projects/cantinho-do-acai/cantinho-mobile-home.png",
  ],
  [
    "Mobile menu",
    "Cantinho do Açaí menu on a mobile device.",
    "mobile",
    "/projects/cantinho-do-acai/cantinho-mobile-cardapio.png",
  ],
  [
    "Mobile checkout",
    "Cantinho do Açaí checkout on a mobile device.",
    "mobile",
    "/projects/cantinho-do-acai/cantinho-mobile-checkout.png",
  ],
  [
    "Mobile admin dashboard",
    "Cantinho do Açaí administrative dashboard on a mobile device.",
    "mobile",
    "/projects/cantinho-do-acai/cantinho-mobile-admin.png",
  ],
].map(([label, alt, layout, src]) => ({
  type: "image" as const,
  label,
  alt,
  layout: layout as "wide" | "mobile",
  src,
}));

const arenaxGalleryPt = [
  {
    label: "Home do produto",
    alt: "Tela inicial do ArenaX apresentando placar e a proposta principal da plataforma.",
    layout: "wide" as const,
    src: "/projects/arenax/arenax-hero-desktop.png",
  },
  {
    label: "Painel do organizador",
    alt: "Painel do organizador do ArenaX com indicadores de competições.",
    layout: "wide" as const,
    src: "/projects/arenax/arenax-painel.png",
  },
  {
    label: "Criação de competição",
    alt: "Tela do ArenaX para configuração inicial de uma competição.",
    layout: "wide" as const,
    src: "/projects/arenax/arenax-criar-competicao.png",
  },
  {
    label: "Participantes e clubes",
    alt: "Tela do ArenaX para importar clubes, organizar equipes e jogadores.",
    layout: "wide" as const,
    src: "/projects/arenax/arenax-participantes-desktop.png",
  },
  {
    label: "Partidas e chaveamento",
    alt: "Tela do ArenaX com chaveamento, fases e calendário de partidas.",
    layout: "wide" as const,
    src: "/projects/arenax/arenax-chaveamento-desktop.png",
  },
  {
    label: "Campeonatos públicos",
    alt: "Tela pública do ArenaX para explorar e filtrar campeonatos.",
    layout: "wide" as const,
    src: "/projects/arenax/arenax-campeonatos.png",
  },
  {
    label: "Experiência mobile",
    alt: "Composição de telas móveis do ArenaX para home, campeonatos, painel e chaveamento.",
    layout: "mobile" as const,
    src: "/projects/arenax/arenax-home-mobile.png",
  },
  {
    label: "Campeonatos no mobile",
    alt: "Tela móvel do ArenaX para buscar competições públicas.",
    layout: "mobile" as const,
    src: "/projects/arenax/arenax-campeonatos-mobile.png",
  },
  {
    label: "Painel no mobile",
    alt: "Tela móvel do painel do organizador no ArenaX.",
    layout: "mobile" as const,
    src: "/projects/arenax/arenax-painel-mobile.png",
  },
  {
    label: "Classificação no mobile",
    alt: "Tela móvel do ArenaX exibindo classificação e acompanhamento da competição.",
    layout: "mobile" as const,
    src: "/projects/arenax/arenax-classificacao-mobile.png",
  },
].map((media) => ({ type: "image" as const, ...media }));

const arenaxGalleryEn = [
  {
    label: "Product home",
    alt: "ArenaX home screen showing a score concept and the platform's main proposition.",
    layout: "wide" as const,
    src: "/projects/arenax/arenax-hero-desktop.png",
  },
  {
    label: "Organizer dashboard",
    alt: "ArenaX organizer dashboard with competition indicators.",
    layout: "wide" as const,
    src: "/projects/arenax/arenax-painel.png",
  },
  {
    label: "Competition creation",
    alt: "ArenaX screen for a competition's initial configuration.",
    layout: "wide" as const,
    src: "/projects/arenax/arenax-criar-competicao.png",
  },
  {
    label: "Participants and clubs",
    alt: "ArenaX screen for importing clubs and organizing teams and players.",
    layout: "wide" as const,
    src: "/projects/arenax/arenax-participantes-desktop.png",
  },
  {
    label: "Matches and brackets",
    alt: "ArenaX screen with brackets, stages and match schedule.",
    layout: "wide" as const,
    src: "/projects/arenax/arenax-chaveamento-desktop.png",
  },
  {
    label: "Public competitions",
    alt: "ArenaX public screen for exploring and filtering competitions.",
    layout: "wide" as const,
    src: "/projects/arenax/arenax-campeonatos.png",
  },
  {
    label: "Mobile experience",
    alt: "Composition of ArenaX mobile screens for home, competitions, dashboard and brackets.",
    layout: "mobile" as const,
    src: "/projects/arenax/arenax-home-mobile.png",
  },
  {
    label: "Mobile competitions",
    alt: "ArenaX mobile screen for searching public competitions.",
    layout: "mobile" as const,
    src: "/projects/arenax/arenax-campeonatos-mobile.png",
  },
  {
    label: "Mobile dashboard",
    alt: "ArenaX organizer dashboard on mobile.",
    layout: "mobile" as const,
    src: "/projects/arenax/arenax-painel-mobile.png",
  },
  {
    label: "Mobile standings",
    alt: "ArenaX mobile screen displaying competition standings and progress.",
    layout: "mobile" as const,
    src: "/projects/arenax/arenax-classificacao-mobile.png",
  },
].map((media) => ({ type: "image" as const, ...media }));

const marcaiGalleryPt = [
  {
    label: "Home institucional",
    alt: "Página inicial do Marcaí apresentando a proposta de organização para profissionais autônomos.",
    layout: "wide" as const,
    src: "/projects/marcai/marcai-home-desktop.png",
  },
  {
    label: "Visão geral",
    alt: "Painel do Marcaí com atalhos, indicadores e próximos atendimentos.",
    layout: "wide" as const,
    src: "/projects/marcai/marcai-visao-geral-desktop.png",
  },
  {
    label: "Agenda",
    alt: "Agenda mensal do Marcaí para organizar atendimentos.",
    layout: "wide" as const,
    src: "/projects/marcai/marcai-agenda-desktop.png",
  },
  {
    label: "Orçamentos",
    alt: "Tela de criação de orçamento do Marcaí com itens, validade e condições de pagamento.",
    layout: "wide" as const,
    src: "/projects/marcai/marcai-orcamentos-desktop.png",
  },
  {
    label: "Serviços",
    alt: "Catálogo de serviços do Marcaí com preço, duração e status.",
    layout: "wide" as const,
    src: "/projects/marcai/marcai-servicos-desktop.png",
  },
  {
    label: "Financeiro e relatórios",
    alt: "Relatórios do Marcaí com indicadores de agendamentos e valores do período.",
    layout: "wide" as const,
    src: "/projects/marcai/marcai-relatorios-desktop.png",
  },
  {
    label: "Início mobile",
    alt: "Versão mobile da página inicial do Marcaí.",
    layout: "mobile" as const,
    src: "/projects/marcai/marcai-home-mobile.png",
  },
  {
    label: "Painel mobile",
    alt: "Painel mobile do Marcaí com ações rápidas e indicadores.",
    layout: "mobile" as const,
    src: "/projects/marcai/marcai-dashboard-mobile.png",
  },
  {
    label: "Agenda mobile",
    alt: "Agenda do Marcaí em uma interface adaptada para dispositivos móveis.",
    layout: "mobile" as const,
    src: "/projects/marcai/marcai-agenda-mobile.png",
  },
  {
    label: "Serviços mobile",
    alt: "Catálogo de serviços do Marcaí em uma interface adaptada para dispositivos móveis.",
    layout: "mobile" as const,
    src: "/projects/marcai/marcai-servicos-mobile.png",
  },
].map((media) => ({ type: "image" as const, ...media }));

const marcaiGalleryEn = [
  {
    label: "Marketing home",
    alt: "Marcaí landing page presenting its organization proposition for self-employed professionals.",
    layout: "wide" as const,
    src: "/projects/marcai/marcai-home-desktop.png",
  },
  {
    label: "Overview",
    alt: "Marcaí dashboard with shortcuts, indicators and upcoming appointments.",
    layout: "wide" as const,
    src: "/projects/marcai/marcai-visao-geral-desktop.png",
  },
  {
    label: "Schedule",
    alt: "Marcaí monthly schedule for organizing appointments.",
    layout: "wide" as const,
    src: "/projects/marcai/marcai-agenda-desktop.png",
  },
  {
    label: "Quotes",
    alt: "Marcaí quote creation screen with items, validity date and payment terms.",
    layout: "wide" as const,
    src: "/projects/marcai/marcai-orcamentos-desktop.png",
  },
  {
    label: "Services",
    alt: "Marcaí service catalog with price, duration and status.",
    layout: "wide" as const,
    src: "/projects/marcai/marcai-servicos-desktop.png",
  },
  {
    label: "Finance and reports",
    alt: "Marcaí reports with appointment and period value indicators.",
    layout: "wide" as const,
    src: "/projects/marcai/marcai-relatorios-desktop.png",
  },
  {
    label: "Mobile home",
    alt: "Mobile version of the Marcaí landing page.",
    layout: "mobile" as const,
    src: "/projects/marcai/marcai-home-mobile.png",
  },
  {
    label: "Mobile dashboard",
    alt: "Marcaí mobile dashboard with quick actions and indicators.",
    layout: "mobile" as const,
    src: "/projects/marcai/marcai-dashboard-mobile.png",
  },
  {
    label: "Mobile schedule",
    alt: "Marcaí schedule in an interface adapted for mobile devices.",
    layout: "mobile" as const,
    src: "/projects/marcai/marcai-agenda-mobile.png",
  },
  {
    label: "Mobile services",
    alt: "Marcaí service catalog in an interface adapted for mobile devices.",
    layout: "mobile" as const,
    src: "/projects/marcai/marcai-servicos-mobile.png",
  },
].map((media) => ({ type: "image" as const, ...media }));

const gymTrackerGalleryPt = [
  {
    label: "Visão geral",
    alt: "Painel inicial do Gym Tracker com resumo de treinos e evolução.",
    layout: "wide" as const,
    src: "/projects/gym-tracker/home-gym-tracker.png",
  },
  {
    label: "Treino ativo",
    alt: "Detalhes de treino com exercício, séries, repetições e carga.",
    layout: "wide" as const,
    src: "/projects/gym-tracker/meus-treinos-gym-tracker.png",
  },
  {
    label: "Evolução",
    alt: "Painel de evolução com indicadores de volume, exercícios e carga média.",
    layout: "wide" as const,
    src: "/projects/gym-tracker/evolução-gym-tracker.png",
  },
  {
    label: "Peso corporal",
    alt: "Acompanhamento de peso corporal e meta no Gym Tracker.",
    layout: "wide" as const,
    src: "/projects/gym-tracker/peso-gym-tracker.png",
  },
  {
    label: "Painel mobile",
    alt: "Painel inicial do Gym Tracker em dispositivos móveis.",
    layout: "mobile" as const,
    src: "/projects/gym-tracker/home-gym-tracker-mobile.png",
  },
  {
    label: "Treinos mobile",
    alt: "Biblioteca de treinos adaptada para dispositivos móveis.",
    layout: "mobile" as const,
    src: "/projects/gym-tracker/treinos-gym-tracker-mobile.png",
  },
  {
    label: "Calendário mobile",
    alt: "Calendário de treinos em dispositivos móveis.",
    layout: "mobile" as const,
    src: "/projects/gym-tracker/calendario-gym-tracker-mobile.png",
  },
].map((media) => ({ type: "image" as const, ...media }));

const gymTrackerGalleryEn = [
  {
    label: "Overview",
    alt: "Gym Tracker home dashboard with a workout and progress summary.",
    layout: "wide" as const,
    src: "/projects/gym-tracker/home-gym-tracker.png",
  },
  {
    label: "Active workout",
    alt: "Workout details with an exercise, sets, repetitions and load.",
    layout: "wide" as const,
    src: "/projects/gym-tracker/meus-treinos-gym-tracker.png",
  },
  {
    label: "Progress",
    alt: "Progress dashboard with volume, exercise and average load indicators.",
    layout: "wide" as const,
    src: "/projects/gym-tracker/evolução-gym-tracker.png",
  },
  {
    label: "Body weight",
    alt: "Gym Tracker body weight and goal tracking screen.",
    layout: "wide" as const,
    src: "/projects/gym-tracker/peso-gym-tracker.png",
  },
  {
    label: "Mobile dashboard",
    alt: "Gym Tracker home dashboard on mobile devices.",
    layout: "mobile" as const,
    src: "/projects/gym-tracker/home-gym-tracker-mobile.png",
  },
  {
    label: "Mobile workouts",
    alt: "Gym Tracker workout library adapted for mobile devices.",
    layout: "mobile" as const,
    src: "/projects/gym-tracker/treinos-gym-tracker-mobile.png",
  },
  {
    label: "Mobile calendar",
    alt: "Gym Tracker workout calendar on mobile devices.",
    layout: "mobile" as const,
    src: "/projects/gym-tracker/calendario-gym-tracker-mobile.png",
  },
].map((media) => ({ type: "image" as const, ...media }));

export const projects: LocalizedProjects = {
  "pt-BR": [
    {
      slug: "cantinho-do-acai",
      title: "Cantinho do Açaí",
      featured: true,
      status: "Case study em desenvolvimento",
      role: "Desenvolvimento full stack",
      shortDescription:
        "Plataforma full stack de delivery para açaí, com catálogo, montagem de pedidos, checkout e área administrativa.",
      description:
        "Plataforma digital de delivery desenvolvida para transformar o catálogo e o processo de pedidos do Cantinho do Açaí em uma experiência online completa.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Fastify",
        "PostgreSQL",
        "Drizzle ORM",
        "Vite",
      ],
      repositoryUrl: "https://github.com/lucaszzx-dev/cantinho-do-acai",
      problem:
        "Centralizar em uma única plataforma a experiência de compra do cliente e a operação administrativa do estabelecimento.",
      solution:
        "Uma aplicação com duas experiências principais: catálogo, personalização, carrinho, entrega, pagamento e finalização via WhatsApp para clientes; autenticação e gestão operacional para a administração.",
      highlights: [
        "Catálogo e visualização de produtos",
        "Montagem personalizada de pedidos",
        "Carrinho, checkout e integração com WhatsApp",
        "Gestão de pedidos, produtos, variantes, adicionais e categorias",
        "Configurações da loja, pagamentos e autenticação administrativa",
      ],
      gallery: cantinhoGalleryPt,
    },
    {
      slug: "arenax",
      title: "ArenaX",
      featured: true,
      status: "Case study completo",
      role: "Desenvolvimento full stack",
      shortDescription:
        "Plataforma full stack para criar, administrar e acompanhar campeonatos amadores.",
      description:
        "ArenaX é uma plataforma full stack criada para organizar, administrar e acompanhar campeonatos amadores. A aplicação reúne criação de competições, clubes, participantes, confrontos, calendário, chaveamento, classificação e acompanhamento público.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Fastify",
        "PostgreSQL",
        "Drizzle ORM",
        "Vite",
        "Playwright",
      ],
      repositoryUrl: "https://github.com/lucaszzx-dev/ArenaX",
      problem:
        "Organizar campeonatos amadores normalmente exige informações espalhadas entre planilhas, mensagens, grupos e anotações manuais. O desafio é centralizar a operação sem dificultar o acompanhamento dos resultados.",
      solution:
        "Uma plataforma com fluxos complementares para organizadores configurarem e administrarem competições, e para o público explorar campeonatos, filtros, resultados, calendário e classificação.",
      highlights: [
        "Criação de competições, regras, pontuação e calendário",
        "Cadastro e importação de clubes, equipes e jogadores",
        "Geração de confrontos, partidas e chaveamentos",
        "Classificação, resultados e acompanhamento público",
      ],
      story: [
        {
          label: "Organização de campeonatos",
          body: "O painel reúne indicadores e o acesso às competições do organizador, acompanhando o status de cada operação.",
        },
        {
          label: "Configuração",
          body: "A criação de uma competição começa por identidade, esporte, formato, inscrição, regras, pontuação e calendário.",
        },
        {
          label: "Participantes e clubes",
          body: "Clubes podem ser cadastrados ou importados, enquanto equipes e jogadores são organizados dentro de cada competição.",
        },
        {
          label: "Partidas e chaveamento",
          body: "A plataforma permite gerar confrontos, estruturar fases, acompanhar chaveamentos, calendário e resultados.",
        },
        {
          label: "Experiência pública",
          body: "Quem acompanha encontra campeonatos publicados, pesquisa competições, filtra por esporte e acompanha resultados e classificação.",
        },
        {
          label: "Responsividade",
          body: "As telas principais também foram concebidas para leitura e operação em dispositivos móveis, sem criar uma experiência paralela.",
        },
      ],
      gallery: arenaxGalleryPt,
    },
    {
      slug: "marcai",
      title: "Marcaí",
      featured: true,
      status: "Case study completo",
      role: "Desenvolvimento full stack",
      shortDescription:
        "Plataforma de agenda, orçamentos e gestão para profissionais autônomos.",
      description:
        "Plataforma voltada à agenda, aos orçamentos e à gestão de profissionais autônomos.",
      technologies: ["React", "JavaScript", "PostgreSQL", "Supabase", "Vite", "Vitest"],
      repositoryUrl: "https://github.com/lucaszzx-dev/marcai",
      problem:
        "Profissionais autônomos frequentemente precisam administrar agenda, clientes, serviços e orçamentos utilizando ferramentas separadas ou processos manuais.",
      solution:
        "Centralizar essas tarefas em uma aplicação única, permitindo acompanhar a rotina profissional e organizar informações importantes de forma mais simples.",
      highlights: [
        "Visão geral com indicadores e ações rápidas",
        "Agenda de atendimentos em diferentes visualizações",
        "Cadastro e gestão de clientes e serviços",
        "Criação de orçamentos e acompanhamento financeiro",
        "Relatórios para acompanhar atendimentos e valores",
      ],
      story: [
        {
          label: "Experiência principal",
          body: "A visão geral concentra indicadores, próximos atendimentos e atalhos para as tarefas mais frequentes da rotina profissional.",
        },
        {
          label: "Agenda",
          body: "A agenda oferece visualizações para planejar o mês e acompanhar cada atendimento em um único lugar.",
        },
        {
          label: "Orçamentos",
          body: "A criação de propostas reúne itens, quantidades, validade e condições de pagamento antes do envio ao cliente.",
        },
        {
          label: "Serviços",
          body: "O catálogo organiza os serviços oferecidos com preço, duração e status de disponibilidade.",
        },
        {
          label: "Financeiro e relatórios",
          body: "As telas financeiras e de relatórios reúnem lançamentos, indicadores de atendimentos e valores do período.",
        },
        {
          label: "Responsividade",
          body: "As principais rotinas também estão disponíveis em telas mobile, preservando acesso à agenda, aos serviços e à visão geral.",
        },
      ],
      gallery: marcaiGalleryPt,
    },
    {
      slug: "gym-tracker",
      title: "Gym Tracker",
      featured: false,
      status: "Case study completo",
      role: "Desenvolvimento front-end",
      shortDescription:
        "Aplicação para organizar treinos e acompanhar evolução física.",
      description: "Aplicação para organizar treinos e acompanhar a evolução física.",
      technologies: ["React", "JavaScript", "Firebase", "Recharts", "Vite"],
      repositoryUrl: "https://github.com/lucaszzx-dev/gym-tracker",
      problem:
        "Acompanhar uma rotina de treinamento exige organizar exercícios, séries, cargas e evolução ao longo do tempo.",
      solution:
        "Uma interface que centraliza treinos, exercícios, registros de peso e dados de evolução para tornar o acompanhamento da rotina mais organizado.",
      highlights: [
        "Biblioteca e organização de treinos",
        "Exercícios com séries, repetições e cargas",
        "Acompanhamento de peso e metas",
        "Indicadores de evolução e volume",
      ],
      story: [
        {
          label: "Organização de treinos",
          body: "A biblioteca concentra as rotinas, enquanto o treino ativo apresenta exercícios, séries, repetições e carga.",
        },
        {
          label: "Evolução",
          body: "O painel reúne indicadores de treinos, exercícios, volume estimado e carga média.",
        },
        {
          label: "Peso e metas",
          body: "O registro de peso permite acompanhar medidas e definir uma meta.",
        },
        {
          label: "Responsividade",
          body: "As principais áreas da rotina também foram adaptadas para dispositivos móveis.",
        },
      ],
      gallery: gymTrackerGalleryPt,
    },
  ],
  en: [
    {
      slug: "cantinho-do-acai",
      title: "Cantinho do Açaí",
      featured: true,
      status: "Case study in progress",
      role: "Full-stack development",
      shortDescription:
        "Full-stack açaí delivery platform with catalog, order customization, checkout and an admin area.",
      description:
        "A digital delivery platform built to turn Cantinho do Açaí's catalog and ordering process into a complete online experience.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Fastify",
        "PostgreSQL",
        "Drizzle ORM",
        "Vite",
      ],
      repositoryUrl: "https://github.com/lucaszzx-dev/cantinho-do-acai",
      problem:
        "Centralize the customer purchasing experience and the establishment's administrative operation in one platform.",
      solution:
        "An application with two main experiences: catalog browsing, customization, cart, delivery, payment and WhatsApp completion for customers; authentication and operational management for administrators.",
      highlights: [
        "Product catalog and browsing",
        "Custom order building",
        "Cart, checkout and WhatsApp integration",
        "Order, product, variant, add-on and category management",
        "Store settings, payment methods and administrative authentication",
      ],
      gallery: cantinhoGalleryEn,
    },
    {
      slug: "arenax",
      title: "ArenaX",
      featured: true,
      status: "Complete case study",
      role: "Full-stack development",
      shortDescription:
        "Full-stack platform to create, manage and track amateur championships.",
      description:
        "ArenaX is a full-stack platform built to organize, manage and follow amateur competitions. It brings together competition creation, clubs, participants, matches, scheduling, brackets, standings and public tracking.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Fastify",
        "PostgreSQL",
        "Drizzle ORM",
        "Vite",
        "Playwright",
      ],
      repositoryUrl: "https://github.com/lucaszzx-dev/ArenaX",
      problem:
        "Amateur competitions are often managed across spreadsheets, messages, group chats and manual notes. The challenge is to centralize operations without making result tracking harder.",
      solution:
        "A platform with complementary flows: organizers configure and run competitions, while the public explores competitions, filters, results, schedules and standings.",
      highlights: [
        "Competition creation, rules, scoring and scheduling",
        "Club, team and player registration and importing",
        "Match generation, fixtures and brackets",
        "Standings, results and public tracking",
      ],
      story: [
        {
          label: "Competition organization",
          body: "The dashboard brings together indicators and access to the organizer's competitions, following the state of each operation.",
        },
        {
          label: "Configuration",
          body: "Competition creation starts with identity, sport, format, registration, rules, scoring and schedule.",
        },
        {
          label: "Participants and clubs",
          body: "Clubs can be registered or imported, while teams and players are organized within each competition.",
        },
        {
          label: "Matches and brackets",
          body: "The platform supports match generation, stage structure, brackets, schedules and result tracking.",
        },
        {
          label: "Public experience",
          body: "Spectators can find published competitions, search, filter by sport and follow results and standings.",
        },
        {
          label: "Responsiveness",
          body: "The main screens were also designed for clear reading and operation on mobile devices, without a separate experience.",
        },
      ],
      gallery: arenaxGalleryEn,
    },
    {
      slug: "marcai",
      title: "Marcaí",
      featured: true,
      status: "Complete case study",
      role: "Full-stack development",
      shortDescription:
        "Scheduling, quoting and management platform for self-employed professionals.",
      description:
        "A platform for scheduling, quoting and managing self-employed professionals.",
      technologies: ["React", "JavaScript", "PostgreSQL", "Supabase", "Vite", "Vitest"],
      repositoryUrl: "https://github.com/lucaszzx-dev/marcai",
      problem:
        "Self-employed professionals often have to manage schedules, clients, services and quotes with separate tools or manual processes.",
      solution:
        "Bring these tasks together in one application so professionals can follow their routine and organize important information more simply.",
      highlights: [
        "Overview with indicators and quick actions",
        "Appointment scheduling in multiple views",
        "Client and service registration and management",
        "Quote creation and financial tracking",
        "Reports for appointments and period values",
      ],
      story: [
        {
          label: "Main experience",
          body: "The overview brings together indicators, upcoming appointments and shortcuts for the professional routine's most frequent tasks.",
        },
        {
          label: "Schedule",
          body: "The schedule offers different views for planning the month and following each appointment in one place.",
        },
        {
          label: "Quotes",
          body: "Quote creation gathers items, quantities, validity dates and payment terms before sending a proposal to the client.",
        },
        {
          label: "Services",
          body: "The catalog organizes available services with their price, duration and availability status.",
        },
        {
          label: "Finance and reports",
          body: "Finance and report screens bring together records, appointment indicators and period values.",
        },
        {
          label: "Responsiveness",
          body: "The main routines are also available on mobile screens, keeping access to the schedule, services and overview.",
        },
      ],
      gallery: marcaiGalleryEn,
    },
    {
      slug: "gym-tracker",
      title: "Gym Tracker",
      featured: false,
      status: "Complete case study",
      role: "Front-end development",
      shortDescription: "Application to organize workouts and track physical progress.",
      description:
        "An application for organizing workouts and tracking physical progress.",
      technologies: ["React", "JavaScript", "Firebase", "Recharts", "Vite"],
      repositoryUrl: "https://github.com/lucaszzx-dev/gym-tracker",
      problem:
        "Tracking a workout routine requires organizing exercises, sets, loads and progress over time.",
      solution:
        "An interface that centralizes workouts, exercises, weight records and progress data to make routine tracking more organized.",
      highlights: [
        "Workout library and organization",
        "Exercises with sets, repetitions and loads",
        "Weight and goal tracking",
        "Progress and volume indicators",
      ],
      story: [
        {
          label: "Workout organization",
          body: "The library gathers routines, while the active workout presents exercises, sets, repetitions and load.",
        },
        {
          label: "Progress",
          body: "The dashboard brings together workout, exercise, estimated volume and average load indicators.",
        },
        {
          label: "Weight and goals",
          body: "Weight records make it possible to follow measurements and set a goal.",
        },
        {
          label: "Responsiveness",
          body: "The main routine areas were also adapted for mobile devices.",
        },
      ],
      gallery: gymTrackerGalleryEn,
    },
  ],
};

export function getProjects(locale: Locale) {
  return projects[locale];
}
export function getProject(locale: Locale, slug: string): Project | undefined {
  return projects[locale].find((project) => project.slug === slug);
}
export function getProjectSlugs() {
  return projects["pt-BR"].map((project) => ({ slug: project.slug }));
}
