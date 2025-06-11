import { Job, Application, Interview, Candidate, Employer } from '../types';

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    type: 'full-time',
    salary: { min: 120000, max: 160000, currency: 'USD' },
    description: 'We are looking for an experienced Frontend Developer to join our team...',
    requirements: ['React', 'TypeScript', '5+ years experience', 'Team leadership'],
    benefits: ['Health insurance', 'Remote work', '401k matching', 'Stock options'],
    employerId: '1',
    featured: true,
    deadline: new Date('2024-12-31'),
    createdAt: new Date('2024-01-15'),
    applicants: 45,
    status: 'active',
    categories: ['Technology', 'Frontend', 'Senior Level']
  },
  {
    id: '2',
    title: 'Product Manager',
    company: 'Innovation Labs',
    location: 'New York, NY',
    type: 'full-time',
    salary: { min: 100000, max: 140000, currency: 'USD' },
    description: 'Join our product team to drive innovation and growth...',
    requirements: ['Product management', 'Agile', 'Data analysis', '3+ years experience'],
    benefits: ['Health insurance', 'Flexible hours', 'Learning budget'],
    employerId: '2',
    featured: false,
    deadline: new Date('2024-11-30'),
    createdAt: new Date('2024-01-20'),
    applicants: 32,
    status: 'active',
    categories: ['Product', 'Management', 'Mid Level']
  },
  {
    id: '3',
    title: 'UX Designer',
    company: 'Design Studio',
    location: 'Remote',
    type: 'contract',
    salary: { min: 80000, max: 100000, currency: 'USD' },
    description: 'Create amazing user experiences for our digital products...',
    requirements: ['UI/UX Design', 'Figma', 'User research', 'Portfolio'],
    benefits: ['Remote work', 'Flexible schedule', 'Project variety'],
    employerId: '3',
    featured: true,
    deadline: new Date('2024-10-15'),
    createdAt: new Date('2024-01-25'),
    applicants: 28,
    status: 'active',
    categories: ['Design', 'UX/UI', 'Remote']
  }
];

export const mockApplications: Application[] = [
  {
    id: '1',
    jobId: '1',
    candidateId: '1',
    status: 'shortlisted',
    appliedAt: new Date('2024-01-16'),
    coverLetter: 'I am very interested in this position...',
    resumeUrl: '/resumes/candidate1.pdf'
  },
  {
    id: '2',
    jobId: '2',
    candidateId: '1',
    status: 'pending',
    appliedAt: new Date('2024-01-21'),
    coverLetter: 'My experience in product management...',
    resumeUrl: '/resumes/candidate1.pdf'
  }
];

export const mockInterviews: Interview[] = [
  {
    id: '1',
    applicationId: '1',
    scheduledAt: new Date('2024-02-15T10:00:00'),
    duration: 60,
    type: 'video',
    status: 'scheduled',
    zoomLink: 'https://zoom.us/j/123456789'
  }
];

export const mockCandidates: Candidate[] = [
  {
    id: '1',
    userId: '1',
    skills: ['React', 'TypeScript', 'Node.js', 'Python'],
    experience: 5,
    education: 'Bachelor of Computer Science',
    resumeUrl: '/resumes/candidate1.pdf',
    expectedSalary: 130000,
    availableFrom: new Date('2024-03-01')
  }
];

export const mockEmployers: Employer[] = [
  {
    id: '1',
    userId: '2',
    companyName: 'TechCorp Inc.',
    companySize: '500-1000',
    industry: 'Technology',
    website: 'https://techcorp.com',
    description: 'Leading technology company...',
    verified: true,
    subscription: {
      plan: 'premium',
      expiresAt: new Date('2024-12-31')
    }
  }
];