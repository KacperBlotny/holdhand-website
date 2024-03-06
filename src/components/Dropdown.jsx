import React, { useState } from "react";

const Dropdown = ({ title, drops }) => {
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
            className={`m-auto px-2 fa-solid text-normal ${
              isOpen ? "fa-chevron-left" : "fa-chevron-down"
            }`}
          ></i>
        )}
      </button>
      <div
        className={`bg-white w-full overflow-hidden transition-height duration-300 ease-in-out ${
          isOpen ? "h-auto" : "h-0"
        }`}
      >
        {/* Dropdown content here */}
        {drops.map((string, index) => (
          <p key={index} className="py-2 px-4">
            {string}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
