import React from 'react'
import { Container, Logo, Nav, NavToggler } from './AsideComponents'
import { FaBriefcase, FaComments, FaHome, FaList, FaUserAlt } from "react-icons/fa";

function Aside() {
  return (
    <Container>
        <Logo>
            <a href="#"><span>A</span>tlas</a>
        </Logo>
        <NavToggler>
          <span></span>
        </NavToggler>
        <Nav>
        <li><a href="#" className="active"><i ><FaHome/></i> Home</a></li>
            <li><a href="#"><i><FaUserAlt/></i> About</a></li>
            <li><a href="#"><i><FaList/></i> Services</a></li>
            <li><a href="#"><i><FaBriefcase/></i> Portfolio</a></li>
            <li><a href="#"><i><FaComments/></i> Contact</a></li>
        </Nav>
    </Container>
  )
}

export default Aside