import styled from "styled-components/macro"
import { Box, Heading, Button, Paragraph } from "~styled"

const Promo = styled(Box)`
  padding-top: 35px;
  padding-bottom: 60px;
  background-color: #f2f2f2;

  @media (min-width: 768px) {
    padding-top: 55px;
    padding-bottom: 80px;
  }

  @media (min-width: 992px) {
    padding-top: 100px;
    padding-bottom: 130px;
  }
`
Promo.Title = styled(Heading)`
  font-size: 32px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.3;
  font-family: "Campton-SemiBold";
  @media (min-width: 768px) {
    font-size: 38px;
  }

  @media (min-width: 992px) {
    font-size: 48px;
  }
`
Promo.Text = styled(Paragraph)`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.77777;
`
Promo.ContentBox = styled(Box)`
  position: relative;
  z-index: 1;
  padding-top: 50px;
  padding-bottom: 60px;
  padding-left: 30px;
  padding-right: 30px;
  background-position: center;
  background-size: cover;
  border-radius: 25px;

  @media (min-width: 768px) {
    padding-top: 70px;
    padding-bottom: 80px;
    padding-left: 110px;
    padding-right: 100px;
  }

  @media (min-width: 992px) {
    padding-top: 110px;
    padding-bottom: 100px;
  }

  /* &::before {
    content: "";
    background: linear-gradient(
      261.26deg,
      rgba(253, 52, 110, 0.96) 14.9%,
      #b81c5c 43.58%,
      #0abfbc 89.94%
    );
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 25px;
    z-index: -1;
  } */
`
Promo.Button = styled(Button)`
  font-size: 15px;
  background-color: #002e6d;
  border-color: #002e6d;
  min-width: 180px;
  height: 56px;
  border-radius: 500px;
  color: #fff;
  box-shadow: 0 20px 20px rgb(255 255 255 / 30%);
  transition: 0.4s;
  text-transform: capitalize;
  &:hover {
    box-shadow: 0 20px 20px rgb(255 255 255 / 0%);
    background-color: #fff;
    color: #002e6d;
    border-color: #fff;
  }
  &:focus {
    box-shadow: none !important;
  }
`
Promo.Box = styled(Box)``
export default Promo
