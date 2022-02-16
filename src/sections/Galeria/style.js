import styled from "styled-components/macro"
import { Box, Heading, Button, Paragraph } from "~styled"

const PortfolioDetails = styled(Box)`
  .rectangulo {
    position: absolute;
    top: 0;
    width: 100%;
  }

  padding: 45px 0;
  position: relative;

  @media (min-width: 768px) {
    padding: 40px 0;
  }

  @media (min-width: 992px) {
    padding: 150px 0 30px 0;
  }
  @media (max-width: 578px) {
    padding: 45px 0 30px 0;
  }
`
PortfolioDetails.Image = styled(Box)`
  img {
    border-radius: 10px;
  }
`
PortfolioDetails.Content = styled(Box)``

PortfolioDetails.Title = styled(Heading)`
  font-size: 32px;
  font-weight: 800;
  letter-spacing: normal;
  line-height: 54px;
  margin-bottom: 25px;
  color: #fff;

  @media (min-width: 768px) {
    font-size: 35px;
  }

  @media (min-width: 992px) {
    font-size: 42px;
  }
`

PortfolioDetails.Text = styled(Paragraph)`
  font-size: 16px;
  font-weight: 800;
  letter-spacing: normal;
  line-height: 32px;
  margin-bottom: 20px;
  margin-right: 10px;
  color: #a3a5a8;
`

PortfolioDetails.Box = styled(Box)``
PortfolioDetails.SliderWrapper = styled(Box)`
  .slick-list {
    margin: 0 -12px;
    @media (min-width: 992px) {
      width: 150%;
    }
  }
  .slick-slide {
    padding: 0 12px;
    &:focus {
      outline: none !important;
      box-shadow: none;
    }
  }
  .single-slide {
    border-radius: 10px;
    overflow: hidden;
    img {
      width: 100%;
    }
    &:focus {
      outline: none !important;
      box-shadow: none;
    }
    &:focus-visible {
      outline: none !important;
      box-shadow: none;
    }
  }

  .slick-dots {
    background: rgba(0, 0, 0, 0.07);
    border-radius: 10px;
    position: relative;
    height: 6px;
    margin-top: 40px;
    li {
      position: absolute;

      width: 100%;
      height: 100%;
      margin: 0;
      list-style: none;
      overflow: hidden;
      border-radius: 500px;
      button {
        position: absolute;
        padding: 0;
        width: 0;
        height: 100%;
        margin: 0;
        border: none;
        background: transparent;
        font-size: 0;
        transition: width 6s linear;
        border-radius: 500px;
        /* transition-delay: .5s; */
        /* top:0;
            left:0; */
      }

      &.slick-active {
        display: block;
        width: 100%;
        top: 0;
        left: 0;
        button {
          background: #fff;
          width: 100%;
        }
      }
    }
  }
`
PortfolioDetails.Slide = styled(Box).attrs({ className: "single-slide" })``

export default PortfolioDetails
