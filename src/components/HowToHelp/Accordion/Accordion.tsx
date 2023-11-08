"use client";

import React, { FC, useState } from "react";
import Image from "next/image";

import { Button } from "@/components/Button";
import styles from "./Accordion.module.css";

export interface AccordionDataProps {
  subtitle?: string;
  img: string;
  icon: string;
  alt: string;
  text: string[];
  qrImg: string;
  button: string[];
  buttonCurrency: { title: string; content: string[] }[];
  content: string[];
  title: string;
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
  const [selectedButton, setSelectedButton] = useState<string>("UA");

  let accordionHeader: React.JSX.Element | null = null;
  let accordionContent: React.JSX.Element | null = null;

  const toggleSection = () => {
    const nextIndex = isActiveSection ? null : sectionIndex;
    setActiveIndex(nextIndex);
  };

  if (section.subtitle) {
    accordionHeader = (
      <h4 className={styles["accordion-subtitle"]}>{section.subtitle}</h4>
    );
  }

  if (section.img) {
    accordionHeader = (
      <Image
        src={section.img}
        alt={section.alt}
        width={100}
        height={24}
        className={
          section.alt === "bitcoin"
            ? styles["bitcoin-img"]
            : styles["accordion-img"]
        }
      />
    );
  }

  if (
    section.alt === "monobank" ||
    section.alt === "paypal" ||
    section.alt === "bitcoin"
  ) {
    accordionContent = (
      <div className={styles["accordion-description__p"]}>
        {section.text.map((text, index) => (
          <p className={styles["accordion-paragraph"]} key={index}>
            {text}
          </p>
        ))}
      </div>
    );
  }

  if (section.alt === "privatbank") {
    accordionContent = (
      <div className={styles["accordion-description__privatbank"]}>
        <Button variant="white">{section.button[0]}</Button>
        <p>{section.text[0]}</p>
        <Image src={section.qrImg} alt={section.alt} width={154} height={154} />
      </div>
    );
  }

  if (section.subtitle === "Підписка" || section.subtitle === "Онлайн платіж") {
    accordionContent = (
      <div>
        {section.button.map((item, index) => (
          <Button
            key={index}
            variant="white"
            className={styles["button-subscribe"]}
          >
            {item}
          </Button>
        ))}
      </div>
    );
  }

  if (section.subtitle === "Банківський переказ") {
    accordionContent = (
      <>
        <div>
          {section.buttonCurrency.map((item, index) => (
            <Button
              key={index}
              variant="white"
              value={item.title}
              onClick={(e: React.FormEvent<HTMLButtonElement>) => {
                setSelectedButton(e.currentTarget.value);
              }}
            >
              {item.title}
            </Button>
          ))}
        </div>
        {/* eslint-disable arrow-body-style */}
        {section.buttonCurrency.map((item, index) => {
          return (
            item.title === selectedButton && (
              <div key={index}>
                {item.content.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>
            )
          );
        })}
      </>
    );
  }

  return (
    <div className={styles["accordion-section"]}>
      <div className={styles["accordion-header"]} onClick={toggleSection}>
        {accordionHeader}
        <Image
          src={section.icon}
          alt="icon"
          width={24}
          height={24}
          className={
            isActiveSection
              ? styles["accordion-arrow__transform"]
              : styles["accordion-arrow__back"]
          }
        />
      </div>
      {isActiveSection && accordionContent}
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
