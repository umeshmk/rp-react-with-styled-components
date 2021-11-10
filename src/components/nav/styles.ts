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
    background-color: ${(p) => p.theme.colors.primary.dark};
    padding-top: 30vh;
    .close {
      color: ${(p) => p.theme.colors.grey[50]};
    }
  }
`;

/**
 * Logo
 */
export const Logo = styled(Link)`
  color: ${(p) => p.theme.colors.grey[50]};
  font-size: 2rem;
  font-weight: 300;
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
  color: ${(p) => p.theme.colors.grey[50]};
  ${(p) => p.theme.media.md} {
    display: none;
  }
`;

export const NavLink = styled.div`
  a {
    display: none;
    color: ${(p) => p.theme.colors.grey[300]};
    margin-left: 3rem;
    font-size: 1.1rem;
    text-decoration: none;
    text-transform: capitalize;
    transition: color 0.1s;
    :hover {
      color: ${(p) => p.theme.colors.grey[200]};
    }

    ${(p) => p.theme.media.md} {
      display: initial;
    }
  }
`;

export const ModalLink = styled.div`
  padding-bottom: 5rem;
  a {
    color: ${(p) => p.theme.colors.grey[300]};
    font-size: 1.6rem;
    font-weight: 600;
    text-decoration: none;
    text-transform: capitalize;
    transition: color 0.2s;
    :hover {
      color: ${(p) => p.theme.colors.grey[50]};
    }
  }
`;
