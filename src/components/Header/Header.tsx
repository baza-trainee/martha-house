import React from "react";
import { Nav } from "@/components";
import { Locales } from "@/types";
import { NextPage } from "next";

interface IProps {
  lang: Locales;
  data: {
    mainPage: string;
    blog: string;
    news: string;
  };
}

const Header: NextPage<IProps> = async ({ lang, data }) => (
  <header>
    <Nav data={data} locale={lang} />
  </header>
);

export default Header;
