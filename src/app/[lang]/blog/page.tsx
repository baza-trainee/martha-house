import { NextPage } from "next";
import { Locales } from "../../../types";
import { getTranslation, getAllTranslations } from "../../../utils/dictionary";
import { Footer, Nav } from "../../../components";

interface IProps {
  params: {
    lang: Locales;
  };
}

const BlogPage: NextPage<IProps> = async ({ params: { lang } }) => {
  const language = await getAllTranslations(lang);
  const t = getTranslation(language);

  return (
    <main>
      <Nav data={t("nav")} locale={lang} />
      <h1>{t("blog.title")}</h1>
      <Footer data={t("footer")} />
    </main>
  );
};

export default BlogPage;
