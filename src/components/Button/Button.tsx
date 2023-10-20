import React, {ReactNode} from 'react';
import styles from './Button.module.css'

type ButtonProps = {
  children: ReactNode;
  variant: "white" | "yellow";
  icon?: string;
  alt?: string;
  className?: string;
}

const Button = ({children, variant, icon, alt, className, ...props}: ButtonProps)  => {

  const buttonStyles = {
    white: styles.white,
    yellow: styles.yellow
  }
  return (
    <button
      className={`${styles.button} ${buttonStyles[variant]} ${className ? className : ""}`}
      {...props}
    >
      {children}
      {icon && <img src={icon} alt={alt}/>
      }
    </button>
  );
};

export default Button;