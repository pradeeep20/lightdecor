// src/app/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type RecentWorkImage = {
  filename: string;
  sequence: number;
  src: string;
};

const HomePage: React.FC = () => {
  const router = useRouter();
  const [recentWorkImages, setRecentWorkImages] = useState<RecentWorkImage[]>([]);
  const [isLoadingRecentWork, setIsLoadingRecentWork] = useState(true);
  const [recentWorkError, setRecentWorkError] = useState<string | null>(null);

  const howItWorksSteps = [
    { title: "Customer Contact", img: "https://images.unsplash.com/photo-1581091870625-d4bcd4476bb4?auto=format&fit=crop&w=400&q=80", desc: "Reach out to us via phone, email, or enquiry form." },
    { title: "Requirement Discussion", img: "https://images.unsplash.com/photo-1573164574391-1c9a1130fca1?auto=format&fit=crop&w=400&q=80", desc: "We discuss your vision, event type and requirements." },
    { title: "Planning", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80", desc: "Our team designs lighting & decor plans tailored for you." },
    { title: "Execution", img: "https://images.unsplash.com/photo-1505691723518-22f3a7a79ef4?auto=format&fit=crop&w=400&q=80", desc: "We set up lighting & decoration on event day efficiently." },
    { title: "Delivery", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80", desc: "Event is completed, leaving a memorable experience." },
  ];

  const [currentWork, setCurrentWork] = useState(0);

  // Fetch recent work images
  useEffect(() => {
    const fetchRecentWork = async () => {
      try {
        const response = await fetch("/api/recent-work");
        if (!response.ok) throw new Error("Failed to load images");
        const data = await response.json();
        // Reverse order: last image first
        setRecentWorkImages(Array.isArray(data.images) ? data.images.reverse() : []);
      } catch (error) {
        console.error(error);
        setRecentWorkError("Unable to load recent work at the moment.");
      } finally {
        setIsLoadingRecentWork(false);
      }
    };
    fetchRecentWork();
  }, []);

  // Auto-slide carousel
  useEffect(() => {
    if (!recentWorkImages.length) return;
    const interval = setInterval(() => {
      setCurrentWork((prev) => (prev + 1) % recentWorkImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [recentWorkImages.length]);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans">

      {/* Hero Section */}
      <section className="px-6 md:px-20 py-16 bg-gradient-to-r from-[#1e293b]/80 via-[#0f172a]/70 to-[#1e293b]/80 rounded-b-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Make Every Event Shine</h1>
        <p className="mb-3 text-gray-300">We provide top-notch lighting and decoration services to turn your events into memorable experiences.</p>
        <p className="mb-6 text-gray-400">Our mission is to create beautiful, ambient, and elegant spaces that captivate your guests.</p>
        <button className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-400 transition">
          Submit Inquiry
        </button>
      </section>

      {/* Recent Work Section */}
      <section className="px-6 md:px-20 py-16">
        <h2 className="text-3xl font-semibold mb-8">Our Recent Work →</h2>
        {isLoadingRecentWork ? (
          <p className="text-gray-400">Loading recent work...</p>
        ) : recentWorkError ? (
          <p className="text-red-400">{recentWorkError}</p>
        ) : recentWorkImages.length === 0 ? (
          <p className="text-gray-400">Add images to /public/images/recent-work to showcase your latest projects.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {recentWorkImages.map((img, idx) => (
              <div
                key={img.filename}
                className={`rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-lg transition-all duration-500 ${
                  currentWork === idx ? "scale-100 opacity-100" : "scale-[0.98] opacity-80"
                }`}
              >
                <img src={img.src} alt={`Recent work ${img.sequence}`} className="w-full h-48 object-cover" />
                <div className="p-4 border-t border-white/10">
                  <p className="text-sm text-gray-300 tracking-wide">Sequence #{img.sequence.toString().padStart(2, "0")}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        <button
          onClick={() => router.push("/recent-work")}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Explore More
        </button>
      </section>

      {/* How It Works Section */}
      <section className="px-6 md:px-20 py-16 bg-[#1e293b] rounded-3xl">
        <h2 className="text-3xl font-semibold mb-12 text-center">How It Works →</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
          {howItWorksSteps.map((step, idx) => (
            <div key={idx} className="bg-[#243045] p-4 rounded-xl shadow-md text-center flex flex-col items-center">
              <img src={step.img} alt={step.title} className="w-24 h-24 object-cover rounded-full mb-3" />
              <h3 className="font-semibold mb-1">{step.title}</h3>
              <p className="text-gray-300 text-sm">{step.desc}</p>
              {idx < 4 && <span className="text-yellow-500 text-2xl mt-2">→</span>}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default HomePage;
