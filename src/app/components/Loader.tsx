"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 1.5 sec
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white transition-opacity duration-700">
      <div className="text-3xl font-bold animate-pulse">
        Gyanesh.dev
      </div>
    </div>
  );
} 