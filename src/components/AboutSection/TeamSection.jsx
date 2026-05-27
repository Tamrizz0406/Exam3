import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import img3 from "../../assets/img/Image(1) copy 3.png";
import img4 from "../../assets/img/Image(1) copy 4.png";
import img5 from "../../assets/img/Image(1) copy 5.png";
import img6 from "../../assets/img/Image(1) copy 6.png";

const TeamSection = () => {
  const { t } = useTranslation();

  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: "JOHN SMITH", role: "Co-Founder & CEO", photo: img3 },
    { id: 2, name: "SARAH ADAMS", role: "Head of Design", photo: img4 },
    { id: 3, name: "EMILY JOHNSON", role: "Lead Web Developer", photo: img5 },
    { id: 4, name: "WILLIAM LEE", role: "Lead Backend Developer", photo: img6 }
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  
  const [newName, setNewName] = useState("");
  const [newRole, setNewRole] = useState("");
  const [newPhoto, setNewPhoto] = useState("");
  
  const [editingMember, setEditingMember] = useState(null);
  const [editName, setEditName] = useState("");
  const [editRole, setEditRole] = useState("");
  const [editPhoto, setEditPhoto] = useState("");


  const handleDelete = (id) => {
    if (window.confirm("Удалить этого участника команды?")) {
      setTeamMembers(teamMembers.filter(member => member.id !== id));
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newName || !newRole) return;
    const newMember = {
      id: Date.now(),
      name: newName.toUpperCase(),
      role: newRole,
      photo: newPhoto || "https://via.placeholder.com/400x250"
    };
    setTeamMembers([...teamMembers, newMember]);
    setNewName("");
    setNewRole("");
    setNewPhoto("");
    setIsAddModalOpen(false);
  };

  const openEditModal = (member) => {
    setEditingMember(member);
    setEditName(member.name);
    setEditRole(member.role);
    setEditPhoto(member.photo);
    setIsEditModalOpen(true);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setTeamMembers(teamMembers.map(member => 
      member.id === editingMember.id ? { ...member, name: editName.toUpperCase(), role: editRole, photo: editPhoto } : member
    ));
    setIsEditModalOpen(false);
    setEditingMember(null);
  };

  return (
    <section className="py-12 relative">
      
      <div className="absolute top-6 right-6 z-10 flex space-x-3">
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center space-x-2 border border-[#262626] bg-[#141414] px-4 py-2.5 rounded-xl hover:border-gray-600 transition text-xs font-semibold text-white uppercase"
        >
          <span>+ Add Member</span>
        </button>
        <button className="flex items-center space-x-2 border border-[#262626] bg-[#141414] px-4 py-2.5 rounded-xl hover:border-gray-600 transition text-xs font-semibold text-gray-400 hover:text-white uppercase group">
          <span>{t('team.allMembers', 'All Members')}</span>
          <div className="text-[#FF9F76] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
        </button>
      </div>

      <div className="flex justify-between items-center mb-10 pb-6 pr-40 relative">
        <h2 className="text-3xl font-bold tracking-wide uppercase">
          {t('team.heading', 'MEET THE BRILLIANT MINDS BEHIND NEXGEN')}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <div 
            key={member.id} 
            className="bg-[#1A1A1A] border border-[#262626] rounded-2xl p-6 flex flex-col items-center text-center space-y-6 group hover:border-gray-700 transition relative"
          >
            <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button 
                onClick={() => openEditModal(member)}
                className="p-1.5 bg-[#262626] text-gray-400 hover:text-white rounded-lg transition"
              >
                ✏️
              </button>
              <button 
                onClick={() => handleDelete(member.id)}
                className="p-1.5 bg-[#262626] text-red-400 hover:bg-red-900/30 rounded-lg transition"
              >
                🗑️
              </button>
            </div>

            <div className="pt-2">
              <h3 className="text-lg font-bold tracking-wide text-white uppercase">{member.name}</h3>
              <p className="text-xs text-gray-500 font-medium pt-0.5">{member.role}</p>
            </div>

            <div className="w-full aspect-[16/11] overflow-hidden border border-[#262626] rounded-2xl bg-[#E5B6A8] relative">
              {member.photo && (
                <img 
                  src={member.photo} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              )}
            </div>

            <div className="flex justify-center space-x-3 pt-2">
              {['Facebook', 'Twitter', 'LinkedIn'].map((platform, idx) => (
                <div 
                  key={idx} 
                  className="w-10 h-10 bg-[#141414] border border-[#262626] rounded-full flex items-center justify-center text-[#FF9F76] text-sm group-hover:border-gray-600 transition cursor-pointer"
                >
                  {platform[0]}
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-[#1A1A1A] border border-[#262626] w-full max-w-md rounded-2xl p-6 shadow-2xl">
            <h3 className="text-xl font-bold uppercase text-[#FF9F76] mb-6">Add New Team Member</h3>
            <form onSubmit={handleAdd} className="space-y-4">
              <input 
                type="text" 
                placeholder="Name (e.g. JOHN DOE)" 
                value={newName} 
                onChange={(e) => setNewName(e.target.value)}
                className="w-full bg-[#141414] text-white border border-[#262626] rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-gray-600 placeholder-gray-600"
                required
              />
              <input 
                type="text" 
                placeholder="Role (e.g. Tech Lead)" 
                value={newRole} 
                onChange={(e) => setNewRole(e.target.value)}
                className="w-full bg-[#141414] text-white border border-[#262626] rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-gray-600 placeholder-gray-600"
                required
              />
              <input 
                type="text" 
                placeholder="Image URL (optional)" 
                value={newPhoto} 
                onChange={(e) => setNewPhoto(e.target.value)}
                className="w-full bg-[#141414] text-white border border-[#262626] rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-gray-600 placeholder-gray-600"
              />
              <div className="flex justify-end gap-3 pt-4 border-t border-[#262626]">
                <button type="button" onClick={() => setIsAddModalOpen(false)} className="bg-[#262626] text-white font-medium px-5 py-2.5 rounded-xl text-xs uppercase transition hover:bg-gray-700">Cancel</button>
                <button type="submit" className="bg-[#FF9F76] text-black font-semibold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider hover:bg-[#e08b65] transition">Create Member</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-[#1A1A1A] border border-[#262626] w-full max-w-md rounded-2xl p-6 shadow-2xl">
            <h3 className="text-xl font-bold uppercase text-[#FF9F76] mb-6">Edit Team Member</h3>
            <form onSubmit={handleEdit} className="space-y-4">
              <input 
                type="text" 
                placeholder="Name" 
                value={editName} 
                onChange={(e) => setEditName(e.target.value)}
                className="w-full bg-[#141414] text-white border border-[#262626] rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-gray-600 placeholder-gray-600"
                required
              />
              <input 
                type="text" 
                placeholder="Role" 
                value={editRole} 
                onChange={(e) => setEditRole(e.target.value)}
                className="w-full bg-[#141414] text-white border border-[#262626] rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-gray-600 placeholder-gray-600"
                required
              />
              <input 
                type="text" 
                placeholder="Image URL" 
                value={editPhoto} 
                onChange={(e) => setEditPhoto(e.target.value)}
                className="w-full bg-[#141414] text-white border border-[#262626] rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-gray-600 placeholder-gray-600"
              />
              <div className="flex justify-end gap-3 pt-4 border-t border-[#262626]">
                <button type="button" onClick={() => { setIsEditModalOpen(false); setEditingMember(null); }} className="bg-[#262626] text-white font-medium px-5 py-2.5 rounded-xl text-xs uppercase transition hover:bg-gray-700">Cancel</button>
                <button type="submit" className="bg-[#FF9F76] text-black font-semibold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider hover:bg-[#e08b65] transition">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};

export default TeamSection;