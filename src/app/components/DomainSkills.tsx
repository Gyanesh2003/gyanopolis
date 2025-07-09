import React from "react";

const skills = [
  { name: "DSA", value: 7.5, max: 10 },
  { name: "Web Technology", value: 9, max: 10 },
  { name: "Python", value: 6.5, max: 10 },
  { name: "AI/ML", value: 8, max: 10 },
];

const DomainSkills = () => (
  <section id="domain-skills" className="py-16 px-4 max-w-2xl mx-auto">
    <h2 className="text-3xl font-semibold mb-6 text-center">Domain Skills</h2>
    <div className="space-y-6">
      {skills.map((skill) => (
        <div key={skill.name}>
          <div className="flex justify-between mb-1">
            <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
            <span className="text-gray-600 dark:text-gray-400">{skill.value}/{skill.max}</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-700"
              style={{ width: `${(skill.value / skill.max) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default DomainSkills; 