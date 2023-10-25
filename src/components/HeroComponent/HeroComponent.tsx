import React from "react";
import Container from "@/components/Container/index";
import { Button } from "@/components/Button/index";
import styles from "./HeroComponent.module.css";

interface HeroProps {
  data: {
    title: string;
    subtitle: string;
    supportBtn: string;
  };
}

const HeroComponent: React.FC<HeroProps> = ({ data }) => (
  <section className={styles.heroSection}>
    <Container className={styles.styledContainer}>
      <div className={styles.infoContainer}>
        <h1 className={styles.heroTitle}>{data.title}</h1>
        <p className={styles.heroSubtitle}>{data.subtitle}</p>
        <Button variant="yellow" className={styles.supportButton}>
          {data.supportBtn}
        </Button>
      </div>
    </Container>
  </section>
);

export default HeroComponent;
