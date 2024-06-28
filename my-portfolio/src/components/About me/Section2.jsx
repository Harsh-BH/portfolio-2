import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Cube from "../3D/Cube";
import styles from "./Section2.module.css";
import Model from "../3D/Model";
import { Environment, OrbitControls } from "@react-three/drei";
import Section2 from "../../../public/Section2";

const SectionTwo = () => {
  return (
    // <div className={styles.App}>
    <Canvas>
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} />
      <Suspense fallback={null}>
        <Environment preset="sunset" />
        <Section2 />
      </Suspense>
    </Canvas>
    // </div>
  );
};

export default SectionTwo;
