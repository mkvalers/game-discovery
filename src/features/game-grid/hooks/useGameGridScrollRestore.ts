import { useLayoutEffect, useRef } from "react";

interface UseGameGridScrollRestoreParams {
  isLoading: boolean;
  gamesLength: number;
}

const useGameGridScrollRestore = ({
  isLoading,
  gamesLength,
}: UseGameGridScrollRestoreParams) => {
  const hasRestoredScrollRef = useRef(false);

  const saveScrollPosition = () => {
    sessionStorage.setItem("gameGridScrollY", String(window.scrollY));
  };

  useLayoutEffect(() => {
    if (hasRestoredScrollRef.current) return;

    const storedScrollY = sessionStorage.getItem("gameGridScrollY");
    if (!storedScrollY) return;

    const targetScrollY = Number(storedScrollY);
    window.scrollTo({ top: targetScrollY, left: 0, behavior: "auto" });

    const reachedTarget = Math.abs(window.scrollY - targetScrollY) <= 2;
    if (!reachedTarget && isLoading) return;

    hasRestoredScrollRef.current = true;
    sessionStorage.removeItem("gameGridScrollY");
  }, [isLoading, gamesLength]);

  return { saveScrollPosition };
};

export default useGameGridScrollRestore;
