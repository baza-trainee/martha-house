import React, { FC, ButtonHTMLAttributes } from "react";
import Image from "next/image";
import styles from "./Button.module.css";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "white" | "yellow";
  icon?: string;
  alt?: string;
}

export const Button: FC<IProps> = (props) => {
  const { variant, alt, icon, children, className, ...rest } = props;
  const buttonStyles = {
    white: styles.white,
    yellow: styles.yellow,
  };

  return (
    <button
      className={`${styles.button} ${buttonStyles[variant]} ${className || ""}`}
      {...rest}
    >
      {children}
      {icon && <Image
          src={icon}
          width={24}
          // @ts-ignore
          height={24}
          alt={alt || ""} />}
    </button>
  );
};
