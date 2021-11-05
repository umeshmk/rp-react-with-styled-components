import styled from "styled-components";

export const Button = styled.button`
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid #ffffff;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s;
  background-color: #fff;
  color: #000;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 600;
  &:hover {
    color: #000000;
    background-color: #ffffff;
  }
  &:active {
    box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.35);
  }
`;
