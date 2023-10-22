"use client";

import { FC } from "react";
import Link from "next/link";
import { useNav } from "../hooks";
import { Locales } from "../../types";

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
    <nav style={{ display: "flex" }}>
      <div style={{ marginRight: "20px" }}>
        <Link style={{ marginRight: "10px" }} href={`/${locale}`}>
          {mainPage}
        </Link>
        <Link style={{ marginRight: "10px" }} href={`/${locale}/blog`}>
          {blog}
        </Link>
        <Link href={`/${locale}/news`}>{news}</Link>
      </div>
      <div>
        <Link style={{ marginRight: "10px" }} href={ukLink}>
          UA
        </Link>
        <Link style={{ marginRight: "10px" }} href={enLink}>
          EN
        </Link>
        <Link href={plLink}>PL</Link>
      </div>
    </nav>
  );
};
