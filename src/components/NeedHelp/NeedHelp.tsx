"use client";

import React, { useState } from "react";
import { CustomImage } from "@/components/customImage";
import styles from "./NeedHelp.module.css";

const NeedHelp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const expandMoreHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={styles.help}
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(38, 38, 38, 0.6), #262626), url(/images/pictures/war_image.jpg)",
      }}
    >
      <div className={styles.main}>
        <div className={styles.title}>
          <h2>Війна</h2>
          <p>Потрібна допомога!</p>
        </div>
        <CustomImage
          src={
            isOpen
              ? "/images/icons/expend_less.svg"
              : "/images/icons/expand_more.svg"
          }
          width={32}
          height={32}
          alt="expand"
          style={{ filter: "invert(100%) brightness(150%)" }}
          onClick={expandMoreHandler}
        />
      </div>
    </div>
  );
};

export default NeedHelp;
