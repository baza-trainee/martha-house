import { NextPage } from "next";
import React from "react";
import IconsBar from "@/components/Footer/IconsBar";
import Container from "@/components/Container";
import { CustomImage } from "@/components";
import styles from "./Footer.module.css";

interface FooterProps {
  data: {
    email: string;
    phones: string;
    socialNet: string;
  };
}

export const Footer: NextPage<FooterProps> = ({ data }) => (
  <footer className={styles.footer}>
    <Container className={styles.wrapper}>
      <div className={styles.logo}>
        <CustomImage src="/images/logo/logo.png" fill alt="logo" />
      </div>

      <div className={styles.contactWrapper}>
        <div className={styles.map}>
          <CustomImage src="/images/pictures/map.png" fill alt="map" />
        </div>
        <div className={styles.contacts}>
          <p className={styles.captions}>{data.email}</p>
          <p>cityofgoodnessua@gmail.com</p>
        </div>
        <div className={styles.contacts}>
          <p className={styles.captions}>{data.phones}</p>
          <div className={styles.phones}>
            <p>+380 95 053 60 09</p>
            <p>0 80 050 32 31</p>
          </div>
        </div>
        <div className={`${styles.contacts} ${styles.socialBlock} `}>
          <p className={styles.captions}>{data.socialNet}</p>
          <IconsBar />
        </div>
      </div>
      <div className={styles.rules}>
        <span>Політика конфіденційності</span>
        <span>Правила користування сайтом</span>
        <span>Baza Trainee Ukraine 2023 (©)</span>
      </div>
    </Container>
  </footer>
);
