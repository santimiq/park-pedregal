import React from "react"
import SectionTitle from "./Components/SectionTitle"
import { StaticImage as Img } from "gatsby-plugin-image"
import { Col, Container, Row } from "react-bootstrap"
import Service from "./style"
import Fade from "react-reveal/Fade"

export default function ServicesSectionTwo() {
  return (
    <Service backgroundColor="rgba(230, 248, 249, 0.4)" id="proyecto">
      <Container>
        <Row className="align-items-center justify-content-center row-on-mobile">
          <Col
            xs="10"
            className="col-xl-4 col-lg-4 col-md-10 col-xs-10 order-2 order-lg-1"
          >
            <Fade bottom>
              <Service.Box>
                {/* Section Title */}
                <SectionTitle
                  title="Nuestro Proyecto"
                  subTitle="City Blue | Santa Fe"
                  text="Un proyecto pensado para que vivas diferente, porque combina departamentos cómodos y modernos con espacios agradables, divertidos y totalmente equipadas para disfrutar de la vida solo, con la familia o con los amigos, además de contar con áreas privadas para trabajar.<br><br> Con total seguridad e inigualable ubicación, City Blue se encuentra en la zona mas moderna de la Ciudad de México, en el centro de Ciudad Santa Fe, en su única área peatonal. Está rodeado de restaurantes, cafés, centros comerciales, súpers, bancos, cines, colegios, universidades. Los mejores servicios e infraestructura para cubrir tus necesidades cotidianas."
                  titleProps={{ mb: "20px" }}
                  subTitleProps={{
                    mb: "10px",
                    fontColor: "#A3A5A8",
                  }}
                />
                {/*/ .Section Title */}
              </Service.Box>
            </Fade>
          </Col>
          <Col
            xs="12"
            className="col-xl-8 col-lg-8 col-md-6 col-xs-10 order-1 order-lg-2"
          >
            <Service.Box>
              <Row>
                <Col xs="4" className="col-lg-4 pt-lg-7 mb-5 mb-lg-0">
                  <Fade bottom>
                    <Service.Image>
                      <Img
                        className="w-100"
                        src="../../assets/image/nuestro-proyecto/img1.png"
                        alt="content"
                        layout="fullWidth"
                        placeholder="blurred"
                      />
                    </Service.Image>
                  </Fade>
                </Col>
                <Col xs="4" className="col-lg-4 mb-5 mb-lg-0">
                  <Fade bottom>
                    <Service.Image>
                      <Img
                        className="w-100"
                        src="../../assets/image/nuestro-proyecto/img3.png"
                        alt="content"
                        layout="fullWidth"
                        placeholder="blurred"
                      />
                    </Service.Image>
                  </Fade>
                </Col>
                <Col xs="4" className="col-lg-4 pt-lg-7 mb-5 mb-lg-0">
                  <Fade bottom>
                    <Service.Image>
                      <Img
                        className="w-100"
                        src="../../assets/image/nuestro-proyecto/img2.png"
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
