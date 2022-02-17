import styled from "styled-components/macro"
import { Box, Heading, Button, Paragraph } from "~styled"

const Service = styled(Box)`
  padding-top: 100px;
  padding-bottom: 30px;
  text-align: center;
  #proyecto {
    position: relative;
  }
  .triangulo {
    position: absolute;
    top: 0;
    width: 100%;
  }
  .fachada-image {
    border-radius: 20px;
  }

  .trabaja {
    margin-bottom: 30px;

    @media (min-width: 768px) {
      margin-bottom: 50px;
    }
  }

  h5 {
    font-weight: 500;
    margin: 30px 0;
  }
  h5:first-child {
    margin-top: 70px;
  }

  .btn-recorrido {
    margin: 6px 10px;
    padding: 16px 32px;
    font-size: 18px;
    color: #004581 !important;
    box-shadow: 0 20px 20px rgb(0 0 0 / 0%);
    background-color: #fff;
    border-color: #fff;
    transition: 0.4s;
    border-radius: 500px;
    transition: 0.3s;

    &:hover {
      box-shadow: 0 20px 20px rgb(0 46 109 / 30%);
      color: #fff !important;
      background-color: rgba(0, 69, 129, 0.9);
      border-color: rgba(0, 69, 129, 0.9);
    }
  }
  .group-recorrido {
    margin-bottom: 16px;
  }

  @media (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 50px;
  }

  @media (min-width: 992px) {
    padding-top: 120px;
    padding-bottom: 120px;
    .group-recorrido {
      display: flex;
      justify-content: center;
      margin-bottom: 24px;
    }
    .btn-recorrido {
      margin: 12px 20px;
    }
  }

  .row-on-mobile {
    @media (max-width: 768px) {
      flex-direction: column-reverse;
    }
  }
`

Service.Image = styled(Box)``
Service.List = styled(Box)`
  li {
    padding-left: 30px;
    margin-bottom: 25px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 28px;
    position: relative;
    color: #262729;
    list-style: none;
    &::before {
      content: "\f00c";
      font-family: "Font Awesome 5 Free";
      position: absolute;
      left: 0;
      top: 0;
      font-weight: 700;
      color: #5034fc;
    }
  }
`
Service.Box = styled(Box)``

export default Service
