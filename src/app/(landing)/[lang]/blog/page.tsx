import { NextPage } from "next";
import { Locales } from "@/types";
import { getTranslation, getAllTranslations } from "@/utils/dictionary";
import Heading from "@/app/(landing)/[lang]/blog/components/Heading/Heading";
import Container from "@/components/Container";
import "./styles.css";
import ArticlesList from "@/app/(landing)/[lang]/blog/components/ArticlesList/ArticlesList";
import { articles } from "@/app/(landing)/[lang]/blog/mock/MockData";

interface IProps {
  params: {
    lang: Locales;
  };
}

const BlogPage: NextPage<IProps> = async ({ params: { lang } }) => {
  const language = await getAllTranslations(lang);
  const t = getTranslation(language);

  return (
    <section className="wrapper">
      <Container className="blog">
        <Heading data={t("blog")} />
        <ArticlesList data={articles} />
      </Container>
    </section>
  );
};

export default BlogPage;
