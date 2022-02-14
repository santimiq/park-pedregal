import styled from "styled-components/macro"
import { Link } from "~components"
import { Box, Heading, Button, Paragraph } from "~styled"

const Content = styled(Box)`
  padding-top: 75px;
  padding-bottom: 60px;
  background-color: #f2f2f2;
  .borde-modal {
    border-radius: 10px;
  }
  .margen-arriba {
    margin-top: 100px;
  }
  .prototipos {
    margin-top: 30px;
  }

  @media (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  @media (min-width: 992px) {
    padding-top: 100px;
    padding-bottom: 50px;
  }
  @media (max-width: 578px) {
    padding-top: 1.5rem !important;
    padding-bottom: 30px;
    .prototipos {
      margin-top: 0px;
    }
    .margen-arriba {
      margin-top: 30px;
    }
    .margen-mobile {
      margin-top: 30px;
    }
  }
`
Content.Block = styled(Box)`
  border-top: 1px solid rgba(128, 138, 142, 0.2);
  padding-top: 60px;
  padding-bottom: 60px;

  @media (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  @media (min-width: 992px) {
    padding-top: 132px;
    padding-bottom: 135px;
  }
`

Content.Block = styled(Box)`
  /* padding-top: 80px; */
  @media (min-width: 768px) {
    padding-top: 0;
  }
`
Content.Title = styled(Heading)`
  font-size: 42px;
  font-weight: 500;
  letter-spacing: -2px;
  line-height: 1.20689;
  margin-bottom: 16px;
  color: #002e6d;
  font-family: "Campton-SemiBold";

  @media (min-width: 768px) {
    font-size: 35px;
  }

  @media (min-width: 992px) {
    font-size: 42px;
  }
`

Content.SubTitle = styled(Heading)`
  font-size: 25px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: normal;
  line-height: 1.66666;
  margin-bottom: 12px;
  color: #002e6d;
  font-family: "Campton-SemiBold";
`
Content.SubTitleThree = styled(Heading)`
  color: #a3a5a8;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  font-family: "Campton-SemiBold";
  margin-bottom: 30px;
`
Content.SubTitleFour = styled(Heading)`
  font-weight: 600;
  font-size: 18px;
  line-height: 32px;
  text-align: center;
  color: #262729;
  opacity: 0.7;
  font-family: "Campton-SemiBold";
  margin: 30px 0;
  @media (max-width: 578px) {
    font-size: 14px;
    margin: 15px 0;
  }
`

Content.Text = styled(Paragraph)`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: 1.66666;
  margin-bottom: 12px;
  color: #262729;
`

Content.Image = styled(Box)`
  position: relative;
  margin-bottom: 40px;
  z-index: 0;

  @media (min-width: 1200px) {
    margin-bottom: 0;
    /* margin-right: 55px; */
  }
  .borde-modal {
    border-radius: 10px;
  }
`
Content.ContentShape = styled(Box)`
  width: 38%;
  position: absolute;
  left: -1%;
  top: -7%;
  z-index: -1;
`
Content.Button = styled(Link)`
  padding: 10px 0 !important;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: normal;
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #ff5722;
    height: 2px;
    min-width: 138px;
    max-width: 138px;
  }
`
Content.Content = styled(Box)``

Content.Lista = styled(Box)`
  padding: 0;
  margin: 0;
  li {
    font-size: 18px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 25px;
    position: relative;
    padding-left: 30px;
    margin-bottom: 20px;
    list-style: none;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background-color: #fff;
      border: 2px solid #002e6d;
    }

    span {
      color: #262729;
      margin-right: 15px;
    }
  }

  a {
    font-size: 18px;
    color: #262729 !important;
  }
  @media (max-width: 992px) {
    li {
      font-size: 16px;
    }
    a {
      font-size: 16px;
    }
  }
  @media (max-width: 578px) {
    margin-top: 30px;
  }
`
Content.List = styled(Box)`
  padding: 0;
  margin: 0;
  .circle-number {
    font-size: 14px;
    color: white !important;
    padding: 4px 12px;
    border-radius: 50%;
  }
  .circle-number-two {
    font-size: 14px;
    color: white !important;
    padding: 4px 9px;
    border-radius: 50%;
  }
  .uno {
    background-color: #3874b6;
  }
  .dos {
    background-color: #0094d5;
  }
  .tres {
    background-color: #57509e;
  }
  .cuatro {
    background-color: #db3b80;
  }
  .cinco {
    background-color: #8dbf6e;
  }
  .seis {
    background-color: #35857e;
  }
  .siete {
    background-color: #eeab5a;
  }
  .ocho {
    background-color: #6576b6;
  }
  .nueve {
    background-color: #a25098;
  }
  .diez {
    background-color: #ae2f38;
  }
  .once {
    background-color: #75c8f0;
  }
  .doce {
    background-color: #59b18d;
  }
  .trece {
    background-color: #8f8e99;
  }
  .catorce {
    background-color: #80736a;
  }
  .quince {
    background-color: #f4d367;
  }
  .dieciseis {
    background-color: #da694b;
  }

  li {
    font-size: 18px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 25px;
    position: relative;
    padding-left: 30px;
    margin-bottom: 20px;
    list-style: none;

    span {
      color: #262729;
      margin-right: 15px;
    }
  }
  @media (max-width: 992px) {
    li {
      font-size: 16px;
    }
  }
  @media (max-width: 576px) {
    li {
      font-size: 14px;
    }
  }
`

Content.Box = styled(Box)``

export default Content
