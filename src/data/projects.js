export const projects = [
  {
    title: "AI Supervisor Assistant",
    featured: true,
    image: "/img/AI Supervisor Assistant - Dashboard.png",
    live: "https://ai-supervisor-app.vercel.app/",
    repo: "https://github.com/MaddiePst/ai-supervisor-app",
    description:
      "A full-stack SaaS platform where managers upload a PDF spec and an AI pipeline (LangChain + Groq llama-3.3-70b) automatically generates project tasks, staffing roles, and team assignments — cutting project setup from hours to seconds. Includes a role-based candidate matching algorithm, a full chat system (AI assistant, DMs, and group channels) that understands natural-language progress updates, and a dual-channel email system (Resend + node-cron) for real-time alerts and scheduled weekly summaries across 13 timezones.",
    tech: ["React", "TypeScript", "Node.js", "OpenAI API", "LangChain", "RAG", "Supabase"],
  },
  {
    title: "AI Powered PDF Knowledge Assistant",
    featured: false,
    image: "/img/AI Powered PDF Knowledge Assistant.webp",
    live: "https://ai-powered-pdf-knowledge-assistant.vercel.app/",
    repo: "https://github.com/MaddiePst/AI-Powered-PDF-Knowledge-Assistant",
    description:
      "An AI-powered web app that lets users upload PDF documents and ask questions about their content. Uses OpenAI's language models and embeddings with a RAG workflow to understand the PDF and provide accurate, context-aware answers in a chat interface.",
    tech: ["React", "Vite", "Tailwind CSS", "LangChain", "OpenAI API", "RAG", "Node.js", "Express"],
  },
  {
    title: "GitHub Repository Explorer",
    featured: false,
    image: "/img/GitHub Repository Explorer.webp",
    live: "https://github-repository-explorer-three.vercel.app/",
    repo: "https://github.com/MaddiePst/github-repository-explorer/tree/main",
    description:
      "A full-stack app for searching GitHub repositories by username and managing a personalized list of favorites. Integrates the GitHub REST API with a custom backend and a Supabase database to persist user-specific favorites across sessions.",
    tech: ["React", "Vite", "TypeScript", "Tailwind CSS", "Node.js", "Express", "JWT", "Supabase"],
  },
  {
    title: "Weather App",
    featured: false,
    image: "/img/Weather App.webp",
    live: "https://maddiepst.github.io/wheather-app/",
    repo: "https://github.com/MaddiePst/wheather-app/tree/main",
    description:
      "Search any city and view real-time temperature, conditions, and icons fetched live from a weather API. Demonstrates API integration, dynamic rendering, and clean UI design.",
    tech: ["React", "JavaScript", "OpenWeather API", "CSS", "HTML"],
  },
  {
    title: "Mapty App",
    featured: false,
    image: "/img/Mapty App.webp",
    live: "https://maddiepst.github.io/Mapty-App.github.io/",
    repo: "https://github.com/MaddiePst/Mapty-App.github.io",
    description:
      "An interactive app that tracks and logs workouts using geolocation and map functionality, letting users log runs or rides and visualize them on an interactive map. Highlights third-party APIs, user input handling, and dynamic UI updates.",
    tech: ["JavaScript", "CSS", "HTML"],
  },
  {
    title: "Bankist Website",
    featured: false,
    image: "/img/Bankist Websites.webp",
    live: "https://maddiepst.github.io/Bankist-Website.github.io/",
    repo: "https://github.com/MaddiePst/Bankist-Website.github.io",
    description:
      "A modern, responsive landing page for a fictional bank, showcasing clean, minimalistic UI/UX design, smooth animations, and interactivity for an excellent user experience.",
    tech: ["JavaScript", "CSS", "HTML"],
  },
  {
    title: "Bankist App",
    featured: false,
    image: "/img/Bankist App.webp",
    live: "https://maddiepst.github.io/Bank-App.github.io/",
    repo: "https://github.com/MaddiePst/Bank-App.github.io",
    description:
      "A banking application supporting user transfers, loan applications, account closures, and transaction history viewing. (login: username1: js — password1: 1111, username2: jd — password2: 2222)",
    tech: ["JavaScript", "CSS", "HTML"],
  },
  {
    title: "Far Away",
    featured: false,
    image: "/img/Far Away.webp",
    live: "https://maddiepst.github.io/travel-packing-list/",
    repo: "https://github.com/MaddiePst/travel-packing-list",
    description:
      "A travel packing-list app that lets users add, view, and sort items dynamically, with form inputs for new items, real-time list updates, and sorting to keep everything organized.",
    tech: ["React", "JavaScript", "CSS", "HTML"],
  },
  {
    title: "Pig Game",
    featured: false,
    image: "/img/Pig Game.webp",
    live: "https://maddiepst.github.io/Pig-Game.github.io/",
    repo: "https://github.com/MaddiePst/Pig-Game.github.io",
    description:
      "A two-player dice game where players accumulate points, strategically hold, and race to reach 100 first — rolling a 1 switches the turn to the other player.",
    tech: ["JavaScript", "CSS", "HTML"],
  },
];
