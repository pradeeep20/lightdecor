import React from "react";

// Button Component
export const Button = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}: {
  children: React.ReactNode;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}) => {
  return (
    <button
      type={type as "button" | "submit" | "reset"}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-lg font-medium transition-all 
                  bg-blue-600 text-white hover:bg-blue-700 active:scale-95 
                  disabled:bg-gray-400 disabled:cursor-not-allowed 
                  ${className}`}
    >
      {children}
    </button>
  );
};

export default function ButtonsCollection() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center gap-10 p-10">
      {/* 1. Gradient Button */}
      <Button
        onClick={() => {}}
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90"
      >
        Gradient Button
      </Button>

      {/* 2. Glassmorphism Button */}
      <Button
        onClick={() => {}}
        className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20"
      >
        Glass Button
      </Button>

      {/* 3. Outline Button */}
      <Button
        onClick={() => {}}
        className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white bg-transparent"
      >
        Outline Button
      </Button>

      {/* 4. Neon Glow Button */}
      <Button
        onClick={() => {}}
        className="bg-black text-white border border-cyan-400 shadow-[0_0_10px_cyan] hover:shadow-[0_0_15px_cyan]"
      >
        Neon Button
      </Button>

      {/* 5. Soft Shadow Button */}
      <Button
        onClick={() => {}}
        className="bg-white text-black shadow-lg hover:shadow-xl rounded-full"
      >
        Soft Shadow Button
      </Button>

      {/* 6. Pill Button */}
      <Button
        onClick={() => {}}
        className="bg-blue-600 hover:bg-blue-700 rounded-full px-8 py-3"
      >
        Pill Button
      </Button>

      {/* 7. Icon Button */}
      <Button
        onClick={() => {}}
        className="bg-green-500 hover:bg-green-600 flex items-center gap-2"
      >
        <span>✔</span> Icon Button
      </Button>

      {/* 8. 3D Press Button */}
      <Button
        onClick={() => {}}
        className="bg-orange-500 text-white active:scale-95"
      >
        3D Press Button
      </Button>

      {/* 9. Border Reveal Button */}
      <Button
        onClick={() => {}}
        className="bg-gray-900 text-white relative overflow-hidden group"
      >
        <span className="absolute inset-0 border-2 border-blue-400 opacity-0 group-hover:opacity-100 transition" />
        <span className="relative">Magic Hover</span>
      </Button>

      {/* 10. Floating Button */}
      <Button
        onClick={() => {}}
        className="bg-teal-500 text-white shadow-md hover:-translate-y-1 hover:shadow-xl"
      >
        Floating Button
      </Button>
    </div>
  );
}
