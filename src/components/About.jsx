import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 via-gray-800 to-black text-white flex items-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4  border-gray-500">
            About
          </p>
        </div>
        <p className="text-4xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          quisquam placeat beatae quas error? Provident sunt beatae aspernatur
          tenetur dicta, temporibus molestias sint ut minus aliquam dolores id.
          Tempore, architecto.
        </p>

        <br />

        <p className="text-4xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore ea
          distinctio fugit! Nesciunt aut libero, error sequi voluptate tempora.
          Sit dicta cum error eos, maiores sint nihil tempore? Alias, quia!
        </p>
      </div>
    </div>
  );
};

export default About;
