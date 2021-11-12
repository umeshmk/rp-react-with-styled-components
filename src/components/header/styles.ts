import styled, { css } from "styled-components";
import { LinkButton } from "../../elements";
import { Subtitle, Title } from "../common";

/**
 * Styles
 */
export const styles = css`
  position: relative;
  min-height: 100vh;
  color: ${(p) => p.theme.colors.grey[50]};
  background-color: ${(p) => p.theme.colors.primary.dark + "80"};
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  section {
    padding: 5px;
    height: 100%;
  }
  .content {
    height: 100%;
    text-align: center;
  }
  button {
    /* margin: auto 1rem; */
  }
  ${(p) => p.theme.media.xsLandscape} {
    padding: 4rem;
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

export const HeaderTitle = styled(Title)`
  padding: 1rem 0 0;
  ${(p) => p.theme.media.md} {
    padding: 0 3rem;
  }
`;

export const HeaderPara = styled(Subtitle)`
  ${(p) => p.theme.media.xs} {
    margin: 0.5rem 0 5rem 0;
  }
  ${(p) => p.theme.media.md} {
    margin: 0.5rem 0 5rem 0;
  }
`;

export const HeaderButton = styled(LinkButton)`
  padding: 0.8rem;
  margin: 1rem;
  background-color: ${(p) => p.theme.colors.primary.dark};
  color: ${(p) => p.theme.colors.grey[300]};
  ${(p) => p.theme.media.md} {
    /* margin: auto 1rem; */
  }
`;
