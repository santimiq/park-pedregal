import React from "react"
import Form from "./style"
import { useState } from "react"
import Fade from "react-reveal/Fade"

export default function ContactForm({ ...rest }) {
  return (
    <Form {...rest}>
      <Fade bottom>
        <h3 className="form-title">Escríbenos</h3>
        <p className="form-whatsapp">Whatsapp: 55 6213 3210</p>
        <div className="contact-form">
          <form
            name="contact"
            method="post"
            data-netlify="true"
            onSubmit="submit"
            action="/mail"
            data-netlify-honeypot="bot-field"
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            <div className="row">
              <div className="col-lg-4 mb-4">
                <div className="form-floating">
                  <input
                    className="form-control"
                    placeholder="Your Website"
                    id="floatinginput3"
                    name="nombre"
                    type="text"
                  />
                  <label htmlFor="floatinginput3">Nombre</label>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="form-floating">
                  <input
                    className="form-control"
                    placeholder=""
                    id="floatinginput"
                    name="email"
                    type="email"
                  />
                  <label htmlFor="floatinginput">Correo Electrónico*</label>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="form-floating">
                  <input
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatinginput2"
                    name="teléfono"
                    type="number"
                  />
                  <label htmlFor="floatinginput2">Teléfono</label>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea"
                    style={{ height: 100 }}
                    defaultValue={""}
                    name="mensaje"
                    type="text"
                  />
                  <label htmlFor="floatingTextarea">
                    ¿Tienes alguna pregunta?{" "}
                  </label>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="row align-items-center mt-3 flex-column">
                  {/* <div className="col-md-8 col-lg-7 col-md-6 col-xl-8 pt-3">
                <div className="form-check d-flex align-items-center justify-content-center">
                  <input
                    className="form-check-input bg-white float-none mt-0"
                    type="checkbox"
                    defaultValue
                    // id="flexCheckDefault"
                    name="Terminos"
                    id="agree"
                    
                  />
                  <label className="form-check-label" htmlFor="agree">
                    Estoy de acuerdo con los términos y condiciones.
                  </label>
                </div>
              </div> */}
                  <div className="col-md-4 col-lg-5 col-xl-4 text-center   pt-3">
                    <button
                      type="submit"
                      className="btn btn--lg-2 shadow--torch-red-3 rounded-55 boton-enviar"
                      // disabled={!agree}
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Fade>
    </Form>
  )
  // const [agree, setAgree] = useState(false)

  // const checkboxHandler = () => {
  //   // if agree === true, it will be set to false
  //   // if agree === false, it will be set to true
  //   setAgree(!agree)
  //   // Don't miss the exclamation mark
  // }

  // // When the button is clicked

  // return (
  //   <Form {...rest}>
  //     <h3 className="form-title">Escríbenos</h3>
  //     <p className="form-whatsapp">Whatsapp: 55 6213 3210</p>
  //     <div className="contact-form">
  //       <form
  //         name="contact"
  //         method="post"
  //         data-netlify="true"
  //         data-netlify-recaptcha="true"
  //       >
  //         <input type="hidden" name="form-name" value="contact" />
  // <div className="row">
  //   <div className="col-lg-4 mb-4">
  //     <div className="form-floating">
  //       <input
  //         className="form-control"
  //         placeholder="Your Website"
  //         id="floatinginput3"
  //         name="nombre"
  //         type="text"
  //       />
  //       <label htmlFor="floatinginput3">Nombre</label>
  //     </div>
  //   </div>
  //   <div className="col-lg-4 mb-4">
  //     <div className="form-floating">
  //       <input
  //         className="form-control"
  //         placeholder=""
  //         id="floatinginput"
  //         name="email"
  //         type="email"
  //       />
  //       <label htmlFor="floatinginput">Correo Electrónico*</label>
  //     </div>
  //   </div>
  //   <div className="col-lg-4 mb-4">
  //     <div className="form-floating">
  //       <input
  //         className="form-control"
  //         placeholder="Leave a comment here"
  //         id="floatinginput2"
  //         name="teléfono"
  //         type="number"
  //       />
  //       <label htmlFor="floatinginput2">Teléfono</label>
  //     </div>
  //   </div>
  //   <div className="col-lg-12">
  //     <div className="form-floating">
  //       <textarea
  //         className="form-control"
  //         placeholder="Leave a comment here"
  //         id="floatingTextarea"
  //         style={{ height: 100 }}
  //         defaultValue={""}
  //         name="mensaje"
  //         type="text"
  //       />
  //       <label htmlFor="floatingTextarea">
  //         ¿Tienes alguna pregunta?{" "}
  //       </label>
  //     </div>
  //   </div>
  //   <div className="col-lg-12">
  //     <div className="row align-items-center mt-3 flex-column">
  //       <div className="col-md-8 col-lg-7 col-md-6 col-xl-8 pt-3">
  //         <div className="form-check d-flex align-items-center justify-content-center">
  //           <input
  //             className="form-check-input bg-white float-none mt-0"
  //             type="checkbox"
  //             defaultValue
  //             // id="flexCheckDefault"
  //             name="Terminos"
  //             id="agree"
  //             onChange={checkboxHandler}
  //           />
  //           <label className="form-check-label" htmlFor="agree">
  //             Estoy de acuerdo con los términos y condiciones.
  //           </label>
  //         </div>
  //       </div>
  //       <div className="col-md-4 col-lg-5 col-xl-4 text-center   pt-3">
  //         <button
  //           type="submit"
  //           className="btn btn--lg-2 shadow--torch-red-3 rounded-55 boton-enviar"
  //           disabled={!agree}
  //         >
  //           Enviar
  //         </button>
  //         <div data-netlify-recaptcha="true"></div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  //       </form>
  //     </div>
  //   </Form>
}
