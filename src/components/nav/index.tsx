import styled from "styled-components";
import { Grid, Item } from "../../elements";
import { styles } from "./styles";

export const Nav = styled(({ className }) => {
  return (
    <nav className={className}>
      <Grid rows="10" cols={{ xs: "10", md: "5" }}>
        {/* <Grid rows="10" cols="10"> */}
        <Item gridCol={{ xs: "1/span 7", md: "1/span 5" }}>item 1</Item>
        <Item gridCol="1/4" gridRow="3/6">
          item 2
        </Item>
        <Item gridCol="4/6">item 3</Item>
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
        <Item>item 14</Item>
        <Item>item 15</Item>
        <Item>item 16</Item>
      </Grid>
    </nav>
  );
})`
  ${styles}
`;
