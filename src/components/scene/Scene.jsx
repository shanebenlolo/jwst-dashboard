import React from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Stage } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Model } from "../jwst-model/Model";

import "./scene.css";

export function Scene(props) {
  const [colorMap, normalMap, roughnessMap] = useLoader(TextureLoader, [
    "/jwst-model/textures/Material.007_baseColor.jpeg",
    "/jwst-model/textures/Material.007_normal.jpeg",
    "/jwst-model/textures/Material.007_metallicRoughness.png",
  ]);

  const myMesh = React.useRef();

  useFrame(({ clock }) => {
    myMesh.current.rotation.y = clock.getElapsedTime();
  });

  return (
    <Stage intensity={2}>
      <OrbitControls />
      <mesh ref={myMesh}>
        <Model
          map={colorMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
        />
      </mesh>
    </Stage>
  );
}
