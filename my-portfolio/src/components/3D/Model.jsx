import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { a, useSpring } from "@react-spring/three";

const Model = () => {
  const { nodes, materials, animations } = useGLTF(
    "/my-portfolio/public/Models/basketball.glb"
  );
  const group = useRef();

  // Animation state using react-spring
  const [active, setActive] = React.useState(false);
  const { scale } = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
  });

  // Rotation animation using useFrame from react-three-fiber
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = Math.sin(t / 2);
    group.current.rotation.y = Math.cos(t / 2);
  });

  return (
    <a.group ref={group} scale={scale}>
      <primitive
        object={nodes?.Basketball}
        onClick={() => setActive(!active)}
      />
    </a.group>
  );
};

export default Model;
