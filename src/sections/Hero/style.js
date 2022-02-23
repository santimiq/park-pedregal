import styled from "styled-components/macro"
import { Box, Heading, Button, Paragraph } from "~styled"

const Hero = styled(Box)`
  padding-top: 125px;
  padding-bottom: 60px;
  background-size: cover;
  background-position: right top;
  position: relative;
  z-index: 998;

  .ultimo-parra {
    margin-top: 28px;
    font-size: 18px;
  }
  @media (min-width: 768px) {
    padding-top: 145px;
    padding-bottom: 80px;
  }

  @media (min-width: 992px) {
    padding-top: 350px;
    padding-bottom: 80px;
    .modal-video {
      position: fixed;
      top: -70% !important;
    }
  }
  /* 
  background-image: url(BG.jpg);
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-image: url(BG.jpg);
    opacity: 0.3;
    position: absolute;
    z-index: -1;
  } */

}
`

Hero.Content = styled(Box)``
Hero.Text = styled(Paragraph)`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: 1.619;
  margin-bottom: 28px;
  opacity: 1;
  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 992px) {
    font-size: 21px;
  }
`
Hero.Title = styled(Heading)`
  font-size: 35px;
  font-weight: 800;
  letter-spacing: normal;
  line-height: 1.2;
  margin-bottom: 10px;
  /* font-family: "Nunito Sans"; */

  @media (min-width: 480px) {
    font-size: 40px;
  }

  @media (min-width: 768px) {
    font-size: 50px;
  }

  @media (min-width: 992px) {
    font-size: 60px;
  }
`
Hero.Button = styled(Button)`
  min-width: 180px;
  height: 56px;
  font-size: 15px;
  color: #fff !important;
  box-shadow: 0 20px 20px rgb(0 0 0 / 0%);
  background-color: #004581;
  border-color: #004581;
  transition: 0.4s;
  border-radius: 500px;

  &:hover {
    box-shadow: 0 20px 20px rgb(0 46 109 / 30%);
    color: #fff !important;
    background-color: rgba(0, 69, 129, 0.9);
    border-color: rgba(0, 69, 129, 0.9);
  }
`

export default Hero
