import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Video from "~components/VideoModal"
import { Images } from "~data"
import Hero from "./style"
import Slide from "react-reveal/Slide"
import BackgroundSlider from "react-background-slider"
import banner1 from "~image/banner/banner.jpg"
import banner2 from "~image/banner/banner2.jpg"

export default function HeroSection() {
  return (
    <Hero>
      <BackgroundSlider
        images={[banner1, banner2]}
        duration={5}
        transition={2}
      />
      <Container>
        <Row className="align-items-center justify-content-start">
          <Col className="col-xl-9">
            <Slide bottom>
              <Hero.Content className="text-left">
                <Hero.Title as="h1" fontColor="#fff">
                  TU NUEVO
                  <br /> DEPARTAMENTO
                </Hero.Title>
                <Hero.Text fontColor="#fff">
                  Jardines del Pedregal desde $4 millones.
                </Hero.Text>
                <Hero.Button
                  className="btn-primary btn-1 text-white"
                  as={Video}
                  id="UDdMbKIROvI"
                >
                  Ver Video
                </Hero.Button>
              </Hero.Content>
            </Slide>
          </Col>
        </Row>
      </Container>
    </Hero>
  )
}
