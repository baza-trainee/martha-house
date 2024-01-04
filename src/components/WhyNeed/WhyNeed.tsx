import { FC } from "react";
import { CustomImage } from "@/components";
import styles from "./WhyNeed.module.css";

interface WhyneedProps {
  data: {
    title: string;
    paragraphs: string[];
    images: string[];
  };
}

const WhyNeed: FC<WhyneedProps> = ({ data: { title, images, paragraphs } }) => (
  <section className={styles.whyneed}>
    <h2 className={styles.whyneedTitle}>{title}</h2>
    <div className={styles.whyneedWrapper}>
      <p className={`${styles.whyneedItem} ${styles.whyneedDescr}`}>
        {paragraphs[0]}
      </p>
      <div className={`${styles.whyneedItem} ${styles.whyneedImgContainer}`}>
        <CustomImage
          height={189}
          src={images[1]}
          alt="children"
          width={343}
          className={styles.whyneedImg}
        />
      </div>
    </div>
    <div className={styles.whyneedWrapper}>
      <p className={`${styles.whyneedItem} ${styles.whyneedDescr}`}>
        {paragraphs[1]}
      </p>
      <p className={`${styles.whyneedItem} ${styles.whyneedDescr}`}>
        {paragraphs[2]}
      </p>
    </div>
    <div className={styles.whyneedWrapper}>
      <p className={`${styles.whyneedItem} ${styles.whyneedDescr}`}>
        {paragraphs[3]}
      </p>
      <div className={`${styles.whyneedItem} ${styles.whyneedImgContainer}`}>
        <CustomImage
          height={189}
          src={images[0]}
          alt="children"
          width={343}
          className={styles.whyneedImg}
        />
      </div>
    </div>
  </section>
);

export default WhyNeed;
