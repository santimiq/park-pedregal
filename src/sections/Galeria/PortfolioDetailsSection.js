import React, { useRef } from "react"
import { SRLWrapper } from "simple-react-lightbox"
import { Col, Container, Row } from "react-bootstrap"
import Slider from "react-slick"
import PortfolioDetails from "./style"
import pimageOne from "~image/galeria/galeriaImg1.jpg"
import pimageTwo from "~image/galeria/galeriaImg2.jpg"
import pimageThree from "~image/galeria/galeriaImg3.jpg"
import pimageFour from "~image/galeria/galeriaImg4.jpg"
import pimageFive from "~image/galeria/galeriaImg5.jpg"
import pimageSix from "~image/galeria/galeriaImg6.jpg"
import pimageSeven from "~image/galeria/galeriaImg7.jpeg"
const options = {
  thumbnails: {
    showThumbnails: false,
    thumbnailsAlignment: "center",
    thumbnailsContainerBackgroundColor: "transparent",
    thumbnailsContainerPadding: "0",
    thumbnailsGap: "0 1px",
    thumbnailsIconColor: "#ffffff",
    thumbnailsOpacity: 0.4,
    thumbnailsPosition: "bottom",
    thumbnailsSize: ["100px", "80px"],
  },
  buttons: {
    showAutoplayButton: true,
    showCloseButton: true,
    showDownloadButton: false,
    showFullscreenButton: true,
    showNextButton: false,
    showPrevButton: false,
  },
}
export default function PortfolioDetailsSection() {
  const elSlider = useRef()

  const sliderConfig1 = {
    infinite: true,
    speed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    draggable: true,
    dots: true,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <PortfolioDetails backgroundColor="#f3f4f6">
      <Container>
        <PortfolioDetails.Box>
          <Row className="align-items-center justify-content-center justify-content-lg-start">
            <Col xs="10" className="col-xl-12 col-lg-6 col-md-10">
              <PortfolioDetails.Content>
                <PortfolioDetails.Title as="h2">Galería</PortfolioDetails.Title>
                <PortfolioDetails.Text>
                  City Blue | Santa Fe
                </PortfolioDetails.Text>
              </PortfolioDetails.Content>
            </Col>
          </Row>
        </PortfolioDetails.Box>
        <Row className="justify-content-center justify-content-lg-start">
          <Col xs="10" className="col-xl-12 col-lg-6 col-md-10">
            <PortfolioDetails.SliderWrapper mt="50px" mtLG="80px">
              <Slider
                ref={elSlider}
                className="testimonial-slider"
                {...sliderConfig1}
              >
                <PortfolioDetails.Slide>
                  <SRLWrapper options={options}>
                    <img src={pimageOne} />
                  </SRLWrapper>
                </PortfolioDetails.Slide>
                <PortfolioDetails.Slide>
                  <SRLWrapper options={options}>
                    <img src={pimageTwo} />
                  </SRLWrapper>
                </PortfolioDetails.Slide>
                <PortfolioDetails.Slide>
                  <SRLWrapper options={options}>
                    <img src={pimageThree} />
                  </SRLWrapper>
                </PortfolioDetails.Slide>
                <PortfolioDetails.Slide>
                  <SRLWrapper options={options}>
                    <img src={pimageFour} />
                  </SRLWrapper>
                </PortfolioDetails.Slide>
                <PortfolioDetails.Slide>
                  <SRLWrapper options={options}>
                    <img src={pimageFive} />
                  </SRLWrapper>
                </PortfolioDetails.Slide>
                <PortfolioDetails.Slide>
                  <SRLWrapper options={options}>
                    <img src={pimageSix} />
                  </SRLWrapper>
                </PortfolioDetails.Slide>
                <PortfolioDetails.Slide>
                  <SRLWrapper options={options}>
                    <img src={pimageSeven} />
                  </SRLWrapper>
                </PortfolioDetails.Slide>
              </Slider>
            </PortfolioDetails.SliderWrapper>
          </Col>
        </Row>
      </Container>
    </PortfolioDetails>
  )
}
