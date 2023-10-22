import { ReactNode } from "react";
import { NextPage } from "next";
import type { Metadata } from "next";
import { Manrope, Mulish } from "next/font/google";
import { Container } from "../components";
import "./styles/globals.css";
import "./styles/_normalize.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mulish",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface IProps {
  children: ReactNode | ReactNode[];
}

const RootLayout: NextPage<IProps> = ({ children }) => (
  <html
    lang="en"
    className={`${mulish.variable} ${manrope.variable} font-sans`}
  >
    <body>
      <Container>{children}</Container>
    </body>
  </html>
);

export default RootLayout;
