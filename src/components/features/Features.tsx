import styled from "styled-components";
import { Container, Grid } from "../../elements";
import { data } from "./data";
import { FeatureBox, FeatureTitle, styles } from "./styles";

export const Features = styled(({ className }) => {
  return (
    <>
      <Container maxWidth="md" className={className}>
        <h1>What we offer</h1>
        <Grid
          cols={{ xs: "1", md: "3" }}
          rows={{ xs: "6", md: "2" }}
          gap="5rem"
          justifyContent="space-around"
        >
          {data.map(({ description, id, Icon, name }) => (
            <FeatureBox key={id} direction="column" alignItems="center">
              <Icon />
              <FeatureTitle>{name}</FeatureTitle>
              <p>{description}</p>
            </FeatureBox>
          ))}
        </Grid>
      </Container>
    </>
  );
})`
  ${styles}
`;
