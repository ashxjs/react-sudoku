import { ChangeEventHandler, FunctionComponent } from "react";
import { DifficultyEnum } from "../types";

type DifficultySelectorProps = {
  onChange: ChangeEventHandler<HTMLSelectElement>;
  difficulty: DifficultyEnum;
};

export const DifficultySelector: FunctionComponent<DifficultySelectorProps> = ({
  onChange,
  difficulty,
}) => {
  return (
    <div className="status__difficulty">
      <span className="status__difficulty-text">Difficulty:&nbsp;&nbsp;</span>
      <select
        name="status__difficulty-select"
        className="status__difficulty-select"
        defaultValue={difficulty}
        onChange={onChange}
      >
        <option value={DifficultyEnum.EASY}>Easy</option>
        <option value={DifficultyEnum.MEDIUM}>Medium</option>
        <option value={DifficultyEnum.HARD}>Hard</option>
        <option value={DifficultyEnum.EXPERT}>Expert</option>
      </select>
    </div>
  );
};

DifficultySelector.displayName = "DifficultySelector";
