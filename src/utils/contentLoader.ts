// This utility loads content from Astro content collections
// and transforms it to match the format expected by React components

export interface JobData {
  node: {
    frontmatter: {
      title: string;
      company: string;
      location: string;
      range: string;
      url: string;
    };
    html: string;
  };
}

export interface EducationData {
  node: {
    frontmatter: {
      title: string;
      degree: string;
      company: string;
      location: string;
      range: string;
      url: string;
    };
    html: string;
  };
}

export interface ProjectData {
  node: {
    frontmatter: {
      date: string;
      title: string;
      github?: string;
      external?: string;
      image?: string;
      tech?: string[];
      company?: string;
      showInProjects?: boolean;
      featured?: boolean;
      featuredSort?: number;
      featuredCover?: string;
    };
    html: string;
  };
}

export interface PublicationData {
  node: {
    frontmatter: {
      date: string;
      title: string;
      authors?: string[];
      venue?: string;
      url?: string;
    };
    html: string;
  };
}

// These will be populated by the Astro pages and passed as props
export const transformJobData = (job: any): JobData => ({
  node: {
    frontmatter: {
      title: job.data.title,
      company: job.data.company,
      location: job.data.location,
      range: job.data.range,
      url: job.data.url,
    },
    html: job.body || '',
  },
});

export const transformEducationData = (edu: any): EducationData => ({
  node: {
    frontmatter: {
      title: edu.data.title,
      degree: edu.data.degree,
      company: edu.data.company,
      location: edu.data.location,
      range: edu.data.range,
      url: edu.data.url,
    },
    html: edu.body || '',
  },
});

export const transformProjectData = (project: any): ProjectData => ({
  node: {
    frontmatter: {
      date: project.data.date?.toISOString() || '',
      title: project.data.title,
      github: project.data.github,
      external: project.data.external,
      image: project.data.image,
      tech: project.data.tech,
      company: project.data.company,
      showInProjects: project.data.showInProjects,
      featured: project.data.featured,
      featuredSort: project.data.featuredSort,
      featuredCover: project.data.featuredCover,
    },
    html: project.body || '',
  },
});

export const transformPublicationData = (pub: any): PublicationData => ({
  node: {
    frontmatter: {
      date: pub.data.date?.toISOString() || '',
      title: pub.data.title,
      authors: pub.data.authors,
      venue: pub.data.venue,
      url: pub.data.url,
    },
    html: pub.body || '',
  },
});
