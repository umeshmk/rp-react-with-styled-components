import styled from "styled-components";
import { H2 } from "../../elements";

export const Title = styled(H2)`
  padding-bottom: 1rem;
  font-weight: ${(p) => p.theme.typography.fontWeightBold};
  color: ${(p) => p.theme.colors.grey[100]};
  text-align: center;
  text-transform: capitalize;
`;
