import React, { useEffect } from 'react';

const Visualizer = ({ isPlaying, currentSong, canvasRef }) => {
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const renderVisualizer = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            const width = canvas.width;
            const height = canvas.height;
            ctx.clearRect(0, 0, width, height);

            const barWidth = 8;
            const gap = 6;
            const barCount = Math.floor(width / (barWidth + gap));

            for (let i = 0; i < barCount; i++) {
                let barHeight;
                if (isPlaying) {
                    const time = Date.now() / 150;
                    const noise = Math.abs(Math.sin(i * 0.3 + time) * Math.cos(i * 0.7 - time * 1.5));
                    barHeight = noise * height * 0.9;
                } else {
                    barHeight = 4;
                }

                const gradient = ctx.createLinearGradient(0, height - barHeight, 0, height);
                gradient.addColorStop(0, '#f472b6');
                gradient.addColorStop(0.5, '#c084fc');
                gradient.addColorStop(1, '#22d3ee');

                ctx.fillStyle = gradient;
                ctx.fillRect(i * (barWidth + gap), height - barHeight, barWidth, barHeight);

                ctx.globalAlpha = 0.2;
                ctx.fillRect(i * (barWidth + gap), height, barWidth, barHeight * 0.3);
                ctx.globalAlpha = 1.0;
            }

            animationFrameId = requestAnimationFrame(renderVisualizer);
        };

        renderVisualizer();
        return () => cancelAnimationFrame(animationFrameId);
    }, [isPlaying, currentSong, canvasRef]);

    return <canvas ref={canvasRef} className="w-full h-full rounded-full blur-xl" />;
};

export default Visualizer;
