import styled from "styled-components";
import { Container, Flex, Item } from "../../elements";
import { data } from "./data";
import { HeroBox, HeroButton, HeroImg, HeroTitle, styles } from "./styles";

export const Hero = styled(({ className }) => {
  return (
    <Container className={className}>
      {data.map((hero) => {
        const {
          reversePosition,
          inverseColor,
          topText,
          title,
          description,
          buttonLabel,
          imgStart,
          img,
          start,
        } = hero;

        return (
          <HeroBox key={title} inverse={inverseColor}>
            <Container maxWidth="md">
              <Flex
                direction={{
                  xs: "column",
                  md: reversePosition ? "row-reverse" : "row",
                }}
                justifyContent={{ md: "space-around" }}
                alignItems={{ xs: "center" }}
              >
                <Item>
                  <HeroImg src={img} />
                </Item>
                <Flex
                  direction="column"
                  alignItems={{
                    // xs: "center",
                    md: reversePosition ? "flex-end" : "flex-start",
                  }}
                  //   alignContent={{ xs: "center" }}
                  justifyContent={{ md: "center" }}
                >
                  <small>{topText}</small>
                  <HeroTitle>{title}</HeroTitle>
                  <p>{description}</p>
                  <HeroButton inverse={inverseColor}>{buttonLabel}</HeroButton>
                </Flex>
              </Flex>
            </Container>
          </HeroBox>
        );
      })}
    </Container>
  );
})`
  ${styles}
`;
