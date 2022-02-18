import React, { useRef } from "react"
import { SRLWrapper } from "simple-react-lightbox"
import { Col, Container, Row } from "react-bootstrap"
import { StaticImage as Img } from "gatsby-plugin-image"
import Slider from "react-slick"
import PortfolioDetails from "./style"
import img1 from "~image/amenidades-park/piso1.jpg"
import img2 from "~image/amenidades-park/piso2.jpg"
import img3 from "~image/amenidades-park/piso3.jpg"
import img4 from "~image/amenidades-park/piso4.jpg"
import img5 from "~image/amenidades-park/piso5.jpg"
import img6 from "~image/amenidades-park/piso6.jpg"
import img7 from "~image/amenidades-park/piso7.jpg"
import img8 from "~image/amenidades-park/piso8.jpg"
import img9 from "~image/amenidades-park/piso9.jpg"
import img10 from "~image/amenidades-park/piso10.jpg"
import img11 from "~image/amenidades-park/piso11.jpg"
import img12 from "~image/amenidades-park/piso12.jpg"
import img13 from "~image/amenidades-park/piso13.jpg"
import img14 from "~image/amenidades-park/roof1.jpg"
import img15 from "~image/amenidades-park/roof2.jpg"
import img16 from "~image/amenidades-park/roof3.jpg"
import img17 from "~image/amenidades-park/roof4.jpg"

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
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 2,
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
    <PortfolioDetails backgroundColor="#9D8F68" id="amenidades">
      <Img
        className="rectangulo"
        src="../../assets/image/desarrollo/rectangulo.svg"
        alt="content"
        layout="fullWidth"
        placeholder="blurred"
      />
      <Container>
        <PortfolioDetails.Box>
          <Row className="align-items-center justify-content-center justify-content-lg-start">
            <Col xs="10" className="col-xl-12 col-lg-6 col-md-10">
              <PortfolioDetails.Content>
                <PortfolioDetails.Title as="h2">
                  Amenidades
                </PortfolioDetails.Title>
              </PortfolioDetails.Content>
            </Col>
          </Row>
        </PortfolioDetails.Box>
        <Row className="justify-content-center justify-content-lg-start">
          <Col xs="10" className="col-xl-12 col-lg-6 col-md-10">
            <PortfolioDetails.SliderWrapper mt="30px" mtLG="30px">
              <Slider
                ref={elSlider}
                className="testimonial-slider"
                {...sliderConfig1}
              >
                <PortfolioDetails.Slide>
                  <SRLWrapper options={options}>
                    <img src={img1} />
                  </SRLWrapper>
                </PortfolioDetails.Slide>
                <PortfolioDetails.Slide>
                  <SRLWrapper options={options}>
                    <img src={img2} />
                  </SRLWrapper>
                </PortfolioDetails.Slide>
                <PortfolioDetails.Slide>
                  <SRLWrapper options={options}>
                    <img src={img3} />
                  </SRLWrapper>
                </PortfolioDetails.Slide>
                <PortfolioDetails.Slide>
                  <SRLWrapper options={options}>
                    <img src={img4} />
                  </SRLWrapper>
                </PortfolioDetails.Slide>
                <PortfolioDetails.Slide>
                  <SRLWrapper options={options}>
                    <img src={img5} />
                  </SRLWrapper>
                </PortfolioDetails.Slide>
                <PortfolioDetails.Slide>
                  <SRLWrapper options={options}>
                    <img src={img6} />
                  </SRLWrapper>
                </PortfolioDetails.Slide>
                <PortfolioDetails.Slide>
                  <SRLWrapper options={options}>
                    <img src={img7} />
                  </SRLWrapper>
                </PortfolioDetails.Slide>
                <PortfolioDetails.Slide>
                  <SRLWrapper options={options}>
                    <img src={img8} />
                  </SRLWrapper>
                </PortfolioDetails.Slide>
                <PortfolioDetails.Slide>
                  <SRLWrapper options={options}>
                    <img src={img9} />
                  </SRLWrapper>
                </PortfolioDetails.Slide>
                <PortfolioDetails.Slide>
                  <SRLWrapper options={options}>
                    <img src={img10} />
                  </SRLWrapper>
                </PortfolioDetails.Slide>
                <PortfolioDetails.Slide>
                  <SRLWrapper options={options}>
                    <img src={img11} />
                  </SRLWrapper>
                </PortfolioDetails.Slide>
                <PortfolioDetails.Slide>
                  <SRLWrapper options={options}>
                    <img src={img12} />
                  </SRLWrapper>
                </PortfolioDetails.Slide>
                <PortfolioDetails.Slide>
                  <SRLWrapper options={options}>
                    <img src={img13} />
                  </SRLWrapper>
                </PortfolioDetails.Slide>
                <PortfolioDetails.Slide>
                  <SRLWrapper options={options}>
                    <img src={img14} />
                  </SRLWrapper>
                </PortfolioDetails.Slide>
                <PortfolioDetails.Slide>
                  <SRLWrapper options={options}>
                    <img src={img15} />
                  </SRLWrapper>
                </PortfolioDetails.Slide>
                <PortfolioDetails.Slide>
                  <SRLWrapper options={options}>
                    <img src={img16} />
                  </SRLWrapper>
                </PortfolioDetails.Slide>
                <PortfolioDetails.Slide>
                  <SRLWrapper options={options}>
                    <img src={img17} />
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
