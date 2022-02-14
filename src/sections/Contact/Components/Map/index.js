import React from "react"
import { StaticImage as Img } from "gatsby-plugin-image"
import MapArea from "./style"
export default function ContactMap() {
  return (
    <MapArea>
      <Img
        src="../../../../assets/image/mapa/mapa.jpg"
        alt="map-image"
        layout="fullWidth"
        placeholder="blurred"
      />
    </MapArea>
  )
}
