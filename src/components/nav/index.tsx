import { useState } from "react";
import styled from "styled-components";
import { Flex, Modal } from "../../elements";
import {
  LinksIcon,
  Logo,
  LogoIcon,
  ModalLink,
  NavLink,
  styles,
} from "./styles";

export const Nav = styled(({ className }) => {
  const [openModal, setOpenModal] = useState(false);
  const links = ["about", "pricing", "contact"];

  return (
    <nav className={className}>
      {/* Navbar */}
      <Flex justifyContent="space-between" alignItems="center">
        <Flex className="logo" alignItems="center">
          <LogoIcon src="/assets/logo.png" alt="logo" />
          <Logo to="/">Delta</Logo>
        </Flex>

        <Flex>
          <LinksIcon size="1.5rem" onClick={() => setOpenModal(true)} />
          {links.map((link) => (
            <NavLink to={"/" + link} key={link}>
              {link}
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
          {links.map((link) => (
            <ModalLink to={link} key={link}>
              {link}
            </ModalLink>
          ))}
        </Flex>
      </Modal>
    </nav>
  );
})`
  ${styles}
`;
