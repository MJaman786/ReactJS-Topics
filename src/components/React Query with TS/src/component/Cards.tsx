import React from 'react';
import { Mail, Phone, Globe, MapPin, Briefcase, ExternalLink, Trash2, Edit3 } from 'lucide-react';
import type { UserData } from '../types/apiData.types';
import { useNavigate } from 'react-router-dom';

interface UserCardProps {
  user: UserData;
  onDelete: (id: string) => void;
}


const UserCard: React.FC<UserCardProps> = ({ user, onDelete }) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 group relative">

      {/* Top Accent Bar */}
      <div className="h-2 w-full from-indigo-600 to-cyan-500" />

      <div className="p-6">
        {/* Header: Avatar & Main Info */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-xl">
              {user.name.charAt(0)}
            </div>
            <div>
              <h3 className="text-white font-bold text-lg leading-tight">{user.name}</h3>
              <p className="text-indigo-400 text-sm italic">@{user.username.toLowerCase()}</p>
            </div>
          </div>

          <div className="flex flex-col items-end gap-3">
            <span className="text-[10px] bg-zinc-800 text-zinc-400 px-2 py-1 rounded uppercase tracking-widest font-medium">
              ID: {user.id}
            </span>

            {/* Action Buttons Container */}
            <div className="flex items-center gap-2">
              {/* EDIT BUTTON */}
              <button
                className="cursor-pointer p-2 rounded-lg bg-zinc-800/50 text-zinc-400 hover:bg-indigo-500/10 hover:text-indigo-400 transition-all duration-200 border border-transparent hover:border-indigo-500/20"
                title="Edit User"
                onClick={() => navigate(`/api-request/${user.id}`)}
              >
                <Edit3 size={18} />
              </button>

              {/* DELETE BUTTON */}
              <button
                className="cursor-pointer p-2 rounded-lg bg-zinc-800/50 text-zinc-400 hover:bg-red-500/10 hover:text-red-500 transition-all duration-200 border border-transparent hover:border-red-500/20"
                title="Delete User"
                onClick={() => onDelete?.(user.id)}
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-zinc-400 hover:text-zinc-200 transition-colors">
            <Mail size={16} className="text-indigo-500" />
            <span className="text-sm">{user.email}</span>
          </div>
          <div className="flex items-center gap-3 text-zinc-400 hover:text-zinc-200 transition-colors">
            <Phone size={16} className="text-indigo-500" />
            <span className="text-sm">{user.phone}</span>
          </div>
          <div className="flex items-center gap-3 text-zinc-400 hover:text-zinc-200 transition-colors">
            <Globe size={16} className="text-indigo-500" />
            <span className="text-sm hover:underline flex items-center gap-1 cursor-pointer">
              {user.website} <ExternalLink size={12} />
            </span>
          </div>
          <div className="flex items-start gap-3 text-zinc-400">
            <MapPin size={16} className="text-indigo-500 mt-1 shrink-0" />
            <span className="text-sm leading-snug">
              {user.address.suite}, {user.address.street}<br />
              {user.address.city}, {user.address.zipcode}
            </span>
          </div>
        </div>

        {/* Company Section */}
        <div className="pt-5 border-t border-zinc-800">
          <div className="flex items-center gap-2 mb-2 text-zinc-300">
            <Briefcase size={16} />
            <span className="font-semibold text-sm">{user.company.name}</span>
          </div>
          <p className="text-xs text-zinc-500 italic leading-relaxed">
            "{user.company.catchPhrase}"
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {user.company.bs.split(' ').map((tag, index) => (
              <span key={index} className="text-[10px] bg-indigo-500/5 text-indigo-400 border border-indigo-500/10 px-2 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;