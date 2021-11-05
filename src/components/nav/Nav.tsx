import { useState } from "react";
import styled from "styled-components";
import { Container, Flex, Modal } from "../../elements";
import {
  LinksIcon,
  Logo,
  LogoIcon,
  ModalLink,
  NavLink,
  styles,
} from "./styles";

const links = [
  {
    to: "/",
    text: "About",
    id: "about",
  },
  {
    to: "/pricing",
    text: "Pricing",
    id: "pricing",
  },
  {
    to: "/signup",
    text: "Contact",
    id: "contact",
  },
];

export const Nav = styled(({ className }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <nav className={className}>
      <Container maxWidth="md">
        {/* Navbar */}
        <Flex justifyContent="space-between" alignItems="center">
          <Flex className="logo" alignItems="center">
            <LogoIcon src="/assets/logo.png" alt="logo" />
            <Logo to="/">Delta</Logo>
          </Flex>

          <Flex>
            <LinksIcon size="1.5rem" onClick={() => setOpenModal(true)} />
            {links.map(({ id, text, to }) => (
              <NavLink to={to} key={id}>
                {text}
              </NavLink>
            ))}
          </Flex>
        </Flex>

        {/* Modal */}
        <Modal
          className="modal"
          open={openModal}
          handleClose={() => setOpenModal(false)}
        >
          <Flex direction="column" alignItems="center">
            {links.map(({ id, text, to }) => (
              <ModalLink to={to} key={id}>
                {text}
              </ModalLink>
            ))}
          </Flex>
        </Modal>
      </Container>
    </nav>
  );
})`
  ${styles}
`;
