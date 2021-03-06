import { Carousel } from "../components/carousel/Carousel";
import { Features } from "../components/features/Features";
import { Header } from "../components/header/Header";
import { HeroWrapper } from "../components/hero/HeroWrapper";

const HomePage = () => {
  return (
    <>
      <Header />
      <div id="about">
        <Features />
      </div>
      <HeroWrapper />
      <Carousel />
    </>
  );
};

export default HomePage;
