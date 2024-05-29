import React from "react";
import heroImage from "../assets/heroImage.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen pt-20 md:pt-0 w-full bg-gradient-to-b from-black via-black to-gray-500
      flex items-center"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center  h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white ">
            I'm a Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-lg">
            I'm a skilled web and mobile developer specializing in React.js,
            JSX, and React Native app development. With a strong foundation in
            JavaScript, I thrive in creating dynamic and responsive user
            interfaces, ensuring a seamless experience across platforms.
          </p>

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="max-w-sm">
          <img
            src={heroImage}
            alt="my-profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
