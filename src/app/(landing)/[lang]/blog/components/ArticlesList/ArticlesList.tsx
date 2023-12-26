"use client";

import React, { useEffect, useState } from "react";
import ArticleBlock from "@/app/(landing)/[lang]/blog/components/ArticlesList/ArticleBlock/ArticleBlock";
import { Locales } from "@/types";
import { useMedia } from "@/hooks/useMedia";
import { Button, Loader } from "@/components";
import { useFetchData } from "@/hooks/useFetchData";
import styles from "./ArticlesList.module.css";

interface ArticlesListProps {
  lang: Locales;
  data: {
    title: string;
    text: string;
    button: string;
  };
}

const ArticlesList: React.FC<ArticlesListProps> = ({ lang, data }) => {
  const { isDesktop } = useMedia();
  const [pageSize, setPageSize] = useState(0);
  const [page, setPage] = useState(1);
  const {
    info: blog,
    isLoading,
    error,
  } = useFetchData({ lang, pageSize, page, endPoint: "blogs" });

  useEffect(() => {
    setPageSize(isDesktop ? 9 : 6);
  }, [isDesktop]);

  const loadMoreHandler = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (error) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.articles}>
        {isLoading && <Loader className={styles.spinner} />}
        {blog?.data.map((item) => (
          <ArticleBlock
            key={item.id}
            image={item.attributes.image.data.attributes.url}
            title={item.attributes.title}
            description={item.attributes.description}
            slug={item.attributes.slug}
          />
        ))}
      </div>
      {blog?.data.length === pageSize &&
        page < blog.meta.pagination.pageCount && (
          <Button onClick={loadMoreHandler} variant="white">
            {data.button}
          </Button>
        )}
    </div>
  );
};

export default ArticlesList;
