import { useInfiniteQuery, type InfiniteData } from "@tanstack/react-query";
import { AxiosError } from "axios";
import rawgApiClient, {
  type FetchGamesResponse,
  type Game,
} from "../rawg-api-client";
import type { GameOrdering } from "../types";

export type { Game, FetchGamesResponse };

const useGames = (
  genreId?: number,
  searchQuery?: string,
  ordering?: GameOrdering,
) => {
  return useInfiniteQuery<
    FetchGamesResponse,
    AxiosError,
    InfiniteData<FetchGamesResponse>,
    [string, number | undefined, string, GameOrdering],
    string | undefined
  >({
    queryKey: ["games", genreId, searchQuery ?? "", ordering ?? ""],
    initialPageParam: undefined as string | undefined,
    queryFn: async ({ pageParam }): Promise<FetchGamesResponse> => {
      if (!pageParam) {
        return await rawgApiClient.getGames(genreId, searchQuery, ordering);
      }

      return await rawgApiClient.getGamesByUrl(pageParam);
    },
    getNextPageParam: (lastPage) => lastPage.next ?? undefined,
    staleTime: 1000 * 60 * 5,
  });
};

export default useGames;
