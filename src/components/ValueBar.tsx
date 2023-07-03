import { FunctionComponent } from "react";
import { AUTHORIZED_NUMBER } from "../constants";

type ValueBarProps = {
  onClick: (elt: number) => void;
};

export const ValueBar: FunctionComponent<ValueBarProps> = ({ onClick }) => {
  return (
    <div className="number__wrapper">
      {AUTHORIZED_NUMBER.map((elt) => (
        <span
          key={`number-${elt}`}
          className="number__content"
          onClick={() => onClick(elt)}
        >
          {elt}
        </span>
      ))}
    </div>
  );
};
