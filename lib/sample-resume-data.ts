import { UserData } from '@/types/resume';

export const SAMPLE_RESUME_DATA: UserData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    headline: 'Senior Software Engineer',
    summary: 'Experienced software engineer with 5+ years building scalable web applications. Passionate about clean code and user experience.',
    location: 'San Francisco, CA',
    phoneNumber: '+1 (555) 123-4567',
    linkedinId: 'johndoe',
    githubId: 'johndoe',

    positions: [
        {
            title: 'Senior Software Engineer',
            company: 'Tech Corp',
            startDate: '2021-01',
            endDate: 'Present',
            description: 'Led development of microservices architecture serving 1M+ users. Mentored junior developers and improved code quality.'
        },
        {
            title: 'Software Engineer',
            company: 'StartupXYZ',
            startDate: '2019-06',
            endDate: '2020-12',
            description: 'Built full-stack features using React and Node.js. Reduced page load time by 40%.'
        }
    ],

    educations: [
        {
            schoolName: 'University of California',
            degree: 'Bachelor of Science',
            fieldOfStudy: 'Computer Science',
            startDate: '2015-09',
            endDate: '2019-05'
        }
    ],

    skills: [
        { name: 'JavaScript' },
        { name: 'TypeScript' },
        { name: 'React' },
        { name: 'Node.js' },
        { name: 'Python' },
        { name: 'AWS' },
        { name: 'Docker' },
        { name: 'PostgreSQL' }
    ],

    projects: [
        {
            title: 'Open Source Contributor',
            link: 'https://github.com/johndoe',
            description: 'Active contributor to popular React libraries'
        }
    ],

    certifications: [
        {
            title: 'AWS Certified Solutions Architect',
            organization: 'Amazon Web Services',
            completionDate: '2022-03',
            credentialUrl: 'https://aws.amazon.com/certification/'
        }
    ],

    customSections: []
};
