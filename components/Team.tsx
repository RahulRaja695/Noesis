import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { TeamMember } from '../types';

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => (
    <div>
        <div className="overflow-hidden">
            <img src={member.imageUrl} alt={member.name} className="w-full h-80 object-cover grayscale transition-all duration-500 hover:grayscale-0 hover:scale-105" />
        </div>
        <div className="mt-6">
            <h3 className="text-2xl font-serif">{member.name}</h3>
            <p className="text-gray-400 mt-1">{member.role}</p>
            <p className="mt-4 text-gray-300 leading-relaxed">{member.description}</p>
        </div>
    </div>
);


export const Team = () => {
  return (
    <section id="team" className="bg-brand-dark text-white py-20 lg:py-32">
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className='text-2xl mb-10'>O U R  T E A M</p>
        <div className="text-left mb-16">
          <h2 className="text-4xl lg:text-6xl font-serif font-bold">Meet Our Team</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {TEAM_MEMBERS.map(member => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};
