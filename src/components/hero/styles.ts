import styled from "styled-components";
import { Button, H2, Text } from "../../elements";

/**
 * Styles
 */
// export const styles = css``;

export const HeroBox = styled.div<{ inverse: boolean }>`
  background-color: ${(p) =>
    p.inverse ? p.theme.colors.grey[50] : p.theme.colors.primary.dark};

  section {
    padding: 10rem 1rem;
    text-align: center;
    ${(p) => p.theme.media.md} {
      padding: 10rem 0rem;
      text-align: left;
    }

    ${(p) => p.theme.media.xsLandscape} {
      padding: 5rem 7rem;
    }
  }
  small {
    font-weight: 800;
    color: ${(p) =>
      p.inverse ? p.theme.colors.primary.dark : p.theme.colors.grey[50]};
  }
`;

// export const HeroTitle = styled.h2<{ inverse: boolean }>`
export const HeroTitle = styled(H2)<{ inverse: boolean }>`
  font-weight: 800;
  color: ${(p) =>
    p.inverse ? p.theme.colors.primary.main : p.theme.colors.grey[50]};
  margin: 2rem 0;
`;

export const HeroDescription = styled(Text)<{ inverse: boolean }>`
  color: ${(p) =>
    p.inverse ? p.theme.colors.grey[700] : p.theme.colors.grey[100]};
`;

export const HeroButton = styled(Button)<{ inverse: boolean }>`
  border: 1px solid transparent;
  color: ${(p) =>
    !p.inverse ? p.theme.colors.primary.dark : p.theme.colors.grey[50]};
  background: ${(p) =>
    p.inverse ? p.theme.colors.primary.dark : p.theme.colors.grey[50]};

  padding: 1rem;
  margin-top: 1.5rem;
  :hover {
    color: ${(p) =>
      p.inverse ? p.theme.colors.primary.dark : p.theme.colors.grey[50]};
    border-color: ${(p) =>
      p.inverse ? p.theme.colors.primary.dark : p.theme.colors.grey[50]};
    background: ${(p) =>
      !p.inverse ? p.theme.colors.primary.dark : p.theme.colors.grey[50]};
  }
`;

export const HeroImg = styled.img`
  height: 40vh;
  width: 80vw;
  transition: transform 0.4s;
  ${(p) => p.theme.media.md} {
    height: 40vh;
    width: 40vw;
  }
  :hover {
    transform: rotate(-7deg);
  }
`;
