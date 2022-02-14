import React from "react"
import { StaticImage as Img } from "gatsby-plugin-image"
import Content from "./style"
import { Link, SuperTag } from "~components"
import { Col, Container, Row } from "react-bootstrap"
import ModalImage from "react-modal-image"
import alberca from "~image/amenidades/alberca.jpg"
import billar from "~image/amenidades/billar.jpg"
import billarSm from "~image/amenidades/billar-small.jpg"
import gym from "~image/amenidades/gym.jpg"
import gymSm from "~image/amenidades/gym-small.jpg"
import jardin from "~image/amenidades/jardin.jpg"
import jardinSm from "~image/amenidades/jardin-small.jpg"
import juegos from "~image/amenidades/juegos.jpg"
import juegosSm from "~image/amenidades/juegos-small.jpg"
import sala from "~image/amenidades/sala.jpg"
import salaSm from "~image/amenidades/sala-small.jpg"
import sheraton from "~image/amenidades/sheraton.jpg"
import sheratonSm from "~image/amenidades/sheraton-small.jpg"
import yoga from "~image/amenidades/yoga.jpg"
import yogaSm from "~image/amenidades/yoga-small.jpg"
import mapaG from "~image/mapa1.jpeg"
import mapaGB from "~image/mapa2.jpeg"
import Fade from "react-reveal/Fade"

