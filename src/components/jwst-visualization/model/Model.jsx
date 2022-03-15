import React, { useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";

import "./model.css";

export const Model = ({ colorMap, normalMap, roughnessMap }) => {
  const { scene, nodes, materials } = useGLTF("/jwst-model/scene.gltf");

  useLayoutEffect(() => {
    Object.assign(materials.Material, {
      normalMap: normalMap,
      roughnessMap: roughnessMap,
      map: colorMap,
    });
  }, [scene, nodes, materials]);

  return <primitive object={scene} />;
};
