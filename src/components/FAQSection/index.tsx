"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/Container";
import { CustomImage as Icon } from "@/components/CustomImage";
import styles from "./FAQSection.module.css";

type itemType = {
  query: string;
  description: string | null;
  responses: string[];
};

interface FAQSectionProps {
  data: {
    title: string;
    items: itemType[];
  };
}

const FAQSection: React.FC<FAQSectionProps> = ({ data }) => {
  const [checkedStates, setCheckedStates] = useState<boolean[]>(
    data.items.map(() => false),
  );

  const toggleChecked = (index: number) => {
    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = !newCheckedStates[index];
    setCheckedStates(newCheckedStates);
  };

  return (
    <section>
      <Container className={styles.container}>
        <h2 className={styles.title}>{data.title}</h2>
        {data.items.map((item, index) => (
          <div className={styles.itemContainer} key={index}>
            <div
              className={styles.queryContainer}
              onClick={() => toggleChecked(index)}
            >
              <h3>{item.query}</h3>
              <motion.span
                className={styles.button}
                animate={{ rotate: checkedStates[index] ? 45 : 0 }}
              >
                <Icon
                  src="/images/icons/add.svg"
                  alt="add-icon"
                  width="24"
                  height="24"
                />
                {/* <AnimatePresence>
                  {checkedStates[index] ? (
                    <Icon
                      src="/images/icons/close.svg"
                      alt="close-icon"
                      width="24"
                      height="24"
                    />
                  ) : (
                    <Icon
                      src="/images/icons/add.svg"
                      alt="add-icon"
                      width="24"
                      height="24"
                    />
                  )}
                </AnimatePresence> */}
              </motion.span>
            </div>
            <AnimatePresence>
              {checkedStates[index] && (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 10, height: 0 },
                    visible: { opacity: 1, y: 0, height: "auto" },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ ease: "linear", duration: 0.7 }}
                  exit="hidden"
                >
                  <ul className={styles.responseList}>
                    {item.responses.map((response) => (
                      <li key={response} className={styles.responseItem}>
                        {response}
                      </li>
                    ))}
                  </ul>
                  {item.description && (
                    <p className={styles.responseItem}>{item.description}</p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default FAQSection;
