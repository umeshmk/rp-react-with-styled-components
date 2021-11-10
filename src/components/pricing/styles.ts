import styled, { css } from "styled-components";
import { Flex, LinkButton } from "../../elements";

export const styles = css`
  min-height: 100vh;
  background-color: ${(p) => p.theme.colors.primary.dark};
  margin: 0;
  padding: 10rem 2rem;
  ${(p) => p.theme.media.md} {
    padding: 7rem 5rem;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  margin: 0;
  padding-bottom: 1rem;
  color: ${(p) => p.theme.colors.grey[100]};
  text-align: center;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  color: ${(p) => p.theme.colors.primary.light};
  margin-bottom: 3rem;
  text-align: center;
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

export const CardTitle = styled.h2`
  font-size: 2.2rem;
  color: ${(p) => p.theme.colors.primary.dark};
  margin: 0;
  padding: 0;
`;

export const CardPrice = styled.h3`
  font-size: 1.3rem;
  color: ${(p) => p.theme.colors.primary.dark};
  padding-bottom: 1rem;
`;

export const CardFeatures = styled.ul`
  font-size: 1rem;
  font-weight: 500;
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
