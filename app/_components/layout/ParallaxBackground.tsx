"use client";
import { useState, useEffect, useCallback } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { assetUrl } from "@/lib/asset-url";

export default function ParallaxBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = assetUrl("/bg/6.jpeg");
    img.onload = () => setIsLoaded(true);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div className="absolute inset-0 z-[-10] overflow-hidden">
      <div
        className="absolute inset-0 transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px) scale(1.1)`,
          backgroundImage: `url(${assetUrl("/bg/6.jpeg")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: isLoaded ? 1 : 0,
        }}
      />
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px) scale(1.15)`,
          backgroundImage: `url(${assetUrl("/bg/6.jpeg")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: isLoaded ? 0.4 : 0,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
    </div>
  );
}