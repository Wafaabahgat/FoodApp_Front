import React from "react";
import { Helmet } from "react-helmet";

const MetaDate = ({ ttl, disc }) => {
  return (
    <Helmet>
      <title>{ttl}</title>
      <meta name="description" content={disc} />
    </Helmet>
  );
};

export default MetaDate;
