import { type Metadata, NextPage } from "next";
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

const metaTags = {
  "en-US": {
    title: "Latest stories and Insights - City of Goodness",
    description:
      "Stay updated with the latest news from the City of Goodness Support Center: Current events, success stories, and developments in support programs for women and children.",
  },
  "uk-UA": {
    title: "Актуальні Події та Розвиток Програм Підтримки Жінок і Дітей.",
    description:
      "Останні новини з Кризового Центру 'Місто Добра': актуальні події, історії успіху, та розвиток програм підтримки жінок та дітей",
  },
  "pl-PL": {
    title: "Najnowsze Historie i Spostrzeżenia - Miasto Dobroci",
    description:
      "Najnowsze wiadomości z Centrum Kryzysowego Miasto Dobroci: aktualne wydarzenia, historie sukcesu i rozwój programów wsparcia dla kobiet i dzieci.",
  },
};
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export async function generateMetadata({
  params: { lang },
}: {
  params: {
    lang: Locales;
  };
}): Promise<Metadata> {
  return {
    title: metaTags[lang].title,
    description: metaTags[lang].description,
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
