import { NextPage } from "next";
import { Locales } from "@/types";
import NeedHelp from "@/components/NeedHelp/NeedHelp";

interface IProps {
  params: {
    lang: Locales;
  };
}

const HomePage: NextPage<IProps> = () => (
  <div style={{ display: "flex ", flexDirection: "column" }}>
    <div>Hero Section</div>
    <NeedHelp />
    <div>Що таке Місто Добра?</div>
    <div>
      Ми звертаємося до всіх небайдужих – простягніть руку допомоги Україні у
      цей страшний час, простягніть руку допомоги українським дітям!
    </div>
    <div>Чому Місто Добра потрібне?</div>
    <div>і так далі</div>
  </div>
);

export default HomePage;
