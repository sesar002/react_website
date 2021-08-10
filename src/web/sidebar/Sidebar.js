import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="team" onClick={toggle} spy={true} smooth={true}>
            Team
          </SidebarLink>
          <SidebarLink
            to="tokenomics"
            onClick={toggle}
            spy={true}
            smooth={true}
          >
            Pumpenomics
          </SidebarLink>
          <SidebarLink to="roadmap" onClick={toggle} spy={true} smooth={true}>
            Roadmap
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xab36f4334ec6df38c4ec0fb5ea597bb0336979e3" target="a_blank">Buy Now</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
