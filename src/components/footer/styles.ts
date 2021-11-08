import styled, { css } from "styled-components";
import { Flex } from "../../elements";

export const styles = css`
  background-color: #071c2f;
  padding: 5rem 1rem;
  ${(p) => p.theme.media.md} {
    padding: 5rem;
  }
`;

export const LinksGroup = styled(Flex)`
  h2 {
    color: #fff;
    font-size: 1.5rem;
    margin: 0;
  }
`;

export const Links = styled.ul`
  color: #ddd;
  font-size: 1.1rem;
  list-style: none;
  padding: 0;
  li {
    cursor: pointer;
    padding-bottom: 0.5rem;
    :hover {
      color: #eee;
    }
  }
`;

export const Address = styled.address`
  color: #fff8;
  font-size: 1.2rem;
  padding-top: 1.2rem;
  text-align: center;
  ${(p) => p.theme.media.md} {
    text-align: left;
  }
`;

export const SocialIcons = styled.div`
  padding-top: 2rem;
  text-align: center;
  svg {
    color: #fffa;
    cursor: pointer;
  }
  ${(p) => p.theme.media.md} {
    text-align: left;
  }
`;
