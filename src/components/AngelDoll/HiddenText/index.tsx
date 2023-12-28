// eslint-disable-next-line import/no-extraneous-dependencies
import { motion } from "framer-motion";
/* eslint-disable import/no-extraneous-dependencies */
import { FC } from "react";
import { CustomImage } from "@/components/CustomImage";
import styles from "./HiddenText.module.css";

export interface HiddenTextProps {
  img: string;
  alt: string;
  text: string[];
  title: string;
  subtitle1: string;
  text1: string[];
  subtitle2: string;
  text2: string;
}

const HiddenText: FC<{ hiddenText: HiddenTextProps }> = ({
  hiddenText: { img, alt, text, title, subtitle1, text1, subtitle2, text2 },
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    animate="visible"
    transition={{ ease: "easeOut", duration: 1 }}
    exit="hidden"
    className={styles["hiddenContext-wrapper"]}
  >
    <div className={styles["hiddenImg-wrapper"]}>
      <CustomImage
        src={img}
        alt={alt}
        width={343}
        height={400}
        className={styles["angelDoll-img"]}
      />
    </div>
    <div className={styles.hiddenDescription}>
      <div className={styles.hiddenText}>
        {text.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className={styles["hidden-borderWrapper"]}>
        <h4>{title}</h4>
        <div className={styles["hidden-borderText"]}>
          <h6>{subtitle1}</h6>
          {text1 &&
            Array.isArray(text) &&
            text1.map((text, index) => <p key={index}>{text}</p>)}
        </div>
        <div className={styles["hidden-borderText"]}>
          <h6>{subtitle2}</h6>
          <p>{text2}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

export default HiddenText;
