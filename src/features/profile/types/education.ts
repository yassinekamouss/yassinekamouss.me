export type EducationEntry = {
  id: string;
  institution: string;
  degree: string;
  period: {
    start: string; // YYYY-MM
    end?: string; // YYYY-MM | undefined for ongoing
  };
  location?: string;
  description?: string; // Markdown
  skills?: string[];
};
