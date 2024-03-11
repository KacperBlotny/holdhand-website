import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/Logo-01.png";
import ScrollText from "./Scrolltext";

import Dropdown from "../Dropdown";

import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation().pathname;
  return (
    <>
      <div className="fixed hidden w-screen bg-white p-4 shadow-md xl:flex">
        <div className="container mx-auto flex justify-between">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-8 max-w-[300px] lg:w-auto"
            />
          </Link>
          <div className="flex">
            <ul className="m-auto flex text-sm">
              <li className="dropdown px-4">
                <Link
                  to="/about-us"
                  className="dropbtn cursor-pointer hover:text-normal"
                >
                  O nas <i className="fa-solid fa-chevron-down text-normal"></i>
                </Link>
                <div className="dropdown-content">
                  {location === "/about-us" ? (
                    <>
                      <ScrollText
                        text="Nasza misja"
                        scrollLocation="#mission"
                      />
                      <ScrollText
                        text="Z kim współpracujemy"
                        scrollLocation="#coop"
                      />
                    </>
                  ) : (
                    <>
                      <Link to="/about-us">Nasza misja</Link>
                      <Link to="/about-us">Z kim współpracujemy?</Link>
                    </>
                  )}
                  {/* <Link to="/about-us">Nasza misja</Link>
                  <Link to="/about-us">Z kim współpracujemy?</Link> */}
                </div>
              </li>
              <li className="dropdown px-4">
                <Link
                  to="/for-employees"
                  className="dropbtn cursor-pointer hover:text-normal"
                >
                  Dla pracowników{" "}
                  <i className="fa-solid fa-chevron-down text-normal"></i>
                </Link>
                <div className="dropdown-content">
                  {location === "/for-employees" ? (
                    <>
                      <ScrollText
                        text="Znajdź pracę"
                        scrollLocation="#findjob"
                      />
                      <ScrollText
                        text="Dołącz do naszego zespołu"
                        scrollLocation="#jointeam"
                      />
                    </>
                  ) : (
                    <>
                      <Link to="/for-employees">Znajdź pracę</Link>
                      <Link to="/for-employees">Dołącz do naszego zespołu</Link>
                    </>
                  )}
                  {/* {location === "/" ? (
                    <>
                      <ScrollText text="Text" scrollLocation="#location" />
                      <ScrollText text="Text" scrollLocation="#location" />
                    </>
                  ) : (
                    <>
                      <Link to="/">Item 1</Link>
                      <Link to="/">Item 1</Link>
                    </>
                  )} */}
                </div>
              </li>
              <li className="dropdown px-4">
                <Link
                  to="/for-employers"
                  className="dropbtn cursor-pointer hover:text-normal"
                >
                  Dla pracodawców{" "}
                  <i className="fa-solid fa-chevron-down text-normal"></i>
                </Link>
                <div className="dropdown-content">
                  {location === "/for-employers" ? (
                    <>
                      <ScrollText text="Nasza oferta" scrollLocation="#offer" />
                      <ScrollText text="Współpraca" scrollLocation="#coop" />
                    </>
                  ) : (
                    <>
                      <Link to="/for-employers">Nasza oferta</Link>
                      <Link to="/for-employers">Współpraca</Link>
                    </>
                  )}
                  {/* {location === "/" ? (
                    <>
                      <ScrollText text="Text" scrollLocation="#location" />
                      <ScrollText text="Text" scrollLocation="#location" />
                    </>
                  ) : (
                    <>
                      <Link to="/">Item 1</Link>
                      <Link to="/">Item 1</Link>
                    </>
                  )} */}
                </div>
              </li>
              <li className="dropdown px-4">
                <Link
                  to="/for-agency"
                  className="dropbtn cursor-pointer hover:text-normal"
                >
                  Dla agencji zatrudnienia{" "}
                  {/* <i className="fa-solid fa-chevron-down text-normal"></i> */}
                </Link>
                {/* <div className="dropdown-content">
                  {location === "/for-agency" ? (
                    <>
                      <ScrollText text="Text" scrollLocation="#location" />
                      <ScrollText text="Text" scrollLocation="#location" />
                    </>
                  ) : (
                    <>
                      <Link to="/for-agency">Item 1</Link>
                      <Link to="/for-agency">Item 1</Link>
                    </>
                  )}
                </div> */}
              </li>{" "}
              {/* LANGUAGE */}
              {/* <li className="dropdown px-4">
                <p className="dropbtn cursor-pointer hover:text-normal">
                  <i className="fa-solid fa-language"></i>
                </p>
                <div className="dropdown-content">
                  {location === "/" ? (
                    <>
                      <ScrollText text="Text" scrollLocation="#location" />
                      <ScrollText text="Text" scrollLocation="#location" />
                    </>
                  ) : (
                    <>
                      <Link to="/">Item 1</Link>
                      <Link to="/">Item 1</Link>
                    </>
                  )}
                </div>
              </li> */}
              <li className="cursor-pointer px-4 hover:text-normal">
                <ScrollText text="Kontakt" scrollLocation="#contact" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile navbar */}
      <div className="fixed w-screen bg-white p-4 shadow-md xl:hidden">
        <Link to="/" className="flex h-8 w-[300px] lg:w-auto">
          <img src={logo} alt="Logo" className="h-8 max-w-[300px] lg:w-auto" />
        </Link>
        <div className="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
          </label>

          <ul className="menu__box">
            <li className="px-4 py-2">
              <Link to="/">
                <img src={logo} alt="Logo" className="h-8" />
              </Link>
            </li>
            <li className="px-6 py-2">
              <Dropdown
                title="O nas"
                drops={["Nasza misja", "Z kim współpracujemy?"]}
                location="/about-us"
              />
            </li>
            <li className="px-6 py-2">
              <Dropdown
                title="Dla pracowników"
                drops={["Znajdź pracę", "Dołącz do naszego zespołu"]}
                location="/for-employees"
              />
            </li>
            <li className="px-6 py-2">
              <Dropdown
                title="Dla pracodawców"
                drops={["Nasza oferta", "Współpraca"]}
                location="/for-employers"
              />
            </li>
            <li className="px-6 py-2">
              <Link to="/for-agency">Dla agencji zatrudnienia</Link>
              {/* <Dropdown
                title="Dla agencji zatrudnienia"
                drops={["Nasza misja", "Z kim współpracujemy?"]}
              /> */}
            </li>
            {/* <li className="px-6 py-2">
              <Dropdown
                title="Język"
                drops={["Nasza misja", "Z kim współpracujemy?"]}
              />
            </li> */}
            <li className="mt-2 px-6 py-2">
              <ScrollText text="Kontakt" scrollLocation="#contact" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
