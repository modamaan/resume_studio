'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Star } from 'lucide-react';
import { TemplateMetadata } from '@/lib/template-config';
import { useRouter } from 'next/navigation';

interface ThemeCardProps {
    template: TemplateMetadata;
    isPopular?: boolean;
}

export function ThemeCard({ template, isPopular = false }: ThemeCardProps) {
    const router = useRouter();

    const handleSelect = () => {
        // Navigate to resume builder with selected template
        router.push(`/resume-builder?template=${template.id}`);
    };

    return (
        <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
            <CardContent className="p-0">
                {/* Preview Image Placeholder */}
                <div className="relative aspect-[8.5/11] bg-gradient-to-br from-slate-50 to-slate-100 border-b">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center p-6">
                            <div className="text-6xl font-bold text-slate-300 mb-2">
                                {template.name.charAt(0)}
                            </div>
                            <p className="text-sm text-slate-400">Preview</p>
                        </div>
                    </div>

                    {/* Popular Badge */}
                    {isPopular && (
                        <div className="absolute top-3 right-3">
                            <Badge className="bg-yellow-500 text-white border-0">
                                <Star className="w-3 h-3 mr-1 fill-white" />
                                Popular
                            </Badge>
                        </div>
                    )}

                    {/* ATS Score Badge */}
                    <div className="absolute top-3 left-3">
                        <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            {template.atsScore}% ATS
                        </Badge>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button
                            onClick={handleSelect}
                            size="lg"
                            className="bg-white text-black hover:bg-slate-100"
                        >
                            Select Template
                        </Button>
                    </div>
                </div>

                {/* Template Info */}
                <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                            {template.name}
                        </h3>
                        <Badge variant="outline" className="capitalize text-xs">
                            {template.category}
                        </Badge>
                    </div>

                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {template.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-1.5 mb-4">
                        {template.features.slice(0, 3).map((feature, index) => (
                            <div key={index} className="flex items-center text-xs text-gray-500">
                                <CheckCircle className="w-3 h-3 mr-2 text-green-600" />
                                {feature}
                            </div>
                        ))}
                    </div>

                    {/* Select Button */}
                    <Button
                        onClick={handleSelect}
                        className="w-full"
                        variant="outline"
                    >
                        Use This Template
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
