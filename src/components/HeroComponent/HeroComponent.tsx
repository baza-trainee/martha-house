import React from "react";
import styles from "./HeroComponent.module.css";
import { Container } from "@/components/Container/Container";
import { Button } from "@/components/Button/Button";

interface HeroProps {
  data: {
    title: string;
    subtitle: string;
    supportBtn: string;
  };
}

const HeroComponent: React.FC<HeroProps> = async ({ data }) => {
  return (
    <section className={styles.heroSection}>
      <Container className={styles.styledContainer}>
        <div className={styles.infoContainer}>
          <h1 className={styles.heroTitle}>{data.title}</h1>
          <p className={styles.heroSubtitle}>{data.subtitle}</p>
          <Button variant={"yellow"} className={styles.supportButton}>
            {data.supportBtn}
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default HeroComponent;
