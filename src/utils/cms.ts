/**
 * CMS Content Loading Utilities
 * Helpers to load content from Netlify CMS markdown and JSON files
 */

// Type definitions for CMS content
export interface CMSService {
  title: string;
  description: string;
  category: string;
  featured: boolean;
  duration?: string;
  link?: string;
  order: number;
  features?: string[];
  image?: string;
}

export interface CMSFeature {
  title: string;
  description: string;
  icon: string;
  category: string;
  featured: boolean;
  order: number;
}

export interface CMSTestimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
  serviceType: string;
  date?: string;
  verified: boolean;
  image?: string;
}

export interface CMSPreservation {
  title: string;
  description: string;
  category: string;
  price?: string;
  highlighted: boolean;
  order: number;
  features: string[];
  image?: string;
}

export interface CMSCTA {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

export interface CMSGalleryItem {
  title: string;
  description: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  order: number;
  body?: string; // The markdown content
}

// Parse frontmatter from markdown
export const parseFrontmatter = (content: string): Record<string, unknown> => {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
  const match = content.match(frontmatterRegex);

  if (!match) return {};

  const frontmatter: Record<string, unknown> = {};
  const lines = match[1].split('\n');
  let currentKey = '';
  let inArray = false;

  lines.forEach((line) => {
    if (line.trim().startsWith('-')) {
      // Array item
      if (inArray && currentKey) {
        const value = line.trim().substring(1).trim();
        if (!Array.isArray(frontmatter[currentKey])) {
          frontmatter[currentKey] = [];
        }
        (frontmatter[currentKey] as string[]).push(value);
      }
    } else if (line.includes(':')) {
      const [key, ...valueParts] = line.split(':');
      const value = valueParts.join(':').trim();
      currentKey = key.trim();

      if (value === '') {
        // Start of array
        inArray = true;
        frontmatter[currentKey] = [];
      } else {
        inArray = false;
        // Remove quotes from string values
        const cleanValue = value.replace(/^["']|["']$/g, '');

        // Parse value types
        if (cleanValue === 'true') frontmatter[currentKey] = true;
        else if (cleanValue === 'false') frontmatter[currentKey] = false;
        else if (!isNaN(Number(cleanValue)) && cleanValue !== '')
          frontmatter[currentKey] = Number(cleanValue);
        else frontmatter[currentKey] = cleanValue;
      }
    }
  });

  return frontmatter;
};

// Load all markdown files from a folder
export const loadMarkdownFiles = async <T>(
  folderPath: string
): Promise<T[]> => {
  try {
    // Use Vite's glob import for markdown files
    const files = import.meta.glob('/public/content/**/*.md', {
      as: 'raw',
      eager: false,
    });

    const folderFiles = Object.entries(files).filter(([path]) =>
      path.includes(folderPath)
    );

    const contents = await Promise.all(
      folderFiles.map(async ([, loader]) => {
        const content = await loader();
        return parseFrontmatter(content as string) as T;
      })
    );

    return contents.sort((a, b) => {
      const aOrder = ((a as Record<string, unknown>).order as number) || 0;
      const bOrder = ((b as Record<string, unknown>).order as number) || 0;
      return aOrder - bOrder;
    });
  } catch (error) {
    console.error(`Error loading markdown files from ${folderPath}:`, error);
    return [];
  }
};

// Load services
export const loadServices = async (): Promise<CMSService[]> => {
  return loadMarkdownFiles<CMSService>('/public/content/services');
};

// Load features
export const loadFeatures = async (): Promise<CMSFeature[]> => {
  return loadMarkdownFiles<CMSFeature>('/public/content/features');
};

// Load testimonials
export const loadTestimonials = async (): Promise<CMSTestimonial[]> => {
  return loadMarkdownFiles<CMSTestimonial>('/public/content/testimonials');
};

// Load preservation packages
export const loadPreservation = async (): Promise<CMSPreservation[]> => {
  return loadMarkdownFiles<CMSPreservation>('/public/content/preservation');
};

// Load CTA sections
export const loadCTASections = async (): Promise<CMSCTA[]> => {
  return loadMarkdownFiles<CMSCTA>('/public/content/cta');
};

// Load gallery items
export const loadGalleryItems = async (): Promise<CMSGalleryItem[]> => {
  return loadMarkdownFiles<CMSGalleryItem>('/public/content/gallery');
};
