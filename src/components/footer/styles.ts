import styled, { css } from "styled-components";
import { Flex, H5, Text } from "../../elements";

export const styles = css`
  background-color: ${(p) => p.theme.colors.primary.dark};
  padding: 5rem 1rem;

  .logo {
    padding: 1rem;
  }

  ${(p) => p.theme.media.md} {
    padding: 5rem 0rem;
    .logo {
      padding: 0rem;
      padding-left: 1rem;
    }
    .container {
      /* padding: 5rem; */
    }
  }

  ${(p) => p.theme.media.xsLandscape} {
    padding: 4rem;
  }
`;

export const Address = styled.address`
  color: ${(p) => p.theme.colors.grey[400]};
  color: ${(p) => p.theme.colors.primary.light};
  padding-top: 1rem;
  text-align: center;
  ${(p) => p.theme.media.md} {
    text-align: left;
  }
`;

export const LinksGroup = styled(Flex)`
  ${(p) => p.theme.media.xs} {
    text-align: center;
  }
  ${(p) => p.theme.media.md} {
    text-align: left;
  }
`;

export const LinksTitle = styled(Text)`
  color: ${(p) => p.theme.colors.primary.light};
  margin: 0rem 0;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  font-weight: ${(p) => p.theme.typography.fontWeightBold}; ;
`;
export const Links = styled.ul`
  color: ${(p) => p.theme.colors.grey[400]};
  font-weight: 300;
  list-style: none;
  padding: 0;
  li {
    padding-bottom: 0.5rem;
  }
  p {
    cursor: pointer;
    :hover {
      color: ${(p) => p.theme.colors.grey[100]};
    }
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
    padding-right: 2rem;
  }
`;
