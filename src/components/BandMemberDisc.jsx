import React, { useState, useRef, useEffect } from 'react';
import { resolvePath } from '../utils/helpers';

const BandMemberDisc = ({ member, onDetails }) => {
    const [rotation, setRotation] = useState(0);
    const [isRotating, setIsRotating] = useState(true);
    const dragStart = useRef(null);
    const lastRotation = useRef(0);

    useEffect(() => {
        let interval;
        if (isRotating) {
            interval = setInterval(() => {
                setRotation(prev => (prev + 0.5) % 360);
            }, 30);
        }
        return () => clearInterval(interval);
    }, [isRotating]);

    const handlePointerDown = (e) => {
        setIsRotating(false);
        dragStart.current = e.clientX || e.touches?.[0].clientX;
        lastRotation.current = rotation;
    };

    const handlePointerMove = (e) => {
        if (dragStart.current === null) return;
        const currentX = e.clientX || e.touches?.[0].clientX;
        const delta = currentX - dragStart.current;
        setRotation(lastRotation.current + delta * 0.5);
    };

    const handlePointerUp = () => {
        dragStart.current = null;
        // Optional: Resume slow rotation after a delay
        setTimeout(() => setIsRotating(true), 2000);
    };

    return (
        <div className="flex flex-col items-center group">
            <div
                className="relative w-48 h-48 md:w-64 md:h-64 cursor-pointer perspective-1000 select-none"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
                onClick={() => onDetails(member)}
            >
                {/* Disc Shadow */}
                <div className="absolute inset-4 bg-black/80 rounded-full blur-2xl transform translate-y-8"></div>

                {/* THE DISC (3D CONTAINER) */}
                <div
                    className="relative w-full h-full transition-transform duration-100 ease-linear transform-style-3d pointer-events-none"
                    style={{ transform: `rotateY(${rotation}deg)` }}
                >
                    {/* Front Face (Profile Picture) */}
                    <div className="absolute inset-0 backface-hidden z-10">
                        <div className="w-full h-full rounded-full border-8 border-slate-800 bg-slate-900 overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.4)] group-hover:shadow-[0_0_60px_rgba(236,72,153,0.6)] transition-all duration-500">
                            {/* Vinyl Grooves Effect */}
                            <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
                            <div className="absolute inset-0 bg-[repeating-radial-gradient(circle_at_center,transparent,transparent_2px,rgba(255,255,255,0.03)_3px)]"></div>

                            <img
                                src={resolvePath(member.photo)}
                                alt={member.name}
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                            />
                        </div>
                    </div>

                    {/* Back Face (Same Profile Picture) */}
                    <div className="absolute inset-0 backface-hidden" style={{ transform: 'rotateY(180deg)' }}>
                        <div className="w-full h-full rounded-full border-8 border-slate-800 bg-slate-900 overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.4)] group-hover:shadow-[0_0_60px_rgba(236,72,153,0.6)] transition-all duration-500">
                            {/* Vinyl Grooves Effect */}
                            <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
                            <div className="absolute inset-0 bg-[repeating-radial-gradient(circle_at_center,transparent,transparent_2px,rgba(255,255,255,0.03)_3px)]"></div>

                            <img
                                src={resolvePath(member.photo)}
                                alt={member.name}
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                            />
                        </div>
                    </div>
                </div>

                {/* Interaction Prompt (Hidden on Mobile) */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">
                    <span className="text-[8px] font-black uppercase tracking-[0.4em] text-cyan-400 bg-black/80 px-3 py-1 rounded-full border border-cyan-500/50">Drag to Spin / Click for Bio</span>
                </div>
            </div>

            <div className="mt-8 text-center bg-white/5 p-4 rounded-xl border border-white/5 backdrop-blur-sm group-hover:border-pink-500/50 transition-colors w-full">
                <h3 className="text-xl font-bold uppercase italic tracking-tighter text-white group-hover:text-pink-400 transition-colors">{member.name}</h3>
                <p className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mt-1">{member.role}</p>
            </div>
        </div>
    );
};

export default BandMemberDisc;
