import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import ContactForm from "./Components/ContactForm"
import ContactMap from "./Components/Map"
import Contact from "./style"
import Fade from "react-reveal/Fade"

export default function ContactSction({ ...rest }) {
  return (
    <Contact {...rest} id="contacto">
      <Container>
        <Row className="justify-content-center text-center">
          <Fade bottom>
            <Col xs="10" className="col-xl-12 col-md-10">
              <Contact.Box mb="45" mbMD="3.135rem" mbLG="80px">
                <Contact.Subtitle as="h6" fontColor="#262729">
                  City Blue | Santa Fe
                </Contact.Subtitle>
                <Contact.Title as="h2" pb="20px">
                  Visita nuestro showroom
                </Contact.Title>
              </Contact.Box>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.0157270818254!2d-99.26333768537282!3d19.36847168692083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d200dcb1f71b3b%3A0x7c6d2596378c89b2!2sC.%20Guillermo%20Gonzalez%20Camarena%20200%2C%20Santa%20Fe%2C%20%C3%81lvaro%20Obreg%C3%B3n%2C%2001219%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1sen!2smx!4v1629934668295!5m2!1sen!2smx"
                loading="lazy"
                className="col-12 rounded"
                height="550px"
              ></iframe>
            </Col>
            <Col xs="10" className="col-lg-12 col-xl-12 mb-7 mb-lg-0 col-md-10">
              <ContactForm className="text-start" mt="50px" />
            </Col>
          </Fade>
        </Row>
      </Container>
    </Contact>
  )
}
