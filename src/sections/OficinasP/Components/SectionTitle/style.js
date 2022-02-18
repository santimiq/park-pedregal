import styled from "styled-components/macro"
import { Heading, Box, Paragraph } from "~styled"

const SectionTitle = styled(Box)`
  font-family: "Nunito Sans";
`
SectionTitle.Text = styled(Paragraph)`
  font-size: 16px;
  font-weight: 300;
  letter-spacing: normal;
  line-height: 1.77777;
  color: #004581;
`

SectionTitle.Subtitle = styled(Heading)`
  color: ${props => (props.fontColor ? props.fontColor : "#ff5722")};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 28px;
  position: relative;
  display: inline-block;
  padding-bottom: 10px;
  &.subline {
    padding-left: 61px;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      bottom: 9px;
      width: 41px;
      height: 1px;
      background-color: ${props =>
        props.fontColor ? props.fontColor : "#ff5722"};
    }
  }
`
SectionTitle.Main = styled(Heading)`
  span {
    color: #004581 !important;
    font-size: 35px;
    font-weight: 800;
    letter-spacing: 0.3px;
    line-height: 1.20689;
    margin-bottom: 0px;

    @media (min-width: 480px) {
      font-size: 38px;
    }

    @media (min-width: 768px) {
      font-size: 48px;
    }

    @media (min-width: 992px) {
      font-size: 58px;
    }
  }
`
export default SectionTitle
