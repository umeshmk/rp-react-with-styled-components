import styled from "styled-components";
import { Container, Flex, Item } from "../../elements";
import { url } from "../../utility/url";
import {
  BackgroundVideo,
  HeaderButton,
  HeaderPara,
  HeaderTitle,
  styles,
} from "./styles";

export const Header = styled(({ className }) => {
  return (
    <header className={className}>
      <BackgroundVideo src={url("assets/hero.mp4")} autoPlay muted loop />
      <Container maxWidth="md">
        <Flex
          className="content"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <HeaderTitle>Your data is secure with us</HeaderTitle>

          <HeaderPara>
            We provide the best security systems for clients all over the world
          </HeaderPara>
          <Item>
            <HeaderButton>Get Started</HeaderButton>
            <HeaderButton>Find More</HeaderButton>
          </Item>
        </Flex>
      </Container>
    </header>
  );
})`
  ${styles}
`;
