export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'candidate' | 'employer' | 'admin';
  avatar?: string;
  phone?: string;
  location?: string;
  company?: string;
  createdAt: Date;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'remote';
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  description: string;
  requirements: string[];
  benefits: string[];
  employerId: string;
  featured: boolean;
  deadline: Date;
  createdAt: Date;
  applicants: number;
  status: 'active' | 'paused' | 'closed';
  categories: string[];
}

export interface Application {
  id: string;
  jobId: string;
  candidateId: string;
  status: 'pending' | 'reviewed' | 'shortlisted' | 'interviewed' | 'rejected' | 'hired';
  appliedAt: Date;
  coverLetter?: string;
  resumeUrl?: string;
  notes?: string;
}

export interface Interview {
  id: string;
  applicationId: string;
  scheduledAt: Date;
  duration: number;
  type: 'phone' | 'video' | 'in-person';
  status: 'scheduled' | 'completed' | 'cancelled';
  zoomLink?: string;
  notes?: string;
}

export interface Candidate {
  id: string;
  userId: string;
  skills: string[];
  experience: number;
  education: string;
  resumeUrl?: string;
  portfolio?: string;
  expectedSalary?: number;
  availableFrom?: Date;
}

export interface Employer {
  id: string;
  userId: string;
  companyName: string;
  companySize: string;
  industry: string;
  website?: string;
  description?: string;
  verified: boolean;
  subscription?: {
    plan: 'free' | 'basic' | 'premium';
    expiresAt: Date;
  };
}