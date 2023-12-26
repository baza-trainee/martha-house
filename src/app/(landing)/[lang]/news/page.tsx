import { NextPage } from "next";
import { Locales } from "@/types";
import Container from "@/components/Container";
import { getTranslation, getAllTranslations } from "@/utils/dictionary";
import Heading from "@/components/Heading/Heading";
import NewsList from "./components/NewsList/NewsList";
import "./styles.css";

interface IProps {
  params: {
    lang: Locales;
  };
}

const NewsPage: NextPage<IProps> = async ({ params: { lang } }) => {
  const language = await getAllTranslations(lang);
  const t = getTranslation(language);

  return (
    <section className="wrapper">
      <Container className="news">
        <Heading data={t("news")} />
        <NewsList lang={lang} data={t("news")} />
      </Container>
    </section>
  );
};

export default NewsPage;
