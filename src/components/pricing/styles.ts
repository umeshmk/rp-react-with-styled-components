import styled, { css } from "styled-components";
import { Button, Flex } from "../../elements";

export const styles = css`
  min-height: 100vh;
  color: #fff;
  background-color: #101522;
  margin: 0;
  padding: 10rem 2rem;
  ${(p) => p.theme.media.md} {
    padding: 7rem 5rem;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  margin: 0;
  padding-bottom: 1rem;
  color: #fff;
  text-align: center;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  color: #fffa;
  margin-bottom: 3rem;
  text-align: center;
`;

export const Card = styled(Flex)`
  /* font-size: 2rem; */
  color: #fff;
  background-color: #242424;
  padding: 2rem;
  transition: all 0.3s;

  :hover {
    box-shadow: 0 0 20px 0px slateblue;
    ${(p) => p.theme.media.md} {
      transform: scale(1.05);
    }
  }
`;

export const CardTitle = styled.h2`
  font-size: 2.2rem;
  margin: 0;
  padding: 0;
`;

export const CardPrice = styled.h3`
  font-size: 1.3rem;
  color: #fffa;
  padding-bottom: 1rem;
`;

export const CardFeatures = styled.ul`
  font-size: 1rem;
  font-weight: 300;
  color: #fff7;
  list-style: none;
  padding: 0;
  li {
    margin-top: 1rem;
  }
  svg {
    margin-right: 1rem;
    /* font-size: 1.4rem; */
  }
`;

export const CardButton = styled(Button)`
  font-size: 1rem;
  padding: 1rem;
  margin-top: 1rem;
  color: #fffa;
  background: transparent;
  /* color: #000; */
`;
