"use client";

import React, {
  createContext,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { Nav } from "@/components";
import { NextPage } from "next";
import { CustomImage } from "@/components/CustomImage";
import Link from "next/link";
import { HeaderProps } from "@/components/Header/Types/Header.types";
import styles from "@/components/Header/Header.module.css";

interface IMenuContext {
  handleToggle: () => void;
}

export const MenuContext = createContext<IMenuContext>({
  handleToggle: () => {
    console.warn("handleToggle is not implemented");
  },
});

export const HeaderMob: NextPage<HeaderProps> = ({ lang, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useOutsideClick(menuRef, () => setIsOpen(false));

  const handleToggle = useCallback(() => {
    setIsOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }, []);

  const contextValue = useMemo(
    () => ({
      handleToggle,
    }),
    [handleToggle],
  );

  return (
    <MenuContext.Provider value={contextValue}>
      <div className={isOpen ? styles.burger : styles.container} ref={menuRef}>
        <div className={styles.main}>
          <Link href={`/${lang}`}>
            <CustomImage
              src="/images/logo/site_logo.png"
              width={65}
              height={36}
              alt="logo"
            />
          </Link>
          <CustomImage
            onClick={handleToggle}
            src={
              isOpen
                ? "/images/icons/close_white.svg"
                : "/images/icons/menu.svg"
            }
            width={32}
            height={32}
            alt="logo"
            className={styles.close}
          />
        </div>
        {isOpen && <Nav data={data} locale={lang} />}
      </div>
    </MenuContext.Provider>
  );
};
