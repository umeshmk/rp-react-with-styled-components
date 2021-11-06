import styled from "styled-components";
import { Button } from "../../elements";

/**
 * Styles
 */
// export const styles = css``;

export const HeroBox = styled.div<{ inverse: boolean }>`
  background-color: ${(p) => (p.inverse ? "#fff" : "#071c2f")};
  color: ${(p) => (p.inverse ? "#fff" : "#000")};
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
    color: #999;
    font-size: 1rem;
  }
  p {
    font-weight: 400;
    color: #999;
    font-size: 1.1rem;
  }
`;

export const HeroTitle = styled.h2`
  font-weight: 800;
  color: slateblue;
  font-size: 2.5rem;
  margin: 2rem 0 0;
`;

export const HeroButton = styled(Button)<{ inverse: boolean }>`
  border: 1px solid slateblue;
  color: slateblue;
  background: transparent;
  padding: 1rem;
  margin-top: 1.5rem;
  :hover {
    background: transparent;
    color: ${(p) => (p.inverse ? "000" : "#fff")};
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
