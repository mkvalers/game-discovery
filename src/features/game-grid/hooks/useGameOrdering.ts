import { useState } from "react";
import type { GameOrdering } from "../../../api-clients/types";

export type { GameOrdering };

export interface GameOrderingOption {
  label: string;
  value: GameOrdering;
}

export const gameOrderingOptions: GameOrderingOption[] = [
  { label: "Relevance", value: "" },
  { label: "Date added", value: "-added" },
  { label: "Name", value: "name" },
  { label: "Release date", value: "-released" },
  { label: "Popularity", value: "-metacritic" },
  { label: "Average rating", value: "-rating" },
];

const useGameOrdering = () => {
  const [ordering, setOrdering] = useState<GameOrdering>("");

  return {
    ordering,
    setOrdering,
  };
};

export default useGameOrdering;
