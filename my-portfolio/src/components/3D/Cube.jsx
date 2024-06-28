import React from "react";
import { useFrame } from "@react-three/fiber";
import { a, useSpring } from "@react-spring/three";

const Cube = () => {
  // Animation state using react-spring
  const [active, setActive] = React.useState(false);
  const { scale } = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
  });

  // Rotation animation using useFrame from react-three-fiber
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    state.scene.rotation.x = t / 2;
    state.scene.rotation.y = t / 2;
  });

  return (
    <a.mesh
      onClick={() => setActive(!active)}
      scale={scale}
      position={[0, 0, 0]}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={active ? "hotpink" : "orange"} />
    </a.mesh>
  );
};

export default Cube;
