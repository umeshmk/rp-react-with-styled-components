import { IoCheckmarkDoneCircle } from "react-icons/io5";
import styled, { css } from "styled-components";

export const styles = css`
  min-height: 100vh;
  background-color: ${(p) => p.theme.colors.primary.dark};
  margin: 0;
  padding: 10rem 2rem;
`;

export const Title = styled.h1`
  font-size: 4rem;
  margin: 0;
  padding-bottom: 1rem;
  color: ${(p) => p.theme.colors.grey[100]};
  text-align: center;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  color: ${(p) => p.theme.colors.primary.light};
  margin-bottom: 3rem;
  text-align: center;
`;

export const TextError = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${(p) => p.theme.colors.primary.dark};
  margin: 0;
  padding: 0;
  padding-bottom: 1rem;
`;
export const TextSuccess = styled(TextError)`
  color: ${(p) => p.theme.colors.primary.dark};
  font-weight: 600;
  text-align: center;
  font-size: 1.5rem;
`;
export const IconSuccess = styled(IoCheckmarkDoneCircle)`
  color: ${(p) => p.theme.colors.primary.dark};
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  background-color: ${(p) => p.theme.colors.primary.light};
  border-radius: 1rem;
  box-shadow: 0 0 20px 0 ${(p) => p.theme.colors.primary.light};
  padding: 3rem 2rem;
  width: 80vw;
  ${(p) => p.theme.media.md} {
    width: 40vw;
  }
  ${(p) => p.theme.media.lg} {
    width: 30vw;
  }
`;

export const Input = styled.input`
  color: ${(p) => p.theme.colors.grey[50]};
  background-color: ${(p) => p.theme.colors.primary.dark};
  padding: 1.2rem;
  width: 100%;
  border: 0;
  border-radius: 0.3rem;
  outline: none;
  margin: 0;
  margin-bottom: 1rem;
  opacity: 0.8;

  ::placeholder {
    color: ${(p) => p.theme.colors.primary.light};
  }
  :focus-visible {
    opacity: 1;
  }
`;

export const InputSubmit = styled.input.attrs((p) => ({
  type: "submit",
}))`
  margin-top: 2rem;
  font-weight: 800;
  cursor: pointer;
  padding: 1rem;
  width: 100%;
  text-transform: uppercase;
  border: none;
  background-color: ${(p) => p.theme.colors.primary.dark};
  border: 1px solid ${(p) => p.theme.colors.primary.dark};
  color: ${(p) => p.theme.colors.primary.light};
  :hover {
    opacity: 0.9;
  }
  :active {
    opacity: 1;
  }
  :disabled {
    opacity: 0.8;
    background-color: ${(p) => p.theme.colors.primary.light};
    color: ${(p) => p.theme.colors.primary.dark};
    cursor: default;
  }
`;
