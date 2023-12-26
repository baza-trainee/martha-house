"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Scroll.module.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <div className={styles.scroll} onClick={scrollToTop}>
        <Image
          src="/images/scroll/scroll.svg"
          alt="scroll"
          width={64}
          height={64}
        />
      </div>
    )
  );
};

export default ScrollToTop;
