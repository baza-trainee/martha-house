"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { Button } from "../Button";
import Container from "../Container";
import styles from "./AngelDoll.module.css";
import HiddenText, { HiddenTextProps } from "./HiddenText";

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

  const toggleHandler = () => {
    setIsHiddenText(!isHiddenText);
  };
  return (
    <section className={styles.angelDoll}>
      <Container>
        <div>
          <h2>{title}</h2>
          {!isHiddenText && <HiddenText hiddenText={hiddenText} />}
          <div>
            <Button
              variant="yellow"
              onClick={toggleHandler}
              className={styles.slowlyMoving}
            >
              {!isHiddenText ? buttonUp : buttonDown}
              <Image
                src={img}
                alt={alt}
                width={24}
                height={24}
                className={
                  !isHiddenText
                    ? styles["arrow-transform"]
                    : styles["arrow-back"]
                }
              />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AngelDoll;
