"use client"

import { DRACOModel } from "@/components/loaders/draco-loader";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function Testing() {
    return (
        <div className="h-[200px]">
            <Canvas shadows camera={{ position: [0, 0, 2], fov: 50, zoom: 0.7}}>
                <Suspense fallback={null}>
                    <Stage environment={"city"} intensity={0.5}>
                        <DRACOModel url="/models/robot-v1.glb"></DRACOModel>
                    </Stage>
                    <OrbitControls autoRotate enableZoom enablePan />
                </Suspense>
            </Canvas>
        </div>
    )
}