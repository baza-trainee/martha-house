import React from "react";
import { usePathname } from "next/navigation";
import { useNav } from "@/hooks";
import Link from "next/link";
import styles from "../Header.module.css";

const LangLinks = () => {
  const pathname = usePathname();
  const { ukLink, plLink, enLink } = useNav();
  const langLinks = [
    {
      href: ukLink,
      anchor: "UA",
    },
    {
      href: enLink,
      anchor: "EN",
    },
    {
      href: plLink,
      anchor: "PL",
    },
  ];

  const handleLanguageChange = (selectedLanguage: string) => {
    document.cookie = `preferredLanguage=${selectedLanguage}; path=/; max-age=31536000`;
  };

  return (
    <div className={styles["nav-lang"]}>
      {langLinks.map((link, index) => (
        <Link
          key={index}
          className={pathname === link.href ? `${styles.active}` : ""}
          href={link.href}
          onClick={() => handleLanguageChange(link.anchor)}
        >
          {link.anchor}
        </Link>
      ))}
    </div>
  );
};

export default LangLinks;
