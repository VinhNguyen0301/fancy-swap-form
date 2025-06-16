import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const BackgroundParticles = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <div className="fixed inset-0 -z-10">
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#ffffff",
        },
        particles: {
          number: { value: 12 },
          move: { speed: 1, outMode: "bounce" },
          shape: {
            type: "image",
            image: [
              { src: "/assets/tokens/ETH.svg", width: 20, height: 20 },
              { src: "/assets/tokens/USDC.svg", width: 20, height: 20 },
            ],
          },
          size: {
            value: 20,
            random: true,
          },
        },
      }}
      style={{ position: "absolute", zIndex: -1 }}
    />
    </div>
  );
};
