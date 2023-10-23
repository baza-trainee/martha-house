import React, { ReactNode } from "react";
import styles from "./Container.module.css";
import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
}) => (
  <div className={clsx(styles.container, className && className)}>
    {children}
  </div>
);
