import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Animation/CanvasLoader/CanvasLoader";
import * as THREE from "three";

const Tokyo = () => {
  const group = useRef();
  const { scene, animations } = useGLTF("models/LittlestTokyo.glb");
  const mixer = new THREE.AnimationMixer(scene);

  useGLTF.preload("models/LittlestTokyo.glb");

  animations.forEach((clip) => {
    mixer.clipAction(clip).play();
  });

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  return (
    <group ref={group}>
      <primitive
        object={scene}
        position={[1, 1, 0]}
        scale={[0.01, 0.01, 0.01]}
      />
    </group>
  );
};

const TokyoAnimation = () => {
  return (
    <Canvas
      shadows
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 40,
        near: 1,
        far: 100,
        position: [5, 2, 8],
      }}
    >
      <ambientLight intensity={5} />
      <directionalLight position={[10, 10, 10]} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enablePan enableDamping enableZoom={false} enableRotate={false} />
        <Tokyo />
      </Suspense>
    </Canvas>
  );
};

export default TokyoAnimation;
