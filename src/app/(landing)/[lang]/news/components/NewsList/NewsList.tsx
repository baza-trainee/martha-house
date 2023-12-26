"use client";

import React, { useState } from "react";
import { Locales } from "@/types";
import { Button, Loader } from "@/components";
import { useFetchData } from "@/hooks/useFetchData";
import NewsBlock from "./NewsBlock/NewsBlock";
import styles from "./NewsList.module.css";

interface NewsListProps {
  lang: Locales;
  data: {
    title: string;
    text: string;
    button: string;
  };
}

const ArticlesList: React.FC<NewsListProps> = ({ lang, data }) => {
  const [page, setPage] = useState(1);
  const {
    info: news,
    isLoading,
    error,
  } = useFetchData({ page, pageSize: 4, lang, endPoint: "news" });

  const loadMoreHandler = () => {
    setPage((prevPage) => prevPage + 1);
  };
  if (error) return;

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
          publishedAt={item.attributes.date}
          lang={lang}
        />
      ))}
      {news?.data.length === 4 && page < news.meta.pagination.pageCount && (
        <Button onClick={loadMoreHandler} variant="white">
          {data.button}
        </Button>
      )}
    </div>
  );
};

export default ArticlesList;
