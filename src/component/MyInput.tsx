import clsx from "clsx";
import React, { InputHTMLAttributes } from "react";

interface MyInputProp extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const MyInput: React.FC<MyInputProp> = (props) => {
  const label = props.label;
  const error = props.error;
  return (
    <div className="flex flex-col">
      {label && (
        <label
          className={clsx("text-gray-500 text-sm", error && "text-red-500")}
        >
          {label}
        </label>
      )}
      <input
        {...props}
        className={clsx(
          "text-blue-600",
          "placeholder-gray-400 placeholder:text-sm",
          "border border-blue-600 rounded-md p-2",
          "focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500 text-red-500 placeholder-red-500"
        )}
      />

      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default MyInput;
