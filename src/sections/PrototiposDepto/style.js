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
    }
    .react-tabs__tab {
      height: 100px;
      list-style: none;
      padding: 20px 20px;
      cursor: pointer;
      color: #bbb;
      border-radius: 0px;
      border-bottom: 1px solid #a3a5a8;
    }
    .react-tabs__tab--selected {
      border-left: 4px solid #002e6d;
      color: #262729;
      background: transparent;
      border-top: 0;
      border-right: 0;
    }
    .descripcion {
      opacity: 0.7;
      font-family: "Campton-Medium";
      font-size: 15px;
    }
    .titulo {
      font-family: "Campton-SemiBold";
      font-size: 25px;
      color: #262729;
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
      border-bottom: 1px solid #a3a5a8;
    }
    .react-tabs__tab--selected {
      border-left: 2px solid #002e6d;
      color: #262729;
      background: transparent;
      border-top: 0;
      border-right: 0;
    }
    .descripcion {
      opacity: 0.7;
      font-family: "Campton-Medium";
      font-size: 14px;
    }
    .titulo {
      font-family: "Campton-SemiBold";
      font-size: 18px;
      color: #262729;
    }
  }
  .borde-modal {
    border-radius: 10px;
  }

  .react-tabs__tab:focus {
    box-shadow: none;
    border-color: hsl(208, 99%, 50%);
    outline: none;
  }
`
Feature.TitleThree = styled(Heading)`
  font-size: 45px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: normal;
  line-height: 1.66666;
  margin-bottom: 12px;
  color: #002e6d;
  font-family: "Campton-SemiBold";
`
Feature.SubTitleThree = styled(Heading)`
  color: #a3a5a8;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  font-family: "Campton-SemiBold";
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
    border-bottom: 2px solid rgba(248, 249, 252, 0.2);
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
        background-color: transparent;
        color: #002e6d;
        border-left: 2px solid #002e6d;
        padding: ;
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
