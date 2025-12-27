import React, { useState, useEffect, useRef, useCallback } from 'react';
import { List, Music, Radio } from 'lucide-react';
import { INITIAL_SONGS } from './data/songs';
import Visualizer from './components/Visualizer';
import Playlist from './components/Playlist';
import PlayerControls from './components/PlayerControls';
import SongInfo from './components/SongInfo';
import BandSection from './components/BandSection';
import MemberDetails from './components/MemberDetails';

export default function App() {
    const [songs, setSongs] = useState(INITIAL_SONGS);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.7);
    const [isMuted, setIsMuted] = useState(false);
    const [isShuffle, setIsShuffle] = useState(false);
    const [repeatMode, setRepeatMode] = useState(0);
    const [draggedItem, setDraggedItem] = useState(null);
    const [isPlaylistOpen, setIsPlaylistOpen] = useState(false);
    const [isAudioReady, setIsAudioReady] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

    const audioRef = useRef(null);
    const canvasRef = useRef(null);
    const progressBarRef = useRef(null);
    const lyricsRef = useRef(null);

    const currentSong = songs[currentIndex];

    // --- AUDIO HANDLING ---
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = isMuted ? 0 : volume;
        }
    }, [volume, isMuted]);

    // Handle Playback State Transitions
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.error("Playback failed:", error);
                    setIsPlaying(false); // Reset to pause state if failure occurs
                });
            }
        } else {
            audio.pause();
        }
    }, [isPlaying, currentIndex]);

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setProgress(audioRef.current.currentTime);
            setDuration(audioRef.current.duration || 0);
        }
    };

    const handleCanPlay = () => setIsAudioReady(true);
    const handleLoadStart = () => setIsAudioReady(false);

    const handleSongEnd = () => {
        if (repeatMode === 2) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        } else if (isShuffle) {
            let nextIndex = Math.floor(Math.random() * songs.length);
            while (nextIndex === currentIndex && songs.length > 1) {
                nextIndex = Math.floor(Math.random() * songs.length);
            }
            setCurrentIndex(nextIndex);
        } else if (repeatMode === 1 || currentIndex < songs.length - 1) {
            handleNext();
        } else {
            setIsPlaying(false);
        }
    };

    const handleNext = () => {
        if (isShuffle) {
            let nextIndex = Math.floor(Math.random() * songs.length);
            while (nextIndex === currentIndex && songs.length > 1) {
                nextIndex = Math.floor(Math.random() * songs.length);
            }
            setCurrentIndex(nextIndex);
        } else {
            setCurrentIndex((prev) => (prev + 1) % songs.length);
        }
    };

    const handlePrev = () => {
        if (progress > 3) {
            audioRef.current.currentTime = 0;
            setProgress(0);
        } else {
            setCurrentIndex((prev) => (prev - 1 + songs.length) % songs.length);
        }
    };

    const togglePlay = () => setIsPlaying(!isPlaying);

    // --- SMOOTH PROGRESS BAR DRAGGING ---
    const calculateProgress = (clientX) => {
        if (!progressBarRef.current) return 0;
        const rect = progressBarRef.current.getBoundingClientRect();
        const percent = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
        return percent * (duration || 1);
    };

    const handlePointerDown = (e) => {
        e.preventDefault();
        const moveHandler = (moveEvent) => {
            const newTime = calculateProgress(moveEvent.clientX);
            if (audioRef.current) audioRef.current.currentTime = newTime;
            setProgress(newTime);
        };
        const upHandler = () => {
            document.removeEventListener('pointermove', moveHandler);
            document.removeEventListener('pointerup', upHandler);
        };
        document.addEventListener('pointermove', moveHandler);
        document.addEventListener('pointerup', upHandler);

        const initialTime = calculateProgress(e.clientX);
        if (audioRef.current) audioRef.current.currentTime = initialTime;
        setProgress(initialTime);
    };

    // --- DRAG AND DROP ---
    const handleDragStart = (e, index) => {
        setDraggedItem(songs[index]);
    };

    const handleDragOver = (e, index) => {
        e.preventDefault();
        const draggedOverItem = songs[index];
        if (draggedItem === draggedOverItem) return;
        let items = songs.filter(item => item !== draggedItem);
        items.splice(index, 0, draggedItem);
        setSongs(items);
        const newCurrentIndex = items.findIndex(s => s.id === currentSong.id);
        if (newCurrentIndex !== -1) {
            setCurrentIndex(newCurrentIndex);
        }
    };

    const scrollToLyrics = () => {
        lyricsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="min-h-screen bg-[#02020a] text-white font-sans overflow-x-hidden selection:bg-cyan-500 selection:text-black">

            {/* --- CORE TOP BAR --- */}
            <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-50"></div>

            {/* --- CRT OVERLAY --- */}
            <div className="fixed inset-0 pointer-events-none z-[60] opacity-[0.03]">
                <div className="w-full h-full bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,#fff_2px)] bg-[length:100%_3px]"></div>
            </div>

            {/* --- AMBIENT BACKGROUND --- */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.05)_0%,transparent_70%)]"></div>
                <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-cyan-950/20 blur-[150px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-purple-950/20 blur-[150px] rounded-full"></div>
            </div>

            {/* --- NAVIGATION --- */}
            <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-[70] backdrop-blur-md bg-black/20">
                <button
                    onClick={() => setIsPlaylistOpen(!isPlaylistOpen)}
                    className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group shadow-lg"
                >
                    <List className="w-6 h-6 text-cyan-400 group-hover:scale-110" />
                </button>
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500">
                    3rd Harmonik
                </div>
            </nav>

            <Playlist
                songs={songs}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                setIsPlaylistOpen={setIsPlaylistOpen}
                isPlaylistOpen={isPlaylistOpen}
                draggedItem={draggedItem}
                handleDragStart={handleDragStart}
                handleDragOver={handleDragOver}
                setDraggedItem={setDraggedItem}
            />

            <main className={`relative z-10 w-full min-h-screen flex flex-col items-center justify-start transition-all duration-700 ease-in-out ${isPlaylistOpen ? 'scale-90 opacity-40 blur-xl pointer-events-none' : 'scale-100 opacity-100 blur-0'}`}>

                {/* --- HEADER --- */}
                <section className="w-full max-w-7xl px-4 pt-32 pb-20 flex flex-col items-center lg:flex-row lg:justify-center gap-16 lg:gap-24">

                    {/* Visualizer and Cover */}
                    <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] flex-shrink-0">
                        {/* THE GLOW */}
                        <div className={`absolute -inset-10 rounded-full transition-all duration-1000 blur-[100px] opacity-40 ${isPlaying ? 'bg-cyan-500 scale-110' : 'bg-pink-500 scale-100'}`}></div>

                        {/* THE RING (Visualizer Surface) */}
                        <div className="absolute -inset-4 md:-inset-8">
                            <Visualizer isPlaying={isPlaying} currentSong={currentSong} canvasRef={canvasRef} />
                        </div>

                        {/* THE CORE (Album Art) */}
                        <div className={`relative w-full h-full rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/10 transition-transform duration-700 ${isPlaying ? 'scale-105 rotate-1' : 'scale-100 rotate-0'}`}>
                            <div className={`absolute inset-0 bg-gradient-to-br transition-all duration-1000 ${currentSong.color} opacity-40`}></div>

                            {currentSong.cover ? (
                                <img
                                    src={currentSong.cover}
                                    alt={currentSong.title}
                                    className={`w-full h-full object-cover transition-all duration-700 ${isPlaying ? 'scale-110 opacity-70' : 'scale-100 opacity-50'}`}
                                />
                            ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900/80">
                                    <Music className={`w-32 h-32 md:w-48 md:h-48 text-white/10 transition-all duration-700 ${isPlaying ? 'scale-125 opacity-20 rotate-12' : 'scale-100 opacity-10'}`} />
                                </div>
                            )}

                            {/* Overlay Branding */}
                            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center text-center">
                                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black italic uppercase tracking-tighter leading-none mb-3 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
                                    {currentSong.title}
                                </h1>
                                <p className="text-sm md:text-lg font-mono tracking-[0.4em] uppercase text-cyan-400 opacity-80 flex items-center gap-2">
                                    <span className="w-4 h-px bg-cyan-500/50"></span>
                                    3rd Harmonik
                                    <span className="w-4 h-px bg-cyan-500/50"></span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="w-full max-w-xl flex flex-col gap-10">
                        <PlayerControls
                            isPlaying={isPlaying}
                            togglePlay={togglePlay}
                            handleNext={handleNext}
                            handlePrev={handlePrev}
                            progress={progress}
                            duration={duration}
                            handlePointerDown={handlePointerDown}
                            progressBarRef={progressBarRef}
                            repeatMode={repeatMode}
                            setRepeatMode={setRepeatMode}
                            isShuffle={isShuffle}
                            setIsShuffle={setIsShuffle}
                            volume={volume}
                            setVolume={setVolume}
                            isMuted={isMuted}
                            setIsMuted={setIsMuted}
                            scrollToLyrics={scrollToLyrics}
                        />
                    </div>
                </section>

                {/* --- INFORMATION COMMONS --- */}
                <SongInfo currentSong={currentSong} lyricsRef={lyricsRef} />

                {/* --- BAND SHOWCASE --- */}
                <BandSection onMemberClick={setSelectedMember} />
            </main>

            <MemberDetails
                member={selectedMember}
                onClose={() => setSelectedMember(null)}
            />

            <audio
                ref={audioRef}
                src={currentSong.audio}
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleSongEnd}
                onCanPlay={handleCanPlay}
                onLoadStart={handleLoadStart}
                preload="auto"
            />
        </div>
    );
}
