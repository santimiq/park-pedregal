import React from "react"
import { StaticImage as Img } from "gatsby-plugin-image"
import Content from "./style"
import { Link, SuperTag } from "~components"
import { Col, Container, Row } from "react-bootstrap"
import ModalImage from "react-modal-image"
import banner from "~image/oficina/banner.jpeg"
import cubiculo19 from "~image/oficina/cubiculo-19.jpg"
import cubiculo32 from "~image/oficina/cubiculo-32.jpg"
import cubiculo70 from "~image/oficina/cubiculo-70.jpg"
import cubiculo23 from "~image/oficina/cubiculo-23.jpg"
import Logo from "~image/logo/cb-logo-blue.png"
import Fade from "react-reveal/Fade"

export default function ContentSectionTwo() {
  return (
    <Content backgrounColor="#fff" id="oficinas">
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
            <Col xs="10" className="col-xl-5 col-lg-6 col-md-10 col-xs-10">
              <Fade left>
                <img src={Logo} />
                <Content.Box>
                  <Content.Title as="h2">
                    {" "}
                    <SuperTag value="Oficinas Privadas" />{" "}
                  </Content.Title>

                  <Content.Text>
                    {" "}
                    <SuperTag value="Trabaja en espacios prácticos y de pequeños metrajes, en los que se une la privacidad del concepto tradicional de oficina con la comodidad y vesatilidad de los servicios que ofrece un business center, con centro de copiado, salas de juntas y cafetería." />{" "}
                  </Content.Text>
                </Content.Box>
                <Content.Lista as="ul">
                  <Content.SubTitle>
                    Información sobre oficinas:
                  </Content.SubTitle>
                  <li>
                    <a href="tel:5562133210" className="">
                      55 6213 3210
                    </a>
                  </li>
                </Content.Lista>
              </Fade>
            </Col>

            <Col
              xs="10"
              className="col-6 col-lg-5 offset-lg-2 offset-xl-2 col-xl-4 col-xs-10 margen-mobile"
            >
              <Fade right>
                <div>
                  <Content.SubTitle>Características</Content.SubTitle>
                  <Content.Content>
                    <Content.Lista as="ul">
                      <li>
                        <span>Oficinas de 8.35 a 19.80 m2</span>
                      </li>
                      <li>
                        <span>Altura de 2.70 mts</span>
                      </li>
                      <li>
                        <span>Iluminación led</span>
                      </li>
                      <li>
                        <span>Cancelería de aluminio</span>
                      </li>
                      <li>
                        <span>Piso de alfombra</span>
                      </li>
                    </Content.Lista>
                  </Content.Content>
                </div>
              </Fade>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center justify-content-lg-start mt-3">
            <Col className="col-xl-12 col-lg-12 col-md-10 col-xs-10">
              <ModalImage
                small={banner}
                large={banner}
                className="borde-modal"
              />
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center justify-content-sm-start justify-content-lg-start mt-6 ">
            <Col xs="10" className="col-xl-5 col-lg-6 col-md-10 col-xs-10">
              <Content.Box>
                <Content.Title as="h2">
                  {" "}
                  <SuperTag className="prototipos" value="Prototipos" />{" "}
                </Content.Title>
                <Content.SubTitleThree as="">
                  Oficinas City Blue Santa Fe
                </Content.SubTitleThree>
              </Content.Box>
            </Col>
          </Row>

          <Row className="align-items-center justify-content-center justify-content-lg mt-3">
            <Col xs="5" className="col-xl-5 col-lg-6 col-md-5 col-xs-5">
              <ModalImage
                small={cubiculo19}
                large={cubiculo19}
                className="borde-modal"
              />
              <Content.SubTitleFour as="">
                Oficina 19 <br />
                25.35 m2
              </Content.SubTitleFour>
            </Col>
            <Col xs="5" className="col-xl-5 col-lg-6 col-md-5 col-xs-5">
              <ModalImage
                className="borde-modal"
                small={cubiculo32}
                large={cubiculo32}
              />
              <Content.SubTitleFour as="">
                Oficina 32 <br />
                11.10 m2
              </Content.SubTitleFour>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center justify-content-lg mt-3">
            <Col xs="5" className="col-xl-5 col-lg-5 col-md-5 col-xs-5">
              <ModalImage
                small={cubiculo23}
                large={cubiculo23}
                className="borde-modal"
              />
              <Content.SubTitleFour as="">
                Oficina 23 <br />
                23.05 m2
              </Content.SubTitleFour>
            </Col>
            <Col xs="5" className="col-xl-5 col-lg-5 col-md-5 col-xs-5">
              <ModalImage
                className="borde-modal"
                small={cubiculo70}
                large={cubiculo70}
              />
              <Content.SubTitleFour as="">
                Oficina 70 <br /> 11.15 m2
              </Content.SubTitleFour>
            </Col>
          </Row>
        </Content.Block>
      </Container>
    </Content>
  )
}
