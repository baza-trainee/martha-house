"use client";

import { FC, useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useMedia } from "@/hooks/useMedia";
import { Button } from "../Button";
import Container from "../Container";
import HiddenText, { HiddenTextProps } from "./HiddenText";
import styles from "./AngelDoll.module.css";

interface AngelDollProps {
  data: {
    title: string;
    buttonUp: string;
    buttonDown: string;
    img: string;
    alt: string;
    hiddenText: HiddenTextProps;
  };
}

const AngelDoll: FC<AngelDollProps> = ({
  data: { title, buttonUp, buttonDown, img, alt, hiddenText },
}) => {
  const [isHiddenText, setIsHiddenText] = useState(true);
  const { isMobile, isTablet, isDesktop } = useMedia();

  const toggleHandler = () => {
    setIsHiddenText(!isHiddenText);
  };

  return (
    <section className={styles.angelDoll}>
      <Container>
        <div className={styles["angelDoll-wrapper"]}>
          <div className={styles["hiddenText-isDesktop"]}>
            <h2 className={styles["angelDoll-title"]}>{title}</h2>
            <Button
              variant="yellow"
              onClick={toggleHandler}
              className={`${
                !isMobile
                  ? styles["angelDoll-btn-mb"]
                  : styles["angelDoll-btn-hidden-mb"]
              }`}
            >
              {!isHiddenText ? buttonUp : buttonDown}
              <motion.span animate={{ rotate: !isHiddenText ? 180 : 0 }}>
                <Image src={img} alt={alt} width={24} height={24} />
              </motion.span>
            </Button>
          </div>
          <AnimatePresence>
            {!isHiddenText && isMobile && (
              <HiddenText hiddenText={hiddenText} />
            )}
          </AnimatePresence>
          <Button
            variant="yellow"
            onClick={toggleHandler}
            className={`${
              isMobile
                ? styles["angelDoll-btn-mb"]
                : styles["angelDoll-btn-hidden-mb"]
            }`}
          >
            {!isHiddenText ? buttonUp : buttonDown}
            <motion.span animate={{ rotate: !isHiddenText ? 180 : 0 }}>
              <Image src={img} alt={alt} width={24} height={24} />
            </motion.span>
          </Button>
          <AnimatePresence>
            {!isHiddenText && (isDesktop || isTablet) && (
              <HiddenText hiddenText={hiddenText} />
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
};

export default AngelDoll;
