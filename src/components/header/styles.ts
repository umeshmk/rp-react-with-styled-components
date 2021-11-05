import styled, { css } from "styled-components";
import { Button } from "../../elements";

/**
 * Styles
 */
export const styles = css`
  height: 100vh;
  color: #fff;
  padding: 0 2rem;

  section {
    height: 100%;
  }
  .content {
    height: 100%;
    text-align: center;
  }
  button {
    /* margin: auto 1rem; */
  }
`;

export const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const HeaderTitle = styled.h1`
  font-size: clamp(2.3rem, 6vw, 4.5rem);
  text-transform: capitalize;
  margin: 0;
`;

export const HeaderPara = styled.p`
  font-size: clamp(0.9rem, 1.5vw, 1.3rem);
  font-weight: 300;
  color: rgba(255, 255, 255, 0.9);

  /* media - xs */
  ${(p) => p.theme.media.xs} {
    margin: 1.5rem 0 5rem 0;
  }

  /* media - md */
  ${(p) => p.theme.media.md} {
    margin: 1.5rem 0 3rem 0;
  }
`;

export const HeaderButton = styled(Button)`
  background-color: transparent;
  color: #fff;
  padding: 0.8rem;
  margin: auto 1rem;

  :hover {
    background-color: #fff;
    color: #000;
  }
`;
