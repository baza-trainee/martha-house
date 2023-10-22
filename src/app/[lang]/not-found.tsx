import { NextPage } from "next";
import { ErrorElement } from "../../components/errorElement";

const NotFound: NextPage = () => (
  <ErrorElement statusCode={404} title="This page could not be found." />
);

export default NotFound;
