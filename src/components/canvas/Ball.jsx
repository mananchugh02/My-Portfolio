import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={0} rotationIntensity={2} floatIntensity={2}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]} />
        <meshStandardMaterial
          color='#9FC9F3'
          polygonOffset
          polygonOffsetFactor={0}
          flatShading
        />
        <Decal
          position={[0, 0, 1.4]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  // for (let index = 0; index < 100; index++) {
  //   const element = 100];
    
  // }
  return (
    <Canvas
      frameloop='demand'
      dpr={[10,20]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
