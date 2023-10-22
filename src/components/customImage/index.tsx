"use client";

import React, { FC } from "react";

import Image, { ImageProps } from "next/image";
import { rgbDataURL } from "./rgbDataURL";

export const CustomImage: FC<ImageProps> = (props) => {
  const { src, ...rest } = props;


  return (
    <Image
      {...rest}
      src={src}
        // @ts-ignore
      placeholder="blur"
      blurDataURL={rgbDataURL(248, 248, 248)}
      alt="some image"
    />
  );
};
