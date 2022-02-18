import { Link } from "~components"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Images } from "~data"
import Footer from "./style"
export default function FooterOne() {
  return (
    <Footer>
      <Container>
        <Footer.Box pbXL="" className="footer-box">
          <Row className="justify-content-center">
            <Col xs="10" className="col-lg-10 col-md-10 col-xs-10">
              <Footer.Widgets className="footer-widgets footer-widgets--l7">
                {/* Brand Logo*/}
                <Footer.Box mb="" className="text-center">
                  <Link to="/">
                    <img src={Images.FooterOne.LogoWhite} alt="logo" />
                  </Link>
                </Footer.Box>
              </Footer.Widgets>
            </Col>
          </Row>
        </Footer.Box>
        <Row className="justify-content-center">
          <Col xs="10" className="col-lg-12 col-xl-12 col-md-10 col-xs-10">
            <Footer.Text mb="36px">
              Los proyectos, diseños, superficies, decorados, plantas tipo,
              imágenes y todo lo que se muestra, podrían sufrir modificaciones
              sin previo aviso.
              <br />
              Las fotos en este blog corresponden a imágenes de otros proyectos
              desarrollados por el mismo grupo. No contribuye un compromiso,
              obligación u oferta comercial alguna*
            </Footer.Text>
            <Footer.Copyright>
              <Footer.CopyrightText>
                © 2022 Park Pedregal | Todos los derechos reservados |{" "}
                <Link to="aviso" class="aviso">
                  Aviso de privacidad
                </Link>
              </Footer.CopyrightText>
            </Footer.Copyright>
          </Col>
        </Row>
      </Container>
    </Footer>
  )
}
