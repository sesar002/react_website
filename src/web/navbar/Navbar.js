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
              <NavLinks to="team" spy={true} smooth={true}>
                Team
              </NavLinks>
            </NavItem>
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
          </NavMenu>
          <NavBtn>
            <NavBtnLink href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xab36f4334ec6df38c4ec0fb5ea597bb0336979e3" target="a_blank">BUY NOW</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
