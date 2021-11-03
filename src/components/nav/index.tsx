import styled from "styled-components";
import { Grid, Item } from "../../elements";
import { styles } from "./styles";

export const Nav = styled(({ className }) => {
  return (
    <nav className={className}>
      <Grid rows="10" cols="12">
        <Item spanCol="1/span 12" spanRow="1/3">
          item 1
        </Item>
        <Item spanCol="1/4" spanRow="3/6">
          item 2
        </Item>
        <Item spanCol="4/6">item 3</Item>
        <Item>item 4</Item>
        <Item>item 5</Item>
        <Item>item 6</Item>
        <Item>item 7</Item>
        <Item>item 8</Item>
        <Item>item 9</Item>
        <Item>item 10</Item>
        <Item>item 11</Item>
        <Item>item 12</Item>
        <Item>item 13</Item>
      </Grid>
    </nav>
  );
})`
  ${styles}
`;
