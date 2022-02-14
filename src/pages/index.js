import React from "react"
import SimpleReactLightbox from "simple-react-lightbox"
import { PageWrapper } from "~components"
import Banner from "~sections/Hero"
import Proyecto from "~sections/Proyecto"
import Departamentos from "~sections/Departamentos"
import Prototipos from "~sections/PrototiposDepto"
import Galeria from "~sections/Galeria"
import Recorrido from "~sections/Recorrido"
import Amenidades from "~sections/Amenidades"
import Oficinas from "~sections/Oficinas"
import Contacto from "~sections/Contact"
import Footer from "~sections/FooterOne"

const header = {
  headerClasses:
    "site-header site-header--menu-end light-header site-header--sticky",
  containerFluid: false,
}

export default function Marketing() {
  return (
    <PageWrapper headerConfig={header}>
      <Banner />
      <Proyecto />
      <Departamentos />
      <Prototipos />
      <SimpleReactLightbox>
        <Galeria />
      </SimpleReactLightbox>
      <Recorrido />
      <Amenidades />
      <Oficinas />
      <Contacto />
      <Footer />
    </PageWrapper>
  )
}
