import { useNavigate } from "react-router-dom";
import useGenreStore from "@/features/genre-filter/store/genre-store";

const useGenreSelection = () => {
  const setSelectedGenreId = useGenreStore((s) => s.setGenreId);
  const navigate = useNavigate();

  const selectGenre = (genreId?: number) => {
    setSelectedGenreId(genreId);
    navigate("/");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return { selectGenre };
};

export default useGenreSelection;
