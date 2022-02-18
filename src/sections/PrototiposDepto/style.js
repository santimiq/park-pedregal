import styled from "styled-components/macro"
import { Box, Heading, Button, Paragraph } from "~styled"

const Feature = styled(Box)`
  padding-top: 35px;
  padding-bottom: 50px;

  @media (max-width: 578px) {
    padding-top: 0px;
  }
  @media (min-width: 768px) {
    padding-top: 55px;
    padding-bottom: 60px;
  }

  @media (min-width: 992px) {
    padding-top: 0px;
    padding-bottom: 127px;
    .apagar-lg {
      display: none;
    }
    .react-tabs {
      display: flex;
      border: none !important;
      justify-content: space-between;
    }
    .react-tabs__tab-list {
      display: flex;
      flex-direction: column;
      align-self: center;
      border: none !important;
      background: #fff;
      border-radius: 20px;
    }
    .react-tabs__tab {
      height: 100px;
      list-style: none;
      padding: 20px 20px;
      cursor: pointer;
      color: #bbb;
      border-radius: 0px;
      border-bottom: 1px solid #9d8f68;
      @media (min-width: 992px) {
        width: 200px;
      }
    }
    .react-tabs__tab:first-child {
      border-radius: 20px 20px 0 0;
      border-top: 0;
    }
    .react-tabs__tab:last-child {
      border-radius: 0 0 20px 20px;
      border-bottom: 0;
    }
    .react-tabs__tab--selected {
      .titulo {
        color: #fff !important;
      }
      .descripcion {
        color: #fff !important;
      }
      background: #9d8f68;
      border-top: 0;
      border-right: 0;
      border-left: 0;
    }
    .descripcion {
      opacity: 0.7;
      font-size: 15px;
      font-weight: 500;
    }
    .titulo {
      font-size: 25px;
      color: #004581;
      font-weight: 600;
    }
  }
  @media (max-width: 991px) {
    .apagar-sm {
      display: none;
    }
    .react-tabs__tab {
      height: 50px;
      list-style: none;
      padding: 10px 20px;
      cursor: pointer;
      color: #bbb;
      border-radius: 0px;
      border-bottom: 1px solid #9d8f68 !important;
    }
    .react-tabs__tab--selected {
      /* border-left: 2px solid #004581; */
      background: #9d8f68;
      border-top: 0;
      border-right: 0;
      border-left: 0;
      .titulo {
        color: #fff !important;
      }
    }
    .descripcion {
      opacity: 0.7;
      font-weight: 600;
      font-size: 14px;
    }
    .titulo {
      font-weight: 600;
      font-size: 18px;
      color: #004581;
    }
  }
  .borde-modal {
    border-radius: 10px;
  }

  .react-tabs__tab:focus {
    box-shadow: none;
    outline: none;
  }
  .react-tabs__tab-list {
    border-bottom: 0px;
    margin: 0 0 10px;
    padding: 0;
  }
`
Feature.TitleThree = styled(Heading)`
  text-align: center;
  color: #004581 !important;
  font-size: 35px;
  font-weight: 800;
  letter-spacing: 0.3px;
  line-height: 1.20689;
  margin-bottom: 32px;

  @media (min-width: 480px) {
    font-size: 38px;
  }

  @media (min-width: 768px) {
    font-size: 48px;
  }

  @media (min-width: 992px) {
    font-size: 58px;
    margin-top: 100px;
    margin-bottom: 50px;
  }
  margin-top: 50px;
`
Feature.SubTitleThree = styled(Heading)`
  color: #a3a5a8;
  font-size: 16px;
  font-weight: 600;
  line-height: 28px;
  margin-bottom: 30px;
`
Feature.Tab = styled(Box)`
  .nav-tabs {
    text-align: center;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 51%;
    transition: 0.4s;
    /* border-bottom: 2px solid rgba(248, 249, 252, 0.2); */
    margin-bottom: 60px;
    flex-direction: column;
    @media (min-width: 992px) {
      margin-bottom: 115px;
      justify-content: space-between;
    }
    .nav-link {
      border: none;
      font-size: 18px;
      font-weight: 400;
      letter-spacing: normal;
      line-height: 1.66666;
      display: inline-flex;
      color: rgba(255, 255, 255, 0.7);
      padding: 18px 12px;
      transition: 0.4s;
      margin-right: 10px;
      border-bottom: 2px solid transparent;
      justify-content: space-between;

      &.active {
        background-color: #9d8f68;
        color: #fff;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
`
Feature.Block = styled(Box)``
Feature.Title = styled(Heading)``
Feature.Text = styled(Paragraph)``

Feature.Box = styled(Box)``

export default Feature
