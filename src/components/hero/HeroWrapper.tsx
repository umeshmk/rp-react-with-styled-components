import { Container } from "../../elements";
import { data } from "./data";
import { Hero } from "./Hero";

export const HeroWrapper = () => {
  return (
    <Container>
      {data.map((hero) => (
        <Hero key={hero.title} data={hero} />
      ))}
    </Container>
  );
};
