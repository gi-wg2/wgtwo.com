import React from "react"
import Layout from "@theme/Layout"
import common from "../css/common.module.css"

import Hero from "../components/hero/hero"
import Brands from "../components/brands/brands"
import RBE from "../components/rbe/rbe"
import Logs from "../components/logs/logs"
import Enterprise from "../components/enterprise/enterprise"
import Quote from "../components/quote/quote"
import Integrations from "../components/integrations/integrations"
import CaseStudies from "../components/casestudy/casestudy"
import CTA from "../components/cta/cta"

function Index() {
  return (
    <Layout title="Working Group Two">
      <div className={common.page}>
        <Hero />
        <Brands />
        <RBE />
        <Logs />
        <Enterprise />
        <Quote />
        <Integrations />
        <CaseStudies />
        <CTA />
      </div>
    </Layout>
  )
}

export default Index
