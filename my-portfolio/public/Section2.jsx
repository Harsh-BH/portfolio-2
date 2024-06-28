import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/Section2.gltf");

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.008}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-19.936, 0, -698.939]}
            rotation={[-Math.PI / 2, 0, 1.745]}
          >
            <mesh
              geometry={nodes.furnice_furnice_mtl_0_1.geometry}
              material={materials.furnice_mtl_0}
            />
            <mesh
              geometry={nodes.furnice_furnice_mtl_0_2.geometry}
              material={materials.furnice_mtl_0}
            />
            <mesh
              geometry={nodes.furnice_furnice_mtl_0_3.geometry}
              material={materials.furnice_mtl_0}
            />
          </group>
          <mesh
            geometry={nodes.Object008_Object008_mtl_0.geometry}
            material={materials.Object008_mtl}
            position={[449.852, 6.819, -432.657]}
            rotation={[-Math.PI / 2, 0, -2.793]}
          />
          <mesh
            geometry={nodes.Plane004_Plane004_mtl_0.geometry}
            material={materials.Plane004_mtl}
            position={[256.666, 0, -352.984]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.Plane006_Plane006_mtl_0.geometry}
            material={materials.Plane006_mtl}
            position={[-181.966, 0, -114.985]}
            rotation={[-Math.PI / 2, 0, 0.262]}
          />
          <mesh
            geometry={nodes.furnice_furnice_mtl_0.geometry}
            material={materials.furnice_mtl}
            position={[366.021, -4.133, -109.628]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.bowl_bowl_mtl_0.geometry}
            material={materials.bowl_mtl}
            position={[-69.183, 0, -321.855]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.cup_cup_mtl_0.geometry}
            material={materials.cup_mtl}
            position={[-44.027, 0, -304.08]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.cup001_cup001_mtl_0.geometry}
            material={materials.cup001_mtl}
            position={[578.707, 130.518, -264.483]}
            rotation={[-1.477, 0.064, -1.655]}
          />
          <mesh
            geometry={nodes.vase_vase_mtl_0.geometry}
            material={materials.vase_mtl}
            position={[-14.846, 0, -311.312]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.iron_lamp_iron_lamp_mtl_0.geometry}
            material={materials.iron_lamp_mtl}
            position={[124.42, 261.703, -487.996]}
            rotation={[-1.655, -0.02, -3.133]}
          />
          <mesh
            geometry={nodes.Plane009_Plane009_mtl_0.geometry}
            material={materials.Plane009_mtl}
            position={[222.099, -5.539, -327.747]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.trim_short_trim_short_mtl_0.geometry}
            material={materials.trim_short_mtl}
            position={[-30.127, 0, -945.95]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.Cylinder008_Cylinder008_mtl_0.geometry}
            material={materials.Cylinder008_mtl}
            position={[-105.482, 4.44, -303.016]}
            rotation={[1.026, 1.494, 2.33]}
          />
          <mesh
            geometry={nodes.bench001_bench001_mtl_0.geometry}
            material={materials.bench001_mtl}
            position={[234.488, 0, -439.962]}
            rotation={[-1.641, -0.035, -2.89]}
          />
          <mesh
            geometry={nodes.bottle_bottle_mtl_0.geometry}
            material={materials.bottle_mtl}
            position={[543.868, 114.055, -371.544]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.bottle001_bottle001_mtl_0.geometry}
            material={materials.bottle001_mtl}
            position={[-61.579, 134.635, -486.261]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.chest_chest_mtl_0.geometry}
            material={materials.chest_mtl}
            position={[452.431, -3.752, 0.654]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
          />
          <mesh
            geometry={nodes.Object910_Object910_mtl_0.geometry}
            material={materials.Object910_mtl}
            position={[625.717, 0, -37.285]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 9]}
          />
          <mesh
            geometry={nodes.big_pot001_big_pot001_mtl_0.geometry}
            material={materials.big_pot001_mtl}
            position={[338.358, 0, -46.685]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Section2.gltf");
