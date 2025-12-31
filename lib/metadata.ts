import { Metadata } from 'next';

const defaultMetadata: Metadata = {
  title: {
    default: 'Free Resume Maker | Online Resume Builder | ResumeStudio',
    template: '%s | ResumeStudio'
  },
  description: 'Create professional resumes for free with ResumeStudio - the best online resume builder. Build ATS-friendly resumes with modern templates. Free resume maker for builders, thinkers, developers, hackers, and tinkerers.',
  keywords: [
    'free resume maker',
    'online resume builder',
    'resume builder free',
    'create resume online',
    'professional resume builder',
    'ATS resume builder',
    'resume templates',
    'free resume templates',
    'resume maker online',
    'build resume free',
    'simple resume builder',
    'resume creator',
    'free CV maker',
    'online CV builder',
    'resume builder for developers',
    'tech resume builder',
    'modern resume templates',
    'ATS friendly resume',
    'job application resume',
    'career tools'
  ],
  authors: [{ name: 'ResumeStudio' }],
  creator: 'ResumeStudio',
  publisher: 'ResumeStudio',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://simpleresu.me',
    siteName: 'ResumeStudio',
    title: 'Free Resume Maker | Online Resume Builder | ResumeStudio',
    description: 'Create professional resumes for free with ResumeStudio - the best online resume builder. Build ATS-friendly resumes with modern templates.',
    images: [
      {
        url: 'https://simpleresu.me/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ResumeStudio - Professional Resume Builder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Resume Maker | Online Resume Builder | ResumeStudio',
    description: 'Create professional resumes for free with SimpleResu.me - the best online resume builder. Build ATS-friendly resumes with modern templates.',
    images: ['https://simpleresu.me/twitter-image.png'],
    creator: '@simpleresu_me',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://simpleresu.me',
    languages: {
      'en-US': 'https://simpleresu.me',
      'es-ES': 'https://simpleresu.me/es',
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#ffffff',
};

export default defaultMetadata; 