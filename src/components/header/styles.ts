import styled, { css } from "styled-components";
import { LinkButton } from "../../elements";

/**
 * Styles
 */
export const styles = css`
  height: 100vh;
  color: ${(p) => p.theme.colors.grey[50]};
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
  letter-spacing: 4px;
  word-spacing: 7px;
  /* text-align: justify; */
`;

export const HeaderPara = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.3rem);
  text-transform: capitalize;
  /* font-weight: 300; */
  color: ${(p) => p.theme.colors.grey[500]};

  /* media - xs */
  ${(p) => p.theme.media.xs} {
    margin: 1.5rem 0 5rem 0;
  }

  /* media - md */
  ${(p) => p.theme.media.md} {
    margin: 1.5rem 0 3rem 0;
  }
`;

export const HeaderButton = styled(LinkButton)`
  padding: 0.8rem;
  margin: auto 1rem;
`;
