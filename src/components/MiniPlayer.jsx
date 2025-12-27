import React, { useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Shuffle, Repeat } from 'lucide-react';
import { formatTime, resolvePath } from '../utils/helpers';

const MiniPlayer = ({
    currentSong, isPlaying, togglePlay, handleNext, handlePrev,
    progress, duration, handlePointerDown,
    repeatMode, setRepeatMode, isShuffle, setIsShuffle,
    volume, setVolume, isMuted, setIsMuted,
    isVisible
}) => {
    const progressBarRef = useRef(null);

    // Internal pointer handler to use local ref
    const onPointerDown = (e) => {
        if (handlePointerDown) {
            // We need to pass the event to the parent's handler but it needs the local ref
            // Actually, App.jsx's handlePointerDown uses a ref that might be hardwired to the main player.
            // Let's create a local version if needed or ensure handlePointerDown is generic.
            handlePointerDown(e, progressBarRef);
        }
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full z-[80] animate-in slide-in-from-bottom-full duration-500 ease-out">
            <div className="mx-auto max-w-7xl px-4 pb-4">
                <div className="bg-black/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-3 md:p-4 shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col gap-2">

                    {/* Progress Bar (Full Width) */}
                    <div className="px-2">
                        <div
                            ref={progressBarRef}
                            className="relative h-1.5 flex items-center cursor-pointer touch-none group/mini-progress"
                            onPointerDown={onPointerDown}
                        >
                            <div className="absolute inset-0 bg-slate-900/80 rounded-full overflow-hidden">
                                <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,rgba(255,255,255,0.1)_11px)]"></div>
                            </div>
                            <div
                                className="absolute h-full bg-gradient-to-r from-pink-600 via-purple-500 to-cyan-400 rounded-full transition-all duration-100 ease-out flex items-center justify-end"
                                style={{ width: `${(progress / (duration || 1)) * 100}%` }}
                            >
                                <div className="h-full w-1 bg-white shadow-[0_0_10px_#fff] scale-y-150 rounded-full opacity-0 group-hover/mini-progress:opacity-100 transition-opacity"></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                        {/* Song Info */}
                        <div className="flex items-center gap-3 min-w-0 w-1/4">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden flex-shrink-0 border border-white/10">
                                <img
                                    src={resolvePath(currentSong.cover)}
                                    alt={currentSong.title}
                                    className={`w-full h-full object-cover transition-transform duration-500 ${isPlaying ? 'scale-110' : 'scale-100'}`}
                                />
                            </div>
                            <div className="min-w-0">
                                <h4 className="text-sm font-bold truncate text-white">{currentSong.title}</h4>
                                <p className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest truncate">3rd Harmonik</p>
                            </div>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center gap-2 md:gap-6">
                            <div className="hidden md:flex items-center gap-4">
                                <button
                                    onClick={() => setRepeatMode((r) => (r + 1) % 3)}
                                    className={`p-1.5 transition-all ${repeatMode > 0 ? 'text-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.3)]' : 'text-slate-500'}`}
                                >
                                    {repeatMode === 2 ?
                                        <div className="relative"><Repeat className="w-5 h-5" /><span className="absolute -top-1 -right-1 text-[8px] font-black bg-pink-500 text-white rounded-full w-3 h-3 flex items-center justify-center">1</span></div> :
                                        <Repeat className="w-5 h-5" />
                                    }
                                </button>
                                <button
                                    onClick={() => setIsShuffle(!isShuffle)}
                                    className={`p-1.5 transition-all ${isShuffle ? 'text-cyan-400' : 'text-slate-500'}`}
                                >
                                    <Shuffle className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="flex items-center gap-3 md:gap-5">
                                <button onClick={handlePrev} className="p-1.5 text-slate-400 hover:text-white transition-colors">
                                    <SkipBack className="w-5 h-5 md:w-6 md:h-6 fill-current" />
                                </button>
                                <button
                                    onClick={togglePlay}
                                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all ${isPlaying ? 'bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)]' : 'bg-pink-500/10 border border-pink-500/50 text-pink-500'}`}
                                >
                                    {isPlaying ? <Pause className="w-5 h-5 md:w-6 md:h-6 fill-current" /> : <Play className="w-5 h-5 md:w-6 md:h-6 fill-current ml-0.5" />}
                                </button>
                                <button onClick={handleNext} className="p-1.5 text-slate-400 hover:text-white transition-colors">
                                    <SkipForward className="w-5 h-5 md:w-6 md:h-6 fill-current" />
                                </button>
                            </div>
                        </div>

                        {/* Volume & Time */}
                        <div className="flex items-center justify-end gap-4 w-1/4">
                            <div className="hidden lg:flex items-center gap-2 w-32">
                                <button onClick={() => setIsMuted(!isMuted)} className="text-slate-500 hover:text-cyan-400">
                                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                                </button>
                                <input
                                    type="range" min="0" max="1" step="0.01" value={isMuted ? 0 : volume}
                                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                                    className="w-full h-0.5 bg-slate-800 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:bg-cyan-400 [&::-webkit-slider-thumb]:rounded-full"
                                />
                            </div>
                            <div className="text-[10px] font-mono text-slate-500 whitespace-nowrap hidden sm:block">
                                <span className="text-cyan-400">{formatTime(progress)}</span> / {formatTime(duration)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiniPlayer;
