"use client";

import { EfficientCursor } from "react-efficient-cursor";

export default function BackgroundCursor() {
  return (
    <>
      <div className="absolute -z-40 h-screen w-screen backdrop-blur-3xl" />
      <EfficientCursor className="-z-50">
        <div className="aspect-square h-[50vh] animate-rotate rounded-full bg-gradient-to-r from-coral to-salmon opacity-30" />
      </EfficientCursor>
    </>
  );
}
