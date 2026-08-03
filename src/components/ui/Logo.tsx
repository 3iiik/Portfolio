"use client";

import Image from "next/image";
import { memo } from "react";

type LogoProps = {
  className?: string;
  sizes?: string;
  priority?: boolean;
};

function Logo({ className = "", sizes = "40px", priority = false }: LogoProps) {
  return (
    <span className={`relative inline-block overflow-hidden ${className}`}>
      <Image
        src="/images/logo.jpg"
        alt="3iik Studio logo"
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover object-center"
      />
    </span>
  );
}

export default memo(Logo);