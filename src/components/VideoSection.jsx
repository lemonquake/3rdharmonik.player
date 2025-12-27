import React from 'react';
import { Youtube, MonitorPlay } from 'lucide-react';

const VIDEOS = [
    {
        id: 'g3JGYNDUYco',
        title: 'Obvious',
        tag: 'Official Music Video'
    },
    {
        id: 'XGycHBSxka4',
        title: 'How Could You',
        tag: 'Official Music Video'
    },
    {
        id: 'i_QXTB3tIcE',
        title: 'Kometa',
        tag: 'Official Music Video'
    }
];

const VideoSection = ({ videoRef }) => {
    return (
        <section ref={videoRef} className="w-full max-w-7xl mx-auto px-6 py-32 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="flex flex-col items-center mb-20 relative z-10">
                <div className="flex items-center gap-4 mb-4">
                    <div className="h-px w-10 bg-cyan-500"></div>
                    <MonitorPlay className="w-5 h-5 text-cyan-500" />
                    <div className="h-px w-10 bg-cyan-500"></div>
                </div>
                <h2 className="text-4xl md:text-6xl font-black italic uppercase italic tracking-tighter text-white text-center">
                    Visual Experience
                </h2>
                <p className="text-slate-500 text-sm font-mono mt-4 uppercase tracking-[0.3em]">Watch Our Stories Unfold</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                {VIDEOS.map((video) => (
                    <div
                        key={video.id}
                        className="group relative"
                    >
                        {/* Glow effect on hover */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>

                        <div className="relative bg-black rounded-2xl overflow-hidden border border-white/10 aspect-video shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${video.id}`}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>

                        <div className="mt-4 flex flex-col items-center">
                            <h3 className="text-white font-bold uppercase tracking-widest text-lg group-hover:text-cyan-400 transition-colors">
                                {video.title}
                            </h3>
                            <span className="text-xs font-mono text-slate-500 tracking-widest mt-1 opacity-60 group-hover:opacity-100 transition-opacity">
                                {video.tag}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default VideoSection;
