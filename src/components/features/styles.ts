import styled, { css } from "styled-components";
import { Flex } from "../../elements";

/**
 * Styles
 */
export const styles = css`
  min-height: 100vh;
  color: ${(p) => p.theme.colors.primary.main};
  text-align: center;
  padding: 5vh;
  padding-bottom: 15vh;
  h1 {
    font-size: 4rem;
    margin-bottom: 15vh;
    text-transform: capitalize;
  }
`;

export const FeatureBox = styled(Flex)`
  border-radius: 1rem;
  padding: 2rem 1rem;
  box-shadow: 0 0 10px 1px ${(p) => p.theme.colors.primary.light};
  color: ${(p) => p.theme.colors.grey[900]};
  p {
    color: ${(p) => p.theme.colors.grey[500]};
    letter-spacing: 1px;
    font-weight: 600;
  }
  svg {
    color: ${(p) => p.theme.colors.primary.main};
    border: 1px solid;
    padding: 1rem;
    font-size: 5rem;
    border-radius: 10rem;
  }
`;

export const FeatureTitle = styled.h2`
  font-size: 1.5rem;
`;
