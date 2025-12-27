import React from 'react';
import { Share2 } from 'lucide-react';

const SocialSection = ({ socialRef }) => {
    return (
        <section ref={socialRef} className="w-full bg-black/40 backdrop-blur-3xl border-t border-white/5 py-24 px-6 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-indigo-500/10 blur-[150px] rounded-full rotate-12"></div>

            <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
                <div className="flex items-center gap-4 mb-4">
                    <div className="h-px w-10 bg-indigo-500"></div>
                    <Share2 className="w-5 h-5 text-indigo-500" />
                    <div className="h-px w-10 bg-indigo-500"></div>
                </div>
                <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white text-center mb-16">
                    Connect With Us
                </h2>

                <div className="flex flex-wrap justify-center gap-10 md:gap-24">
                    {/* YouTube Social Card */}
                    <a
                        href="https://www.youtube.com/@3rdHarmonik"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-4"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-red-600 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                            <div className="relative w-20 h-20 md:w-28 md:h-28 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center transform transition-all duration-500 group-hover:-translate-y-4 group-hover:bg-red-600/10 group-hover:border-red-600/50">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-10 h-10 md:w-14 md:h-14 fill-white group-hover:fill-red-600 transition-colors duration-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </div>
                        </div>
                        <div className="text-center">
                            <span className="block text-white font-bold tracking-[0.2em] uppercase text-sm">YouTube</span>
                            <span className="block text-slate-500 font-mono text-[10px] uppercase tracking-widest mt-1">@3rdHarmonik</span>
                        </div>
                    </a>

                    {/* Facebook Social Card */}
                    <a
                        href="https://www.facebook.com/3HDavao/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-4"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-600 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                            <div className="relative w-20 h-20 md:w-28 md:h-28 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center transform transition-all duration-500 group-hover:-translate-y-4 group-hover:bg-blue-600/10 group-hover:border-blue-600/50">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-10 h-10 md:w-14 md:h-14 fill-white group-hover:fill-blue-600 transition-colors duration-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.248h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </div>
                        </div>
                        <div className="text-center">
                            <span className="block text-white font-bold tracking-[0.2em] uppercase text-sm">Facebook</span>
                            <span className="block text-slate-500 font-mono text-[10px] uppercase tracking-widest mt-1">3HDavao</span>
                        </div>
                    </a>
                </div>

                <div className="mt-24 pt-12 border-t border-white/5 w-full flex flex-col items-center">
                    <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-slate-600">
                        &copy; 2025 3rd Harmonik. All Visuals Reserved.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SocialSection;
