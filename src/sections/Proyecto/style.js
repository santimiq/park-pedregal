import styled from "styled-components/macro"
import { Box, Heading, Button, Paragraph } from "~styled"

const Service = styled(Box)`
  #proyecto {
    position: relative;
  }

  .triangulo {
    position: absolute;
    top: 0;
    width: 25%;
  }
  padding-top: 60px;
  padding-bottom: 30px;
  text-align: center;

  .fachada-image {
    border-radius: 20px;
  }

  .btn-recorrido {
    margin: 6px 10px;
    padding: 8px 24px;
    font-size: 14px;
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
  }
  .group-recorrido {
    margin-bottom: 16px;
  }

  @media (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 50px;
  }

  @media (min-width: 992px) {
    padding-top: 70px;
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
