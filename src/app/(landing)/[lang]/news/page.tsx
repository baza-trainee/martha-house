import { NextPage } from "next";
import { Locales } from "@/types";
import Heading from "./components/Heading/Heading";
import Container from "@/components/Container";
import { getTranslation, getAllTranslations } from "@/utils/dictionary";
import config from "@/config";

// const fetchNews = async (params: string) => {
//   const reqOptions: object = {
//     headers: {
//       Authorization: `Bearer ${process.env.API_TOKEN}`,
//     },
//   };

//   const req = await fetch(
//     `${config.api}/api/news?populate=*&${params}`,
//     reqOptions,
//   );
//   const res = await req.json();

//   return res;
// };

interface IProps {
  params: {
    lang: Locales;
  };
}

// interface NewsType {
//   attributes: object;
// }

const NewsPage: NextPage<IProps> = async ({ params: { lang } }) => {
  const language = await getAllTranslations(lang);
  const t = getTranslation(language);

  // const [futuredNews, news] = await Promise.all([
  //   await fetchNews("filters[isFutured][$eq]=true"),
  //   await fetchNews("filters[isFutured][$eq]=false"),
  // ]);

  // console.log("futuredNews>>>>", futuredNews.data);

  return (
    <div>
      {/* <ul>
        {futuredNews.data.map((item: any) => (
          <li key={item.id}>
            <h3>Category: {item.attributes.Category}</h3>
            <h1>{item.attributes.Title}</h1>
            <p>{item.attributes.Description}</p>
            <img src={item.attributes.Image.data[0].attributes.url} alt="" />
          </li>
        ))}
      </ul>
      <ul>
        {news.data.map((item: any) => (
          <li key={item.id}>
            <h3>Category: {item.attributes.Category}</h3>
            <h1>{item.attributes.Title}</h1>
            <p>{item.attributes.Description}</p>
            <img src={item.attributes.Image.data[0].attributes.url} alt="" />
          </li>
        ))}
      </ul> */}
      <Container>
        <Heading data={t("news")} />
      </Container>
      <div>NewsCard</div>
    </div>
  );
};

export default NewsPage;
