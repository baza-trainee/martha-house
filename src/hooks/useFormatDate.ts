"use client";

import { useEffect, useState } from "react";

export const useFormatDate = ({
  data,
  lang,
}: {
  data: string | null;
  lang: string;
}) => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    if (data) {
      const date = new Date(data);
      const formatOptions: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };

      const newFormattedDate = new Intl.DateTimeFormat(
        lang,
        formatOptions,
      ).format(date);
      setFormattedDate(newFormattedDate);
    }
  }, [lang, data]);

  return formattedDate;
};
