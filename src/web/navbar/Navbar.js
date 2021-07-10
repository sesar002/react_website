import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="home" spy={true} smooth={true}>
            PUMP DOGE
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="tokenomics" spy={true} smooth={true}>
                Pumpenomics
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="roadmap" spy={true} smooth={true}>
                Roadmap
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="team" spy={true} smooth={true}>
                Team
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink href="">Buy Now</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
