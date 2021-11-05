import { GoThreeBars } from "react-icons/go";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

/**
 * Styles
 */
export const styles = css`
  padding: 0.75rem 1rem;
  background-color: aliceblue;
  .logo {
    z-index: 200;
  }
  .modal {
    background-color: #071c2f;
    padding-top: 30vh;
    .close {
      color: #fff;
    }
  }
`;

/**
 * Logo
 */
export const Logo = styled(Link)`
  color: red;
  font-size: 2rem;
  margin: 0;
  padding-left: 1rem;
  text-decoration: none;
`;
export const LogoIcon = styled.img`
  height: 3rem;
`;

/**
 * Links
 */
export const LinksIcon = styled(GoThreeBars)`
  cursor: pointer;

  ${(p) => p.theme.media.md} {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  display: none;
  color: #333;
  margin-right: 1rem;
  font-size: 1.1rem;
  text-decoration: none;
  text-transform: capitalize;
  transition: color 0.3s;
  :hover {
    color: crimson;
  }

  ${(p) => p.theme.media.md} {
    display: initial;
  }
`;

export const ModalLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  padding: 1.5rem;
  text-decoration: none;
  text-transform: capitalize;
  transition: color 0.3s;
  :hover {
    color: crimson;
  }
`;
