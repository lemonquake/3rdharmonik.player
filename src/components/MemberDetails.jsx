import React, { useEffect } from 'react';
import { X, Ruler, Heart, Star, ChevronLeft, ChevronRight, Users } from 'lucide-react';
import { resolvePath } from '../utils/helpers';

const MemberDetails = ({ member, onClose }) => {
    useEffect(() => {
        if (member) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [member]);

    if (!member) return null;

    return (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8 lg:p-12 pointer-events-auto">
            <div
                className="absolute inset-0 bg-black/95 backdrop-blur-3xl animate-in fade-in duration-500"
                onClick={onClose}
            />

            <div className="relative w-full max-w-6xl max-h-[95vh] bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_200px_rgba(236,72,153,0.4)] animate-in zoom-in-95 slide-in-from-bottom-12 duration-700 flex flex-col z-[1001]">

                {/* Header/Close */}
                <div className="absolute top-8 right-8 z-50">
                    <button
                        onClick={onClose}
                        className="p-4 bg-black/40 hover:bg-pink-600 rounded-full transition-all duration-300 text-white border border-white/10 hover:border-pink-400 group shadow-2xl"
                    >
                        <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
                    </button>
                </div>

                <div className="flex flex-col lg:flex-row flex-1 overflow-y-auto lg:overflow-hidden">

                    {/* LEFT: PHOTO GALLERY (DYNAMIC) */}
                    <div className="w-full lg:w-[55%] bg-black/40 relative flex flex-col p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/5 overflow-y-auto custom-scrollbar">
                        <div className="space-y-6">
                            <div className="relative aspect-square md:aspect-video rounded-2xl overflow-hidden border-2 border-white/5 shadow-2xl group">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                                <img src={resolvePath(member.photo)} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                <div className="absolute bottom-6 left-6 z-20">
                                    <span className="px-3 py-1 bg-pink-600 text-[8px] font-black uppercase tracking-[0.3em] rounded-md">Primary Identification</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6 pb-4">
                                {member.extraPhotos.map((photo, i) => (
                                    <div key={i} className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 group shadow-xl">
                                        <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-colors z-10"></div>
                                        <img src={resolvePath(photo)} alt={`${member.name} extra ${i}`} className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000" />
                                        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Star className="w-4 h-4 text-cyan-400 fill-cyan-400" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: CONTENT (DOSSIER) */}
                    <div className="w-full lg:w-[45%] p-10 md:p-16 bg-gradient-to-br from-slate-900 to-black flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-px bg-cyan-500"></div>
                            <span className="text-cyan-400 font-mono text-[10px] uppercase tracking-[0.5em]">Personnel Dossier // 3HMP</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-white mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                            {member.name}
                        </h2>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <span className="px-4 py-2 bg-pink-500/20 border border-pink-500/40 text-pink-400 text-[10px] font-black uppercase tracking-widest rounded-lg">
                                {member.role}
                            </span>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-400 text-[10px] uppercase tracking-widest font-bold">
                                <Ruler className="w-3.5 h-3.5" /> {member.height}
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-400 text-[10px] uppercase tracking-widest font-bold">
                                <Heart className="w-3.5 h-3.5 text-pink-500" /> {member.favoriteSong}
                            </div>
                        </div>

                        <div className="prose prose-invert prose-pink max-w-none">
                            <p className="text-slate-200 leading-relaxed md:leading-loose text-lg md:text-xl font-light italic border-l-4 border-pink-500/30 pl-8">
                                "{member.bio}"
                            </p>
                        </div>

                        <div className="mt-16 pt-8 border-t border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-1 bg-pink-500 group-hover:w-20 transition-all duration-500"></div>
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-white transition-colors">Verified Status: Active</span>
                            </div>
                            <Users className="w-8 h-8 text-white/5" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberDetails;
