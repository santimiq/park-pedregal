import React from "react"
import Mail from "~sections/ComingSoon"
import { PageWrapper } from "~components"
import Footer from "~sections/FooterOne"

const header = {
  headerClasses:
    "site-header site-header--menu-end light-header site-header--sticky",
  containerFluid: false,
}

export default function terminos() {
  return (
    <PageWrapper headerConfig={header}>
      <Mail />
    </PageWrapper>
  )
}
