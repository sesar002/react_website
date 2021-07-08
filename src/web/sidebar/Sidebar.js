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
          <SidebarLink
            to="tokenomics"
            onClick={toggle}
            spy={true}
            smooth={true}
          >
            Tokenomics
          </SidebarLink>
          <SidebarLink to="roadmap" onClick={toggle} spy={true} smooth={true}>
            Roadmap
          </SidebarLink>
          <SidebarLink to="team" onClick={toggle} spy={true} smooth={true}>
            Team
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute>Buy Now</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
