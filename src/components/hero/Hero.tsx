import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Container, Flex, Item } from "../../elements";
import { HeroType } from "./data";
import { HeroBox, HeroButton, HeroImg, HeroTitle } from "./styles";

export const Hero: React.FC<{ data: HeroType }> = ({ data }) => {
  const { ref, inView, entry } = useInView({ threshold: 0.3 });
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
  } = data;

  useEffect(() => {
    // console.log(title, "--", inView);
    // console.log(entry);
  }, [inView]);

  return (
    <>
      <HeroBox key={title} inverse={inverseColor} ref={ref}>
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
    </>
  );
};
