"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useMedia } from "@/hooks/useMedia";
import { Loader } from "@/components";
import Container from "@/components/Container";
import { Locales } from "@/types";
import { Blog } from "@/types/Blog";
import { useFormatDate } from "@/hooks/useFormatDate";
import styles from "./ArticleItem.module.css";

interface ArticleItemProps {
  url: string;
  lang: Locales;
}

const ArticleItem = ({ url, lang }: ArticleItemProps) => {
  const { isMobile, isTablet } = useMedia();
  const [clientReady, setClientReady] = useState(false);
  const [article, setArticle] = useState<Blog | null>(null);
  const [image, setImage] = useState("");
  const data = article && article.date;
  const formattedDate = useFormatDate({ data, lang });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const reqOptions = {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/blogs?populate=*&filters[slug][$eq]=${url}&locale=${lang}`,
        reqOptions
      );
      return response.json();
    };

    fetchData().then((data) => {
      setArticle(data.data[0].attributes);
      setIsLoading(false);
    });
  }, [url, lang]);

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

  const linkText = isMobile || isTablet ? "" : "Назад";

  const styleForButton = isMobile || isTablet ? "" : styles["button-back"];

  const gapFromTitleAndButton =
    isMobile || isTablet ? styles["gap-from-title"] : "";
  console.log(isLoading);

  const textFormat = (text: string) => {
    const paragraphs = text.split("\n\n").map((paragraph, index) => (
      <p key={index} className={styles["article-text"]}>
        {paragraph}
      </p>
    ));

    return <div className={styles["article-text-wrapper"]}>{paragraphs}</div>;
  };

  return (
    <Container>
      <div className={styles.article}>
        {isLoading && <Loader className={styles.spinner} />}
        {article && (
          <>
            <div
              className={`${styles["article-wrapper"]} ${gapFromTitleAndButton}`}
            >
              <Link href='/blog'>
                <div className={styleForButton}>
                  <Image
                    src='/images/blog-details/icon-arrow.svg'
                    alt='arrow'
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
                  alt='blog-img'
                  sizes='(max-width: 768px) 100vw, 100vw'
                  width={100}
                  height={100}
                  quality={100}
                />
              )}
            </div>
            {textFormat(article.text)}

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
