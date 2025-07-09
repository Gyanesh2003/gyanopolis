"use client";

import React, { useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Traffic Flow Prediction",
    image: "/TRAF.png",
    description: "Developed a Machine Learning–based Traffic Flow Prediction System that analyzes real-time traffic data to predict traffic levels and accident likelihood. Key features include traffic volume forecasting, accident risk alerts, and clear visualizations for decision support. Technologies used: Python, Pandas, NumPy, Matplotlib, and Support Vector Regression (SVR).",
    link: "https://github.com/Gyanesh2003/Traffic-Flow-Prediction",
  },
  {
    title: "CLIMAI - AI Based Climate Mitigation Platform",
    image: "/WEA.png",
    description: "Built an AI-powered climate mitigation website that uses Machine Learning and live Weather APIs to predict climate risks like heatwaves, cyclones, and rainfall. Features include real-time weather updates, dynamic risk alerts, and an interactive, modern UI. Technologies: Next.js, React.js, Python, scikit-learn, and OpenWeatherMap API.",
    link: "https://github.com/Gyanesh2003/baldev-jew-estcon-pvt-ltd",
    website: "baldev-jew-estcon-pvt-ltd.vercel.app",
  },
];

const Projects = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="projects" className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8 text-center">Highlighted Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 relative"
          >
            <a
              href={project.image}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => project.title === "Project One" && setHovered(project.title)}
              onMouseLeave={() => project.title === "Project One" && setHovered(null)}
              className="block"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={192}
                className="w-full h-48 object-cover cursor-pointer"
              />
              {project.title === "Project One" && hovered === project.title && (
                <div className="absolute inset-0 flex items-center justify-center z-20 bg-black bg-opacity-70">
                  <Image
                    src={project.image}
                    alt={project.title + ' full view'}
                    width={900}
                    height={640}
                    className="max-h-[80vh] max-w-[90vw] rounded shadow-lg border-4 border-white"
                  />
                </div>
              )}
            </a>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  className="text-blue-500 hover:underline mr-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code
                </a>
              )}
              {project.website && (
                <a
                  href={project.website}
                  className="text-green-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Website
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 
