import React from "react"
import Contact from "./style"
import SectionTitle from "./Components/SectionTitle"
import { Col, Container, Row } from "react-bootstrap"
import Fade from "react-reveal/Fade"
export default function ContactOne() {
  return (
    <Contact
      backgroundColor="#9D8F68
    "
      id="contacto"
    >
      <Container>
        <Row>
          <Col className="col-xl-7 col-lg-7">
            <Fade left>
              <Contact.Box>
                <SectionTitle title="Contacto" />
              </Contact.Box>
              <Contact.From>
                <form name="Contacto" netlify>
                  <Row>
                    <Col xs="12" className="col-lg-6 mb-4">
                      <div className="form-floating">
                        <input
                          className="form-control"
                          placeholder="Leave a comment here"
                          id="floatinginput"
                          name="Nombre"
                          type="text"
                        />
                        <label htmlFor="floatinginput">Nombre</label>
                      </div>
                    </Col>
                    <Col xs="12" className="col-lg-6 mb-4">
                      <div className="form-floating">
                        <input
                          className="form-control"
                          placeholder="Leave a comment here"
                          id="floatinginput2"
                          name="Telefono"
                          type="tel"
                        />
                        <label htmlFor="floatinginput2">Teléfono</label>
                      </div>
                    </Col>
                    <Col xs="12" className="col-lg-6 mb-4">
                      <div className="form-floating">
                        <input
                          className="form-control"
                          placeholder="Leave a comment here"
                          id="floatinginput"
                          name="Email"
                          type="email"
                        />
                        <label htmlFor="floatinginput">Email</label>
                      </div>
                    </Col>
                    <Col xs="12" className="col-lg-6 mb-4">
                      <div className="form-floating">
                        <input
                          className="form-control"
                          placeholder="Leave a comment here"
                          id="floatinginput2"
                          name="Precio"
                          type="number"
                        />
                        <label htmlFor="floatinginput2">
                          ¿Precio de la propiedad?
                        </label>
                      </div>
                    </Col>
                    <Col xs="12" className="col-lg-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a comment here"
                          id="floatingTextarea3"
                          name="Mensaje"
                          type="text"
                        />
                        <label htmlFor="floatingTextarea3">
                          Escribe tu mensaje{" "}
                        </label>
                      </div>
                    </Col>
                    <Col xs="12" className="col-lg-12">
                      <Row className="align-items-center mt-3">
                        {/* <div className="col-md-8 col-lg-7 col-md-6 col-xl-8 pt-3">
                          <div className="form-check d-flex align-items-center">
                            <input
                              className="form-check-input bg-white float-none mt-0"
                              type="checkbox"
                              defaultValue
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              Your email address will not be published. Required
                              fields are marked *
                            </label>
                          </div>
                        </div> */}
                        <Col
                          xs="12"
                          className="col-md-4 col-lg-5 col-xl-4 text-md-end pt-3"
                        >
                          <Contact.Button>Enviar</Contact.Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </form>
              </Contact.From>
            </Fade>
          </Col>
          <Col xs="12" className="col-xl-5 col-lg-5">
            <Fade right>
              <Contact.WidgetsBox className="contact-widget-box">
                <Contact.WidgetsBoxTitle as="h2">
                  Visítanos
                </Contact.WidgetsBoxTitle>
                <Contact.WidgetsBoxText as="p">
                  SHOWROOM <br className="d-none d-xl-block" /> Cerrada Oaxaca
                  15, San Jerónimo <br className="d-none d-xl-block" /> Aculco,
                  Álvaro Obregón 10400, CDMX.
                </Contact.WidgetsBoxText>
                <Row>
                  <Col xs="12" className="col-lg-12 col-sm-6">
                    <Contact.Widgets>
                      <Contact.WidgetsIcon>
                        <i className="fas fa-phone-alt" />
                      </Contact.WidgetsIcon>
                      <Contact.WidgetsBoxBody>
                        <Contact.WidgetsTitle as="h3">
                          Informes
                        </Contact.WidgetsTitle>
                        <Contact.WidgetsText as="p">
                          Informes departamentos:
                          <br className="d-block" /> (55) 5604-0565{" "}
                          <br className="d-block" />
                          Informes oficinas:
                          <br className="d-block" /> (55) 3400-7186
                        </Contact.WidgetsText>
                      </Contact.WidgetsBoxBody>
                    </Contact.Widgets>
                  </Col>
                  <Col xs="12" className="col-lg-12 col-sm-6 active">
                    <Contact.Widgets>
                      <Contact.WidgetsIcon className="">
                        <i className="fas fa-envelope" />
                      </Contact.WidgetsIcon>
                      <Contact.WidgetsBoxBody>
                        <Contact.WidgetsTitle as="h3">
                          Email
                        </Contact.WidgetsTitle>
                        <Contact.WidgetsText as="p">
                          info@parkpedregal.com
                        </Contact.WidgetsText>
                      </Contact.WidgetsBoxBody>
                    </Contact.Widgets>
                  </Col>
                  <Col xs="12" className="col-lg-12 col-sm-6">
                    <Contact.Widgets>
                      <Contact.WidgetsIcon>
                        <i className="fab fa-whatsapp" />
                      </Contact.WidgetsIcon>
                      <Contact.WidgetsBoxBody>
                        <Contact.WidgetsTitle as="h3">
                          Whatsapp
                        </Contact.WidgetsTitle>
                        <Contact.WidgetsText as="p">
                          55 1705-0740
                        </Contact.WidgetsText>
                      </Contact.WidgetsBoxBody>
                    </Contact.Widgets>
                  </Col>
                </Row>
              </Contact.WidgetsBox>
            </Fade>
          </Col>
        </Row>
      </Container>
    </Contact>
  )
}
