"use client";

import Image from 'next/image'
import { Plus } from 'lucide-react'
import React from "react";
import Zoom from "react-medium-image-zoom"; 
import "react-medium-image-zoom/dist/styles.css";

type ImageZoomProps = {
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<typeof Zoom>;

const ImageZoom = (props: ImageZoomProps) => {
  const { children, ...rest } = props;

  return (
    <Zoom zoomMargin={10} {...rest}>
      {children}
    </Zoom>
  );
};

export { ImageZoom };

export const ImageZoomComponent = ({ 
  imageSrc, 
  imageAlt, 
  name 
}: { 
  imageSrc: string; 
  imageAlt: string; 
  name: string;
}) => {  
  return (
    <div className="border-strategy-blue/20 relative mx-auto flex h-[336px] max-w-[250px] flex-col items-start border p-4 md:h-[28rem] md:max-w-sm">
      <Plus
        strokeWidth={0.5}
        className="text-strategy-blue absolute -left-4 -top-4 h-8 w-8"
      />
      <Plus
        strokeWidth={0.5}
        className="text-strategy-blue absolute -bottom-4 -left-4 h-8 w-8"
      />
      <Plus
        strokeWidth={0.5}
        className="text-strategy-blue absolute -right-4 -top-4 h-8 w-8"
      />
      <Plus
        strokeWidth={0.5}
        className="text-strategy-blue absolute -bottom-4 -right-4 h-8 w-8"
      />
      <ImageZoom>
        <Image
          src={imageSrc}
          alt={imageAlt}
          height={700}
          width={700}
          className="h-[300px] object-cover md:h-[404px]"
        />
        <div className="relative -mt-14 bg-gradient-to-b from-black/0 to-black text-white md:-mt-24">
          <h1 className="z-20 items-center text-center text-[24px] font-heading font-light tracking-tighter md:text-[36px]">{name}</h1>
        </div>
      </ImageZoom>
    </div>
  );
};

