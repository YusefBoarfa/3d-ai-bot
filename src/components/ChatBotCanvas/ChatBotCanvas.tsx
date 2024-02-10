"use client";
import {
  OrbitControls,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

import Head3D from "./Head/Head";

export const ChatBotCanvas = () => {
  return (
    <Canvas>
      <OrbitControls
        enableZoom={false}
        enableDamping
        maxPolarAngle={2}
        minAzimuthAngle={-Math.PI * 0.5}
        maxAzimuthAngle={Math.PI * 0.5}
      />
      <ambientLight intensity={0.015} />
      <Head3D />
    </Canvas>
  );
};
