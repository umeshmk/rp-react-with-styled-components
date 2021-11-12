import { IoCheckmarkDoneCircle } from "react-icons/io5";
import styled, { css } from "styled-components";
import { Text } from "../../elements";

export const styles = css`
  min-height: 100vh;
  background-color: ${(p) => p.theme.colors.primary.dark};
  margin: 0;
  padding: 10rem 2rem;
`;

export const TextError = styled(Text)`
  color: ${(p) => p.theme.colors.primary.dark};
  padding-bottom: 1rem;
`;

export const TextSuccess = styled(TextError)`
  font-size: 1.6em;
  font-weight: ${(p) => p.theme.typography.fontWeightMedium};
`;

export const IconSuccess = styled(IoCheckmarkDoneCircle)`
  color: ${(p) => p.theme.colors.primary.dark};
  margin-bottom: 0.5rem;
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
  ${(p) => p.theme.media.xsLandscape} {
    width: 60vw;
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
