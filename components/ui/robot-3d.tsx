"use client";

import { DRACOModel, Loader } from "@/components/loaders/draco-loader";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

interface Props {
  robotName: string;
  modelUrl?: string;
  height?: string;
  weight?: string;
  swerve?: string;
  scoring?: string;
  endgame?: string;
  description?: string;
}

export default function FRC2025Model({
  robotName,
  modelUrl = "/models/frc2025.glb",
  height = "filler",
  weight = "filler",
  swerve = "filler",
  scoring = "filler",
  endgame = "filler",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et ligula ac nulla aliquam volutpat. Integer eu erat aliquam lacus interdum eleifend in vel ipsum. Sed consequat sollicitudin iaculis. Donec convallis sit amet mauris in cursus. Integer facilisis finibus nisl, molestie mattis nibh vulputate et. In urna augue, viverra a molestie at, porta non diam. Proin vitae blandit tellus, vitae lobortis dui. Nulla quam enim, semper at tincidunt venenatis, volutpat in quam.",
}: Props) {
  return (
    <div className="h-300 flex">
      <div className="bg-green-400 w-400 h-250 ml-20 mt-25 rounded-lg drop-shadow-2xl">
        <h2 className="outfit-heading text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white mb-4 md:mb-6 mt-10 ml-10">
          STUART
        </h2>
        <p className="outfit-heading text-sm sm:text-base md:text-2xl lg:text-3xl xl:text-4xl text-white leading-relaxed ml-10">
          HEIGHT: {height}
        </p>
        <p className="outfit-heading text-sm sm:text-base md:text-2xl lg:text-3xl xl:text-4xl text-white leading-relaxed ml-10 mt-10">
          WEIGHT: {weight}
        </p>
        <p className="outfit-heading text-sm sm:text-base md:text-2xl lg:text-3xl xl:text-4xl text-white leading-relaxed ml-10 mt-10">
          SWERVE: {swerve}
        </p>
        <p className="outfit-heading text-sm sm:text-base md:text-2xl lg:text-3xl xl:text-4xl text-white leading-relaxed ml-10 mt-10">
          SCORING: {scoring}
        </p>
        <p className="outfit-heading text-sm sm:text-base md:text-2xl lg:text-3xl xl:text-4xl text-white leading-relaxed ml-10 mt-10">
          ENDGAME: {endgame}
        </p>
        <p className="outfit-heading text-sm sm:text-base md:text-2xl lg:text-3xl xl:text-4xl text-white leading-relaxed ml-10 mt-10">
          DISCRIPTION:
        </p>
        <p className="outfit-body text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white leading-tight ml-10 mt-2">
          {description}
        </p>
      </div>
      <Canvas shadows camera={{ position: [0, 0, 2], fov: 50, zoom: 0.68 }}>
        <Suspense fallback={<Loader />}>
          <Stage environment={"city"} intensity={0}>
            <DRACOModel url="/models/frc2025.glb"></DRACOModel>
          </Stage>
          <OrbitControls autoRotate enablePan enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}
