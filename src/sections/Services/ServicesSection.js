import React from "react"
import ServicesCard from "./Components/Card"
import Service from "./style"
import SectionTitle from "./Components/SectionTitle"
import { Col, Container, Row } from "react-bootstrap"
import { StaticImage as Img } from "gatsby-plugin-image"
import { ImageViewer } from "react-image-viewer-dv"
import img1 from "~image/acabados/1.jpeg"
import img2 from "~image/acabados/2.jpeg"
import img3 from "~image/acabados/3.jpeg"
import img4 from "~image/acabados/4.jpg"
import img5 from "~image/acabados/5.jpg"
import img6 from "~image/acabados/6.jpeg"
import Fade from "react-reveal/Fade"
export default function ServicesSection() {
  return (
    <Service id="acabados">
      <Img
        className="dots"
        src="../../assets/image/desarrollo/Dot.svg"
        alt="content"
        layout="fullWidth"
        placeholder="blurred"
      />
      <Container className="container">
        <Fade bottom>
          <Row className="row justify-content-center">
            <Col className="col-xl-8 text-center">
              <SectionTitle
                title="Acabados y Equipamento"
                titleProps={{ mb: "40px", mbLG: "75px" }}
                subTitleProps={{ mb: "20px" }}
              />
            </Col>
          </Row>
        </Fade>
        <Row className="row justify-content-center">
          <div className="card-grid-parent">
            <Fade left>
              {/* Single Services */}
              <Col xs="12" className="card-grid">
                <ServicesCard
                  title="Altura de 2.75m²"
                  // icon="fas fa-building"
                  iconColor="#9D8F68"
                />
              </Col>
              {/*/ .Single Services */}
              {/* Single Services */}
              <Col xs="12" className="card-grid">
                <ServicesCard
                  title="Cubierta de granito en cocina"
                  // icon="fas fa-building"
                  iconColor="#9D8F68"
                />
              </Col>
              {/*/ .Single Services */}
              {/* Single Services */}
              <Col xs="12" className="card-grid">
                <ServicesCard
                  title="Torre de hornos (gas y microondas)*"
                  // icon="fas fa-building"
                  iconColor="#9D8F68"
                />
              </Col>
              {/*/ .Single Services */}
              {/* Single Services */}
              <Col xs="12" className="card-grid">
                <ServicesCard
                  title="Iluminación led en interior de closets"
                  // icon="fas fa-building"
                  iconColor="#9D8F68"
                />
              </Col>
              {/*/ .Single Services */}
              {/* Single Services */}
              <Col xs="12" className="card-grid">
                <ServicesCard
                  title="Equipo de sonido en sala comedor"
                  // icon="fas fa-building"
                  iconColor="#9D8F68"
                />
              </Col>
              {/*/ .Single Services */}
            </Fade>
            <Fade right>
              {/* Single Services */}
              <Col xs="12" className="card-grid">
                <ServicesCard
                  title="Piso de madera de Ingeniería Tzalam en recámaras"
                  // icon="fas fa-building"
                  iconColor="#9D8F68"
                />
              </Col>
              {/*/ .Single Services */}
              {/* Single Services */}
              <Col xs="12" className="card-grid">
                <ServicesCard
                  title="Tapiz en sala y recámaras*"
                  // icon="fas fa-building"
                  iconColor="#9D8F68"
                />
              </Col>
              {/*/ .Single Services */}
              {/* Single Services */}
              <Col xs="12" className="card-grid">
                <ServicesCard
                  title="Cubierta de mármol en lavabos"
                  // icon="fas fa-building"
                  iconColor="#9D8F68"
                />
              </Col>
              {/*/ .Single Services */}
              {/* Single Services */}
              <Col xs="12" className="card-grid">
                <ServicesCard
                  title="Canceles de cristal templado en regaderas"
                  // icon="fas fa-building"
                  iconColor="#9D8F68"
                />
              </Col>
              {/*/ .Single Services */}
              {/* Single Services */}
              <Col xs="12" className="card-grid">
                <ServicesCard
                  title="Chapa de seguridad electrónica en puerta principal"
                  // icon="fas fa-building"
                  iconColor="#9D8F68"
                />
              </Col>
              {/*/ .Single Services */}
            </Fade>
          </div>
        </Row>
        <Fade right>
          <div>
            <p className="segun">* Según prototipo</p>
          </div>
        </Fade>
        <div className="image-group">
          <ImageViewer>
            <img src={img1} alt="Acabado Foto" className="img-dpto" />
          </ImageViewer>
          <ImageViewer>
            <img src={img2} alt="Acabado Foto" className="img-dpto" />
          </ImageViewer>
          <ImageViewer>
            <img src={img3} alt="Acabado Foto" className="img-dpto" />
          </ImageViewer>
          <ImageViewer>
            <img src={img4} alt="Acabado Foto" className="img-dpto" />
          </ImageViewer>
          <ImageViewer>
            <img src={img5} alt="Acabado Foto" className="img-dpto" />
          </ImageViewer>
          <ImageViewer>
            <img src={img6} alt="Acabado Foto" className="img-dpto" />
          </ImageViewer>
        </div>
      </Container>
    </Service>
  )
}
