import React, { useState } from "react";
import styles from "@/components/Header/Header.module.css";
import { Nav } from "@/components";
import { Locales } from "@/types";
import { NextPage } from "next";
import { CustomImage } from "@/components/customImage";
import Link from "next/link";

interface HeaderMobProps {
  data: {
    mainPage: string;
    blog: string;
    news: string;
  };
  lang: Locales;
}

export const HeaderMob: NextPage<HeaderMobProps> = ({ lang, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className={isOpen ? styles.burger : styles.container}>
      <div className={styles.main}>
        <Link href={`/${lang}`}>
          <CustomImage
            src="/images/logo/Logo.png"
            width={65}
            height={36}
            alt="logo"
          />
        </Link>
        <CustomImage
          onClick={handleToggle}
          src={
            isOpen ? "/images/icons/close_white.svg" : "/images/icons/menu.svg"
          }
          width={32}
          height={32}
          alt="logo"
          className={styles.close}
        />
      </div>
      {isOpen && <Nav data={data} locale={lang} />}
    </div>
  );
};
