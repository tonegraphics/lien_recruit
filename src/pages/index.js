import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Headline from "../components/headline";
import ContentsList from "../components/contentsList";

const IndexPage = () => (
  <Layout url={""}>
    <SEO title="トップ" />
    <Headline title="CONTENTS" />
    <ContentsList />
  </Layout>
)

export default IndexPage
