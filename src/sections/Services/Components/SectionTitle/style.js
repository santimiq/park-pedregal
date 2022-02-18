import styled from "styled-components/macro"
import { Heading, Box, Paragraph } from "~styled"

const SectionTitle = styled(Box)``
SectionTitle.Text = styled(Paragraph)`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.77777;
  color: inherit;
`
SectionTitle.Subtitle = styled(Heading)`
  color: #ff5722;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 28px;
  position: relative;
  display: inline-block;
  &.black {
    color: #262729;
  }
`
SectionTitle.Main = styled(Heading)`
  color: #fff !important;
  font-size: 35px;
  font-weight: 800;
  letter-spacing: 0.3px;
  line-height: 1.20689;
  margin-bottom: 50px;

  @media (min-width: 480px) {
    font-size: 38px;
  }

  @media (min-width: 768px) {
    font-size: 48px;
  }

  @media (min-width: 992px) {
    font-size: 58px;
  }
`
export default SectionTitle
