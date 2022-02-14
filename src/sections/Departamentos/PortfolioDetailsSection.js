import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Masonry from "react-masonry-css"
import PortfolioDetails from "./style"
import { StaticImage as Img } from "gatsby-plugin-image"
import portfolioData from "./data"
import ModalImage from "react-modal-image"
import Fade from "react-reveal/Fade"
// import Portfolio from "src/sections/digital/Portfolio/style"

const breakpointColumnsObj = {
  default: 2,
  1200: 2,
  992: 2,
  768: 1,
  576: 1,
}
export default function PortfolioDetailsSection() {
  return (
    <PortfolioDetails background="#e5e5e5" id="departamentos">
      <Container>
        <Fade bottom>
          <Row className="align-items-start justify-content-center justify-content-lg-start">
            <Col xs="10" className="col-xl-6 col-lg-6 col-md-10 col-xs-10">
              <PortfolioDetails.Title as="h2">
                Departamentos
              </PortfolioDetails.Title>
            </Col>
          </Row>
        </Fade>
        <Fade bottom>
          <Row className="align-items-start justify-content-center">
            <Col xs="10" className="col-xl-5 col-lg-6 col-md-10 col-xs-10">
              <PortfolioDetails.Image mb="30px" mbLG="0">
                <Img
                  src="../../assets/image/departamentos/depto1.jpg"
                  alt="portfolio"
                  layout="fullWidth"
                  placeholder="blurred"
                />
              </PortfolioDetails.Image>
            </Col>
            <Col xs="10" className="col-lg-6 col-md-10   offset-xl-1">
              <PortfolioDetails.Box mb="30px" mbLG="0">
                <Row className="align-items-center">
                  <Col
                    xs="10"
                    className="col-xl-12 col-lg-12 col-md-10 col-xs-10"
                  >
                    <PortfolioDetails.Content mb="30px" mbLG="0">
                      <PortfolioDetails.Text>
                        Características de los departamentos
                      </PortfolioDetails.Text>
                    </PortfolioDetails.Content>
                  </Col>
                  <div className="col-6 col-lg-6">
                    <PortfolioDetails.Content>
                      <PortfolioDetails.List as="ul">
                        <li>
                          <span>44.90 a 119.40 m2</span>
                        </li>
                        <li>
                          <span>1, 2 y 3 recámaras</span>
                        </li>
                        <li>
                          <span>1 o 2 baños</span>
                        </li>
                        <li>
                          <span>Sala - Comedor</span>
                        </li>
                      </PortfolioDetails.List>
                    </PortfolioDetails.Content>
                  </div>
                  <div className="col-6 col-lg-6">
                    <PortfolioDetails.Content>
                      <PortfolioDetails.List as="ul">
                        <li>
                          <span>1 o 2 estacionamientos </span>
                        </li>
                        <li>
                          <span>Área de lavado</span>
                        </li>
                        <li>
                          <span>Bodega</span>
                        </li>
                        <li>
                          <span>Cocina equipada</span>
                        </li>
                        <li>
                          <span>Roof Garden Privado</span>
                        </li>
                      </PortfolioDetails.List>
                    </PortfolioDetails.Content>
                  </div>
                </Row>
              </PortfolioDetails.Box>
            </Col>
          </Row>
        </Fade>
        <Fade bottom>
          <Row className="align-items-center row-change-mobile">
            <Col xs="11" className="col-lg-6 col-md-10">
              <PortfolioDetails.Box mb="30px" mbLG="0">
                <Row className="align-items-center ">
                  <Col className="col-12">
                    <PortfolioDetails.Content mb="30px" mbLG="0">
                      <PortfolioDetails.Text>
                        Acabados y equipamientos
                      </PortfolioDetails.Text>
                    </PortfolioDetails.Content>
                  </Col>
                  <div className="col-12 col-md-12">
                    <PortfolioDetails.Content>
                      <PortfolioDetails.Lista as="ul">
                        <li>
                          <span>Altura de 2.75m.</span>
                        </li>
                        <li>
                          <span>Cocina integral con cubierta de cuarzo.</span>
                        </li>
                        <li>
                          <span>Sistema de iluminación led.</span>
                        </li>
                        <li>
                          <span>
                            Piso de madera de ingeniería con chapa de nogal en
                            recámaras.
                          </span>
                        </li>
                        <li>
                          <span>
                            Piso de porcelanato en sala, comedor, baños y
                            cocina.
                          </span>
                        </li>
                        <li>
                          <span>
                            Tapiz en sala, comedor y en recamára principal,
                            según prototipo.
                          </span>
                        </li>
                        <li>
                          <span>Baños con gabinete y cubierta de cuarzo.</span>
                        </li>
                        <li>
                          <span>
                            Canceles de cristal templado en regaderas.
                          </span>
                        </li>
                        <li>
                          <span>
                            Puerta principal contra incendios y chapa de
                            seguridad de tarjeta.
                          </span>
                        </li>
                      </PortfolioDetails.Lista>
                    </PortfolioDetails.Content>
                  </div>
                </Row>
              </PortfolioDetails.Box>
            </Col>
            <Col xs="10" className="col-xl-5 col-lg-6 col-md-10 ">
              <PortfolioDetails.ImageTwo mb="30px" mbLG="0">
                <Img
                  src="../../assets/image/departamentos/depto2.jpg"
                  alt="portfolio"
                  layout="fullWidth"
                  placeholder="blurred"
                />
              </PortfolioDetails.ImageTwo>
            </Col>
          </Row>
        </Fade>
      </Container>
    </PortfolioDetails>
  )
}
