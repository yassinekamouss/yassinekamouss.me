import type { EducationEntry } from "../types/education";

export const EDUCATION: EducationEntry[] = [
  {
    id: "fstt-ingenieur-2024-2027",
    institution: "Faculty of Sciences and Techniques of Tangier (FST Tangier)",
    degree: "Engineering Degree (Computer Engineering)",
    period: { start: "2024-09", end: "2027-06" },
    location: "Tangier, Morocco",
    description:
      "Engineering curriculum focused on software engineering, systems architecture, and web/mobile application development.",
    skills: [
      "Software Engineering",
      "Web Development",
      "Databases",
      "Algorithms",
      "Machine Learning / Deep Learning (ML/DL)",
      "Project Management",
      "DevOps",
    ],
  },
  {
    id: "fst-settat-licence-2023-2024",
    institution: "Faculty of Sciences and Techniques Settat (FST Settat)",
    degree: "Bachelor of Science and Technology",
    period: { start: "2023-09", end: "2024-06" },
    location: "Settat, Morocco",
    description:
      "Science and technology track strengthening core foundations in computer science and mathematics.",
    skills: [
      "Data Structures",
      "Programming",
      "Probability & Statistics",
      "Advanced Mathematics",
    ],
  },
  {
    id: "fst-settat-duts-2021-2023",
    institution: "Faculty of Sciences and Techniques Settat (FST Settat)",
    degree: "DEUST – University Diploma in Science and Technology",
    period: { start: "2021-09", end: "2023-06" },
    location: "Settat, Morocco",
    description:
      "Preparatory university cycle covering scientific and technical fundamentals.",
    skills: ["Mathematics", "Physics", "Algorithms", "Computer Fundamentals"],
  },
];
