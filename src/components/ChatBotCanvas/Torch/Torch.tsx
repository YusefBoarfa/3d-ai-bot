import { SpotLight } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";

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
      castShadow
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

export default Torch;
