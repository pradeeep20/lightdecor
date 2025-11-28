"use client";
import Button from "@/component/Button";
import Input from "@/component/MyInput";

export default function AllComponent() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">All Components</h1>
      <Button children="Click Me" onClick={() => alert("Button clicked!")} type="button" disabled={false} className="bg-blue-600 text-white hover:bg-blue-700 active:scale-95 disabled:bg-gray-400 disabled:cursor-not-allowed" />

        <Input />
    </div>
  );
}