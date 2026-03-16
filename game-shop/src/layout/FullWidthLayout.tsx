import { Box } from "@chakra-ui/react/box";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const FullWidthLayout = () => {
  return (
    <Box mx={{ base: 3, md: 6, lg: 10 }} my={{ base: 4, md: 6, lg: 5 }}>
      <NavBar />
      <Box mt={6}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default FullWidthLayout;
