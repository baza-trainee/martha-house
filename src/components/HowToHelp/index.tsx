/* eslint-disable no-unused-vars */
import { FC } from "react";
import Image from "next/image";
import Accordion from "@/components/HowToHelp/Accordion";
import styles from "./HowToHelp.module.css";

interface IHowToHelpProps {
  data: {
    title: string;
    paragraph: string;
    bankTransfer: string;
    onlinePayment: string;
    monobank: string;
    payPal: string;
  };
}

export const HowToHelp: FC<IHowToHelpProps> = ({
  data: { title, paragraph, bankTransfer, onlinePayment, monobank, payPal },
}) => (
  <section className={styles.howToHelp}>
    <div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.paragraph}>{paragraph}</p>
    </div>
    <Accordion />
  </section>
);
