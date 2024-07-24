import React from "react";
import "./Home.css";
import StyledButton from "./StyledButton";
import GreenParticles from "./Particle";

const Home = () => {
  return (
    <>
      <GreenParticles />
      <div className="grid place-content-center h-screen text-green-700 tracking-widest">
        <span className="text-5xl mx-auto font-bold tracking-[0.25em]">
          Hack X
        </span>
        <span className="text-white mt-5 tracking-[0.3em]">
          <span className="text-green-600">Hack</span> The Limits,
          <span className="text-green-600"> Break</span> The Barriers
        </span>
        <span className="text-white mt-2">Follow us on: </span>
        <StyledButton />
        <div>
          <div class="custom-shape-divider-bottom-1721746906">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
          <div class="custom-shape-divider-top-1721747021">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
          <div class="custom-shape-divider-top-1721747206">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
          <div class="custom-shape-divider-bottom-1721747544">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
