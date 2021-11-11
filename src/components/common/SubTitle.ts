import styled from "styled-components";
import { Text } from "../../elements";

export const Subtitle = styled(Text)`
  text-transform: capitalize;
  font-weight: ${(p) => p.theme.typography.fontWeightMedium};
  color: ${(p) => p.theme.colors.primary.light};
  margin-bottom: 3rem;
  text-align: center;
`;
