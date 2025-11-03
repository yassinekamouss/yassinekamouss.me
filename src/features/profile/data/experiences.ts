import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "human-marketing",
    companyName: "Human Marketing",
    positions: [
      {
        id: "e2a8f2c3-6d9a-4db3-9f6b-1f1f1f1f1f01",
        title: "AI & Software Engineering Intern",
        employmentPeriod: {
          start: "07.2025",
          end: "08.2025",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Contributed to the design and deployment of AI business agents and intelligent software solutions (ML, automation, user interaction) within the AgentiK division.
- Participated in developing AI agents to optimize client performance.
- Maintained company web platforms, including HMC Academy.
- Implemented deployment pipelines to ensure solution reliability and scalability.`,
        skills: [
          "Agent Development Kit - Google",
          "MCP",
          "GitHub Actions",
          "Agents Conversationnels",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "tamkeen-center",
    companyName: "TAMKEEN Centers",
    positions: [
      {
        id: "a1b2c3d4-e5f6-47a8-9b0c-d1e2f3a4b5c6",
        title: "Software Engineer – MERN & AI Systems",
        employmentPeriod: {
          start: "07.2025",
          end: "09.2025",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Contributed to the design and implementation of masubvention.ma (MERN-based platform).
- Developed the client interface and the administration dashboard.
- Managed the cloud deployment pipeline.
- Integrated a RAG-based AI chatbot for intelligent, context-aware assistance.`,
        skills: [
          "RESTful API Design",
          "JWT Authentication",
          "Docker",
          "CI/CD Pipelines",
          "Cloud Hosting",
          "Retrieval-Augmented Generation (RAG)",
          "LangChain / LlamaIndex",
          "Vector Databases",
        ],
        isExpanded: false,
      },
    ],
  },
  {
    id: "bugshan-automotive-group",
    companyName: "Bugshan Automotive Group",
    positions: [
      {
        id: "bb2b47f1-3b2a-4a0b-9a77-8d6d7c3a5f20",
        title: "Full-Stack Developer Intern",
        employmentPeriod: {
          start: "2024",
          end: "2024",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Design and develop an e-commerce website for automotive parts.
- Implement product catalog management and order system features.
- Develop RESTful APIs for frontend/back-end communication.
- Create a responsive, intuitive UI to improve customer experience.
- Optimize performance and ensure transaction security.
- Collaborate with the team to define technical and functional specifications.`,
        skills: [
          "Laravel",
          "React",
          "PHP",
          "JavaScript",
          "RESTful APIs",
          "E-commerce",
          "Automotive Industry",
          "Full-Stack Development",
        ],
        isExpanded: false,
      },
    ],
  },
];
