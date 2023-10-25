/* eslint-disable no-unused-vars */
import { FC } from "react";
import Accordion from "@/components/HowToHelp/Accordion";
import styles from "./HowToHelp.module.css";

interface IHowToHelpProps {
  data: {
    title: string;
    paragraph: string;
  };
}

export const HowToHelp: FC<IHowToHelpProps> = ({
  data: { title, paragraph },
}) => (
  <section className={styles.howToHelp}>
    <div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.paragraph}>{paragraph}</p>
    </div>
    <Accordion />
  </section>
);
