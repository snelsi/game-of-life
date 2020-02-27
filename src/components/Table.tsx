import React from "react";
import styled from "styled-components";

import { Cell } from "components";
import { toCellKey } from "scripts";

export interface TableProps {
  aliveCells: Set<string>;
  onCellClick: (column: number, row: number) => void;
  rows: number;
  columns: number;
}
export const Table: React.FC<TableProps> = ({ aliveCells, onCellClick, rows, columns }) => {
  const arrayPlaceholder = Array.from({ length: rows }).map(() => Array.from({ length: columns }));
  return (
    <Grid>
      {arrayPlaceholder.map((rows, i: number) =>
        rows.map((_, j) => {
          const key = toCellKey(i, j);
          const alive = aliveCells.has(key);

          return (
            <Cell key={key} className={alive ? "alive" : ""} onClick={() => onCellClick(i, j)} />
          );
        }),
      )}
    </Grid>
  );
};

export const Grid = styled.div`
  border: 2px solid #393939;
  display: grid;
  grid-template-columns: repeat(50, 24px);

  max-height: calc(100vh - 112px);

  height: 100%;
  width: 100%;

  overflow: auto;
`;