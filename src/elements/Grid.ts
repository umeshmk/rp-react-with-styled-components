import styled from "styled-components";

type content =
  | "normal"
  | "center"
  | "start"
  | "end"
  | "space-evenly"
  | "space-between"
  | "space-around";

// 12 COLUMN GRID , 13 lines
// RESPONSIVE ???

// Container
export const Grid = styled.div<{
  rows?: string;
  cols?: string;
  justifyContent?: content;
  alignContent?: content;
  gap?: string;
  rowGap?: string;
  colGap?: string;
}>`
  display: grid;

  /* template */
  grid-template-columns: repeat(${(p) => p.cols || 1}, 1fr);
  grid-template-rows: repeat(${(p) => p.rows || 1}, 1fr);
  /* content */
  justify-content: ${(p) => p.justifyContent || "normal"};
  align-content: ${(p) => p.alignContent || "normal"};
  /* gap */
  grid-gap: ${(p) => p.gap || "0 0"};
  row-gap: ${(p) => p.rowGap || "0"};
  column-gap: ${(p) => p.colGap || "0"};
`;

// Item
export const Item = styled.div<{ spanCol?: string; spanRow?: string }>`
  /* border: 1px solid; */
  grid-row: ${(p) => p.spanRow};
  grid-column: ${(p) => p.spanCol};
`;
