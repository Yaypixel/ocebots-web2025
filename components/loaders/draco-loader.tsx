"use client"

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, OrbitControls, useProgress, Html } from '@react-three/drei';
import * as THREE from 'three';

interface ModelProps {
  url: string;
}

const DRACO_DECODER_URL = 'https://www.gstatic.com/draco/versioned/decoders/1.5.6/';

export function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

export const DRACOModel: React.FC<ModelProps> = ({ url }) => {
  const gltf = useGLTF(url, DRACO_DECODER_URL); 

  return <primitive object={gltf.scene} dispose={null} />;
}