"use client";

import { useEffect, useState } from "react";
import { Blog } from "@/types/Blog";
import { News } from "@/types/News";

export const useFetchSingleArticle = ({
  endPoint,
  lang,
  url,
}: {
  endPoint: "blogs" | "news";
  lang: string;
  url: string;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [article, setArticle] = useState<News | Blog | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const reqOptions = {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/${endPoint}?populate=*&filters[slug][$eq]=${url}&locale=${lang}`,
        reqOptions,
      );
      return response.json();
    };

    fetchData().then((data) => {
      if (data.meta.pagination.total === 0) {
        setError("Error fetching data");
        setIsLoading(false);
      } else {
        setArticle(data.data[0].attributes);
        setIsLoading(false);
      }
    });
  }, [url, lang, endPoint]);

  return { isLoading, article, error };
};
