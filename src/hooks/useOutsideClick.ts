"use client";

import { RefObject, useEffect } from "react";

export const useOutsideClick = (
  ref: RefObject<HTMLElement>,
  callback: () => void,
): void => {
  const handleClick = (e: MouseEvent): void => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, callback]);
};
