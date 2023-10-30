"use client";

import React, { FC, useState } from "react";

import { CustomImage } from "@/components/CustomImage";
import { Button } from "@/components/Button";
import styles from "./Accordion.module.css";

export interface AccordionDataProps {
  subtitle?: string;
  img?: string;
  icon: string;
  alt: string;
  text: string[];
  button: string[];
}

interface AccordionSectionProps {
  section: AccordionDataProps;
  isActiveSection: boolean;
  // eslint-disable-next-line no-unused-vars
  setActiveIndex: (index: number | null) => void;
  sectionIndex: number;
}

const AccordionSection: FC<AccordionSectionProps> = ({
  section,
  isActiveSection,
  setActiveIndex,
  sectionIndex,
}) => {
  const toggleSection = () => {
    const nextIndex = isActiveSection ? null : sectionIndex;
    setActiveIndex(nextIndex);
  };

  let accordionHeader: React.JSX.Element | null = null;

  if (section.subtitle) {
    accordionHeader = (
      <h4 className={styles["accordion-subtitle"]}>{section.subtitle}</h4>
    );
  }

  if (section.img) {
    accordionHeader = (
      <CustomImage
        src={section.img}
        alt={section.alt}
        width={100}
        height={24}
        className={styles["accordion-img"]}
      />
    );
  }

  return (
    <div className={styles["accordion-section"]}>
      <div className={styles["accordion-header"]} onClick={toggleSection}>
        {accordionHeader}
        <CustomImage
          src={section.icon}
          alt="icon"
          width={24}
          height={24}
          placeholder="empty"
          className={
            isActiveSection
              ? styles["accordion-arrow-transform"]
              : styles["accordion-arrow-back"]
          }
        />
      </div>
      {isActiveSection && section.text && (
        <div className={styles["accordion-description-p"]}>
          {section.text.map((text, index) => (
            <p className={styles["accordion-paragraph"]} key={index}>
              {text}
            </p>
          ))}
        </div>
      )}
      {isActiveSection && section.button && (
        <div className={styles["accordion-description-button"]}>
          {section.button.map((text, index) => (
            <Button key={index} variant="white">
              {text}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

const Accordion: FC<{ sections: AccordionDataProps[] }> = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className={styles["accordion-wrapper"]}>
      {sections.map((section, index: number) => (
        <AccordionSection
          key={index}
          section={section}
          isActiveSection={index === activeIndex}
          setActiveIndex={setActiveIndex}
          sectionIndex={index}
        />
      ))}
    </div>
  );
};

export default Accordion;
