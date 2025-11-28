import React from "react";

const Button = ({
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

export default Button;
