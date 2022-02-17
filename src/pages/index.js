import React from "react"
import SimpleReactLightbox from "simple-react-lightbox"
import { PageWrapper } from "~components"

import Contacto from "~sections/Contact"
import Footer from "~sections/FooterOne"

// NUEVO SITIO BLOQUES QUE SE ESTAN USANDO EN ORDEN

import Banner from "~sections/Hero"
import Proyecto from "~sections/Proyecto"
import Galeria from "~sections/Galeria"
import Amenidad from "~sections/Features"
import Departamentos from "~sections/Departamentos"
import Acabados from "~sections/Services"
import Prototipos from "~sections/PrototiposDepto"
import Oficinas from "~sections/OficinasP"
import Ubicacion from "~sections/Ubicacion"

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
      <SimpleReactLightbox>
        <Galeria />
      </SimpleReactLightbox>
      <Amenidad />
      <Departamentos />
      <Acabados />
      <Prototipos />
      <Oficinas />
      <Ubicacion />

      <Contacto />
      <Footer />
    </PageWrapper>
  )
}
