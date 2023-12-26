import React, { HTMLAttributes } from "react";
import styles from "./Loader.module.css";

type Props = HTMLAttributes<HTMLDivElement>;

export const Loader = ({ className, ...props }: Props) => (
  <span className={`${styles.loader} ${className}`} {...props} />
);
