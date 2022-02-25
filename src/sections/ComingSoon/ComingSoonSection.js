import React from "react"
import { Col, Container, Row } from "react-bootstrap"
// import { Form } from "~components"
import { Images } from "~data"
import CountDown from "./Components/CountDownWIdget"
import Countdown from "./style"

const ComingSoonSection = () => {
  return (
    <Countdown backgroundColor="#004581">
      <Container className="position-static">
        <Row className="align-items-center justify-content-center position-static">
          <Col xs="12" className="col-xl-6 col-lg-4 position-static">
            <Countdown.Image backgroundImage={Images.bannerImagen.bannerImg} />
          </Col>
          <Col
            xs="12"
            className="col-xl-6 col-lg-8 col-md-10 text-center text-lg-start"
          >
            <Countdown.Box>
              <Countdown.Title as="h2">
                Tu mail se ha enviado correctamente, nos pondremos en contacto
                contigo lo antes posible.
              </Countdown.Title>
            </Countdown.Box>
          </Col>
        </Row>
      </Container>
    </Countdown>
  )
}

export default ComingSoonSection
