import { type Metadata, NextPage } from "next";
import { Locales } from "@/types";
import { getTranslation, getAllTranslations } from "@/utils/dictionary";
import Heading from "@/app/(landing)/[lang]/blog/components/Heading/Heading";
import Container from "@/components/Container";
import "./styles.css";
import ArticlesList from "@/app/(landing)/[lang]/blog/components/ArticlesList/ArticlesList";
import { articles } from "@/app/(landing)/[lang]/blog/mock/MockData";
// import config from "@/config";

interface IProps {
  params: {
    lang: Locales;
  };
}

export const metadata: Metadata = {
  title: "Blog Page",
  description: "Generated by create next app",
};

// const fetchBlogs = async () => {
//   const reqOption = {
//     headers: {
//       Authorization: `Bearer ${process.env.API_KEY}`,
//     },
//   };

//   const request = await fetch(`${config.api}/api/blogs?populate=*`, reqOption);
//   const response = await request.json();
// };

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
