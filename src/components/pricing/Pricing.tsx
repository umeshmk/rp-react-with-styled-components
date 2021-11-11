import { MdBookmarkAdded } from "react-icons/md";
import styled from "styled-components";
import { Container, Grid, Item } from "../../elements";
import { Subtitle, Title } from "../common";
import { data } from "./data";
import {
  Card,
  CardButton,
  CardFeatures,
  CardPrice,
  CardTitle,
  styles,
} from "./styles";

export const Pricing = styled(({ className }) => {
  return (
    <div className={className}>
      <Container maxWidth="md">
        <Title>Pick your best option</Title>
        <Subtitle>Create, maintain and store your data with Delta.</Subtitle>

        <Grid cols={{ xs: "1", md: "2", lg: "4" }} gap="4rem">
          {data.map(({ features, price, title }) => (
            <Card
              direction="column"
              // alignItems="center"
              justifyContent="space-between"
              key={title}
            >
              <Item>
                <CardTitle>{title}</CardTitle>
                <CardPrice>{price}</CardPrice>
                <CardFeatures>
                  {features.map((feature) => (
                    <li key={feature}>
                      <MdBookmarkAdded />
                      {feature}
                    </li>
                  ))}
                </CardFeatures>
              </Item>
              <CardButton to="/signup">Get Started</CardButton>
            </Card>
          ))}
        </Grid>
      </Container>
    </div>
  );
})`
  ${styles}
`;
