import React from "react";
import { Container, Nav } from "@/components";
import { Locales } from "@/types";
import Image from "next/image";
import { NextPage } from "next";
import styles from "./Header.module.css";

interface HeaderProps {
  lang: Locales;
  data: {
    mainPage: string;
    blog: string;
    news: string;
  };
}

const Header: NextPage<HeaderProps> = async ({ lang, data }) => (
  <header className={styles.header}>
    <Container>
      <Image src="/images/logo/Logo-s.png" width={24} height={24} alt="logo" />
      <Nav data={data} locale={lang} />
    </Container>
  </header>
);

export default Header;
