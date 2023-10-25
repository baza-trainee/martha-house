import { NextPage } from "next";
import IconsBar from "@/components/IconsBar";

interface FooterProps {
  data: {
    email: string;
    phones: string;
    socialNet: string;
  };
}

export const Footer: NextPage<FooterProps> = ({ data }) => (
  <footer>
    <IconsBar data={data} />
  </footer>
);
