import React from "react";

const scroll = (location) => {
  const section = document.querySelector(location);
  section.scrollIntoView({ behavior: "smooth", block: "start" });
  // <button onClick={() => scroll("#test")}>Scroll to Section</button>
};

function ScrollButton({ text, location, type }) {
  return (
    <>
      {type === "main" ? (
        <a
          onClick={() => scroll(location)}
          className="mr-4 rounded-xl bg-normal px-4 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-normalActive"
        >
          {text}
        </a>
      ) : (
        <a
          onClick={() => scroll(location)}
          className="mr-4 rounded-xl bg-lightActive px-4 py-2 text-black transition-colors duration-300 ease-in-out hover:bg-lightHover"
        >
          {text}
        </a>
      )}
    </>
  );
}
export default ScrollButton;
