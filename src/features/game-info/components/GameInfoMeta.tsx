import { Badge, Stack, HStack } from "@chakra-ui/react";
import PlatformIcons from "@/components/PlatformIcons";
import type { ParentPlatformEntry } from "@/api-clients/rawg-api-client";

interface Props {
  releaseDate?: string;
  genres: string[];
  parentPlatforms?: ParentPlatformEntry[];
}

const GameInfoMeta = ({ releaseDate, genres, parentPlatforms }: Props) => {
  return (
    <Stack flex="1" align="flex-start" gap={3}>
      {releaseDate && (
        <Badge
          colorPalette="orange"
          variant="subtle"
          px={3}
          py={1.5}
          borderRadius="full"
        >
          Released {releaseDate}
        </Badge>
      )}

      {genres.length > 0 && (
        <HStack gap={2} wrap="wrap">
          {genres.slice(0, 3).map((genre) => (
            <Badge
              key={genre}
              colorPalette="blue"
              variant="subtle"
              px={3}
              py={1.5}
              borderRadius="full"
            >
              {genre}
            </Badge>
          ))}
        </HStack>
      )}

      <PlatformIcons platforms={parentPlatforms} />
    </Stack>
  );
};

export default GameInfoMeta;
