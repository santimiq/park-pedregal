import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Masonry from "react-masonry-css"
import PortfolioDetails from "./style"
import { StaticImage as Img } from "gatsby-plugin-image"
import portfolioData from "./data"
import ModalImage from "react-modal-image"
import Fade from "react-reveal/Fade"
// import Portfolio from "src/sections/digital/Portfolio/style"
import { ImageViewer } from "react-image-viewer-dv"
import img1 from "~image/departamentos/1.jpeg"
import img2 from "~image/departamentos/2.jpeg"
import img3 from "~image/departamentos/3.jpg"
import img4 from "~image/departamentos/4.jpeg"
import img5 from "~image/departamentos/5.jpeg"
import img6 from "~image/departamentos/6.jpg"

const breakpointColumnsObj = {
  default: 2,
  1200: 2,
  992: 2,
  768: 1,
  576: 1,
}
export default function PortfolioDetailsSection() {
  return (
    <PortfolioDetails background="" id="departamentos">
      <Container>
        <Fade bottom>
          <Row className="align-items-start justify-content-center">
            <Col xs="10" className="col-xl-6 col-lg-6 col-md-10 col-xs-10">
              <PortfolioDetails.Title as="h2">
                Departamentos
              </PortfolioDetails.Title>
            </Col>
          </Row>
        </Fade>
        <div className="image-group">
          <ImageViewer>
            <img src={img1} alt="Your image" className="img-dpto" />
          </ImageViewer>
          <ImageViewer>
            <img src={img2} alt="Your image" className="img-dpto" />
          </ImageViewer>
          <ImageViewer>
            <img src={img3} alt="Your image" className="img-dpto" />
          </ImageViewer>
          <ImageViewer>
            <img src={img4} alt="Your image" className="img-dpto" />
          </ImageViewer>
          <ImageViewer>
            <img src={img5} alt="Your image" className="img-dpto" />
          </ImageViewer>
          <ImageViewer>
            <img src={img6} alt="Your image" className="img-dpto" />
          </ImageViewer>
        </div>
        <Row className="align-items-start justify-content-center">
          <Col xs="10" className="col-lg-6 col-md-10   offset-xl-1">
            <PortfolioDetails.Box mb="30px" mbLG="0">
              <Row className="align-items-center justify-content-center">
                <Fade bottom>
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
                  <div className="col-12 offset-lg-3">
                    <PortfolioDetails.Content>
                      <PortfolioDetails.List as="ul">
                        <li>
                          <span>
                            <i class="fas fa-bed-alt"></i> De 1 a 3 recámaras
                          </span>
                        </li>
                        <li>
                          <span>2 recámaras con family room</span>
                        </li>
                        <li>
                          <span>De 1 a 2 baños</span>
                        </li>
                        <li>
                          <span>Hasta dos lugares de estacionamiento</span>
                        </li>
                        <li>
                          <span>Bodega adicional</span>
                        </li>
                        <li>
                          <span>
                            Oficina privada opcional en Business Center
                          </span>
                        </li>
                      </PortfolioDetails.List>
                    </PortfolioDetails.Content>
                  </div>
                </Fade>
              </Row>
            </PortfolioDetails.Box>
          </Col>
        </Row>
      </Container>
    </PortfolioDetails>
  )
}
