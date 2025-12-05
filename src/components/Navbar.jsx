import { Nav, Logo, Menu, MenuItem, NavLink } from "./NavbarStyle";

const Navbar = () => {
  return (
    <Nav>
      <Logo>Nikitha</Logo>
      <Menu>
        <MenuItem><NavLink href="#home">Home</NavLink></MenuItem>
        <MenuItem><NavLink href="#about">About</NavLink></MenuItem>
        <MenuItem><NavLink href="#skills">Skills</NavLink></MenuItem>
        <MenuItem><NavLink href="#projects">Projects</NavLink></MenuItem>
        <MenuItem><NavLink href="#resume">Resume</NavLink></MenuItem>
        <MenuItem><NavLink href="#contact">Contact</NavLink></MenuItem>
        
      </Menu>
    </Nav>
  );
};

export default Navbar;
