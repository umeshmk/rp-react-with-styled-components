import styled, { css } from "styled-components";
import { Flex, H5, Text } from "../../elements";

/**
 * Styles
 */
export const styles = css`
  min-height: 100vh;
  color: ${(p) => p.theme.colors.primary.main};
  text-align: center;
  padding: 5vh;
  padding-bottom: 15vh;
  h2 {
    margin: 5vh auto 10vh;
  }

  ${(p) => p.theme.media.xsLandscape} {
    padding: 5rem;
  }
`;

export const FeatureBox = styled(Flex)`
  border-radius: 1rem;
  padding: 2rem 1rem;
  box-shadow: 0 0 10px 1px ${(p) => p.theme.colors.primary.light};
  color: ${(p) => p.theme.colors.grey[900]};

  svg {
    color: ${(p) => p.theme.colors.primary.main};
    border: 1px solid;
    padding: 1rem;
    font-size: 5rem;
    border-radius: 10rem;
  }
`;

export const FeatureTitle = styled(H5)`
  margin: 1rem auto 2rem;
`;

export const FeatureText = styled(Text)`
  font-weight: ${(p) => p.theme.typography.fontWeightLight};
`;
