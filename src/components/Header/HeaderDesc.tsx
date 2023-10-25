import React from "react";
import styles from "@/components/Header/Header.module.css";
import { Nav } from "@/components";
import { Locales } from "@/types";
import { NextPage } from "next";
import { CustomImage } from "@/components/customImage";
import Link from "next/link";

interface HeaderDescProps {
  data: {
    mainPage: string;
    blog: string;
    news: string;
  };
  lang: Locales;
}

const HeaderDesc: NextPage<HeaderDescProps> = ({ lang, data }) => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <Link href={`/${lang}`}>
        <CustomImage
          src='/images/logo/Logo.png'
          width={86}
          height={48}
          alt='logo'
          quality={100}
        />
      </Link>
      <Nav data={data} locale={lang} />
    </div>
  </div>
);

export default HeaderDesc;
