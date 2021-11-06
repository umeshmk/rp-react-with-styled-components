import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Container, Flex, Item } from "../../elements";
import { HeroType } from "./data";
import { HeroBox, HeroButton, HeroImg, HeroTitle } from "./styles";

const framer = (trigger: boolean) => ({
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: trigger && {
    opacity: 1,
    y: 0,
  },
  transition: {
    // duration: 1.5,
    // type: "tween",
    type: "spring",
    stiffness: 60,
  },
});

export const Hero: React.FC<{ data: HeroType }> = ({ data }) => {
  const { ref, inView, entry } = useInView({ threshold: 0.6 });
  const [animate, setAnimate] = useState(framer(false));

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
    if (inView) setAnimate(framer(true));
  }, [inView]);

  return (
    <>
      <HeroBox inverse={inverseColor} ref={ref}>
        <Container maxWidth="md">
          <motion.div {...animate}>
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
                  md: reversePosition ? "flex-end" : "flex-start",
                }}
                justifyContent={{ md: "center" }}
              >
                <small>{topText}</small>
                <HeroTitle>{title}</HeroTitle>
                <p>{description}</p>
                <HeroButton inverse={inverseColor}>{buttonLabel}</HeroButton>
              </Flex>
            </Flex>
          </motion.div>
        </Container>
      </HeroBox>
    </>
  );
};
