import { FC } from "react";

interface IProps {
  data: {
    email: string;
    phones: string;
    socialNet: string;
  };
}

// eslint-disable-next-line no-unused-vars
export const Footer: FC<IProps> = ({ data: { email, phones, socialNet } }) => (
  <footer>
    {/* eslint-disable-next-line react/self-closing-comp */}
    <div></div>
  </footer>
);
