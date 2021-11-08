import { useState } from "react";
import { Link } from "react-router-dom";
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
    hash: "#about",
    text: "About",
    id: "about",
  },
  {
    to: "/pricing",
    hash: "",
    text: "Pricing",
    id: "pricing",
  },
  {
    to: "/signup",
    hash: "",
    text: "Contact",
    id: "contact",
  },
];

export const Nav = styled(({ className }) => {
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => setOpenModal(false);

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
            {links.map(({ id, text, to, hash }) => (
              <NavLink key={id}>
                {!hash && <Link to={to}>{text}</Link>}
                {/* {hash && <Link to={{ pathname: to, hash: hash }}>{text}</Link>} */}
                {hash && <a href={to + hash}>{text}</a>}
              </NavLink>
            ))}
          </Flex>
        </Flex>

        {/* Modal */}
        <Modal className="modal" open={openModal} handleClose={closeModal}>
          <Flex direction="column" alignItems="center">
            {links.map(({ id, text, to, hash }) => (
              <ModalLink key={id}>
                {!hash && (
                  <Link to={to} onClick={closeModal}>
                    {text}
                  </Link>
                )}
                {hash && (
                  <a href={to + hash} onClick={closeModal}>
                    {text}
                  </a>
                )}
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
