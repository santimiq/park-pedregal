import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "~components"
import Promo from "./style"
import { Images } from "~data"
import Zoom from "react-reveal/Zoom"
export default function PromoSection() {
  return (
    <Promo>
      <Zoom>
        <Container>
          <Row className="justify-content-center">
            <Col xs="10" className="col-xl-12 col-md-10">
              <Promo.ContentBox
                className="text-center"
                style={{
                  backgroundImage: `url(${Images.recorridoImagen.recorridoImg})`,
                }}
              >
                <Promo.Box>
                  <Promo.Title as="h2" fontColor="#fff" mb="25px">
                    Haz un recorrido virtual por <br />
                    todo el departamento
                  </Promo.Title>
                  <Promo.Text fontColor="#fff" mb="30px">
                    No te pierdas ningún detalle en este recorrido 3D.
                  </Promo.Text>
                  <Promo.Button
                    as={Link}
                    to="https://bit.ly/3inRGbH"
                    target="_blank"
                  >
                    Iniciar
                  </Promo.Button>
                </Promo.Box>
              </Promo.ContentBox>
            </Col>
          </Row>
        </Container>
      </Zoom>
    </Promo>
  )
}
