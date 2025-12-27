import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Shuffle, Repeat, ChevronDown } from 'lucide-react';
import { formatTime } from '../utils/helpers';

const PlayerControls = ({
    isPlaying, togglePlay, handleNext, handlePrev,
    progress, duration, handlePointerDown, progressBarRef,
    repeatMode, setRepeatMode, isShuffle, setIsShuffle,
    volume, setVolume, isMuted, setIsMuted, scrollToLyrics
}) => {
    return (
        <div className="w-full max-w-3xl bg-black/40 backdrop-blur-2xl border border-white/5 rounded-3xl p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden group">
            {/* --- DECORATIVE HUD ELEMENTS --- */}
            <div className="absolute top-0 left-0 w-8 h-[2px] bg-gradient-to-r from-cyan-500 to-transparent"></div>
            <div className="absolute top-0 left-0 w-[2px] h-8 bg-gradient-to-b from-cyan-500 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-8 h-[2px] bg-gradient-to-l from-pink-500 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-[2px] h-8 bg-gradient-to-t from-pink-500 to-transparent"></div>

            {/* --- PROGRESS BAR (PREMIUM LASER) --- */}
            <div className="mb-10 select-none">
                <div className="flex justify-between text-[11px] font-mono mb-3 tracking-[0.2em]">
                    <span className="text-cyan-400 drop-shadow-[0_0_5px_#22d3ee] animate-pulse">{formatTime(progress)}</span>
                    <span className="text-slate-500">{formatTime(duration)}</span>
                </div>
                <div
                    ref={progressBarRef}
                    className="relative h-3 md:h-4 flex items-center cursor-pointer touch-none"
                    onPointerDown={handlePointerDown}
                >
                    <div className="absolute inset-0 bg-slate-900/80 rounded-full border border-white/5 overflow-hidden">
                        <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,rgba(255,255,255,0.1)_11px)]"></div>
                    </div>

                    <div
                        className="absolute h-full bg-gradient-to-r from-pink-600 via-purple-500 to-cyan-400 rounded-full transition-all duration-100 ease-out flex items-center justify-end"
                        style={{ width: `${(progress / (duration || 1)) * 100}%` }}
                    >
                        {/* THE LASER TIP */}
                        <div className="h-full w-1 md:w-2 bg-white shadow-[0_0_20px_#fff,0_0_10px_#22d3ee] rounded-full z-10"></div>
                        <div className="absolute -right-2 w-4 h-4 bg-cyan-400/20 blur-xl rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* --- MAIN INTERFACE --- */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">

                {/* Secondary Controls (Shuffle / Repeat) */}
                <div className="flex items-center gap-6 md:order-1">
                    <button
                        onClick={() => setRepeatMode((r) => (r + 1) % 3)}
                        className={`p-2 transition-all duration-300 hover:scale-125 ${repeatMode > 0 ? 'text-pink-500 drop-shadow-[0_0_10px_#ec4899]' : 'text-slate-600'}`}
                        title="Repeat Mode"
                    >
                        {repeatMode === 2 ?
                            <div className="relative"><Repeat className="w-6 h-6" /><span className="absolute -top-2 -right-2 text-[10px] font-black bg-pink-500 text-white rounded-full w-4 h-4 flex items-center justify-center border border-black">1</span></div> :
                            <Repeat className="w-6 h-6" />
                        }
                    </button>
                    <button
                        onClick={() => setIsShuffle(!isShuffle)}
                        className={`p-2 transition-all duration-300 hover:scale-125 ${isShuffle ? 'text-cyan-400 drop-shadow-[0_0_10px_#22d3ee]' : 'text-slate-600'}`}
                        title="Shuffle"
                    >
                        <Shuffle className="w-6 h-6" />
                    </button>
                </div>

                {/* --- PLAYBACK ENGINE (MD:ORDER-2) --- */}
                <div className="flex items-center gap-8 md:order-2">
                    <button onClick={handlePrev} className="p-3 text-slate-400 hover:text-white hover:scale-110 active:scale-95 transition-all">
                        <SkipBack className="w-8 h-8 md:w-10 md:h-10 fill-current" />
                    </button>

                    <button
                        onClick={togglePlay}
                        className={`w-20 h-20 md:w-24 md:h-24 rounded-full border-4 transition-all duration-500 active:scale-90 group/play relative flex items-center justify-center ${isPlaying ? 'border-cyan-500/50 shadow-[0_0_30px_rgba(34,211,238,0.4)]' : 'border-pink-500/50 shadow-[0_0_30px_rgba(236,72,153,0.3)]'}`}
                    >
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-br transition-all duration-500 ${isPlaying ? 'from-slate-900 to-cyan-900 opacity-100' : 'from-slate-900 to-pink-900 opacity-100'}`}></div>
                        <div className="relative z-10">
                            {isPlaying ?
                                <Pause className="w-10 h-10 md:w-12 md:h-12 text-cyan-400 fill-current animate-pulse" /> :
                                <Play className="w-10 h-10 md:w-12 md:h-12 text-pink-500 fill-current ml-2" />
                            }
                        </div>
                    </button>

                    <button onClick={handleNext} className="p-3 text-slate-400 hover:text-white hover:scale-110 active:scale-95 transition-all">
                        <SkipForward className="w-8 h-8 md:w-10 md:h-10 fill-current" />
                    </button>
                </div>

                {/* --- VOLUME & UTILITIES --- */}
                <div className="flex items-center gap-4 w-full md:w-40 md:order-3 group/vol">
                    <button onClick={() => setIsMuted(!isMuted)} className="p-2 text-slate-500 hover:text-cyan-400 transition-colors">
                        {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                    </button>
                    <div className="flex-1 relative flex items-center h-8">
                        <input
                            type="range" min="0" max="1" step="0.01" value={isMuted ? 0 : volume}
                            onChange={(e) => setVolume(parseFloat(e.target.value))}
                            className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer focus:outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-cyan-400 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[0_0_10px_#22d3ee] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white/50"
                        />
                    </div>
                </div>

            </div>

            {/* --- FOOTER --- */}
            <div className="mt-10 flex justify-center border-t border-white/5 pt-6">
                <button
                    onClick={scrollToLyrics}
                    className="flex flex-col items-center gap-1 group/scroll"
                >
                    <span className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-600 group-hover/scroll:text-pink-500 transition-colors">Song Details</span>
                    <ChevronDown className="w-4 h-4 text-slate-700 group-hover/scroll:text-cyan-400 group-hover/scroll:translate-y-1 transition-all duration-300" />
                </button>
            </div>
        </div>
    );
};

export default PlayerControls;
