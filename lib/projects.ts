import "server-only";

export type Project = {
  slug: string;
  title: string;
  year: number;
  summary: string;
};

const PROJECTS: Project[] = [
  {
    slug: "store-ledger",
    title: "Store Ledger",
    year: 2025,
    summary: "Records store credit instead of a paper notebook.",
  },
  {
    slug: "org-check-in",
    title: "Org Check-in",
    year: 2026,
    summary: "Scans memebers in at the door with a QR code.",
  },
  {
    slug: "barangay-reports",
    title: "Barangay Reports",
    year: 2026,
    summary: "Lets residents pin a broken streetlight on a map",
  },
];

export const getProjects = async (state?: string) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  if (state === "empty") {
    return [];
  }

  if (state === "error") {
    throw new Error("Failed to load projects");
  }

  return PROJECTS;
};
export const getProject = async (slug: string) =>
  PROJECTS.find((p) => p.slug === slug);
