import { GoThreeBars } from "react-icons/go";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

/**
 * Styles
 */
export const styles = css`
  padding: 1rem 1.5rem;
  position: absolute;
  width: 100%;
  background: transparent;
  z-index: 10;
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
  color: #fff;
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
  color: #fff;

  ${(p) => p.theme.media.md} {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  display: none;
  color: #fffa;
  margin-left: 3rem;
  font-size: 1.1rem;
  text-decoration: none;
  text-transform: capitalize;
  transition: color 0.1s;
  :hover {
    color: #fff;
  }

  ${(p) => p.theme.media.md} {
    display: initial;
  }
`;

export const ModalLink = styled(Link)`
  color: #fff;
  font-size: 1.6rem;
  padding: 1.5rem;
  text-decoration: none;
  text-transform: capitalize;
  transition: color 0.2s;
  :hover {
    color: crimson;
  }
`;
