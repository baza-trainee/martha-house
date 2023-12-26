import { Metadata, NextPage } from "next";
import HeroSection from "@/components/HeroSection";
import NeedHelp from "@/components/NeedHelp";
import CoreValuesSection from "@/components/CoreValuesSection";
import VideoSection from "@/components/VideoSection";
import { getAllTranslations, getTranslation } from "@/utils/dictionary";
import FAQSection from "@/components/FAQSection";
import { Locales } from "@/types";
import HowToHelp from "@/components/HowToHelp";
import Support from "@/components/SupportProject/Support";
import Help from "@/components/Help/Help";
import History from "@/components/CreationHistory/History";
import { AboutComponent } from "@/components/About/AboutComponent";
import AngelDoll from "@/components/AngelDoll";
import WhyNeed from "@/components/WhyNeed/WhyNeed";

interface IHomePageProps {
  params: {
    lang: Locales;
  };
}

const metaTags = {
  "en-US": {
    title: "City of Goodness - Women and Children International Support Center",
    description:
      "In the City of Goodness, we will fight for every mom for a child. Homeless mothers, mothers from orphanages, mothers crushed by domestic violence and indifference will find shelter and support there.",
  },
  "uk-UA": {
    title: "Місто Добра - Притулок Для Мам з Дітьми",
    description:
      'Кризовий центр "Місто Добра" для жінок та їхніх дітей пропонує не лише безпечне укриття від домашнього насильства, а й всебічну програму, яка допомагає жінкам соціалізуватися. Після завершення цієї програми, вони навчаються самостійно забезпечувати себе та своїх дітей.',
  },
  "pl-PL": {
    title: "Międzynarodowe Centrum Wsparcia Kobiet i Dzieci",
    description:
      "W Miasto Jest Dobre będziemy walczyć o każdą mamę dla dziecka. Bezdomne matki, matki z domów dziecka, matki zdruzgotane przemocą domową i obojętnością znajdą tam schronienie i wsparcie.",
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

const HomePage: NextPage<IHomePageProps> = async ({ params: { lang } }) => {
  const language = await getAllTranslations(lang);
  const t = getTranslation(language);

  return (
    <>
      <HeroSection data={t("hero")} />
      <NeedHelp data={t("needHelp")} />
      <AboutComponent data={t("about")} />
      <Support data={t("support")} />
      <WhyNeed data={t("whyNeed")} />
      <Help data={t("help")} />
      <History data={t("history")} />
      <CoreValuesSection data={t("values")} />
      <VideoSection />
      <FAQSection data={t("faqSection")} />
      <HowToHelp data={t("howToHelp")} />
      <AngelDoll data={t("angelDoll")} />
    </>
  );
};

export default HomePage;
