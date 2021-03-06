import { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import ReactSlickClass from "react-slick";
import styled from "styled-components";
import { Container, Grid, GridItem, H5, Item, Text } from "../../elements";
import { data, sliderSettings } from "./data";
import "./slick.min.css";
import {
  Controls,
  LearnButton,
  SlickItem,
  SlickItemImg,
  SlickItemText,
  StyledReactSlick,
  styles,
  Title,
} from "./styles";

export const Carousel = styled(({ className }) => {
  const [sliderRef, setSliderRef] = useState<ReactSlickClass | null>(null);

  return (
    <div className={className}>
      <Container maxWidth="md">
        <Grid cols={{ xs: "1", md: "4" }}>
          <GridItem gridCol={{ md: "1/span 3" }}>
            <Title>Find out more about us</Title>
          </GridItem>
          <Controls
            direction="row"
            justifyContent={{ xs: "center", md: "flex-end" }}
          >
            <FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
            <FaArrowCircleRight onClick={sliderRef?.slickNext} />
          </Controls>
        </Grid>

        <StyledReactSlick {...sliderSettings} ref={setSliderRef}>
          {data.map(({ title, description, image }) => (
            <SlickItem
              key={title}
              direction="column"
              justifyContent="space-between"
            >
              <Item>
                <SlickItemImg src={image} alt={title} />
                <SlickItemText>
                  <H5>{title}</H5>
                  <Text>{description}</Text>
                </SlickItemText>
              </Item>
              <Item>
                <LearnButton>Learn More</LearnButton>
              </Item>
            </SlickItem>
          ))}
        </StyledReactSlick>
      </Container>
    </div>
  );
})`
  ${styles}
`;
