import { AiOutlineCloudUpload, AiOutlineSetting } from "react-icons/ai";
import { BiDollar, BiSupport } from "react-icons/bi";
import { BsFillShieldLockFill } from "react-icons/bs";
import { IoIosOptions } from "react-icons/io";

export const data = [
  {
    name: "Best Security",
    description:
      "We offer the best data security to our clients, which makes us stand out",
    Icon: BsFillShieldLockFill,
    id: "one",
  },
  {
    name: "Ease of Use",
    description: "Our system is easy to use and integrate",
    Icon: IoIosOptions,
    id: "two",
  },
  {
    name: "Maintenance",
    description:
      "Our code is written in highest standards, which makes it highly sustainable",
    Icon: AiOutlineSetting,
    id: "three",
  },
  {
    name: "24/7 Support",
    description: "Our team is available at all times in case you need us",
    Icon: BiSupport,
    id: "four",
  },
  {
    name: "Price",
    description: "We offer the highest value/cost ratio",
    Icon: BiDollar,
    id: "five",
  },
  {
    name: "Scalable",
    description:
      "Our servers are located all over the world, therefore improving scalability and speed ",
    Icon: AiOutlineCloudUpload,
    id: "six",
  },
];
