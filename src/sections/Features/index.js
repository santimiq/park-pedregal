import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { Images } from "~data";
import TabContentWidget from "./Component/TabContentWidget";
import TabContentWidgetwo from "./Component/TabContentWidgetcopy";
import TabNavWidget from "./Component/TabNavWidget";
import Feature from "./style";
const FeatureSection = ({ ...rest }) => {
  return (
    <Feature className="feature-bg">
      
      <Container>
         {/* <Row>
          <Col xs="auto" className="col-xl-8 col-lg-10">
            <Feature.Box mb="35px" mbMD="80px" mbLG="148px">
              <Feature.Title className="mb-5" as="h2" fontColor="#fff">
                Amenidades
              </Feature.Title>
               <Feature.Text className="mt-8" fontColor="#fff">
                Create custom landing pages with Fastland that converts
                <br className="d-none d-xs-block" /> more visitors than any
                website. Easy &amp; Fast.
              </Feature.Text>
            </Feature.Box>
          </Col>
        </Row>  */}
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="first"
        >
          <Feature.Tab className="row-group-mobile">
            <Col className="col-xxl-3 col-lg-3 col-md-12 col-xs-10 col-12 ">
              <Feature.TabNavWrapper className="nav row ms-0 me-0" as={Nav}>
                <Nav.Link
                  eventKey="first"
                  className="nav-item col-lg-12 col-md-4 col-xs-6 col-8 me-md-0 me-lg-0"
                >
                  <TabNavWidget iconClass="fas fa-building" text="PISO 15" className="nav-widget" mb="30px" mbLG="50px"/>
                </Nav.Link>
                <Nav.Link
                  eventKey="second"
                  className="col-lg-12 col-md-4 col-xs-6 col-8 me-md-0 me-lg-0"
                >
                   <TabNavWidget iconClass="fas fa-building" text="ROOF GARDEN" className="nav-widget" mb="30px" mbLG="50px"/>
                </Nav.Link>
              </Feature.TabNavWrapper>
            </Col>
            <Col xs="auto" className="col-xxl-9 col-lg-9 col-md-12 col-sm-12">
            <Tab.Content className="tab-content tab-content--feature">
              <Tab.Pane eventKey="first">
                <Row className="align-items-center">
                  <Col
                    className="col-md-6 col-sm-6 col-xs-9"
                    xs="auto"
                  >
                    <TabContentWidget />
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Row>
                  <Col
                    className="col-md-6 col-sm-6 col-xs-9"
                    xs="auto"
                  >
                    <TabContentWidgetwo />
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Row>
                  <Col
                    className="col-md-6 col-sm-6 col-xs-9"
                    xs="auto"
                  >
                    <TabContentWidgetwo count="05." title="Real data access" text={'Create custom landing pages with<br class="d-none d-lg-block" /> Fastland that converts more visitors <br class="d-none d-lg-block" /> than any website.'}/>
                  </Col>
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Col>
          </Feature.Tab>
        </Tab.Container>
      </Container>
    </Feature>
  )
}

export default FeatureSection
