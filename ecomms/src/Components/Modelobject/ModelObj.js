import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Model(props) {
  const groupRef = useRef(); // Create a ref for the group element

  const { nodes, materials } = useGLTF("/modelDraco.gltf");

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01; // Adjust the rotation speed as needed
    }
  });
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={[1, 1, 1]}>
        <group position={[-0.01, -0.38, 1.03]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.CageSite_0.geometry}
            material={materials.Metal}
          />
          <mesh
            geometry={nodes.CageSite_0_1.geometry}
            material={materials.Metal}
          />
          <mesh
            geometry={nodes.CageSite_0_2.geometry}
            material={materials.Metal}
          />
        </group>
        <group
          position={[4.35, 6.95, -5.41]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={0.56}
        >
          <mesh
            geometry={nodes.Cylinder004_0.geometry}
            material={materials.WheelTire}
          />
          <mesh
            geometry={nodes.Cylinder004_1.geometry}
            material={materials.Metal}
          />
        </group>
        <group
          position={[-2.76, -6.28, -5.41]}
          rotation={[Math.PI / 2, 1.05, 0]}
          scale={0.56}
        >
          <mesh
            geometry={nodes.Cylinder008_0.geometry}
            material={materials.WheelTire}
          />
          <mesh
            geometry={nodes.Cylinder008_1.geometry}
            material={materials.Metal}
          />
        </group>
        <group
          position={[2.87, -6.28, -5.41]}
          rotation={[Math.PI / 2, 1.05, 0]}
          scale={0.56}
        >
          <mesh
            geometry={nodes.Cylinder007_0.geometry}
            material={materials.WheelTire}
          />
          <mesh
            geometry={nodes.Cylinder007_1.geometry}
            material={materials.Metal}
          />
        </group>
        <group
          position={[-4.36, 6.95, -5.41]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={0.56}
        >
          <mesh
            geometry={nodes.Cylinder003_0.geometry}
            material={materials.WheelTire}
          />
          <mesh
            geometry={nodes.Cylinder003_1.geometry}
            material={materials.Metal}
          />
        </group>
        <mesh
          geometry={nodes.Torus009_0.geometry}
          material={materials["Metal.001"]}
          position={[4.35, 6.95, -5.41]}
          rotation={[1.42, 0, 0]}
          scale={[0.05, 0.45, 0.45]}
        />
        <mesh
          geometry={nodes.Torus012_0.geometry}
          material={materials.Metal}
          position={[0, 5.81, 4.33]}
          rotation={[1.42, 0, 0]}
          scale={[0.4, 0.37, 0.37]}
        />
        <mesh
          geometry={nodes.CageFront_0.geometry}
          material={materials.Metal}
          position={[-0.09, -5.19, 0.78]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
        />
        <mesh
          geometry={nodes.Torus004_0.geometry}
          material={materials.Metal}
          position={[0.09, 0, 0]}
        />
        <mesh
          geometry={nodes.Torus005_0.geometry}
          material={materials.Metal}
          position={[0, 6.13, 4.33]}
          rotation={[1.42, 0, 0]}
          scale={[0.48, 0.45, 0.45]}
        />
        <mesh
          geometry={nodes.Torus002_0.geometry}
          material={materials.Metal}
          position={[0, 7.1, 4.42]}
          rotation={[1.42, 0, 0]}
          scale={[0.52, 0.45, 0.45]}
        />
        <mesh
          geometry={nodes.Torus008_0.geometry}
          material={materials.Metal}
          position={[0.01, -6.27, -0.2]}
          scale={[0.69, 0.72, 0.72]}
        />
        <mesh
          geometry={nodes.Torus003_0.geometry}
          material={materials.Metal}
          position={[0, 6.94, -4.17]}
          rotation={[1.42, 0, 0]}
          scale={[0.5, 0.45, 0.45]}
        />
        <mesh
          geometry={nodes.Torus006_0.geometry}
          material={materials.Metal}
          position={[0.03, 2.97, -3.92]}
          scale={[0.48, 0.45, 0.45]}
        />
        <mesh
          geometry={nodes.CageFront001_0.geometry}
          material={materials.Metal}
          position={[8.42, -0.54, -1.28]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
        />
        <mesh
          geometry={nodes.Cylinder005_0.geometry}
          material={materials.Metal}
          position={[4.35, 6.95, -4.23]}
          rotation={[-Math.PI, 0, -Math.PI / 2]}
          scale={0.38}
        />
        <mesh
          geometry={nodes.Cylinder009_0.geometry}
          material={materials.Metal}
          position={[-2.76, -6.28, -4.23]}
          rotation={[-Math.PI, 0, -Math.PI / 3]}
          scale={0.38}
        />
        <mesh
          geometry={nodes.Torus010_0.geometry}
          material={materials.Metal}
          position={[-2.76, -6.28, -5.41]}
          rotation={[1.4, -0.52, -0.08]}
          scale={[0.05, 0.45, 0.45]}
        />
        <mesh
          geometry={nodes.Torus011_0.geometry}
          material={materials.Metal}
          position={[2.87, -6.28, -5.41]}
          rotation={[1.4, -0.52, -0.08]}
          scale={[0.05, 0.45, 0.45]}
        />
        <mesh
          geometry={nodes.Cylinder006_0.geometry}
          material={materials.Metal}
          position={[2.87, -6.28, -4.23]}
          rotation={[-Math.PI, 0, -Math.PI / 3]}
          scale={0.38}
        />
        <mesh
          geometry={nodes.CageFront002_0.geometry}
          material={materials.Metal}
          position={[-0.31, 4.48, 1.08]}
          rotation={[3, 1.57, 0]}
          scale={[0.62, 0.99, 0.96]}
        />
        <mesh
          geometry={nodes.Torus013_0.geometry}
          material={materials.Metal}
          position={[0, -6.29, 5.96]}
          rotation={[0.11, 0, 0]}
          scale={[0.47, 0.45, 0.45]}
        />
        <mesh
          geometry={nodes.Cylinder001_0.geometry}
          material={materials.Metal}
          position={[-4.36, 6.95, -4.23]}
          rotation={[-Math.PI, 0, -Math.PI / 2]}
          scale={0.38}
        />
        <mesh
          geometry={nodes.Torus007_0.geometry}
          material={materials["Metal.001"]}
          position={[-4.36, 6.95, -5.41]}
          rotation={[1.42, 0, 0]}
          scale={[0.05, 0.45, 0.45]}
        />
        <mesh
          geometry={nodes.Cylinder010_0.geometry}
          material={materials.RedPlastic}
          position={[-4.7, 8.26, 8.87]}
          rotation={[0.3, Math.PI / 2, 0]}
          scale={0.46}
        />
        <mesh
          geometry={nodes.Cylinder012_0.geometry}
          material={materials.RedPlastic}
          position={[4.68, 8.26, 8.87]}
          rotation={[0.3, Math.PI / 2, 0]}
          scale={0.46}
        />
        <mesh
          geometry={nodes.Torus021_0.geometry}
          material={materials.Metal}
          position={[-4.69, 7.65, 7.93]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.4}
        />
        <mesh
          geometry={nodes.Cylinder011_0.geometry}
          material={materials.RedPlastic}
          position={[-0.11, 8.26, 8.88]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.3, 0.3, 9.2]}
        />
        <mesh
          geometry={nodes.Torus014_0.geometry}
          material={materials.Metal}
          position={[4.68, 7.65, 7.93]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.4}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/modelDraco.gltf");

export default Model;
