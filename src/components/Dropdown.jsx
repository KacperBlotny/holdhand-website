import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ title, drops, location }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative mt-2">
      <button
        className="cursor-pointer focus:text-normalActive"
        onClick={toggleDropdown}
      >
        {title}{" "}
        {title === "Język" ? (
          <i className="fa-solid fa-globe text-normal"></i>
        ) : (
          <i
            className={`fa-solid m-auto px-2 text-normal ${
              isOpen ? "fa-chevron-left" : "fa-chevron-down"
            }`}
          ></i>
        )}
      </button>
      <div
        className={`transition-height w-full overflow-hidden bg-white duration-300 ease-in-out ${
          isOpen ? "h-auto" : "h-0"
        }`}
      >
        {/* Dropdown content here */}
        {drops.map((string, index) => (
          <p className="py-2">
            <Link to={location} key={index} className="px-4 py-2">
              {string}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
