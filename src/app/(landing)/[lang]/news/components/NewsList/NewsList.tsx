"use client";

import React, { useEffect, useRef, useState } from "react";
import { Locales } from "@/types";
import { useMedia } from "@/hooks/useMedia";
import { NewsResponse } from "@/types/News";
import { Button, Loader } from "@/components";
import NewsBlock from "./NewsBlock/NewsBlock";
import styles from "./NewsList.module.css";

const pageSize = 1;

interface NewsListProps {
  lang: Locales;
  data: {
    title: string;
    text: string;
    button: string;
  };
}

const ArticlesList: React.FC<NewsListProps> = ({ lang, data }) => {
  // const { isDesktop } = useMedia();
  // const [pageSize, setPageSize] = useState(0);
  const [page, setPage] = useState(1);
  const [news, setNews] = useState<NewsResponse | null>(null);
  const isFirstRun = useRef(true);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setPageSize(isDesktop ? 4 : 6);
  // }, [isDesktop]);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);
      const reqOptions = {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/news?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}&locale=${lang}`,
        reqOptions
      );
      const newData = await response.json();
      return newData;
    };

    console.log(news);

    if (/*pageSize > 0 &&*/ page > 0 && lang) {
      fetchData().then((newData) => {
        setNews((prevNews) => {
          if (prevNews) {
            return {
              ...newData,
              data: [...prevNews.data, ...newData.data],
            };
          }
          return newData;
        });
        setIsLoading(false);
      });
    }
  }, [lang, page]);

  const loadMoreHandler = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className={styles.newsList}>
      {isLoading && <Loader className={styles.loader} />}
      {news?.data.map((item) => (
        <NewsBlock
          key={item.id}
          image={item.attributes.image.data.attributes.formats.small.url}
          title={item.attributes.title}
          description={item.attributes.description}
          slug={item.attributes.slug}
          publishedAt={item.attributes.publishedAt}
        />
      ))}
      {news?.data.length === pageSize &&
        page < news.meta.pagination.pageCount && (
          <Button
            onClick={loadMoreHandler}
            variant='white'
            children={data.button}
          />
        )}
    </div>
  );
};

export default ArticlesList;
