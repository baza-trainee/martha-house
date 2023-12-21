import { ArticleData } from "@/types/ArtcilesData";
import styles from "./ArticleItem.module.css";

const ArticleItem = ({ data }: ArticleData) => {
  // eslint-disable-next-line no-console
  console.log(data);
  return (
    <div className={styles.article}>
      <p>ArticleItem</p>
    </div>
  );
};

export default ArticleItem;
