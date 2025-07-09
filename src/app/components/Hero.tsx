import React from "react";
import Image from "next/image";

const Hero = () => (
  <section id="hero" className="flex flex-col items-center justify-center min-h-[60vh] py-16 text-center">
    <div className="w-32 h-32 mb-4 rounded-full bg-gray-300 dark:bg-gray-700 overflow-hidden">
      <Image src="/pfp.jpg" alt="Profile" width={128} height={128} className="object-cover w-full h-full" priority />
    </div>
    <h1 className="text-4xl font-bold mb-2">GYANEDGE</h1>
    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">A curious developer crafting smart, scalable solutions — welcome to my portfolio!</p>
  </section>
);

export default Hero; 