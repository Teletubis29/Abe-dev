export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface TechIcon {
  name: string;
  icon?: string;
  iconKey?: string;
}

export interface ProjectDetail {
  label: string;
  value: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  mobileImage?: string;
  category?: "Web Application" | "SaaS" | "E-Commerce" | "Dashboard" | string;
  tags: string[];
  techStackIcons?: TechIcon[];
  details?: ProjectDetail[];
  caseStudyUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  screenshots?: string[];
}

export interface TechFeature {
  icon: string;
  title: string;
  subtitle: string;
}

export interface TechSkill {
  name: string;
  iconKey: string;
}

export interface TechCategory {
  name: string;
  icon: string;
  skills: TechSkill[];
}

export interface SoftSkill {
  title: string;
  description: string;
  iconName: "problem-solving" | "clean-code" | "communication" | "fast-learner";
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

export interface JourneyMilestone {
  year: string;
  description: string;
}

export interface AboutStat {
  iconName: "experience" | "projects" | "technologies" | "satisfaction";
  value: string;
  label: string;
}

export interface AboutInfo {
  name: string;
  location: string;
  email: string;
  freelanceStatus: string;
  role: string;
  headline: string;
  bio: string;
  image: string;
  cvUrl?: string;
  stats: AboutStat[];
  journey: JourneyMilestone[];
}
