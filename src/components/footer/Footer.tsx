import styled from "styled-components";
import { Container, Flex, Grid, GridItem, Text, H5 } from "../../elements";
import { url } from "../../utility/url";
import { Logo, LogoIcon } from "../nav/styles";
import { data, dataSocial } from "./data";
import {
  Address,
  Links,
  LinksGroup,
  LinksTitle,
  SocialIcons,
  styles,
} from "./styles";

export const Footer = styled(({ className }) => {
  return (
    <div className={className}>
      <Container className="container" maxWidth="md">
        <Grid cols={{ xs: "1", md: "11" }} gap="5rem">
          <GridItem gridCol={{ xs: "1/span 1", md: "2/5", lg: "2/5" }}>
            <Flex
              direction={{ xs: "column", md: "row" }}
              alignItems={{ xs: "center", md: "center" }}
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <LogoIcon src={url("assets/logo.png")} alt="logo" />
              <Logo className="logo" to="/">
                Delta
              </Logo>
            </Flex>

            <Address>
              <Text>
                69 Street, Delta Building <br />
                US Road, Los Angeles 123
              </Text>
            </Address>

            <Flex justifyContent={{ xs: "space-around", md: "flex-start" }}>
              {dataSocial.map(({ name, icon: Icon }) => (
                <SocialIcons key={name}>
                  <Icon />
                </SocialIcons>
              ))}
            </Flex>
          </GridItem>
          <GridItem gridCol={{ md: "5/11" }}>
            <Grid cols={{ xs: "2", md: "4" }} gap="2rem">
              {data.map((group) => (
                <LinksGroup
                  direction="column"
                  // justifyContent=""
                  key={group.title}
                >
                  <LinksTitle>{group.title}</LinksTitle>
                  <Links>
                    {group.links.map((link) => (
                      <li key={link}>
                        <Text>{link}</Text>
                      </li>
                    ))}
                  </Links>
                </LinksGroup>
              ))}
            </Grid>
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
})`
  ${styles}
`;
