/* eslint-disable react/button-has-type */
/* eslint-disable react/require-default-props */
import React, { ReactNode } from "react";
import Image from "next/image";
import styles from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  variant: "white" | "yellow";
  icon?: string;
  alt?: string;
  className?: string;
};

const Button = ({
  children,
  variant,
  icon,
  alt,
  className,
  ...props
}: ButtonProps) => {
  const buttonStyles = {
    white: styles.white,
    yellow: styles.yellow,
  };
  return (
    <button
      className={`${styles.button} ${buttonStyles[variant]} ${className || ""}`}
      {...props}
    >
      {children}
      {icon && <Image src={icon} width={24} height={24} alt={alt || ""} />}
    </button>
  );
};

export default Button;
