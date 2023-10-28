import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";

const IconsBar = () => (
  <div className={styles.social}>
    <Image
      src="/images/icons/facebook.svg"
      alt="facebook"
      width={24}
      height={24}
    />
    <Image
      src="/images/icons/instagram.svg"
      alt="instagram"
      width={24}
      height={24}
    />
    <Image
      src="/images/icons/youtube.svg"
      alt="youtube"
      width={24}
      height={24}
    />
    <Image
      src="/images/icons/telegram.svg"
      alt="telegram"
      width={24}
      height={24}
    />
  </div>
);

export default IconsBar;
