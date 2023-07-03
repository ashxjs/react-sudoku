import { FunctionComponent, useMemo } from "react";
import { isOdd } from "../utils/utils";
import { buildCellBorder } from "../utils/cell.utils";

type CellProps = {
  error: boolean;
  index: number;
  isActive: boolean;
  onClick: () => void;
  value: number | undefined;
};

export const Cell: FunctionComponent<CellProps> = ({
  index,
  value,
  error,
  isActive,
  onClick,
}) => {
  const classes = useMemo(() => buildCellBorder(index), [index]);
  const bgClass = error ? "error" : isOdd(index) ? "odd" : "even";

  return (
    <span
      key={`case-${index}`}
      className={`case-value ${bgClass} ${classes}`}
      data-active={isActive}
      onClick={onClick}
    >
      <span style={{ visibility: value ? "visible" : "hidden" }}>{value}</span>
    </span>
  );
};
