import { NextPageContext } from "next";
import LayoutDefault from '../layouts/LayoutDefault/LayoutDefault';

const Error = ({ statusCode }) => {
  return (
    <LayoutDefault>
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : "An error occurred on client"}
      </p>
    </LayoutDefault>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;