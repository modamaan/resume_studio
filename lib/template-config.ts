export interface TemplateMetadata {
    id: string;
    name: string;
    description: string;
    category: 'professional' | 'modern' | 'creative';
    atsScore: number; // 0-100, higher is better
    features: string[];
    preview: string;
}

export const AVAILABLE_TEMPLATES: TemplateMetadata[] = [
    {
        id: 'default',
        name: 'Classic Professional',
        description: 'Clean and professional design with top border accent. Perfect for traditional industries.',
        category: 'professional',
        atsScore: 100,
        features: [
            'Single column layout',
            'Clear section headings',
            'Top border accent',
            '100% ATS-friendly'
        ],
        preview: '/previews/default.png'
    },
    {
        id: 'modern',
        name: 'Modern Minimal',
        description: 'Contemporary design with subtle left sidebar. Great for tech and creative roles.',
        category: 'modern',
        atsScore: 98,
        features: [
            'Two-column layout',
            'Left sidebar accent',
            'Modern typography',
            'ATS-optimized'
        ],
        preview: '/previews/modern.png'
    },
    {
        id: 'github-profile',
        name: 'Developer Focus',
        description: 'Developer-friendly layout with GitHub integration. Ideal for software engineers.',
        category: 'professional',
        atsScore: 95,
        features: [
            'GitHub repos showcase',
            'Clean card layout',
            'Tech-focused sections',
            'ATS-compatible'
        ],
        preview: '/previews/github.png'
    },
    {
        id: 'google-search',
        name: 'Minimalist Clean',
        description: 'Ultra-minimalist design inspired by search results. Perfect for any industry.',
        category: 'modern',
        atsScore: 95,
        features: [
            'Minimalist design',
            'Maximum readability',
            'Simple structure',
            'ATS-optimized'
        ],
        preview: '/previews/google.png'
    }
];

export const getTemplateById = (id: string): TemplateMetadata | undefined => {
    return AVAILABLE_TEMPLATES.find(template => template.id === id);
};

export const isValidTemplate = (id: string): boolean => {
    return AVAILABLE_TEMPLATES.some(template => template.id === id);
};
