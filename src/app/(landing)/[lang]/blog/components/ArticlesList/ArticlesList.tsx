"use client";

import React, { useEffect, useRef, useState } from "react";
import ArticleBlock from "@/app/(landing)/[lang]/blog/components/ArticlesList/ArticleBlock/ArticleBlock";
import { Locales } from "@/types";
import { useMedia } from "@/hooks/useMedia";
import { BlogResponse } from "@/types/Blog";
import { Button, Loader } from "@/components";
import styles from "./ArticlesList.module.css";

interface ArticlesListProps {
  lang: Locales;
}

const ArticlesList: React.FC<ArticlesListProps> = ({ lang }) => {
  const { isDesktop } = useMedia();
  const [pageSize, setPageSize] = useState(0);
  const [page, setPage] = useState(1);
  const [blogs, setBlogs] = useState<BlogResponse | null>(null);
  const isFirstRun = useRef(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setPageSize(isDesktop ? 9 : 6);
  }, [isDesktop]);

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
        `${process.env.NEXT_PUBLIC_API_URL}/api/blogs?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}&locale=${lang}`,
        reqOptions
      );
      const newData = await response.json();
      return newData;
    };

    if (pageSize > 0 && page > 0 && lang) {
      fetchData().then((newData) => {
        setBlogs((prevBlogs) => {
          if (prevBlogs) {
            return {
              ...newData,
              data: [...prevBlogs.data, ...newData.data],
            };
          }
          return newData;
        });
        setIsLoading(false);
      });
    }
  }, [pageSize, lang, page]);

  const loadMoreHandler = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className={styles.articles}>
      {isLoading && <Loader className={styles.spinner} />}
      {blogs?.data.map((item) => (
        <ArticleBlock
          key={item.id}
          image={item.attributes.image.data.attributes.url}
          title={item.attributes.title}
          description={item.attributes.description}
          slug={item.attributes.slug}
        />
      ))}
      {blogs?.data.length === pageSize &&
        page < blogs.meta.pagination.pageCount && (
          <Button onClick={loadMoreHandler} variant='white'>
            Завантажити ще
          </Button>
        )}
    </div>
  );
};

export default ArticlesList;
