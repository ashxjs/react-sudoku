import { NB_ITEM_LINE } from "../constants";
import { RowColumn } from "../types";

const isValueValidSquare = (grid: number[], i: number, value: number) => {
  const { row, column } = indexToRowColumn(i);

  let r1 = Math.floor(row / 3) * 3;
  let c1 = Math.floor(column / 3) * 3;
  for (let r = r1; r < r1 + 3; ++r) {
    for (let c = c1; c < c1 + 3; ++c) {
      if (grid[rowColumnToIndex({ row: r, column: c })] === value) {
        return false;
      }
    }
  }

  return true;
};

const isValueValidColumn = (
  grid: number[],
  i: number,
  value: number
): boolean => {
  const { row } = indexToRowColumn(i);
  for (let c = 0; c < 9; ++c) {
    if (grid[rowColumnToIndex({ row, column: c })] === value) {
      return false;
    }
  }

  return true;
};

const isValueValidRow = (grid: number[], i: number, value: number): boolean => {
  const { column } = indexToRowColumn(i);
  for (let r = 0; r < 9; ++r) {
    if (grid[rowColumnToIndex({ row: r, column })] === value) {
      return false;
    }
  }

  return true;
};

export const indexToRowColumn = (index: number): RowColumn => {
  return {
    row: Math.floor(index / NB_ITEM_LINE),
    column: index % NB_ITEM_LINE,
  };
};

export const rowColumnToIndex = ({ row, column }: RowColumn): number => {
  return row * NB_ITEM_LINE + column;
};

export const valueIsValid = (
  grid: number[],
  i: number,
  value: number
): boolean => {
  if (
    !isValueValidRow(grid, i, value) ||
    !isValueValidColumn(grid, i, value) ||
    !isValueValidSquare(grid, i, value)
  ) {
    return false;
  }

  return true;
};
