import styled, { css } from "styled-components";
import { Flex, H4, H5, LinkButton } from "../../elements";

export const styles = css`
  min-height: 100vh;
  background-color: ${(p) => p.theme.colors.primary.dark};
  margin: 0;
  padding: 10rem 2rem;
  ${(p) => p.theme.media.md} {
    padding: 7rem 5rem;
  }
`;

export const Card = styled(Flex)`
  background-color: ${(p) => p.theme.colors.primary.light};
  padding: 2rem;
  transition: all 0.3s;

  :hover {
    box-shadow: 0 0 20px 0px ${(p) => p.theme.colors.primary.light};
    ${(p) => p.theme.media.md} {
      transform: scale(1.05);
    }
  }
`;

export const CardTitle = styled(H4)`
  color: ${(p) => p.theme.colors.primary.dark};
  font-weight: ${(p) => p.theme.typography.fontWeightBold}; ;
`;

export const CardPrice = styled(H5)`
  color: ${(p) => p.theme.colors.primary.dark};
  padding-bottom: 1rem;
`;

export const CardFeatures = styled.ul`
  font-weight: ${(p) => p.theme.typography.fontWeightBold};
  list-style: none;
  padding: 0;
  color: ${(p) => p.theme.colors.primary.dark};
  li {
    margin-top: 1rem;
  }
  svg {
    color: ${(p) => p.theme.colors.primary.dark};
    margin-right: 1rem;
    font-size: 1.4rem;
  }
`;

export const CardButton = styled(LinkButton)`
  font-size: 1rem;
  padding: 1rem;
  margin-top: 1rem;
  background-color: ${(p) => p.theme.colors.primary.light};
  border: 1px solid ${(p) => p.theme.colors.primary.dark};
  color: ${(p) => p.theme.colors.primary.dark};
  :hover {
    color: ${(p) => p.theme.colors.primary.light};
    background-color: ${(p) => p.theme.colors.primary.dark};
  }
  :active {
    opacity: 0.9;
  }
`;
