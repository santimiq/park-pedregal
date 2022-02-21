import React from "react"
import { Container, Col, Row } from "react-bootstrap"
import Feature from "./style"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import Fade from "react-reveal/Fade"

import hoja1 from "~image/depto-proto/A4-2.jpg"
import hoja2 from "~image/depto-proto/A4-3.jpg"
import hoja3 from "~image/depto-proto/A5.jpg"
import hoja4 from "~image/depto-proto/B2.jpg"

import ModalImage from "react-modal-image"
import "react-tabs/style/react-tabs.css"
export default function FeatureSection() {
  return (
    <Feature background="#e5e5e5">
      <div className="apagar-sm">
        <Fade bottom>
          <Row className="align-items-center justify-content-center">
            <Col xs="10" className="col-xl-10 col-lg-6 col-md-10">
              <Feature.Box>
                <Feature.TitleThree as="">Prototipos</Feature.TitleThree>
              </Feature.Box>
            </Col>
          </Row>
        </Fade>
        <Row className="justify-content-center">
          <Col className="col-xl-10 col-xs-10 col-sm-10">
            <Tabs>
              <TabList>
                <Tab>
                  <span className="titulo">A4</span> <br />{" "}
                  <span className="descripcion">2 Recámaras </span>
                </Tab>
                <Tab>
                  <span className="titulo">A4</span> <br />{" "}
                  <span className="descripcion">3 Recámaras</span>
                </Tab>
                <Tab>
                  <span className="titulo">A5</span> <br />{" "}
                  <span className="descripcion">2 Recámaras</span>
                </Tab>
                <Tab>
                  <span className="titulo">B2</span> <br />{" "}
                  <span className="descripcion">3 Recámaras</span>
                </Tab>
              </TabList>
              <TabPanel>
                <ModalImage
                  small={hoja1}
                  large={hoja1}
                  className="borde-modal"
                />
              </TabPanel>
              <TabPanel>
                <ModalImage
                  small={hoja2}
                  large={hoja2}
                  className="borde-modal"
                />
              </TabPanel>
              <TabPanel>
                <ModalImage
                  small={hoja3}
                  large={hoja3}
                  className="borde-modal"
                />
              </TabPanel>
              <TabPanel>
                <ModalImage
                  small={hoja4}
                  large={hoja4}
                  className="borde-modal"
                />
              </TabPanel>
            </Tabs>
          </Col>
        </Row>
      </div>
      <div className="apagar-lg">
        <Fade bottom>
          <Row className="align-items-center justify-content-center">
            <Col xs="10" className="col-xl-10 col-lg-6 col-md-10 col-xs-10">
              <Feature.Box>
                <Feature.TitleThree as="">Prototipos</Feature.TitleThree>
              </Feature.Box>
            </Col>
          </Row>
        </Fade>
        <Row className="justify-content-center">
          <Col xs="10" className="col-xl-10 col-xs-10 col-md-10">
            <Tabs className="text-center">
              <TabList>
                <Tab>
                  <span className="titulo">A4 2rec</span>{" "}
                </Tab>
                <Tab>
                  <span className="titulo">A4 3rec</span>{" "}
                </Tab>
                <Tab>
                  <span className="titulo">A5</span>{" "}
                </Tab>
                <Tab>
                  <span className="titulo">B2 </span>{" "}
                </Tab>
              </TabList>

              <TabPanel>
                <ModalImage
                  small={hoja1}
                  large={hoja1}
                  className="borde-modal"
                />
              </TabPanel>
              <TabPanel>
                <ModalImage
                  small={hoja2}
                  large={hoja2}
                  className="borde-modal"
                />
              </TabPanel>
              <TabPanel>
                <ModalImage
                  small={hoja3}
                  large={hoja3}
                  className="borde-modal"
                />
              </TabPanel>
              <TabPanel>
                <ModalImage
                  small={hoja4}
                  large={hoja4}
                  className="borde-modal"
                />
              </TabPanel>
            </Tabs>
          </Col>
        </Row>
      </div>
    </Feature>
  )
}
