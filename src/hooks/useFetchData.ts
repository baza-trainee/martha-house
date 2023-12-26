"use client";

import { useEffect, useRef, useState } from "react";
import { NewsResponse } from "@/types/News";
import { BlogResponse } from "@/types/Blog";

interface useFetchDataProps {
  pageSize: number;
  page: number;
  lang: string;
  endPoint: string;
}

export const useFetchData = ({
  pageSize,
  page,
  lang,
  endPoint,
}: useFetchDataProps) => {
  const isFirstRun = useRef(true);
  const [isLoading, setIsLoading] = useState(false);
  const [info, setInfo] = useState<BlogResponse | NewsResponse | null>(null);
  const [error, setError] = useState("");

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
        `${process.env.NEXT_PUBLIC_API_URL}/api/${endPoint}?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}&locale=${lang}`,
        reqOptions,
      );
      return response.json();
    };

    if (pageSize > 0 && page > 0 && lang) {
      fetchData().then((newData) => {
        if (newData?.meta.pagination.total === 0) {
          setError("Error");
          setIsLoading(false);
        }
        setInfo((prevBlogs) => {
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
  }, [endPoint, pageSize, lang, page]);

  return { info, isLoading, error };
};
