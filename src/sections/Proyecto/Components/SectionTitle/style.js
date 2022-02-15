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

  font-size: 32px;
  font-weight: 800;
  letter-spacing: normal;
  line-height: 1.38095;
  color: #004581;
  @media (min-width: 768px) {
    font-size: 33px;
  }

  @media (min-width: 1200px) {
    font-size: 42px;
  }
}
`
export default SectionTitle
