import styled from "styled-components/macro"
import { Box, Heading, Button, Paragraph } from "~styled"

const Service = styled(Box)`
  background: #004581 !important;
  padding-top: 55px;
  padding-bottom: 36px;
  position: relative;

  .card-grid-parent {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
    @media (min-width: 992px) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
  }

  .segun {
    color: #fff;
    margin-top: 20px;
  }

  .image-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
    margin-top: 50px;
    @media (min-width: 992px) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 24px;
      margin-top: 100px;
    }
  }

  .img-dpto {
    width: 100%;
    border-radius: 12px;
  }
  @media (min-width: 768px) {
    padding-top: 75px;
    padding-bottom: 55px;
  }

  @media (min-width: 992px) {
    padding-top: 100px;
    padding-bottom: 110px;
  }

  .dots {
    position: absolute;
    top: 10%;
    width: 15%;
    left: -10%;
    z-index: 90;

    @media (max-width: 578px) {
      top: 0;
      width: 20%;
      left: -5%;
    }
  }
`

Service.Box = styled(Box)``

export default Service
