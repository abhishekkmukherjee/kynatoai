"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const BackgroundLines = ({
  children,
  className,
  svgOptions,
}: {
  children: React.ReactNode;
  className?: string;
  svgOptions?: {
    duration?: number;
  };
}) => {
  return (
    <div
      className={cn(
        "h-full w-full bg-transparent relative flex items-center justify-center overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 z-0">
        <SVGBackground svgOptions={svgOptions} />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

const SVGBackground = ({
  svgOptions,
}: {
  svgOptions?: {
    duration?: number;
  };
}) => {
  const paths = [
    "M0 100 C 150 100, 300 200, 450 150 C 600 100, 750 200, 900 150 C 1050 100, 1200 200, 1350 150",
    "M0 200 C 150 250, 300 150, 450 200 C 600 250, 750 150, 900 200 C 1050 250, 1200 150, 1350 200",
    "M0 300 C 150 300, 300 400, 450 350 C 600 300, 750 400, 900 350 C 1050 300, 1200 400, 1350 350",
    "M0 400 C 150 450, 300 350, 450 400 C 600 450, 750 350, 900 400 C 1050 450, 1200 350, 1350 400",
    "M0 150 C 150 200, 300 100, 450 150 C 600 200, 750 100, 900 150 C 1050 200, 1200 100, 1350 150",
    "M0 250 C 150 200, 300 300, 450 250 C 600 200, 750 300, 900 250 C 1050 200, 1200 300, 1350 250",
    "M0 350 C 150 400, 300 300, 450 350 C 600 400, 750 300, 900 350 C 1050 400, 1200 300, 1350 350",
    "M0 450 C 150 400, 300 500, 450 450 C 600 400, 750 500, 900 450 C 1050 400, 1200 500, 1350 450",
  ];

  return (
    <svg
      viewBox="0 0 1350 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 h-full w-full opacity-40 mix-blend-screen"
      preserveAspectRatio="none"
    >
      {paths.map((path, index) => (
        <motion.path
          key={index}
          d={path}
          stroke={`url(#gradient-${index})`}
          strokeWidth="2"
          strokeLinecap="round"
          initial={{
            strokeDashoffset: 10000,
            strokeDasharray: "0 10000",
          }}
          animate={{
            strokeDashoffset: 0,
            strokeDasharray: "20000 20000",
          }}
          transition={{
            duration: svgOptions?.duration || 10 + (index % 3) * 2,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
            delay: (index % 4) * 1.5,
          }}
        />
      ))}
      <defs>
        {paths.map((_, index) => (
          <linearGradient
            key={index}
            id={`gradient-${index}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#027C88" stopOpacity="0" />
            <stop offset="50%" stopColor="#027C88" stopOpacity="1" />
            <stop offset="100%" stopColor="#006AF0" stopOpacity="0" />
          </linearGradient>
        ))}
      </defs>
    </svg>
  );
};
