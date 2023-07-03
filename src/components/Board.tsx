import { Cell } from "./Cell";
import { ValueBar } from "./ValueBar";
import { Timer } from "./Timer";
import { useBoard } from "../hooks/useBoard.hook";

export const Board = () => {
  const {
    grid,
    activeCase,
    toggleActive,
    replaceValue,
    restartGame,
    errorIndex,
  } = useBoard();

  const handleOnClickCell = (index: number) => () => {
    toggleActive(index);
  };

  return (
    <>
      <div
        style={{
          width: "95%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Timer />
        <span onClick={() => restartGame()}>Recommencer</span>
      </div>
      <div className="board__wrapper">
        {grid.map((value, index) => (
          <Cell
            isActive={activeCase === index}
            error={errorIndex === index}
            index={index}
            value={value}
            onClick={handleOnClickCell(index)}
          />
        ))}
      </div>
      <ValueBar onClick={(elt) => replaceValue(`${elt}`)} />
    </>
  );
};
