import styled from "styled-components";
import { Button } from "../../elements";

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
  }
  small {
    font-weight: 800;
    color: ${(p) =>
      p.inverse ? p.theme.colors.primary.dark : p.theme.colors.grey[50]};
    font-size: 1rem;
  }
  p {
    font-weight: 400;
    color: ${(p) =>
      p.inverse ? p.theme.colors.grey[800] : p.theme.colors.grey[400]};
    letter-spacing: 1px;
    font-size: 1.1rem;
    /* text-align: justify; */
  }
`;

export const HeroTitle = styled.h2<{ inverse: boolean }>`
  font-weight: 800;
  color: ${(p) =>
    p.inverse ? p.theme.colors.primary.main : p.theme.colors.grey[50]};

  font-size: 2.5rem;
  font-size: clamp(2rem, 10vw, 3.2rem);
  margin: 2rem 0 0;
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
