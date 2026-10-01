export const PLACEHOLDER_IMAGES = new Set([
  "https://img.freepik.com/premium-vector/portrait-handsome-male-office-worker_481311-2.jpg?w=740",
]);

export const teamMembers = [
  {
    slug: "angaye-seimokumo",
    name: "Angaye Seimokumo J.",
    role: "Director, Programmer",
    image: "/images/Angaye Seimokumo.jpg",
    summary:
      "Leading with innovation, developing software solutions, and driving the team towards technological excellence.",
    bio: "Leading with innovation, developing cutting-edge software solutions, and driving the team towards technological excellence.",
  },
  {
    slug: "desmond-eteh",
    name: "Dr. Desmond (Rowland) Eteh (Ph.D)",
    role: "Data Scientist/Geospatial Analyst",
    image: "/images/Dr Roland(Desmond) Eteh.png",
    summary:
      "Expert in data science and geographic information systems, turning data into actionable insights.",
    bio: "Expert in data science and geographic information systems, transforming data into actionable insights for impactful decision-making.",
  },
  {
    slug: "ugochukwu-akajiaku",
    name: "Ugochukwu Charles Akajiaku",
    role: "Data Scientist/Geospatial Analyst",
    image: "/images/32.jpg",
    summary:
      "Expert in data science and geographic information systems, turning data into actionable insights.",
    bio: "Expert in data science and geographic information systems, transforming data into actionable insights for impactful decision-making.",
  },
  {
    slug: "morris-gift",
    name: "Morris Gift",
    role: "Instructor",
    image: "/images/Morris Gift.jpg",
    summary:
      "Passionate educator, equipping learners with hands-on programming and technical skills.",
    bio: "Passionate educator, equipping learners with hands-on programming and technical skills to excel in the ICT industry.",
  },
  {
    slug: "dekpen-tari",
    name: "Dekpen Tari",
    role: "Senior Developer",
    image: "/images/Tari.jpg",
    summary:
      "Experienced software engineer, crafting robust applications and leading development projects.",
    bio: "Experienced software engineer, crafting robust applications and leading development projects with precision and efficiency.",
  },
  {
    slug: "prince-chukwuemeka",
    name: "Prince Chukwuemeka",
    role: "Data Scientist | Full-Stack Developer",
    image: "/images/prince.jpg",
    summary:
      "Technology expert working across data science, full-stack development, and cybersecurity.",
    bio: "Prince Chukwuemeka is a versatile technology expert with over three years of experience in data science, full-stack development, and cybersecurity.",
  },
  {
    slug: "okes-imoni",
    name: "Okes Imoni",
    role: "Data Scientist",
    image: "/images/Okes.jpg",
    summary:
      "Designs data-driven solutions for health, environmental, and sustainability challenges.",
    bio: "Okes Imoni is a versatile technology expert with over two years of experience in data science. She leads the design and deployment of data-driven solutions that address health, environmental, and sustainability challenges. Her expertise combines machine learning, geospatial analysis, and a strong background in climate technology.",
  },
  {
    slug: "amos-dogiye",
    name: "Amos Meremu Dogiye",
    role: "Data Scientist | Geospatial Analyst",
    image: "/images/Amos.jpg",
    summary:
      "Builds data and geospatial tools for flood monitoring, oil spill detection, and sustainability planning.",
    bio: "Amos Meremu Dogiye is a versatile technology expert with over three years of experience in data science and geospatial analysis. She leads the design and deployment of data-driven solutions that address environmental and climate change challenges, including flood monitoring, oil spill detection, and sustainability planning.",
  },
  {
    slug: "oruene-azibato",
    name: "Oruene Azibato",
    role: "Instructor and Research Fellow",
    image:
      "https://img.freepik.com/premium-vector/portrait-young-african-man-full-face_276162-169.jpg?w=740",
    summary:
      "Dedicated researcher and instructor, bridging academia and real-world technology.",
    bio: "Dedicated researcher and instructor, bridging the gap between academia and real-world technology applications.",
  },
  {
    slug: "misongo-favour",
    name: "Misongo Favour",
    role: "Senior Developer",
    image:
      "https://img.freepik.com/premium-vector/portrait-handsome-male-office-worker_481311-2.jpg?w=740",
    summary:
      "Expert in software architecture, designing scalable solutions for modern applications.",
    bio: "Expert in software architecture, designing scalable solutions that power modern applications and digital experiences.",
  },
  {
    slug: "ebimie-jonathan",
    name: "Ebimie Jonathan",
    role: "Senior Developer",
    image:
      "https://img.freepik.com/premium-vector/portrait-handsome-male-office-worker_481311-2.jpg?w=740",
    summary:
      "Builds secure, scalable, and future-ready applications with current tools.",
    bio: "Passionate technologist, leveraging cutting-edge tools to build secure, scalable, and future-ready applications",
  },
  {
    slug: "orukaria-tokoni",
    name: "Orukaria Tokoni",
    role: "Senior Developer",
    image:
      "https://img.freepik.com/premium-vector/portrait-handsome-male-office-worker_481311-2.jpg?w=740",
    summary:
      "Engineers high-performance software that drives efficiency and a better user experience.",
    bio: "Innovative problem solver, engineering high-performance software solutions that drive efficiency and enhance user experience.",
  },
];

export function getTeamMember(slug) {
  return teamMembers.find((member) => member.slug === slug);
}

export function memberInitials(name) {
  const cleaned = name
    .replace(/\(.*?\)/g, " ")
    .replace(/\b(Dr|Ph\.?D|Mr|Mrs|Ms)\.?\b/gi, " ")
    .trim();
  const parts = cleaned
    .split(/\s+/)
    .map((part) => part.replace(/\./g, ""))
    .filter((part) => part.length > 1);

  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}
