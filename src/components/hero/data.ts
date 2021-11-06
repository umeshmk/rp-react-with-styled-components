export type HeroType = {
  reversePosition: boolean;
  inverseColor: boolean;
  topText: string;
  title: string;
  description: string;
  buttonLabel: string;
  imgStart: string;
  img: string;
  start: boolean;
};

const heroOne: HeroType = {
  reversePosition: false,
  inverseColor: true,
  topText: "Founded in 2012",
  title: "We've been in business for 9 years",
  description:
    "We have designed and implemented the best cloud security solutions",
  buttonLabel: "Find More",
  imgStart: "start",
  img: "/assets/svg/Deal.svg",
  start: true,
};

const heroTwo: HeroType = {
  reversePosition: true,
  inverseColor: false,
  topText: "Designed & Developed",
  title: "The best practices",
  description: "Our clients have had the best experience working with us",
  buttonLabel: "View Project",
  // linkTo: "/more",
  imgStart: "start",
  img: "/assets/svg/Connection.svg",
  start: true,
};

const heroThree: HeroType = {
  reversePosition: false,
  inverseColor: true,
  topText: "Highly reputed brand",
  title: "Why us? ",
  description:
    "Our 9 year experience have allowed us to use the most innovative technologies and methodologies",
  buttonLabel: "View Project",
  // linkTo: "/download",
  imgStart: "",
  img: "/assets/svg/ChartUp.svg",
  start: true,
};

export const data = [heroOne, heroTwo, heroThree];
