import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./NewsBlock.module.css";

interface NewsBlockProps {
  image: string;
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
}

const NewsBlock: React.FC<NewsBlockProps> = ({
  image,
  title,
  description,
  slug,
  publishedAt,
}) => {
  const date = new Date(Date.parse(publishedAt));
  const day = date.getDay();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  console.log(day, month, year);

  return (
    <div className={styles.block}>
      <div className={styles.image}>
        <Image src={image} alt={title} width={295} height={240} />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          <h2>{title}</h2>
          <div className={styles.link}>
            <Link href={`/news/${slug}`}>
              <Image
                src='/images/icons/vector.svg'
                alt='vector'
                width={12}
                height={12}
              />
            </Link>
          </div>
        </div>
        <p className={styles.text}>{description}</p>
        <p className={styles.text}>{`${day}.${month}.${year} року`}</p>
      </div>
    </div>
  );
};

export default NewsBlock;
