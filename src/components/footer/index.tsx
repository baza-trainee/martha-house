import { FC } from "react";

interface IProps {
  data: {
    email: string;
    phones: string;
    socialNet: string;
  };
}

export const Footer: FC<IProps> = ({ data: { email, phones, socialNet } }) => (
  <footer>
    <div>{email}</div>
    <div>{phones}</div>
    <div>{socialNet}</div>
  </footer>
);
