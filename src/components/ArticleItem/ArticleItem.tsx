"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useMedia } from "@/hooks/useMedia";
import { Loader } from "@/components";
import Container from "@/components/Container";
import { Locales } from "@/types";
import { useFetchSingleArticle } from "@/hooks/useFetchSingleArticle";
import { useFormatDate } from "@/hooks/useFormatDate";
import styles from "./ArticleItem.module.css";

interface ArticleItemProps {
  url: string;
  lang: Locales;
  page: string;
}

const ArticleItem = ({ url, lang, page }: ArticleItemProps) => {
  const { isMobile, isTablet } = useMedia();
  const [clientReady, setClientReady] = useState(false);
  const endPoint = page === "blog" ? "blogs" : "news";
  const { isLoading, article, error } = useFetchSingleArticle({
    endPoint,
    lang,
    url,
  });
  const [image, setImage] = useState("");
  const data = article && article.date;
  const formattedDate = useFormatDate({ data, lang });

  useEffect(() => {
    if (article) {
      if (isMobile) {
        setImage(article.image.data.attributes.formats.small.url);
      } else if (isTablet) {
        setImage(article.image.data.attributes.formats.medium.url);
      } else {
        setImage(article.image.data.attributes.formats.large.url);
      }
    }
  }, [isMobile, isTablet, article]);

  useEffect(() => {
    setClientReady(true);
  }, []);

  if (!clientReady) return null;

  let btnText;
  if (lang === "en-US") {
    btnText = "Back";
  } else if (lang === "pl-PL") {
    btnText = "Wstecz";
  } else {
    btnText = "Назад";
  }

  const linkText = isMobile || isTablet ? "" : btnText;

  const styleForButton = isMobile || isTablet ? "" : styles["button-back"];

  const gapFromTitleAndButton =
    isMobile || isTablet ? styles["gap-from-title"] : "";

  const textFormat = (text: string) => {
    const paragraphs = text.split("\n\n").map((paragraph, index) => (
      <p key={index} className={styles["article-text"]}>
        {paragraph}
      </p>
    ));

    return <div className={styles["article-text-wrapper"]}>{paragraphs}</div>;
  };

  if (error) return;

  return (
    <Container>
      <div className={styles.article}>
        {isLoading && <Loader className={styles.spinner} />}
        {article && (
          <>
            <div
              className={`${styles["article-wrapper"]} ${gapFromTitleAndButton}`}
            >
              <Link href={page === "blog" ? `/${lang}/blog` : `/${lang}/news`}>
                <div className={styleForButton}>
                  <Image
                    src="/images/blog-details/icon-arrow.svg"
                    alt="arrow"
                    width={24}
                    height={24}
                  />
                  <span>{linkText}</span>
                </div>
              </Link>
              <h2 className={styles.title}>{article.title}</h2>
            </div>
            <p className={styles.creation}>{formattedDate}</p>
            <div className={styles["article-img"]}>
              {image && (
                <Image
                  src={image}
                  alt="blog-img"
                  sizes="(max-width: 768px) 100vw, 100vw"
                  width={100}
                  height={100}
                  quality={100}
                />
              )}
            </div>
            {textFormat(page === "blogs" ? article.text : article.description)}

            <p className={styles.author}>
              Автор: <span>{article.author}</span>
            </p>
          </>
        )}
      </div>
    </Container>
  );
};

export default ArticleItem;
