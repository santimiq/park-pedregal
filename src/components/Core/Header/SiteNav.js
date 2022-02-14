import React from "react"
import { Navbar } from "react-bootstrap"
import siteBrandDark from "~image/logo/park-white.png"
import siteBrandLight from "~image/logo/park-blue.png"
import whatsapp from "~image/whatsapp.svg"
import Menu from "./Menu"
const SiteNavbar = ({ buttonBlock, darkLogo, customLogo, defaultLogo }) => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="site-navbar"
      >
        <Navbar.Brand href="/">
          {defaultLogo ? (
            <img src={defaultLogo} alt="site-brand" />
          ) : customLogo ? (
            <img src={customLogo} alt="site-brand" />
          ) : (
            <img
              src={darkLogo ? siteBrandLight : siteBrandDark}
              alt="site-brand"
            />
          )}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="hamburgur"
        />
        <Menu />
        {buttonBlock}
        <a href="tel:5562133210" target="_blank" rel="noopener noreferrer">
          <img src={whatsapp} alt="" />
        </a>
      </Navbar>
    </>
  )
}

export default SiteNavbar
