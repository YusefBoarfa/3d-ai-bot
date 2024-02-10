"use client";
import {
  OrbitControls,
  SpotLight,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useContext, useEffect, useRef, useState } from "react";
import { MeshStandardMaterial, Vector3 } from "three";
import { AppContext } from "./isPlayingContext";
const Torch = ({ vec = new Vector3(), ...props }) => {
  const light = useRef<THREE.SpotLight | null>(null);
  const viewport = useThree((state) => state.viewport);
  useFrame((state) => {
    light.current?.target.position.lerp(
      vec.set(
        (state.pointer.x / 2) * viewport.width,
        (state.pointer.y * viewport.width) / 2,
        0
      ),
      0.1
    );
    light.current?.target.updateMatrixWorld();
  });
  return (
    <SpotLight
      // castShadow
      ref={light}
      penumbra={1}
      distance={10}
      angle={0.35}
      attenuation={5}
      anglePower={4}
      intensity={60}
      {...props}
    />
  );
};

const Head = () => {
  const model = useGLTF("/head.glb");
  const { isPlaying } = useContext(AppContext);
  const animations = useAnimations(model.animations, model.scene);
  const action = animations.actions.Animation;
  useEffect(() => {
    if (isPlaying) {
      action?.play();
    } else {
      action?.fadeOut(0.5);
      setTimeout(() => {
        action?.stop();
      }, 500);
    }
  }, [action, isPlaying]);
  return (
    <>
      <primitive object={model.scene} scale={3} rotation-z={0.2} />
      <Torch color="blue" position={[3, 2, 2]} />
      <Torch color="red" position={[-3, 2, 2]} />
    </>
  );
};

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
      <Head />
    </Canvas>
  );
};
