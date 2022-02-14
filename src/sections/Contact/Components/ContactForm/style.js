import styled from "styled-components/macro"
import { Box } from "~styled"

const Form = styled(Box)`
  .form-title {
    font-size: 21px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 30px;
    margin-bottom: 8px;
    color: #fff;
  }
  .form-whatsapp {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 30px;
    margin-bottom: 28px;
    color: #fff;
    opacity: 0.7;
  }
  .boton-enviar {
    color: #002e6d !important;
    background-color: #fff !important;
    border-radius: 50px;
    &:hover {
      color: #002e6d !important;
      background-color: #d5d5d5 !important;
    }
  }
  .form-floating {
    label {
      padding-left: 25px;
      font-size: 15px;
      min-height: 45px;
      padding-top: 0;
      padding-bottom: 0;
      color: #fff;
    }

    textarea {
      min-height: 175px;
      color: #fff;

      & ~ label {
        margin-top: 20px;
      }
    }

    input {
      & ~ label {
        display: flex;
        align-items: center;
      }
    }
  }

  .form-control {
    background: transparent;
    padding-left: 25px;
    padding-right: 25px;
    font-size: 15px;
    border: 1px solid #e5e5e5 !important;
  }

  input.form-control {
    border-radius: 500px;
    background: transparent;
    color: #fff !important;
    height: 45px !important;

    &::placeholder {
      color: transparent;
    }
  }

  textarea {
    min-height: 175px;
    border-radius: 15px;

    & ~ label {
    }
  }

  .form-check {
    input.form-check-input {
      min-width: 20px;
      min-height: 20px;
      max-width: 20px;
      max-height: 20px;
      border-radius: 3px;
      border: 0;

      &:checked[type="checkbox"] {
        background-color: #002e6d !important;
        box-shadow: none;
      }

      &:focus {
        box-shadow: none;
      }
    }

    .form-check-label {
      margin-left: 8px;
      font-size: 13px;
      color: #fff !important;
      opacity: 0.7;
    }
  }
`
export default Form
