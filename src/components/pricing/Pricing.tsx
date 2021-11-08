import { MdBookmarkAdded } from "react-icons/md";
import styled from "styled-components";
import { Container, Grid, Item } from "../../elements";
import { data } from "./data";
import {
  Card,
  CardButton,
  CardFeatures,
  CardPrice,
  CardTitle,
  styles,
  Text,
  Title,
} from "./styles";

export const Pricing = styled(({ className }) => {
  return (
    <div className={className}>
      <Container maxWidth="md">
        <Title>Pick Your Best Option</Title>
        <Text>Create, maintain and store your data with Delta.</Text>

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
              <CardButton>Get Started</CardButton>
            </Card>
          ))}
        </Grid>
      </Container>
    </div>
  );
})`
  ${styles}
`;
