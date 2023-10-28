import React from "react";
import Container from "@/components/Container/index";
import styles from "./AboutComponent.module.css";
import aboutImage from "../../../public/images/pictures/aboutImage.png";
import { CustomImage } from "../CustomImage";

interface AboutComponentProps {
  data: {
    subtitle: string;
    text: string;
    textQuote: string;
  };
}

export const AboutComponent: React.FC<AboutComponentProps> = ({ data }) => (
  <section className={styles.about}>
    <Container className={styles.styledContainer}>
      <div>
        <div className={styles.infoContainer}>
          <h2 className={styles.subtitle}>{data.subtitle}</h2>
          <CustomImage
            src={aboutImage}
            alt="About Image"
            className={styles.image}
          />
          <p className={`${styles.text} ${styles.text1}`}>{data.text[0]}</p>
          <p className={`${styles.text} ${styles.text2}`}>{data.text[1]}</p>
          <p className={`${styles.text} ${styles.text3}`}>{data.text[2]}</p>
        </div>
        <p className={styles.textQuote}>{data.textQuote}</p>
      </div>
    </Container>
  </section>
);

export default AboutComponent;
