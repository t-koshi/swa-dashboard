import React from "react";

type Props = {
  children: string;
};

export default function SubmitButton({ children }: Props) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
    >
      {children}
    </button>
  );
}
