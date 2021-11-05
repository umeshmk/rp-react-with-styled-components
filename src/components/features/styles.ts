import styled, { css } from "styled-components";
import { Button, Flex } from "../../elements";

/**
 * Styles
 */
export const styles = css`
  min-height: 100vh;
  color: #000;
  text-align: center;
  padding: 5vh;
  h1 {
    font-size: 4rem;
    margin-bottom: 15vh;
    text-transform: capitalize;
  }
`;

export const FeatureBox = styled(Flex)`
  /* border: 1px solid #000; */
  border-radius: 1rem;
  padding: 2rem 1rem;
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.1);
  p {
    color: #000a;
  }
  svg {
    color: cadetblue;
    border: 1px solid;
    padding: 1rem;
    font-size: 5rem;
    border-radius: 10rem;
  }
`;

export const FeatureTitle = styled.h2`
  font-size: 1.5rem;
`;
