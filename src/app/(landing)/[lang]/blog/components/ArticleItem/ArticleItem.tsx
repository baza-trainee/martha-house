"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useMedia } from "@/hooks/useMedia";
import Container from "@/components/Container";
import styles from "./ArticleItem.module.css";

interface ArticleItemProps {
  data: {
    title: string;
    text: string[];
    creation: string;
    image: string;
    icon: string;
  };
}

const ArticleItem = ({
  data: { title, text, creation, image, icon },
}: ArticleItemProps) => {
  const { isMobile, isTablet } = useMedia();
  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    setClientReady(true);
  }, []);

  if (!clientReady) return null;

  const linkText = isMobile || isTablet ? "" : "Назад";

  const styleForButton = isMobile || isTablet ? "" : styles["button-back"];

  const gapFromTitleAndButton =
    isMobile || isTablet ? styles["gap-from-title"] : "";

  return (
    <Container>
      <div className={styles.article}>
        <div
          className={`${styles["article-wrapper"]} ${gapFromTitleAndButton}`}
        >
          <Link href="/blog">
            <div className={styleForButton}>
              <Image src={icon} alt="arrow" width={24} height={24} />
              <span>{linkText}</span>
            </div>
          </Link>
          <h2 className={styles.title}>{title}</h2>
        </div>
        <p className={styles.creation}>{creation}</p>
        <div className={styles["article-img"]}>
          <Image src={image} alt="blog-img" width={100} height={100} />
        </div>
        <div className={styles["article-text-wrapper"]}>
          {text.map((paragraph, index) => (
            <p className={styles["article-text"]} key={index}>
              {paragraph}
            </p>
          ))}
        </div>

        <p className={styles.author}>
          Автор: <span>Ніна Кравець</span>
        </p>
      </div>
    </Container>
  );
};

export default ArticleItem;
