import React from "react";
import { 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiPython, 
  SiMongodb, 
  SiTypescript, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiGit, 
  SiAmazon, 
  SiDocker, 
  SiFigma, 
  SiCplusplus, 
  SiMysql, 
  SiC, 
  SiTensorflow, 
  SiNumpy, 
  SiPandas, 
  SiJupyter, 
  SiApachehadoop, 
  SiVercel 
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

// Tech skills with their corresponding icons
const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "AWS", icon: SiAmazon, color: "#FF9900" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "SQL", icon: SiMysql, color: "#4479A1" },
  { name: "Java", icon: FaJava, color: "#ED8B00" },
  { name: "C", icon: SiC, color: "#A8B9CC" },
  { name: "Machine Learning", icon: SiTensorflow, color: "#FF6F00" },
  { name: "NumPy", icon: SiNumpy, color: "#013243" },
  { name: "Pandas", icon: SiPandas, color: "#150458" },
  { name: "Jupyter", icon: SiJupyter, color: "#F37626" },
  { name: "Hadoop", icon: SiApachehadoop, color: "#FF6600" },
  { name: "Vercel", icon: SiVercel, color: "#000000" },
];

// Duplicate the skills array enough times for seamless looping
const loopSkills = [...skills, ...skills, ...skills];

const SkillsSlider = () => {
  return (
    <section className="relative w-full py-8 bg-gradient-to-r from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Fade gradient on left edge */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-slate-50 to-transparent dark:from-gray-900 dark:to-transparent z-10 pointer-events-none"></div>
      {/* Fade gradient on right edge */}
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-slate-50 to-transparent dark:from-gray-900 dark:to-transparent z-10 pointer-events-none"></div>
      {/* Endless loop slider */}
      <div className="slider-track flex items-center gap-12 min-w-[200vw] w-max" style={{ animation: 'skills-scroll 40s linear infinite' }}>
        {loopSkills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={`loop-${index}`}
              className="flex flex-col items-center gap-2 min-w-[80px] group"
            >
              <div 
                className="text-5xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{ color: skill.color }}
              >
                <IconComponent />
              </div>
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
      <style>{`
        @keyframes skills-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
};

export default SkillsSlider; 