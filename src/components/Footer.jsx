import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 text-center py-4 bg-black">
      <p className="text-gray-400">
        &copy; {currentYear} Shivdeep Raina. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
