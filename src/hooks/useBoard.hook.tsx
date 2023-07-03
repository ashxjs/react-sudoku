import { ChangeEventHandler, useCallback } from "react";
import { valueIsValid } from "../utils/solver.utils";
import { useGame } from "../contexts/useGame.context";
import { DifficultyEnum } from "../types";
import sudoku from "sudoku";

type UseBoardReturnType = {
  grid: number[];
  difficulty: DifficultyEnum;
  activeCase: number | undefined;
  errorIndex: number;
  toggleActive: (index: number) => void;
  replaceValue: (value: string) => void;
  restartGame: () => void;
  changeDifficulty: ChangeEventHandler<HTMLSelectElement>;
};

export const generateNewGrid = (difficulty = 60): number[] => {
  return sudoku.makepuzzle();
};

export const useBoard = (): UseBoardReturnType => {
  const {
    grid,
    setGrid,
    difficulty,
    setDifficulty,
    activeCase,
    setActiveCase,
    errorIndex,
    setErrorIndex,
  } = useGame();

  const toggleActive = (index: number) => setActiveCase(index);

  const replaceValue = useCallback(
    (value: string) => {
      const isValid = valueIsValid(grid, activeCase, parseInt(value));
      if (!isValid) {
        setErrorIndex(activeCase);
      }

      if (errorIndex === activeCase) {
        setErrorIndex(-1);
      }

      const newGrid = JSON.parse(JSON.stringify(grid));
      newGrid[activeCase] = parseInt(value);

      setGrid(newGrid);
    },
    [activeCase, grid, setGrid, setErrorIndex, errorIndex]
  );

  const changeDifficulty: ChangeEventHandler<HTMLSelectElement> = (e) => {
    var value = e.target.value;
    setDifficulty(parseInt(value));
  };

  const restartGame = () => {
    if (window.confirm("Êtes-vous sur de vouloir recommencer ?")) {
      setGrid(generateNewGrid(difficulty));
    }
  };

  return {
    grid,
    difficulty,
    activeCase,
    toggleActive,
    replaceValue,
    restartGame,
    changeDifficulty,
    errorIndex,
  };
};
