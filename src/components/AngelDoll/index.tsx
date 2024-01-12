"use client";

import { FC, useState, useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useMedia } from "@/hooks/useMedia";
import { Button } from "../Button";
import Container from "../Container";
import HiddenText, { HiddenTextProps } from "./HiddenText";
import { useToggle } from "./ToggleContext";
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
  const { isHiddenText, toggleHandler } = useToggle();
  const { isMobile, isTablet, isDesktop } = useMedia();

  const [deviceType, setDeviceType] = useState("");
  useEffect(() => {
    if (isDesktop) setDeviceType("desktop");
    else if (isTablet) setDeviceType("tablet");
    else setDeviceType("mobile");
  }, [isDesktop, isTablet, isMobile]);

  return (
    <section className={styles.angelDoll}>
      <Container>
        <div className={styles["angelDoll-wrapper"]}>
          <div className={styles["hiddenText-isDesktop"]}>
            <h2 className={styles["angelDoll-title"]}>{title}</h2>
            {deviceType !== "mobile" && (
              <Button
                variant="yellow"
                onClick={toggleHandler}
                className={styles["angelDoll-btn-mb"]}
              >
                {!isHiddenText ? buttonUp : buttonDown}
                <motion.span animate={{ rotate: !isHiddenText ? 180 : 0 }}>
                  <Image src={img} alt={alt} width={24} height={24} />
                </motion.span>
              </Button>
            )}
          </div>
          <AnimatePresence>
            {!isHiddenText && deviceType === "mobile" && (
              <HiddenText hiddenText={hiddenText} />
            )}
          </AnimatePresence>
          {deviceType === "mobile" && (
            <Button
              variant="yellow"
              onClick={toggleHandler}
              className={styles["angelDoll-btn-mb"]}
            >
              {!isHiddenText ? buttonUp : buttonDown}
              <motion.span animate={{ rotate: !isHiddenText ? 180 : 0 }}>
                <Image src={img} alt={alt} width={24} height={24} />
              </motion.span>
            </Button>
          )}
          <AnimatePresence>
            {!isHiddenText &&
              (deviceType === "desktop" || deviceType === "tablet") && (
                <HiddenText hiddenText={hiddenText} />
              )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
};

export default AngelDoll;
