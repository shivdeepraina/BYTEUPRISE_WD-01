import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import reactimage from "../assets/reactimage.png";
import rn from "../assets/rn.png";
import boot from "../assets/boot.png";
import tailwind from "../assets/tailwind.png";
import wordpress from "../assets/wordpress.png";

const Experience = () => {
  const skills = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: js,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: boot,
      title: "BootStrap",
      style: "shadow-violet-500",
    },
    {
      id: 5,
      src: reactimage,
      title: "React.js",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: rn,
      title: "React Native",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-blue-800",
    },
    {
      id: 8,
      src: wordpress,
      title: "WordPress",
      style: "shadow-white",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen flex items-center"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are skills i have</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-10 mx-auto" />
              <p className="mt-5">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
