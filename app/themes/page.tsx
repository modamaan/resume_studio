'use client';

import React from 'react';
import { ThemeCard } from '@/components/theme-card';
import { AVAILABLE_TEMPLATES } from '@/lib/template-config';
import { SharedHeader } from '@/components/shared-header';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ThemesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
            {/* Header */}
            <SharedHeader variant="landing" />

            {/* Hero Section */}
            <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
                        <CheckCircle className="w-4 h-4" />
                        All templates are 95%+ ATS-friendly
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Choose Your Perfect
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            Resume Template
                        </span>
                    </h1>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Select from our collection of professionally designed, ATS-optimized resume templates.
                        Each template is crafted to help you stand out while passing automated screening systems.
                    </p>

                    <div className="flex items-center justify-center gap-4">
                        <Link href="/resume-builder">
                            <Button variant="outline" size="lg">
                                Skip & Use Default
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Templates Grid */}
            <div className="pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            Available Templates
                        </h2>
                        <p className="text-gray-600">
                            {AVAILABLE_TEMPLATES.length} professionally designed templates to choose from
                        </p>
                    </div>

                    {/* Templates Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {AVAILABLE_TEMPLATES.map((template, index) => (
                            <ThemeCard
                                key={template.id}
                                template={template}
                                isPopular={index === 0} // Mark first template as popular
                            />
                        ))}
                    </div>

                    {/* Info Section */}
                    <div className="mt-16 bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                                <Sparkles className="w-8 h-8 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Why Our Templates Are ATS-Friendly
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    98% of Fortune 500 companies use Applicant Tracking Systems (ATS) to screen resumes.
                                    Our templates are designed to pass these automated systems while looking great to human recruiters.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-sm text-gray-700">
                                        <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                                        Standard fonts and clear section headings
                                    </li>
                                    <li className="flex items-center text-sm text-gray-700">
                                        <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                                        Simple, parseable layouts
                                    </li>
                                    <li className="flex items-center text-sm text-gray-700">
                                        <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                                        No images or graphics that confuse ATS
                                    </li>
                                    <li className="flex items-center text-sm text-gray-700">
                                        <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                                        Optimized for both automated and human review
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
