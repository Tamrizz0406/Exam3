import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();

  const [reviews, setReviews] = useState([
    {
      id: 1,
      title: "NEXGEN TURNED OUR BUSINESS AROUND!",
      text: "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
      name: "Sarah Thompson",
      role: "CEO of BlueBloom",
      avatar: ""
    },
    {
      id: 2,
      title: "NEXGEN TURNED OUR BUSINESS AROUND!", 
      text: "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
      name: "Wade Warren",
      role: "Art Director",
      avatar: ""
    },
    {
      id: 3,
      title: "WORKING WITH NEXGEN WAS A PLEASURE.",
      text: "Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.",
      name: "Lisa Williams",
      role: "CEO of HealthTech",
      avatar: ""
    },
    {
      id: 4,
      title: "NEXGEN'S WEB DESIGN TEAM BROUGHT OUR VISION TO LIFE.",
      text: "Their responsive design ensures our website looks stunning on all devices, contributing to increased user engagement.",
      name: "Jennifer Lee",
      role: "COO of Foodie Haven",
      avatar: ""
    }
  ]);

  const [activeModal, setActiveModal] = useState(null); 
  const [selectedReview, setSelectedReview] = useState(null);

  const [formTitle, setFormTitle] = useState("");
  const [formText, setFormText] = useState("");
  const [formName, setFormName] = useState("");
  const [formRole, setFormRole] = useState("");


  const openAddModal = () => {
    setFormTitle("");
    setFormText("");
    setFormName("");
    setFormRole("");
    setActiveModal('add');
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newReview = {
      id: Date.now(),
      title: formTitle.toUpperCase(),
      text: formText,
      name: formName,
      role: formRole,
      avatar: ""
    };
    setReviews([...reviews, newReview]);
    setActiveModal(null);
  };

  const openEditModal = (review) => {
    setSelectedReview(review);
    setFormTitle(review.title);
    setFormText(review.text);
    setFormName(review.name);
    setFormRole(review.role);
    setActiveModal('edit');
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setReviews(reviews.map(item => 
      item.id === selectedReview.id 
        ? { ...item, title: formTitle.toUpperCase(), text: formText, name: formName, role: formRole }
        : item
    ));
    setActiveModal(null);
  };

  const openInfoModal = (review) => {
    setSelectedReview(review);
    setActiveModal('info');
  };

  const handleDelete = (id) => {
    if (window.confirm(t('testimonials.confirmDelete', 'Удалить этот отзыв?'))) {
      setReviews(reviews.filter(item => item.id !== id));
    }
  };

  return (
    <section className="w-full bg-[#141414] text-white py-12 border-t border-[#262626]">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
        <h2 className="text-3xl font-bold tracking-wide uppercase">
          {t('testimonials.heading', 'TESTIMONIALS')}
        </h2>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button 
            onClick={openAddModal}
            className="bg-[#FF9F76] text-black font-semibold px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider hover:bg-[#ffb291] transition"
          >
            + {t('testimonials.addBtn', 'Add Testimonial')}
          </button>

          <div className="flex items-center space-x-2 border border-[#262626] bg-[#1A1A1A] px-4 py-2.5 rounded-xl cursor-pointer hover:bg-[#222] transition group">
            <span className="text-xs font-medium text-gray-400 group-hover:text-white uppercase tracking-wider">
              {t('testimonials.allTestimonials', 'All Testimonials')}
            </span>
            <div className="text-[#FF9F76] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {reviews.map((review) => (
          <div 
            key={review.id} 
            className="bg-[#1A1A1A] border border-[#262626] rounded-2xl p-6 flex flex-col justify-between hover:border-gray-700 transition duration-300 min-h-[340px] relative group"
          >
            <div className="space-y-4">
              
              <div className="absolute top-4 right-4 flex items-center space-x-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#1A1A1A] pl-2 pb-2 rounded-bl-xl">
                <button 
                  onClick={() => openEditModal(review)}
                  className="p-1.5 bg-[#262626] text-gray-400 hover:text-white rounded-md transition text-xs"
                  title="Edit"
                >
                  ✏️
                </button>
                <button 
                  onClick={() => handleDelete(review.id)}
                  className="p-1.5 bg-[#262626] text-red-400 hover:bg-red-950/30 rounded-md transition text-xs"
                  title="Delete"
                >
                  🗑️
                </button>
              </div>

              <h3 className="text-base font-bold tracking-wide text-white uppercase leading-snug pr-12 line-clamp-2">
                {review.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-5">
                {review.text}
              </p>
            </div>

            <div className="flex justify-between items-center mt-6 border-t border-[#262626] pt-4">
              <div className="flex items-center space-x-3">
                {review.avatar ? (
                  <img src={review.avatar} alt={review.name} className="h-10 w-10 rounded-full object-cover" />
                ) : (
                  <div className="h-10 w-10 rounded-full bg-[#262626] text-[#FF9F76] font-bold text-xs flex items-center justify-center uppercase">
                    {review.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-wide">{review.name}</h4>
                  <p className="text-xs text-gray-500">{review.role}</p>
                </div>
              </div>

              <button 
                onClick={() => openInfoModal(review)}
                className="border border-[#262626] p-2 rounded-full bg-[#141414] text-gray-400 hover:text-[#FF9F76] hover:border-gray-600 transition"
                title="View Full Info"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </button>
            </div>

          </div>
        ))}
      </div>

      {reviews.length === 0 && (
        <p className="text-center text-gray-500 py-12 uppercase text-xs tracking-wider">No testimonials available.</p>
      )}


      {activeModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-[#1A1A1A] border border-[#262626] w-full max-w-md rounded-2xl p-6 shadow-2xl space-y-5">
            
            <div className="flex justify-between items-center border-b border-[#262626] pb-3">
              <h3 className="text-lg font-bold uppercase text-[#FF9F76]">
                {activeModal === 'add' && 'Add Testimonial'}
                {activeModal === 'edit' && 'Edit Testimonial'}
                {activeModal === 'info' && 'Testimonial Details'}
              </h3>
              <button onClick={() => setActiveModal(null)} className="text-gray-400 hover:text-white text-xl">&times;</button>
            </div>

            {activeModal === 'info' ? (
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 block mb-1">Headline</span>
                  <h4 className="text-white font-bold uppercase">{selectedReview?.title}</h4>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 block mb-1">Feedback</span>
                  <p className="text-gray-300 text-sm leading-relaxed">{selectedReview?.text}</p>
                </div>
                <div className="pt-2 border-t border-[#262626] flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-[#262626] text-[#FF9F76] font-bold text-xs flex items-center justify-center uppercase">
                    {selectedReview?.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white">{selectedReview?.name}</h5>
                    <p className="text-xs text-gray-500">{selectedReview?.role}</p>
                  </div>
                </div>
                <div className="pt-2 flex justify-end">
                  <button onClick={() => setActiveModal(null)} className="bg-[#262626] px-4 py-2 rounded-xl text-xs font-semibold uppercase hover:bg-gray-700 transition">Close</button>
                </div>
              </div>
            ) : (
              <form onSubmit={activeModal === 'add' ? handleAdd : handleEdit} className="space-y-4">
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Review Title</label>
                  <input type="text" required value={formTitle} onChange={(e) => setFormTitle(e.target.value)} className="bg-[#141414] text-white border border-[#262626] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#FF9F76]" placeholder="e.g. Amazing Service!" />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Comment</label>
                  <textarea required rows="4" value={formText} onChange={(e) => setFormText(e.target.value)} className="bg-[#141414] text-white border border-[#262626] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#FF9F76] resize-none" placeholder="Type feedback here..." />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Author Name</label>
                    <input type="text" required value={formName} onChange={(e) => setFormName(e.target.value)} className="bg-[#141414] text-white border border-[#262626] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#FF9F76]" placeholder="John Doe" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Company Role</label>
                    <input type="text" required value={formRole} onChange={(e) => setFormRole(e.target.value)} className="bg-[#141414] text-white border border-[#262626] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#FF9F76]" placeholder="CEO of TechCorp" />
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-4 border-t border-[#262626]">
                  <button type="button" onClick={() => setActiveModal(null)} className="bg-[#262626] px-4 py-2 rounded-xl text-xs font-semibold uppercase hover:bg-gray-700 transition">Cancel</button>
                  <button type="submit" className="bg-[#FF9F76] text-black font-bold px-5 py-2 rounded-xl text-xs uppercase tracking-wider hover:bg-[#ffb291] transition">Save</button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
};

export default Testimonials;