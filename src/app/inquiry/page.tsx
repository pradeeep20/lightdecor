"use client";

import React, { useState, useEffect } from "react";

const slides = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1500&q=80",
  
  },
  {
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

const InquiryPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(interval);
  }, []);

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    eventType: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "date" && value < today) return;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="min-h-screen px-4 md:px-10 py-10 bg-[#0f172a] text-white">
      <div className="max-w-5xl mx-auto bg-[#1e293b] shadow-xl rounded-xl p-6 md:p-10 border border-white/10">

        {/* FORM */}
        <h2 className="text-2xl font-bold mb-6">Inquiry Form</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <input type="text" name="name" placeholder="Full Name" className="border border-white/20 bg-transparent text-white p-3 rounded-md w-full outline-none" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" className="border border-white/20 bg-transparent text-white p-3 rounded-md w-full outline-none" value={formData.email} onChange={handleChange} required />
          <input type="number" name="phone" placeholder="Phone Number" className="border border-white/20 bg-transparent text-white p-3 rounded-md w-full outline-none" value={formData.phone} onChange={handleChange} required />
          <input type="text" name="location" placeholder="Your Location" className="border border-white/20 bg-transparent text-white p-3 rounded-md w-full outline-none" value={formData.location} onChange={handleChange} required />
          <select name="eventType" className="border border-white/20 bg-transparent text-white p-3 rounded-md w-full outline-none" value={formData.eventType} onChange={handleChange} required>
            <option value="" className="text-black">Select Event Type</option>
            <option value="Wedding" className="text-black">Wedding Decoration</option>
            <option value="Birthday" className="text-black">Birthday Decoration</option>
            <option value="Corporate" className="text-black">Corporate Event</option>
            <option value="Festival" className="text-black">Festival Lighting</option>
          </select>
          <input type="date" name="date" className="border border-white/20 bg-transparent text-white p-3 rounded-md w-full outline-none" min={today} value={formData.date} onChange={handleChange} required onKeyDown={(e) => e.preventDefault()} />
          <textarea name="message" placeholder="Your Message (Optional)" className="border border-white/20 bg-transparent text-white p-3 rounded-md w-full md:col-span-2 outline-none" rows={3} value={formData.message} onChange={handleChange}></textarea>
          <button type="submit" className="md:col-span-2 bg-yellow-500 text-black font-semibold py-3 rounded-md hover:bg-yellow-400 transition">Submit Inquiry</button>
        </form>

        {/* DESCRIPTION + SLIDER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LEFT TEXT */}
          <div className="bg-[#243045] p-6 rounded-lg shadow-sm border border-white/10">
            <h3 className="text-lg font-semibold mb-2 text-white">Light Decor Inspiration</h3>
            <p className="text-white/80 leading-relaxed">
              Transform your events with our exquisite lighting designs. From ambient glows to luxurious chandeliers, we create mesmerizing atmospheres that leave lasting impressions. Every corner shines with elegance, making your special moments truly unforgettable.
            </p>
          </div>

          {/* RIGHT SLIDER */}
          <div className="bg-[#2e3b55] rounded-lg border border-white/10 p-3 flex items-center justify-center h-64 overflow-hidden">
            {slides[currentSlide].type === "image" ? (
              <img src={slides[currentSlide].src} alt="Slide" className="w-full h-full object-cover transition-all duration-700 rounded-lg" />
            ) : (
              <video src={slides[currentSlide].src} autoPlay loop muted className="w-full h-full object-cover transition-all duration-700 rounded-lg" />
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default InquiryPage;
