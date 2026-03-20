import useGenres from "../../../api-clients/hooks/useGenres";
import useGenreStore from "../store/genre-store";
import useGenreSelection from "../hooks/useGenreSelection";
import GenreList from "./GenreList";
import GenreListSkeleton from "./GenreListSkeleton";

const AsideBar = () => {
  const selectedGenreId = useGenreStore((s) => s.genreId);
  const { data: genresData, isLoading } = useGenres();
  const { selectGenre } = useGenreSelection();

  if (isLoading) return <GenreListSkeleton />;

  return (
    <GenreList
      genres={genresData?.results ?? []}
      selectedGenreId={selectedGenreId}
      onSelectGenre={selectGenre}
    />
  );
};

export default AsideBar;
