import React, { useState } from 'react';
import { Monitor, BookOpen, Music, ChevronUp } from 'lucide-react';

const SongInfo = ({ currentSong, lyricsRef }) => {
    const [activeTab, setActiveTab] = useState('lyrics'); // 'lyrics' | 'details'

    return (
        <div ref={lyricsRef} className="w-full bg-[#050510] p-4 md:p-20 z-20 flex flex-col items-center mt-10">
            <div className="max-w-4xl w-full border border-pink-500/30 p-1 bg-black shadow-[0_0_50px_rgba(236,72,153,0.1)] rounded-lg">
                <div className="bg-slate-900/40 p-6 md:p-12 relative overflow-hidden rounded-md backdrop-blur-md">
                    <Monitor className="absolute top-4 right-4 w-12 h-12 text-white/5" />

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/10">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 uppercase italic tracking-tighter">
                                {currentSong.title}
                            </h2>
                            <p className="text-cyan-400 font-mono text-sm tracking-[0.3em] uppercase mt-2">3rd Harmonik</p>
                        </div>

                        {/* --- TAB SWITCHER --- */}
                        <div className="flex bg-black/40 p-1 rounded-full border border-white/5">
                            <button
                                onClick={() => setActiveTab('lyrics')}
                                className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300 text-sm font-bold uppercase tracking-widest ${activeTab === 'lyrics' ? 'bg-pink-600 text-white shadow-[0_0_15px_#ec4899]' : 'text-slate-400 hover:text-white'}`}
                            >
                                <Music className="w-4 h-4" /> Lyrics
                            </button>
                            <button
                                onClick={() => setActiveTab('details')}
                                className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300 text-sm font-bold uppercase tracking-widest ${activeTab === 'details' ? 'bg-cyan-600 text-white shadow-[0_0_15px_#0891b2]' : 'text-slate-400 hover:text-white'}`}
                            >
                                <BookOpen className="w-4 h-4" /> Details
                            </button>
                        </div>
                    </div>

                    {/* --- CONTENT AREA --- */}
                    <div className="min-h-[400px] transition-all duration-500">
                        {activeTab === 'lyrics' ? (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 font-serif italic text-pink-100/90 leading-relaxed md:leading-loose text-lg md:text-xl text-center max-w-2xl mx-auto py-4">
                                {currentSong.lyrics.split('\n').map((line, i) => (
                                    <p key={i} className={`mb-2 min-h-[1.5em] ${line.startsWith('[') ? 'text-pink-500 not-italic font-sans text-xs font-bold tracking-[0.2em] mt-6 mb-4 uppercase' : ''}`}>
                                        {line.trim()}
                                    </p>
                                ))}
                            </div>
                        ) : (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 font-mono text-cyan-100/80 leading-relaxed text-sm md:text-base border-l-2 border-cyan-500/30 pl-6 md:pl-10 py-4 max-w-3xl mx-auto">
                                <h3 className="text-cyan-400 font-black mb-6 uppercase tracking-widest text-xs">Song Information</h3>
                                <div
                                    className="prose prose-invert prose-cyan max-w-none space-y-4 [&>h4]:text-pink-400 [&>h4]:text-lg [&>h4]:font-bold [&>h4]:mt-8 [&>h4]:mb-2 [&>p]:mb-4"
                                    dangerouslySetInnerHTML={{ __html: currentSong.story }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="mt-16 group flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-all duration-300 uppercase tracking-[0.3em] text-[10px]"
            >
                <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                Back to Top
            </button>
        </div>
    );
};

export default SongInfo;
