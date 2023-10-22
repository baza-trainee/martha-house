"use client";

import React, { useState, useEffect, FC } from "react";
import Image, { ImageProps } from "next/image";
import { rgbDataURL } from "./rgbDataURL";

export const CustomImage: FC<ImageProps> = (props) => {
  const { src, ...rest } = props;
  const errorSRC = "/next.svg";
  // eslint-disable-next-line no-extra-boolean-cast
  const img = !!src ? src : errorSRC;
  const [imgSrc, setImgSrc] = useState(img);

  useEffect(() => {
    if (!src) {
      setImgSrc(errorSRC);
    }
  }, [src]);

  return (
    <Image
      {...rest}
      src={imgSrc}
      placeholder="blur"
      blurDataURL={rgbDataURL(248, 248, 248)}
      onError={() => setImgSrc(errorSRC)}
      alt="some image"
    />
  );
};
