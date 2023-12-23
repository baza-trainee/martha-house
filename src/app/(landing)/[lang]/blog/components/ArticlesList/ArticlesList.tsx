"use client";

import React, { Fragment, useEffect, useRef, useState } from "react";
import ArticleBlock from "@/app/(landing)/[lang]/blog/components/ArticlesList/ArticleBlock/ArticleBlock";
import { Locales } from "@/types";
import config from "@/config";
import { useMedia } from "@/hooks/useMedia";
import { BlogResponse } from "@/types/Blog";
import { Button } from "@/components";
import styles from "./ArticlesList.module.css";

interface ArticlesListProps {
  lang: Locales;
}

const ArticlesList = ({ lang }: ArticlesListProps) => {
  const { isDesktop } = useMedia();
  const [pageSize, setPageSize] = useState(0);
  const [page, setPage] = useState(1);
  const [blogs, setBlogs] = useState<BlogResponse | null>(null);
  const isFirstRun = useRef(true);

  const buttonToRender =
    blogs &&
    blogs.data.length === pageSize &&
    page < blogs.meta.pagination.pageCount;

  useEffect(() => {
    if (isDesktop) {
      setPageSize(9);
    } else {
      setPageSize(6);
    }
  }, [isDesktop]);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    const fetchData = async () => {
      const reqOptions = {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      };

      const response = await fetch(
        `${config.api}/api/blogs?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}&locale=${lang}`,
        reqOptions,
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
      });
    }
  }, [pageSize, lang, page]);

  const loadMoreHandler = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className={styles.articles}>
      {blogs &&
        blogs.data.map((item) => (
          <Fragment key={item.id}>
            <ArticleBlock
              image={item.attributes.image.data.attributes.url}
              title={item.attributes.title}
              description={item.attributes.description}
              slug={item.attributes.slug}
            />
          </Fragment>
        ))}
      {buttonToRender && (
        <Button onClick={loadMoreHandler} variant="white">
          Завантажити ще
        </Button>
      )}
    </div>
  );
};

export default ArticlesList;
