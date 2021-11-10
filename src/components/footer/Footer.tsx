import styled from "styled-components";
import { Container, Flex, Grid, GridItem } from "../../elements";
import { url } from "../../utility/url";
import { Logo, LogoIcon } from "../nav/styles";
import { data, dataSocial } from "./data";
import { Address, Links, LinksGroup, SocialIcons, styles } from "./styles";

export const Footer = styled(({ className }) => {
  return (
    <div className={className}>
      <Container maxWidth="md">
        <Grid cols={{ xs: "1", md: "5" }} gap="5rem">
          <GridItem gridCol="1/span 1">
            <Flex
              alignItems="center"
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <LogoIcon src={url("assets/logo.png")} alt="logo" />
              <Logo to="/">Delta</Logo>
            </Flex>

            <Address>
              69 Street, Delta Building, <br />
              US Road, Los Angeles 123
            </Address>

            <Grid cols="5">
              {dataSocial.map(({ name, icon: Icon }) => (
                <SocialIcons key={name}>
                  <Icon />
                </SocialIcons>
              ))}
            </Grid>
          </GridItem>
          <GridItem gridCol={{ md: "2/span 4" }}>
            <Grid cols={{ xs: "2", md: "4" }} gap="2rem">
              {data.map((group) => (
                <LinksGroup
                  direction="column"
                  justifyContent="space-between"
                  key={group.title}
                >
                  <h2>{group.title}</h2>
                  <Links>
                    {group.links.map((link) => (
                      <li key={link}>{link}</li>
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
