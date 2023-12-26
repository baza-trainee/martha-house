import { type Metadata, NextPage } from "next";
import { Locales } from "@/types";
import { getTranslation, getAllTranslations } from "@/utils/dictionary";
import Heading from "@/components/Heading/Heading";
import Container from "@/components/Container";
import ArticlesList from "@/app/(landing)/[lang]/blog/components/ArticlesList/ArticlesList";
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
      "Discover stories and insights in our 'City of Goodness' blog, sharing support and empowerment for women and children overcoming challenges after domestic violence.",
  },
  "uk-UA": {
    title: "Блог Кризового Центру Місто Добра: Шлях до Незалежності",
    description:
      "Історії та поради в нашому блозі 'Місто Добра', де ми ділимося підтримкою та навчанням для жінок і дітей, які долають виклики після домашнього насильства.",
  },
  "pl-PL": {
    title: "Blog Centrum Kryzysowego Miasto Dobroci",
    description:
      "Odkryj historie i wskazówki na naszym blogu 'Miasto Dobroci', udostępniając wsparcie i umocnienie dla kobiet i dzieci pokonujących wyzwania po przemocy domowej.",
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

const BlogPage: NextPage<IProps> = async ({ params: { lang } }) => {
  const language = await getAllTranslations(lang);
  const t = getTranslation(language);

  return (
    <section className="wrapper">
      <Container className="blog">
        <Heading data={t("blog")} />
        <ArticlesList lang={lang} data={t("blog")} />
      </Container>
    </section>
  );
};

export default BlogPage;
