import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Nav, Center, Li } from "./Navbar.styled";

const Navbar = () => {
  let { pathname } = useLocation();

  return (
    <Nav>
      <Center>
        <ul>
          <Li pathname={pathname} name={"/"}>
            <Link to="/">Cats</Link>
          </Li>
          <Li pathname={pathname} name={"/breeds"}>
            <Link to="/breeds">Breeds</Link>
          </Li>
          <Li pathname={pathname} name={"/favorites"}>
            <Link to="/favorites">Favorites</Link>
          </Li>
        </ul>
        <span>Themes</span>
      </Center>
    </Nav>
  );
};

export default Navbar;
