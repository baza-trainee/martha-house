import React, { FC } from "react";

interface IconsBarProps {
  data: {
    email: string;
    phones: string;
    socialNet: string;
  };
}

const IconsBar: FC<IconsBarProps> = ({
  data: { email, phones, socialNet },
}) => (
  <>
    <div>{email}</div>
    <div>{phones}</div>
    <div>{socialNet}</div>
  </>
);

export default IconsBar;
