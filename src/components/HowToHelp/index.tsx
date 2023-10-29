import { NextPage } from "next";
// import Accordion from "@/components/HowToHelp/Accordion";
import { IHowToHelpProps } from "@/components/HowToHelp/Types/IHowToHelp.types";
import Container from "../Container";
import styles from "./HowToHelp.module.css";

export const HowToHelp: NextPage<IHowToHelpProps> = ({ data }) => (
  <section className={styles.howToHelp}>
    <Container>
      <div>
        <div>
          <h2 className={styles.title}>{data.title}</h2>
          <p className={styles.paragraph}>{data.paragraph}</p>
        </div>
        {/* <Accordion data={data} /> */}
      </div>
    </Container>
  </section>
);
