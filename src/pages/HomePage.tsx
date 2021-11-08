import { Carousel } from "../components/carousel/Carousel";
import { Features } from "../components/features/Features";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { HeroWrapper } from "../components/hero/HeroWrapper";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Features />
      <HeroWrapper />
      <Carousel />
      <Footer />
    </>
  );
};
