import { NextPage } from "next";
import { Locales } from "@/types";
import { getTranslation, getAllTranslations } from "@/utils/dictionary";
// import config from "@/config";

interface IProps {
  params: {
    lang: Locales;
  };
}

// const fetchBlogs = async () => {
//   const reqOption = {
//     headers: {
//       Authorization: `Baerer ${process.env.API_KEY}`,
//     },
//   };

//   const request = await fetch(`${config.api}/api/blogs?populate=*`, reqOption);
//   const response = await request.json();
// };

const BlogPage: NextPage<IProps> = async ({ params: { lang } }) => {
  const language = await getAllTranslations(lang);
  const t = getTranslation(language);

  return <h1>{t("blog.title")}</h1>;
};

export default BlogPage;
