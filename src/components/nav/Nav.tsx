import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, Flex, H5, Modal, Text } from "../../elements";
import { url } from "../../utility/url";
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
    to: url("/"), // url() since it's <a> for hash
    hash: "#about",
    text: "About",
    id: "about",
  },
  {
    to: "/pricing", // url() not needed since it will use router
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
            <LogoIcon src={url("assets/logo.png")} alt="logo" />
            <Logo to="/">Delta</Logo>
          </Flex>
          <Flex>
            <LinksIcon size="1.5rem" onClick={() => setOpenModal(true)} />
            {links.map(({ id, text, to, hash }) => (
              <NavLink key={id}>
                <Text>
                  {!hash && <Link to={to}>{text}</Link>}
                  {/* {hash && <Link to={{ pathname: to, hash: hash }}>{text}</Link>} */}
                  {hash && <a href={to + hash}>{text}</a>}
                </Text>
              </NavLink>
            ))}
          </Flex>
        </Flex>

        {/* Modal */}
        <Modal className="modal" open={openModal} handleClose={closeModal}>
          <Flex direction="column" alignItems="center">
            {links.map(({ id, text, to, hash }) => (
              <ModalLink key={id}>
                <H5>
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
                </H5>
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
