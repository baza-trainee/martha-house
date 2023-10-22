'use client';
import React, { useState, useEffect, FC } from 'react';
import Image, {ImageProps} from 'next/image';
import { rgbDataURL } from './rgbDataURL';

export const CustomImage:FC<ImageProps> = (props) => {
    const { src, ...rest } = props;
    const errorSRC = '/next.svg'
    const img = !!src ? src : errorSRC;
    const [imgSrc, setImgSrc] = useState(img);

    useEffect(() => {
        if (!src) {
            setImgSrc(errorSRC);
        }
    },[]);


    return (

        <Image
            {...rest}
            src={imgSrc}
            placeholder='blur'
            blurDataURL={rgbDataURL(248, 248, 248)}
            onError={() => setImgSrc(errorSRC)}
        />
    );
};
