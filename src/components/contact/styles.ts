import styled, { css } from "styled-components";

export const styles = css`
  min-height: 100vh;
  color: #fff;
  background-color: #101522;
  margin: 0;
  padding: 10rem 2rem;
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

export const TextError = styled.p`
  font-size: 1rem;
  color: #f00a;
  margin: 0;
  padding: 0;
  padding-bottom: 1rem;
`;
export const TextSuccess = styled(TextError)`
  color: rebeccapurple;
  font-weight: 600;
  text-align: center;
`;

export const FormMsg = styled.div`
  background-color: #fff;
  padding: 1rem 2rem 0;
`;

export const Form = styled.form`
  background-color: #fff;
  border-radius: 1rem;
  /* box-shadow: 0 0 20px 0 rebeccapurple; */
  padding: 3rem 2rem;
  width: 90vw;
  ${(p) => p.theme.media.md} {
    width: 40vw;
    /* padding: 5rem; */
  }
  ${(p) => p.theme.media.lg} {
    width: 30vw;
    /* padding: 5rem 15rem; */
  }
`;

export const Input = styled.input`
  background-color: #fff;
  padding: 1rem;
  width: 100%;
  border: 1px solid #0008;
  border-radius: 0.3rem;
  outline: none;
  margin: 0;
  margin-bottom: 1rem;
  :focus-visible {
    border: 1px solid #f00a;
    border: 1px solid rebeccapurple;
  }
`;
export const InputSubmit = styled.input.attrs((p) => ({
  type: "submit",
}))`
  margin-top: 2rem;
  padding: 1rem;
  width: 100%;
  color: #fff;
  text-transform: uppercase;
  border: none;
  background-color: rebeccapurple;
  :hover {
    opacity: 0.9;
  }
  :active {
    opacity: 1;
  }
  :disabled {
    opacity: 0.5;
  }
`;
