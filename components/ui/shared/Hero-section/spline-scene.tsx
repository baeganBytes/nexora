"use client";

import Spline from "@splinetool/react-spline";

export default function SplineScene() {
  return (
    <Spline
      scene="https://prod.spline.design/EYtkUczeWsIxZeRR/scene.splinecode"
      className="absolute inset-0 z-10 h-full w-full"
      onLoad={(app) => app.setBackgroundColor("transparent")}
    />
  );
}
