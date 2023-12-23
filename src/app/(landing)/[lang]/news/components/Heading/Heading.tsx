import React from "react";
import styles from "./Heading.module.css";

interface HeadingProps {
  data: {
    title: string;
    text: string;
  };
}

const Heading = ({ data }: HeadingProps) => {
  return (
    <div className={styles.heading}>
      <h1 className={styles.title}>{data.title.toUpperCase()}</h1>
      <p className={styles.text}>{data.text}</p>
    </div>
  );
};

export default Heading;
