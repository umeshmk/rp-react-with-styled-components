import styled, { css } from "styled-components";
import { Flex } from "../../elements";

export const styles = css`
  background-color: ${(p) => p.theme.colors.primary.dark};
  padding: 5rem 1rem;
  .logo {
    padding: 1rem;
  }

  ${(p) => p.theme.media.md} {
    padding: 5rem;
  }
`;

export const LinksGroup = styled(Flex)`
  h2 {
    color: ${(p) => p.theme.colors.primary.light};
    font-size: 1.5rem;
    margin: 0;
  }

  ${(p) => p.theme.media.xs} {
    text-align: center;
  }
  ${(p) => p.theme.media.md} {
    text-align: left;
  }
`;

export const Links = styled.ul`
  color: ${(p) => p.theme.colors.grey[300]};
  font-size: 1.1rem;
  font-weight: 300;
  list-style: none;
  padding: 0;
  li {
    padding-bottom: 0.5rem;
  }
  span {
    cursor: pointer;
    :hover {
      color: ${(p) => p.theme.colors.grey[100]};
    }
  }
`;

export const Address = styled.address`
  color: ${(p) => p.theme.colors.primary.light};
  font-size: 1.2rem;
  font-weight: 800;
  padding-top: 1.2rem;
  line-height: 1.8rem;
  text-align: center;
  ${(p) => p.theme.media.md} {
    text-align: left;
  }
`;

export const SocialIcons = styled.div`
  padding-top: 2rem;
  text-align: center;
  svg {
    color: ${(p) => p.theme.colors.primary.light};
    cursor: pointer;
  }
  ${(p) => p.theme.media.md} {
    text-align: left;
  }
`;
