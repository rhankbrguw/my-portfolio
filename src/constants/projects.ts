export interface ProjectRecord {
  title: string;
  description: string;
  imageUrl: string;
  techStack: readonly string[];
  githubUrl: string;
  liveUrl?: string;
}

export const projects: readonly ProjectRecord[] = [
  {
    title: "El Ngadu",
    description:
      "A civic complaint platform that helps people submit reports, follow progress, and connect with local government through a clearer digital flow.",
    imageUrl: "/el-ngadu.jpeg",
    techStack: ["React", "TypeScript", "PHP", "Tailwind CSS"],
    githubUrl: "https://github.com/rhankbrguw/el-ngadu",
    liveUrl: "https://el-ngadu.rhankbrguw.xyz/",
  },
  {
    title: "Rumah Kosim",
    description:
      "A curated bookstore experience with authentication, catalog management, and a focused reading-first interface built for everyday browsing.",
    imageUrl: "/rumah-kosim.jpeg",
    techStack: ["SvelteKit", "Tailwind CSS", "JWT", "MySQL"],
    githubUrl: "https://github.com/rhankbrguw/rumah-kosim",
    liveUrl: "https://rumah-kosim.rhankbrguw.xyz/",
  },
  {
    title: "Inventory Project",
    description:
      "An inventory management system that turns operational stock data into a simpler, more reliable workflow for small teams.",
    imageUrl: "/inventory-project.jpeg",
    techStack: ["React", "TypeScript", "Inventory", "Dashboard"],
    githubUrl: "https://github.com/rhankbrguw/inventory-project/",
    liveUrl: "https://inventory-project.rhankbrguw.xyz/",
  },
  {
    title: "Agrisync",
    description:
      "An offline-first agritech platform for field reporting, GPS-aware operations, and resilient synchronization in remote environments.",
    imageUrl: "/agrisync.jpeg",
    techStack: ["SaaS", "Offline-first", "GPS", "Real-time"],
    githubUrl: "https://github.com/rhankbrguw/agrisync",
    liveUrl: "https://agrisync.rhankbrguw.xyz/",
  },
  {
    title: "Audionara",
    description:
      "A mobile-first audio experience currently in progress, shaped around lightweight discovery and focused listening without a desktop demo.",
    imageUrl: "/audionara.png",
    techStack: ["Mobile", "Audio", "Product Design"],
    githubUrl: "https://github.com/rhankbrguw/audionara",
  },
];
