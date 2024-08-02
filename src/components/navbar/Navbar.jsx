import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="mx-auto mt-4">
        <div className=" border-[1px] w-[80%] mx-auto rounded-ss-3xl rounded-ee-3xl">
          <nav className="flex justify-between items-center w-[95%] mx-auto p-5 rounded-xl">
            <a
              href="/"
              className="font-[Poppins] text-green-600 tracking-[0.2em] text-3xl font-extrabold"
            >
              HackX
            </a>
            <ul className="flex items-center gap-14 text-lg font-thin navbar-ul">
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Browse</a>
              </li>
              <li>
                <a href="/">Create</a>
              </li>
              <li>
                <a href="/">Results</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
