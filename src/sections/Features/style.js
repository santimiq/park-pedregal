import styled from "styled-components/macro"
import { Box, Heading, Paragraph } from "~styled"

const Feature = styled(Box)`


    background: #9D8F68;
    position: relative;
    overflow: hidden;
    padding-top: 55px;
    padding-bottom: 20px;
    @media (min-width:768px) {
        padding-top: 70px;
        padding-bottom: 40px;
    }
    @media (min-width:992px) {
        padding-top: 50px;
        padding-bottom: 105px;
    }
    @media (max-width:578px){
        .row-group-mobile {
            justify-content: center !important; 
        }
    }
  
`
Feature.Shapes=styled(Box)`
    position: absolute;
    right: 0;
    top: -7%;
    width: 30%;
    z-index: 1;
    
`
Feature.ShapeTwo =styled(Box)`
    width: 50%;
    position: absolute;
    top: 30%;
    right: -30%;
    z-index: -1;
`
Feature.Title = styled(Heading)`
    font-size: 50px;
    font-weight: 500;
    letter-spacing: -1px;
    line-height: 1.1;
    margin-bottom: 35px;

    @media (min-width:480px) {
        font-size: 40px;
    }

    @media (min-width:768px) {
        letter-spacing: -2px;
        font-size: 50px;
    }

    @media (min-width:992px) {
        font-size: 60px;
    }
`
Feature.Text = styled(Paragraph)`
    font-size: 18px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.62;
    opacity:.7;
    @media (min-width:992px) {
        font-size: 21px;
    }
`

Feature.Tab  = styled(Box).attrs(props => ({
    className:"row"
  }))`
    .nav{
        display:flex;
        /* justify-content:center; */
        a{
            color:#fff;
            padding:0;
            &.active{
                .nav-widget{
                    background-color: var(--bs-white);
                    color: #004581 !important;
                    border-radius: 10px;
                    color: #004581 !important;
                    i {
                        color: #9D8F68 !important;
                    }
                }
                
            }
        }
        @media (max-width:578px){
            justify-content: center !important; 
        }
    }

`
Feature.TabNavWrapper = styled(Box)`
    @media (min-width:1200px){
        padding-right: 65px;
    }
    @media (min-width:1400px){
        padding-right: 110px;
    }
`
Feature.Box = styled(Box)``

export default Feature
