"use client";

import React, { useEffect, useState } from "react";
import { Locales } from "@/types";
import { NextPage } from "next";
import { useMedia } from "@/components/hooks/useMedia";
import HeaderDesc from "@/components/Header/HeaderDesc";
import { HeaderMob } from "@/components/Header/HeaderMob";

interface HeaderProps {
  lang: Locales;
  data: {
    mainPage: string;
    blog: string;
    news: string;
  };
}

const Header: NextPage<HeaderProps> = ({ lang, data }) => {
  const { isMobile, isTablet } = useMedia();
  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    setClientReady(true);
  }, []);

  if (!clientReady) return null;

  return (
    <header>
      {isMobile || isTablet ? (
        <HeaderMob data={data} lang={lang} />
      ) : (
        <HeaderDesc data={data} lang={lang} />
      )}
    </header>
  );
};

export default Header;
