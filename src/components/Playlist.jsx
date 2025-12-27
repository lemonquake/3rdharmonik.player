import React from 'react';
import { Move } from 'lucide-react';

const Playlist = ({ songs, currentIndex, setCurrentIndex, setIsPlaylistOpen, isPlaylistOpen, draggedItem, handleDragStart, handleDragOver, setDraggedItem }) => {
    return (
        <div
            className={`fixed top-0 left-0 h-full w-full md:w-96 bg-black/95 border-r-2 border-pink-500 z-40 transform transition-transform duration-500 ease-out shadow-[0_0_50px_rgba(236,72,153,0.3)] ${isPlaylistOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
            <div className="p-6 h-full flex flex-col pt-24">
                <div className="flex justify-between items-center mb-6 border-b border-pink-500/30 pb-4">
                    <h2 className="text-2xl font-black italic tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400 drop-shadow-[0_2px_10px_rgba(236,72,153,0.5)]">
                        TRACK LIST
                    </h2>
                    <div className="text-xs font-mono text-pink-500 animate-pulse">{songs.length} SONGS LOADED</div>
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-2">
                    {songs.map((song, index) => (
                        <div
                            key={song.id}
                            draggable
                            onDragStart={(e) => handleDragStart(e, index)}
                            onDragOver={(e) => handleDragOver(e, index)}
                            onDragEnd={() => setDraggedItem(null)}
                            onClick={() => { setCurrentIndex(index); setIsPlaylistOpen(false); }}
                            className={`group relative flex items-center gap-4 p-3 rounded-sm border border-transparent cursor-pointer transition-all duration-200
                      ${currentIndex === index
                                    ? 'bg-pink-900/20 border-pink-500/50 shadow-[inset_0_0_20px_rgba(236,72,153,0.2)]'
                                    : 'hover:bg-white/5 hover:border-cyan-500/30'}
                      ${draggedItem === song ? 'opacity-30 border-dashed border-white' : ''}
                  `}
                        >
                            <div className={`w-8 h-8 flex items-center justify-center font-mono text-sm border border-white/10 ${currentIndex === index ? 'text-pink-400 border-pink-500' : 'text-slate-500'}`}>
                                {currentIndex === index ? <div className="w-2 h-2 bg-pink-500 animate-ping" /> : index + 1}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className={`font-bold truncate text-sm uppercase tracking-wider ${currentIndex === index ? 'text-pink-300' : 'text-slate-300 group-hover:text-cyan-300'}`}>
                                    {song.title}
                                </div>
                            </div>
                            <Move className="w-4 h-4 text-slate-700 group-hover:text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    ))}
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 text-center font-mono text-[10px] text-slate-500">
                    DRAG TO REORDER // CLICK TO PLAY
                </div>
            </div>
        </div>
    );
};

export default Playlist;
