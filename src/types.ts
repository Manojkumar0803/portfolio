export interface SkillGroup {
  category: string;
  description?: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  database: string;
}

export interface ExperienceItem {
  title: string;
  category: string;
  points: string[];
}

export interface OrganizationActivity {
  organization: string;
  role: string;
  period: string;
  activities: string[];
}

export interface LanguageItem {
  language: string;
  proficiency: string;
}

export interface ResumeData {
  name: string;
  title: string;
  email: string;
  introduction: string;
  aboutHighlights: string[];
  education: {
    program: string;
    courseworkAndTraining: string[];
  };
  skills: {
    programmingLanguages: string[];
    webDevelopment: string[];
    database: string[];
    toolsAndTechnologies: string[];
    coreSkills: string[];
    softSkills: string[];
  };
  experience: {
    sectionLabel: string;
    academicExperience: string[];
    internshipStatus: string;
  };
  projects: ProjectItem[];
  certifications: string[];
  organization: OrganizationActivity;
  languages: LanguageItem[];
  interests: string[];
}
