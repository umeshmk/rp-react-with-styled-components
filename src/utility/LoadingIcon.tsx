import ReactLoading from "react-loading";
import styled from "styled-components";
import { Flex } from "../elements";

const Icon = styled(ReactLoading)`
  svg {
    fill: ${(p) => p.theme.colors.primary};
    height: 5rem;
    width: 5rem;
  }
`;

// A simple loading icon
export const LoadingIcon = styled(({ className }) => {
  return (
    <Flex
      className={className}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Icon type="bubbles" />
    </Flex>
  );
})`
  position: fixed;
  z-index: 1000;
  height: 100vh;
  width: 100vw;
  background-color: ${(p) => p.theme.colors.primary.dark};
  color: ${(p) => p.theme.colors.grey[50]};
`;
