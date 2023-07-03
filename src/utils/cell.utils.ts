import { indexToRowColumn } from "./solver.utils";

export const buildCellBorder = (index: number) => {
  const { column, row } = indexToRowColumn(index);
  let classes = "";

  if (column % 3 === 2) {
    classes += "right-border ";
  }

  if (row % 3 === 0) {
    classes += "top-border ";
  }
  if (column === 0) {
    classes += "left-border ";
  }

  if (row === 8) {
    classes += "bottom-border ";
  }
  return classes;
};
