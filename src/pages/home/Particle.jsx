import Particles from "react-tsparticles";
function GreenParticles() {
  return (
    <>
      <Particles
        options={{
          fpsLimit: 120,
          particles: {
            number: {
              value: 400,
              density: { enable: true, area: 1080 },
              limit: 0,
            },
            color: { value: "12de4b" },
            shape: {
              type: "circle",
              // image: { src: "img/github.svg", width: 100, height: 100 },
            },
            opacity: {
              value: 0.5,
              random: { value: true, minimumValue: 0.1 },
            },
            size: {
              value: 2,
              random: {
                enable: true,
                minimumValue: 0.5,
              },
            },
          },
        }}
      />
    </>
  );
}

export default GreenParticles;
