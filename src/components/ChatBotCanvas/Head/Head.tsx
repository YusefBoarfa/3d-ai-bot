import { useContext, useEffect } from "react";
import Torch from "../Torch/Torch";
import { useAnimations, useGLTF } from "@react-three/drei";
import { AppContext } from "@/components/isPlayingContext";

const Head3D = () => {
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

export default Head3D;
