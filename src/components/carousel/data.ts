import { Settings } from "react-slick";
import { theme } from "../../theme";
import { url } from "../../utility/url";

export const data = [
  {
    title: "What our clients say",
    description:
      "Our clients happily stay with our services for more several years now. See real reviews from our clients.",
    image: url("assets/clients.jpg"),
  },
  {
    title: "Our security ",
    description:
      "Learn more about our security systems to make sure your data is always safe",
    image: url("assets/security.jpg"),
  },
  {
    title: "Our Team",
    description:
      "Our team consists of the best experts in the industry, learn about them",
    image: url("assets/teamwork.jpg"),
  },
  {
    title: "Our servers",
    description: "Find more about hardware and software used for your service",
    image:
      "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?cs=srgb&dl=pexels-manuel-geissinger-325229.jpg&fm=jpg",
  },
  {
    title: "Our top clients",
    description: "We have provided services to top clients in tech industry",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
  },
];

export const sliderSettings: Settings = {
  // dots: true,
  // infinite: true,
  // speed: 500,
  // slidesToScroll: 1,
  arrows: false,
  slidesToShow: 3,
  focusOnSelect: false,
  accessibility: false,
  responsive: [
    {
      breakpoint: parseInt(theme.maxWidth.xs, 10), // means - @media all (max-width = theme.maxWidth.xs)
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: parseInt(theme.maxWidth.md, 10),
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};
