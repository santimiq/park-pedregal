import { Link } from "~components"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Images } from "~data"
import Footer from "./style"
export default function FooterOne() {
  return (
    <Footer>
      <Container>
        <Footer.Box pbXL="95px">
          <Row className="justify-content-center">
            <Col xs="10" className="col-lg-4 col-md-10 col-xs-10">
              <Footer.Widgets className="footer-widgets footer-widgets--l7">
                {/* Brand Logo*/}
                <Footer.Box mb="30px">
                  <Link to="#">
                    <img src={Images.FooterOne.LogoWhite} alt="logo" />
                  </Link>
                </Footer.Box>
              </Footer.Widgets>
            </Col>
            <Col xs="10" className="col-md-4 col-xs-6 col-xs-6">
              <Footer.Widgets>
                <Footer.Title>Contacto</Footer.Title>
                <Footer.Address className="widgets-address">
                  <Footer.AddressItem>
                    <i className="fa fa-map-marker-alt" />
                    <span>Dirección:</span>
                    <span>
                      Calle Guillermo González Camarena 200, Santa Fé, <br />{" "}
                      Álvaro Obregón, 01210, CDMX
                    </span>
                  </Footer.AddressItem>
                  <Footer.AddressItem>
                    <i className="fab fa-whatsapp" />
                    <span>
                      Whatsapp: <br className="d-block" />
                    </span>
                    <a href="tel:5562133210" className="ms-3">
                      55 6213 3210
                    </a>
                  </Footer.AddressItem>
                </Footer.Address>
              </Footer.Widgets>
            </Col>
            <Col xs="10" className="col-xl-2 offset-xl-1 offset-xs-1 col-xs-5">
              <Row>
                <Col xs="6" className="col-md-4 col-xs-6">
                  <Footer.Widgets>
                    <Footer.Title>Menu</Footer.Title>
                    <Footer.List>
                      <Footer.ListItems>
                        <a href="#proyecto">Proyecto</a>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <a href="#departamentos">Departamentos</a>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <a href="#amenidades">Amenidades</a>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <a href="#oficinas">Oficinas</a>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <a href="#contacto">Contacto</a>
                      </Footer.ListItems>
                    </Footer.List>
                  </Footer.Widgets>
                </Col>
              </Row>
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
                © 2021 City Blue Santa Fe | Todos los derechos reservados |{" "}
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
