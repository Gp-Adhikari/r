import React from "react";
import Head from "next/head";

const SEO = ({ title, desc }) => {
  return (
    <Head>
      <title>{title || "R"} - R</title>
      <meta name="description" content={desc} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
