import React from "react";

import Container from "../Container";
import Accordion, { AccordionDataProps } from "./Accordion/Accordion";
import styles from "./HowToHelp.module.css";

interface IHowToHelpProps {
  data: {
    title: string;
    paragraph: string;
    accordionItemOne: AccordionDataProps;
    accordionItemTwo: AccordionDataProps;
    accordionItemThree: AccordionDataProps;
    accordionItemFour: AccordionDataProps;
    accordionItemFive: AccordionDataProps;
    accordionItemSix: AccordionDataProps;
    accordionItemSeven: AccordionDataProps;
  };
}

const HowToHelp: React.FC<IHowToHelpProps> = ({ data }) => {
  const sections: AccordionDataProps[] = [
    data.accordionItemOne,
    data.accordionItemTwo,
    data.accordionItemThree,
    data.accordionItemFour,
    data.accordionItemFive,
    data.accordionItemSix,
    data.accordionItemSeven,
  ];

  return (
    <section className={styles.howToHelp}>
      <Container className={styles["howToHelp-container"]}>
        <div className={styles.extraWidth}>
          <h2 className={styles.title}>{data.title}</h2>
          <div className={styles["howToHelp-wrapper"]}>
            <p className={styles.paragraph}>{data.paragraph}</p>
            <Accordion sections={sections} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowToHelp;
