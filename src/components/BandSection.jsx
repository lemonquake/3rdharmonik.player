import React, { useState } from 'react';
import { MEMBERS } from '../data/members';
import BandMemberDisc from './BandMemberDisc';
import MemberDetails from './MemberDetails';
import { Users } from 'lucide-react';

const BandSection = ({ onMemberClick, bandRef }) => {
    return (
        <section ref={bandRef} className="w-full max-w-7xl mx-auto px-6 py-32">
            <div className="flex flex-col items-center mb-20">
                <div className="flex items-center gap-4 mb-4">
                    <div className="h-px w-10 bg-pink-500"></div>
                    <Users className="w-5 h-5 text-pink-500" />
                    <div className="h-px w-10 bg-pink-500"></div>
                </div>
                <h2 className="text-4xl md:text-6xl font-black italic uppercase italic tracking-tighter text-white text-center">
                    Meet the Band
                </h2>
                <p className="text-slate-500 text-sm font-mono mt-4 uppercase tracking-[0.3em]">The Soul of 3rd Harmonik</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
                {MEMBERS.map((member) => (
                    <BandMemberDisc
                        key={member.id}
                        member={member}
                        onDetails={onMemberClick}
                    />
                ))}
            </div>
        </section>
    );
};

export default BandSection;
