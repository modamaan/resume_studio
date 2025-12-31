"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SharedHeader } from "@/components/shared-header";

const FEATURES = [
  "Professional Templates",
  "ATS Optimized",
  "Export to PDF",
  "Real-time Preview",
  "Custom Sections",
  "Easy to Use",
];

export default function LandingPage() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [bounceOffset, setBounceOffset] = useState(0);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Bounce animation
    let startTime: number;
    const animateBounce = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const bounce = Math.sin(elapsed / 500) * 8; // 8px bounce
      setBounceOffset(bounce);
      requestAnimationFrame(animateBounce);
    };

    const bounceFrame = requestAnimationFrame(animateBounce);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(bounceFrame);
    };
  }, []);

  return (
    <div className="bg-white">
      <SharedHeader variant="landing" />

      <main className="relative pt-16">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-20">
          <div
            className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight px-2 leading-tight">
              <span className="block text-gray-900">Build ATS-Friendly</span>
              <span className="block bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent leading-tight">
                Resumes in Minutes
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-xl text-gray-400 max-w-3xl mx-auto px-4 leading-relaxed">
              Build resumes that get you noticed and land interviews
            </p>

            <div className="mt-8 sm:mt-12">
              <button
                onClick={() => router.push("/resume-builder")}
                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-base sm:text-lg font-semibold rounded-full hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <span>Start Building</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Resume Images */}
          <div className="mt-12 sm:mt-16 md:mt-20 w-full max-w-7xl px-4 sm:px-6 md:px-8">
            <div className="relative h-[400px] sm:h-[450px] md:h-[600px] flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
              {/* Image 1 - Left - Hidden on mobile */}
              <div
                className={`hidden sm:block w-[220px] h-[300px] sm:w-[260px] sm:h-[350px] md:w-[350px] md:h-[470px] rounded-2xl overflow-hidden shadow-2xl transition-opacity duration-1000 delay-700 ${isVisible ? "opacity-100" : "opacity-0"
                  }`}
                style={{
                  transform: isVisible
                    ? `perspective(1000px) rotateY(15deg) rotateX(-5deg) translateY(${scrollY * -0.15 + bounceOffset}px)`
                    : "perspective(1000px) rotateY(45deg) rotateX(-15deg)",
                }}
              >
                <Image
                  src="/resume1.png"
                  alt="Resume template 1"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Image 2 - Center - Always visible */}
              <div
                className={`w-[280px] h-[380px] sm:w-[280px] sm:h-[380px] md:w-[380px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl z-10 transition-opacity duration-1000 delay-900 ${isVisible ? "opacity-100" : "opacity-0"
                  }`}
                style={{
                  transform: isVisible
                    ? `perspective(1000px) rotateY(-5deg) rotateX(-3deg) translateY(${scrollY * -0.2 + bounceOffset * 1.2}px)`
                    : "perspective(1000px) rotateY(-25deg) rotateX(-10deg)",
                }}
              >
                <Image
                  src="/resume2.png"
                  alt="Resume template 2"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Image 3 - Right - Hidden on mobile */}
              <div
                className={`hidden sm:block w-[220px] h-[300px] sm:w-[260px] sm:h-[350px] md:w-[350px] md:h-[470px] rounded-2xl overflow-hidden shadow-2xl transition-opacity duration-1000 delay-1100 ${isVisible ? "opacity-100" : "opacity-0"
                  }`}
                style={{
                  transform: isVisible
                    ? `perspective(1000px) rotateY(-15deg) rotateX(-5deg) translateY(${scrollY * -0.18 + bounceOffset * 0.8}px)`
                    : "perspective(1000px) rotateY(-45deg) rotateX(-15deg)",
                }}
              >
                <Image
                  src="/resume3.png"
                  alt="Resume template 3"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Ticker Tape */}
        <section className="sticky top-16 bg-gradient-to-r from-gray-50 to-gray-100 border-y border-gray-200 py-4 overflow-hidden z-40">
          <div className="flex animate-scroll whitespace-nowrap">
            {[...FEATURES, ...FEATURES, ...FEATURES, ...FEATURES].map((feature, i) => (
              <div
                key={i}
                className="inline-flex items-center px-6 text-gray-700 font-medium"
              >
                <span>{feature}</span>
                <span className="mx-6 text-emerald-500">•</span>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">
              <span className="text-gray-900">Everything you need</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-500 to-cyan-600 bg-clip-text text-transparent">
                to land your dream job
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: "✓", title: "ATS-Optimized", desc: "Pass applicant tracking systems" },
                { icon: "📄", title: "Professional Templates", desc: "10+ expertly designed templates" },
                { icon: "👁", title: "Real-time Preview", desc: "See changes instantly" },
                { icon: "⬇", title: "PDF Export", desc: "Download print-ready PDFs" },
                { icon: "⚙", title: "Custom Sections", desc: "Add and reorder any section" },
                { icon: "📱", title: "Mobile Friendly", desc: "Build on any device" },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              {[
                { value: "5K+", label: "Resumes Created" },
                { value: "10+", label: "Templates" },
                { value: "4.9", label: "User Rating" },
                { value: "100%", label: "Free Forever" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-5xl md:text-6xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-32 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="text-gray-900">Ready to build your</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-500 to-cyan-600 bg-clip-text text-transparent">
                perfect resume?
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Join thousands of job seekers who landed their dream roles
            </p>
            <button
              onClick={() => router.push("/resume-builder")}
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-xl font-bold rounded-full hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-gray-200 bg-white overflow-hidden">
        {/* Top Section with Links */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
            {/* Left Side - Brand and Description */}
            <div className="max-w-md">
              <h3 className="text-3xl font-normal mb-3" style={{ fontFamily: 'var(--font-great-vibes), cursive' }}>
                <span className="text-black">Resume</span>
                <span className="text-emerald-500">Studio</span>
              </h3>
              <p className="text-gray-600 mb-4">
                Build professional resumes that get you noticed and land interviews. Free forever.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/resum_estudio?igsh=MXBjdWIxNG91MnQ3NQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-500 hover:text-emerald-500 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Instagram
                </a>
              </div>
            </div>

            {/* Right Side - Quick Links */}
            <div className="flex flex-wrap gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Product</h4>
                <div className="flex flex-col gap-2 text-gray-600">
                  <Link href="/blog" className="hover:text-emerald-500 transition-colors">
                    Blog
                  </Link>
                  <Link href="/changelog" className="hover:text-emerald-500 transition-colors">
                    Changelog
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling Text Section */}
        <div className="relative pb-10 bg-gradient-to-b from-white to-gray-50 footer-scroll-container overflow-hidden">
          <div className="flex animate-scroll-footer whitespace-nowrap footer-scroll-content">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="inline-flex items-center">
                <span className="text-[140px] sm:text-[200px] md:text-[280px] lg:text-[320px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400/20 via-teal-500/20 to-cyan-600/20 hover:from-emerald-400 hover:via-teal-500 hover:to-cyan-600 transition-all duration-500 px-12 cursor-default select-none footer-text leading-none">
                  ResumeStudio
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="relative border-t border-gray-200 py-6 bg-white z-10">
          <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500">
            <p>© 2025 ResumeStudio • All Rights Reserved</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }

        @keyframes scroll-footer {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll-footer {
          animation: scroll-footer 15s linear infinite;
        }

        .footer-text {
          transition: all 0.5s ease;
        }

        .footer-text:hover {
          text-shadow:
            0 0 20px rgba(16, 185, 129, 0.8),
            0 0 40px rgba(16, 185, 129, 0.6),
            0 0 60px rgba(16, 185, 129, 0.4),
            0 0 80px rgba(16, 185, 129, 0.3);
        }

        .footer-scroll-container:hover .footer-scroll-content {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
