import React from "react";

import todo from "../assets/todo.png";
import port from "../assets/port.png";
import foodApp from "../assets/foodApp.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: foodApp,
      name: "Food Delivery App",
      href: "https://github.com/divyanshchoursiya13/FoodApp",
    },
    {
      id: 2,
      src: port,
      name: "Portfolio Website",
      href: "https://github.com/shivdeepraina/BYTEUPRISE_WD-01",
    },
    {
      id: 3,
      src: todo,
      name: "Todo App",
      href: "https://github.com/shivdeepraina/Todo-App",
    },
  ];
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen flex items-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 justify-between ">
          {portfolios.map(({ id, src, name, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
              <img
                src={src}
                alt=""
                className="rounded-md object-cover w-full h-60 duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <p className=" pl-5 py-3 m-4 w-full">{name}</p>
                <button className="pl-5 py-3 m-4 duration-200 hover:scale-105">
                  <a href={href} target="_blank">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
