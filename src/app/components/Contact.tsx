"use client";
import React from "react";

const Contact = () => (
  <section id="contact" className="py-16 px-4 max-w-2xl mx-auto text-center">
    <h2 className="text-3xl font-semibold mb-8">Connect With Me</h2>
    <div className="flex justify-center">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-xl p-6 flex gap-8 justify-center items-center">
        {/* LeetCode link */}
        <a href="https://leetcode.com/u/Gyanesh121/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 transition" aria-label="LeetCode">
          <svg width="32" height="32" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M38.6 34.7L27.2 46.1C24.2 49.1 19.2 49.1 16.2 46.1L4.9 34.8C1.9 31.8 1.9 26.8 4.9 23.8L16.2 12.5C19.2 9.5 24.2 9.5 27.2 12.5L38.6 23.9C39.1 24.4 39.1 25.2 38.6 25.7C38.1 26.2 37.3 26.2 36.8 25.7L25.4 14.3C23.5 12.4 19.9 12.4 18 14.3L6.7 25.6C4.8 27.5 4.8 31.1 6.7 33L18 44.3C19.9 46.2 23.5 46.2 25.4 44.3L36.8 32.9C37.3 32.4 38.1 32.4 38.6 32.9C39.1 33.4 39.1 34.2 38.6 34.7Z" fill="#FFA116"/>
              <path d="M45.1 23.8L33.8 12.5C30.8 9.5 25.8 9.5 22.8 12.5C22.3 13 22.3 13.8 22.8 14.3C23.3 14.8 24.1 14.8 24.6 14.3C26.5 12.4 30.1 12.4 32 14.3L43.3 25.6C45.2 27.5 45.2 31.1 43.3 33L32 44.3C30.1 46.2 26.5 46.2 24.6 44.3C24.1 43.8 23.3 43.8 22.8 44.3C22.3 44.8 22.3 45.6 22.8 46.1C25.8 49.1 30.8 49.1 33.8 46.1L45.1 34.8C48.1 31.8 48.1 26.8 45.1 23.8Z" fill="#070707"/>
              <path d="M32.2 25.1H17.8C17.1 25.1 16.5 25.7 16.5 26.4C16.5 27.1 17.1 27.7 17.8 27.7H32.2C32.9 27.7 33.5 27.1 33.5 26.4C33.5 25.7 32.9 25.1 32.2 25.1Z" fill="#070707"/>
            </g>
          </svg>
        </a>
        {/* HackerRank link */}
        <a href="https://www.hackerrank.com/profile/gyaneshbhuyan999" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-green-600 transition" aria-label="HackerRank">
          <svg width="32" height="32" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              <circle cx="256" cy="256" r="256" fill="#2EC866"/>
              <path d="M362.7 120.6c-2.7-4.7-7.7-7.6-13-7.6H162.3c-5.3 0-10.3 2.9-13 7.6l-65.2 113c-2.7 4.7-2.7 10.5 0 15.2l65.2 113c2.7 4.7 7.7 7.6 13 7.6h187.4c5.3 0 10.3-2.9 13-7.6l65.2-113c2.7-4.7 2.7-10.5 0-15.2l-65.2-113zm-106.7 230.8c-64.2 0-116.4-52.2-116.4-116.4S191.8 118.6 256 118.6 372.4 170.8 372.4 235c0 64.2-52.2 116.4-116.4 116.4zm0-210.8c-52.1 0-94.4 42.3-94.4 94.4s42.3 94.4 94.4 94.4 94.4-42.3 94.4-94.4-42.3-94.4-94.4-94.4z" fill="#fff"/>
            </g>
          </svg>
        </a>
        {/* LinkedIn link */}
        <a href="https://www.linkedin.com/in/gyanesh-bhuyan-31434121a/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-700 transition" aria-label="LinkedIn">
          <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.28h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
        </a>
        {/* GitHub link */}
        <a href="https://github.com/Gyanesh2003" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 transition" aria-label="GitHub">
          <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        </a>
      </div>
    </div>
  </section>
);

export default Contact; 