export interface Project {
  title: string
  description: string
  stack: string[]
  liveUrl: string
}

// Stored oldest → newest. Render reversed (newest → oldest).
export const projects: Project[] = [
  {
    title: "Body Fat Tracker",
    description:
      "A body composition visualization tool built to explore charting libraries and data-driven UI patterns.",
    stack: ["Next.js", "Chart.js", "Tailwind"],
    liveUrl: "https://b-fanalysis-vibe-code.vercel.app/",
  },
  {
    title: "Workout Tracker",
    description:
      "A workout logging app with calendar view, built as a PWA to experiment with offline-first architecture.",
    stack: ["React", "TypeScript", "PWA"],
    liveUrl: "https://workout-tracker-weld-iota.vercel.app/",
  },
  {
    title: "Content AI Script Generator",
    description:
      "An AI-assisted script generation tool built to experiment with prompt engineering and structured content output.",
    stack: ["Next.js", "OpenAI API", "Tailwind"],
    liveUrl: "https://content-scripting-saas.vercel.app/",
  },
  {
    title: "Daily Goals App",
    description:
      "A minimalist daily task tracker built to explore state management patterns and local persistence.",
    stack: ["React", "TypeScript", "Local Storage"],
    liveUrl: "https://daily-goals-app-tau.vercel.app/",
  },
  {
    title: "Cold DM Kit",
    description:
      "An AI-assisted outreach drafting tool built to experiment with prompt engineering and subscription gating logic.",
    stack: ["Next.js", "OpenAI API", "Stripe", "Clerk"],
    liveUrl: "https://colddm-kit.vercel.app/",
  },
  {
    title: "Outbound-OS",
    description:
      "A modular AI-powered outbound automation system designed to orchestrate marketing, research, and engineering agents across multiple channels.",
    stack: ["Next.js", "Supabase", "OpenAI", "Vercel"],
    liveUrl: "https://outbound-66evmftqt-alexs-projects-949dcdc1.vercel.app",
  },
]
