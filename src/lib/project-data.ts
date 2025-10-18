export interface Project {
  image: string;
  title: string;
  description: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Coonspace",
    description: "Coonspace is a markdown sharing platform where users can create, edit, and share their markdown documents freely.",
    tags: ["NextJS", "TailwindCSS", "DrizzleORM", "SQLite", "Typescript", "Clerk"],
    image: "/projects/coonspace.webp"
  }
];