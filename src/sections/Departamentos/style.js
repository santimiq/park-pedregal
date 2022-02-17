import styled from "styled-components/macro"
import { Box, Heading, Button, Paragraph } from "~styled"

const PortfolioDetails = styled(Box)`
  padding-top: 60px;
  padding-bottom: 100px;
  background: rgba(157, 143, 104, 0.3);

  @media (max-width: 768px) {
    padding-top: 80px;
    padding-bottom: 30px;
  }
  @media (max-width: 568px) {
    padding-top: 30px;
    padding-bottom: 30px !important;
  }

  @media (min-width: 992px) {
    padding-top: 120px;
  }

  .row-change-mobile {
    @media (max-width: 768px) {
      flex-direction: column-reverse;
    }
  }

  .image-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
    @media (min-width: 992px) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 24px;
    }
  }

  .img-dpto {
    width: 100%;
    border-radius: 12px;
  }
`
PortfolioDetails.Image = styled(Box)`
  img {
    border-radius: 10px;
  }
`
PortfolioDetails.ImageTwo = styled(Box)`
  img {
    border-radius: 10px;
  }
  @media (min-width: 992px) {
    margin-top: -200px;
  }
`
PortfolioDetails.Content = styled(Box)``

PortfolioDetails.Title = styled(Heading)`
  font-size: 32px;
  font-weight: 800;
  letter-spacing: normal;
  line-height: 54px;
  margin-bottom: 65px;
  color: #004581;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 35px;
    margin-bottom: 35px;
  }

  @media (min-width: 992px) {
    font-size: 42px;
    margin-bottom: 75px;
  }
  @media (max-width: 578px) {
    margin-bottom: 25px;
  }
`

PortfolioDetails.Text = styled(Paragraph)`
  font-size: 25px;
  font-weight: 800;
  letter-spacing: normal;
  line-height: 32px;
  margin: 50px 0 30px 0;
  color: #004581;
  @media (min-width: 992px) {
    margin: 100px 0 50px 0;
  }
`
PortfolioDetails.List = styled(Box)`
  padding: 0;
  margin: 0;
  li {
    font-size: 18px;
    font-weight: 600;
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
  @media (max-width: 992px) {
    li {
      font-size: 16px;
    }
  }
`
PortfolioDetails.Lista = styled(Box)`
  padding: 0;
  margin: 0;
  li {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 25px;
    position: relative;
    /* padding-left: 15px; */
    margin-bottom: 5px;
    list-style: none;
    color: #262729 !important;

    &::before {
      content: "✔";
      color: #002e6d;
      padding-right: 10px;
      /* position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background-color: #fff;
      border: 2px solid red; */
    }

    span {
      color: #262729;
      margin-right: 15px;
    }
  }
  @media (max-width: 992px) {
    li {
      font-size: 14px;
    }
  @media (max-width: 578px) {
    li {
      font-size: 14px;
      display: inline-flex;
    }
  }
`

PortfolioDetails.MasonryWrapper = styled(Box)`
  .masonry-grid {
    display: flex;
    width: auto;
    margin-left: -15px;
    margin-right: -15px;
    a {
      display: block;
    }
    &.no-gutter {
      .masonry-grid_column {
        padding-left: 0px;
        & > div {
          margin-top: 0;
          margin-bottom: 0;
          a {
            display: block;
          }
        }
      }
    }
  }
  .masonry-grid_column {
    padding: 0 15px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .masonry-grid_column > div {
    padding-top: 15px;
    padding-bottom: 15px;
  }
`
PortfolioDetails.MasonrySingle = styled(Box)`
  > div {
    border-radius: 10px;
    overflow: hidden;
    > img {
      width: 100%;
    }
  }
`

PortfolioDetails.Box = styled(Box)``

export default PortfolioDetails
