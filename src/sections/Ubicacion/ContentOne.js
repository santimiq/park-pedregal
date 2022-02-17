import React from "react"
import { StaticImage as Img } from "gatsby-plugin-image"
import Content from "./style"
import { SuperTag } from "~components"
import { Col, Container, Row } from "react-bootstrap"
import Fade from "react-reveal/Fade"

export default function ContentSectionOne() {
  return (
    <Content>
      <Img
        className="invertido"
        src="../../assets/image/desarrollo/invertido.svg"
        alt="content"
        layout="fullWidth"
        placeholder="blurred"
      />
      <Content.SectionShape></Content.SectionShape>
      <Container>
        <Content.Inner>
          <Row className="align-items-center justify-content-center justify-content-lg-start">
            <Col className="col-xl-5 col-lg-6 col-md-8 col-xs-10 order-2 order-lg-1">
              <Fade left>
                <Content.TextBlock>
                  <Content.Title as="h2">
                    {" "}
                    <SuperTag value="Ubicación" />{" "}
                  </Content.Title>

                  <Content.Text>
                    {" "}
                    <SuperTag value="PARK PEDREGAL<br className='d-none d-xs-block' />Blvd. Adolfo Ruíz Cortines 3580,<br className='d-none d-xs-block' /> San Jerónimo Aculco, 01900, CDMX." />{" "}
                  </Content.Text>
                </Content.TextBlock>
              </Fade>
            </Col>
            <Col
              xs="12"
              className="col-xl-7 col-lg-6 col-md-8 col-xs-10 order-1 order-lg-2"
            >
              <Fade right>
                <Content.Image>
                  <Img
                    className="w-100"
                    src="../../assets/image/mapa-park.jpg"
                    alt="content"
                    layout="fullWidth"
                    placeholder="blurred"
                  />
                </Content.Image>
              </Fade>
            </Col>
          </Row>
        </Content.Inner>
      </Container>
    </Content>
  )
}
