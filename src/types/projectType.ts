export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  heroImage: string;
  hasSold?: boolean;
  fullDescription?: any; // Lexical rich text format
  technologies?: string[];
  features?: string[];
  gallery?: string[];
  links?: {
    demo?: string;
    github?: string;
  };
}
