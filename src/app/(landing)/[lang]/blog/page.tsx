import { NextPage } from "next";
import { Locales } from "@/types";
import { getTranslation, getAllTranslations } from "@/utils/dictionary";

interface IProps {
  params: {
    lang: Locales;
  };
}

const BlogPage: NextPage<IProps> = async ({ params: { lang } }) => {
  const language = await getAllTranslations(lang);
  const t = getTranslation(language);

  return <h1>{t("blog.title")}</h1>;
};

export default BlogPage;