export default function ContentSectionTwo() {
  return (
    <Content backgrounColor="#fff" id="amenidades">
      <Content.ContentShape>
        <Img
          src="../../../assets/image/project-management/l2-content-2-shape.png"
          alt="content"
          layout="constrained"
          placeholder="blurred"
        />
      </Content.ContentShape>
      <Container>
        <Content.Block>
          <Row className="align-items-center justify-content-center justify-content-lg-start">
            <Col xs="10" className="col-xl-4 col-lg-6 col-md-10 col-xs-10">
              <Content.Box>
                <Content.Title as="h2">
                  {" "}
                  <SuperTag value="Amenidades" />{" "}
                </Content.Title>
                <Content.SubTitle as="h5">
                  {" "}
                  <SuperTag value="Elige cómo vivir" />{" "}
                </Content.SubTitle>

                <Content.Text>
                  {" "}
                  <SuperTag value="Disfruta, descansa, relájate, juega y entrena en espacios pensados y equipados especialmenete para cada actividad. Reunirte con la familia y los amigos será una experiencia de otro nivel.<br className='d-none d-xs-block' /><br className='d-none d-xs-block' />¡Vive en donde puedas desarrollar tus gustos y talentos!<br className='d-none d-xs-block' /><br className='d-none d-xs-block' />Además, City Blue te ofrece la comodidad del servicio de Chief Concierge, lo que facilitará tu día a día." />{" "}
                </Content.Text>
              </Content.Box>
            </Col>
            <Col xs="12" className="col-xl-8 col-lg-8 col-md-12 col-xs-12">
              <ModalImage
                small={alberca}
                large={alberca}
                alt="Alberca"
                className="borde-modal"
              />
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center justify-content-lg-start mt-3">
            <Col className="col-xl-4 col-lg-4 col-md-4 col-xs-4">
              <ModalImage
                small={juegosSm}
                large={juegos}
                alt="Juegos"
                className="borde-modal"
              />
            </Col>
            <Col className="col-xl-4 col-lg-4 col-md-4 col-xs-4">
              <ModalImage
                className="borde-modal"
                small={gymSm}
                large={gym}
                alt="Gym"
              />
            </Col>
            <Col className="col-xl-4 col-lg-4 col-md-4 col-xs-4">
              <ModalImage
                small={yogaSm}
                large={yoga}
                alt="Yoga"
                className="borde-modal"
              />
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center justify-content-lg-start mt-3">
            <Col className="col-xl-6 col-lg-6 col-md-6 col-xs-6">
              <ModalImage
                small={salaSm}
                large={sala}
                alt="Sala"
                className="borde-modal"
              />
            </Col>
            <Col className="col-xl-6 col-lg-6 col-md-6 col-xs-6">
              <ModalImage
                className="borde-modal"
                small={billarSm}
                large={billar}
                alt="Sala"
              />
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center justify-content-lg-start mt-3">
            <Col xs="7" className="col-xl-8 col-lg-8 col-md-8 col-xs-8">
              <ModalImage
                small={sheratonSm}
                large={sheraton}
                alt="Sala"
                className="borde-modal"
              />
            </Col>
            <Col xs="5" className="col-xl-4 col-lg-4 col-md-4 col-xs-4">
              <ModalImage
                className="borde-modal"
                small={jardinSm}
                large={jardin}
                alt="Área de mascotas"
              />
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center justify-content-lg-start margen-arriba">
            <Col
              xs="12"
              className="col-xl-6 col-lg-6 col-md-12 col-xs-12 apagar-lg"
            >
              <ModalImage
                small={mapaG}
                large={mapaG}
                alt="Alberca"
                className="borde-modal"
              />
            </Col>
            <Col
              xs="12"
              className="col-xl-6 col-lg-6 col-md-12 col-xs-12 apagar-sm"
            >
              <ModalImage
                small={mapaGB}
                large={mapaGB}
                alt="Alberca"
                className="borde-modal"
              />
            </Col>
            <div
              xs="6"
              className="col-6 col-md-6 col-lg-3 margen-mobile apagar-sm"
            >
              <Fade right>
                <Content.Box>
                  <Content.List as="ul">
                    <li>
                      <span className="uno circle-number">1</span>
                      <span>Jacuzzis</span>
                    </li>
                    <li>
                      <span className="dos circle-number">2</span>
                      <span>Carriles de nado</span>
                    </li>
                    <li>
                      <span className="tres circle-number">3</span>
                      <span>Alberca infantil</span>
                    </li>
                    <li>
                      <span className="cuatro circle-number">4</span>
                      <span>Terraza</span>
                    </li>
                    <li>
                      <span className="cinco circle-number">5</span>
                      <span>Gym</span>
                    </li>
                    <li>
                      <span className="seis circle-number">6</span>
                      <span>Cine</span>
                    </li>
                    <li>
                      <span className="siete circle-number">7</span>
                      <span>Yoga</span>
                    </li>
                    <li>
                      <span className="ocho circle-number">8</span>
                      <span>Spinning</span>
                    </li>
                  </Content.List>
                </Content.Box>
              </Fade>
            </div>
            <div
              xs="6"
              className="col-6 col-md-6 col-lg-3 margen-mobile apagar-sm"
            >
              <Fade right>
                <Content.Box>
                  <Content.List as="ul">
                    <li>
                      <span className="nueve circle-number">9</span>
                      <span>Recepción</span>
                    </li>
                    <li>
                      <span className="diez circle-number-two">10</span>
                      <span>Lobby</span>
                    </li>
                    <li>
                      <span className="once circle-number-two">11</span>
                      <span>Cafetería</span>
                    </li>
                    <li>
                      <span className="doce circle-number-two">12</span>
                      <span>Salón de fiestas</span>
                    </li>
                    <li>
                      <span className="trece circle-number-two">13</span>
                      <span>Lounge</span>
                    </li>
                    <li>
                      <span className="catorce circle-number-two">14</span>
                      <span>Salón Inglés</span>
                    </li>
                    <li>
                      <span className="quince circle-number-two">15</span>
                      <span>Kids Club</span>
                    </li>
                    <li>
                      <span className="dieciseis circle-number-two">16</span>
                      <span>Área de mascotas</span>
                    </li>
                  </Content.List>
                </Content.Box>
              </Fade>
            </div>
          </Row>
        </Content.Block>
      </Container>
    </Content>
  )
}
