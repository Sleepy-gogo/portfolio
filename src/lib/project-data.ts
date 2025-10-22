export interface Project {
  image: string;
  title: string;
  description: string;
  tags: string[];
  wide?: boolean;
  type: "Personal" | "Work" | "Cancelled" | "WIP";
};

export const projects: Project[] = [
  {
    title: "Coonspace",
    description: "A platform for creating, editing, and sharing Markdown documents. I fully built and deployed Coonspace, focusing on a smooth experience for quickly sharing personal or work related notes.",
    tags: ["NextJS", "TailwindCSS", "DrizzleORM", "SQLite", "Typescript", "Clerk"],
    image: "/projects/coonspace.webp",
    type: "Personal"
  },
  {
    title: "Bloxyfruit",
    description: "Ecommerce site for purchasing in-game Roblox items with secure delivery. I implemented many little features, including the referral code system and continuosly work on maintenance as well as new game support.",
    tags: ["Svelte", "SvelteKit", "TailwindCSS", "MongoDB", "Typescript"],
    image: "/projects/bloxyfruit.png",
    type: "Work"
  },
  {
    title: "RbxMM",
    description: "Platform for secure P2P trading and middleman services for Roblox games. I fully developed the site, including real-time chat, stock updates, and user authentication, and deployed it.",
    tags: ["NextJS", "TailwindCSS", "Convex", "BetterAuth", "Typescript"],
    image: "/projects/rbxmm.png",
    type: "Work"
  },
  {
    title: "SellGAG",
    description: "Automated platform for trading Roblox in-game items with integrated realtime chat and order processing. I fully developed and deployed the site, before it's cancellation.",
    tags: ["NextJS", "TailwindCSS", "Convex", "BetterAuth", "Typescript"],
    image: "/projects/sellgag.png",
    type: "Cancelled"
  }
];