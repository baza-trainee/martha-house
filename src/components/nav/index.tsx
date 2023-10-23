"use client";

import { FC } from "react";
import Link from "next/link";
import { Locales } from "@/types";
import { useNav } from "../hooks";

interface IProps {
  data: {
    mainPage: string;
    blog: string;
    news: string;
  };
  locale: Locales;
}

export const Nav: FC<IProps> = ({ locale, data: { mainPage, blog, news } }) => {
  const { ukLink, plLink, enLink } = useNav();

  return (
    <nav>
      <div>
        <Link href={`/${locale}`}>{mainPage}</Link>
        <Link href={`/${locale}/blog`}>{blog}</Link>
        <Link href={`/${locale}/news`}>{news}</Link>
      </div>
      <div>
        <Link href={ukLink}>UA</Link>
        <Link href={enLink}>EN</Link>
        <Link href={plLink}>PL</Link>
      </div>
    </nav>
  );
};
