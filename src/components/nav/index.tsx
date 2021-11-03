import styled from "styled-components";
import { styles } from "./styles";

export const Nav = styled(({ className }) => {
  return (
    <nav className={className}>
      <h1>Navbar</h1>
    </nav>
  );
})`
  ${styles}
`;
