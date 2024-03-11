import React from "react";

const scroll = (scrollLocation) => {
  const section = document.querySelector(scrollLocation);
  section.scrollIntoView({ behavior: "smooth", block: "start" });
  // <button onClick={() => scroll("#test")}>Scroll to Section</button>
};

function ScrollText({ text, scrollLocation }) {
  return (
    <>
      <a
        onClick={() => scroll(scrollLocation)}
        className="dropbtn cursor-pointer hover:text-normal"
      >
        {text}
      </a>
    </>
  );
}
export default ScrollText;
