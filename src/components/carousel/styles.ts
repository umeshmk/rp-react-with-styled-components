import Slider from "react-slick";
import styled, { css } from "styled-components";
import { Button, Flex, H2 } from "../../elements";

export const styles = css`
  ${(p) => p.theme.media.xs} {
    padding: 5rem 1rem;
  }
  ${(p) => p.theme.media.md} {
    padding: 5rem 25vw;
  }
  ${(p) => p.theme.media.lg} {
    padding: 5rem 20vw;
  }
  ${(p) => p.theme.media.xsLandscape} {
    padding: 4rem;
  }
`;

export const Title = styled(H2)`
  margin: 2rem auto;
  color: ${(p) => p.theme.colors.primary.main};
  ${(p) => p.theme.media.xs} {
    text-align: center;
  }
  ${(p) => p.theme.media.md} {
    text-align: left;
  }
`;

export const SlickItem = styled(Flex)`
  height: 33rem;
  padding: 1rem;
  overflow: hidden;
  > div:first-child {
    height: 30rem;
    border: 1px solid #0003;
    border-radius: 1rem 1rem 0 0;
    overflow: hidden;
  }
`;

export const SlickItemImg = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
`;

export const SlickItemText = styled.div`
  padding: 1rem;
  text-align: center;
  h5 {
    color: ${(p) => p.theme.colors.primary.dark};
    margin-bottom: 1rem;
  }
  p {
    color: ${(p) => p.theme.colors.grey[800]};
    /* letter-spacing: 1px; */
    font-weight: 300;
  }
`;

export const LearnButton = styled(Button)`
  padding: 1rem;
  /* color: ${(p) => p.theme.colors.primary.light}; */
  color: ${(p) => p.theme.colors.grey[300]};
  background-color: ${(p) => p.theme.colors.primary.dark};
  width: 100%;
  border-radius: 0 0 1rem 1rem;
  :hover {
    color: ${(p) => p.theme.colors.grey[100]};
    opacity: 0.9;
  }
  :active {
    opacity: 1;
  }
`;

export const StyledReactSlick = styled(Slider)``;
export const Controls = styled(Flex)`
  ${(p) => p.theme.media.xs} {
    padding-bottom: 1rem;
  }
  ${(p) => p.theme.media.md} {
    padding-bottom: 0rem;
  }
  svg {
    color: ${(p) => p.theme.colors.primary.dark};
    cursor: pointer;
    font-size: 3rem;
    margin: auto 1rem;
    transition: all 0.1s;
    :hover {
      opacity: 0.9;
    }
    :active {
      opacity: 1;
    }
  }
`;
