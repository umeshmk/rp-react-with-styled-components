import Slider from "react-slick";
import styled, { css } from "styled-components";
import { Button, Flex } from "../../elements";

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
`;

export const Title = styled.h2`
  font-size: 4rem;
  margin: 2rem auto;
`;

export const SlickItem = styled(Flex)`
  height: 30rem;
  padding: 1rem;
  overflow: hidden;
  > div:first-child {
    height: 27rem;
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
  color: #555;
  h3 {
    color: rebeccapurple;
    text-align: center;
  }
`;

export const LearnButton = styled(Button)`
  padding: 1rem;
  background-color: rebeccapurple;
  color: #fff;
  width: 100%;
  border-radius: 0 0 1rem 1rem;
  :hover {
    background-color: rebeccapurple;
    opacity: 0.85;
    color: #fff;
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
    color: rebeccapurple;
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
