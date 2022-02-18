import React from "react"
import SectionTitle from "./Components/SectionTitle"
import { StaticImage as Img } from "gatsby-plugin-image"
import { Col, Container, Row } from "react-bootstrap"
import Service from "./style"
import Fade from "react-reveal/Fade"

export default function ServicesSectionTwo() {
  return (
    <Service backgroundColor=" rgba(157, 143, 104, 0.3);" id="desarrollo">
      <Img
        className="triangulo"
        src="../../assets/image/desarrollo/triangulo.svg"
        alt="content"
        layout="fullWidth"
        placeholder="blurred"
      />
      <Container>
        <Row className="align-items-center justify-content-center row-on-mobile">
          <Col
            xs="10"
            className="col-xl-6 col-lg-6 col-md-10 col-xs-10 order-2 order-lg-1"
          >
            <Fade bottom>
              <Service.Box>
                {/* Section Title */}
                <SectionTitle
                  title="Desarrollo"
                  text="274 departamentos en 16 niveles, con 3000m² de amenidades exclusivas en un desarrollo de usos mixtos: habitacional, oficinas y comercial, en Jardines del Pedregal."
                  // titleProps={{ mb: "20px" }}
                  // subTitleProps={{
                  //   mb: "10px",
                  //   fontColor: "#A3A5A8",
                  // }}
                />
                {/*/ .Section Title */}
                <div className="group-recorrido">
                  <a
                    href="https://bit.ly/2S3JxM9"
                    target="_blank"
                    className="btn-recorrido"
                  >
                    Recorrido Virtual Depto 1
                  </a>
                  <a
                    href="https://bit.ly/315TgWq"
                    target="_blank"
                    className="btn-recorrido"
                  >
                    Recorrido Virtual Depto 2
                  </a>
                </div>
              </Service.Box>
            </Fade>
          </Col>
          <Col
            xs="12"
            className="col-xl-10 col-lg-10 col-md-10 col-xs-10 order-1 order-lg-2"
          >
            <Service.Box>
              <Row className="justify-content-center">
                <Col xs="10" className="col-lg-8 pt-lg-8 mb-6 mb-lg-0 ">
                  <Fade bottom>
                    <Service.Image>
                      <Img
                        className="w-100 fachada-image"
                        src="../../assets/image/desarrollo/fachada-2.jpg"
                        alt="content"
                        layout="fullWidth"
                        placeholder="blurred"
                      />
                    </Service.Image>
                  </Fade>
                </Col>
              </Row>
            </Service.Box>
          </Col>
        </Row>
      </Container>
    </Service>
  )
}
