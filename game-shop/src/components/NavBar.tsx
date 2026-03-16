import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.avif";
import { useColorModeValue } from "./ui/color-mode";
import { IoCartOutline } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";

const NavBar = () => {
  const surface = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
  const textColor = useColorModeValue("gray.900", "gray.100");
  const navMuted = useColorModeValue("gray.100", "whiteAlpha.100");
  const navHover = useColorModeValue("gray.200", "whiteAlpha.200");
  const navActiveBg = useColorModeValue("orange.50", "orange.900");
  const navActiveBorder = useColorModeValue("orange.300", "orange.500");
  const navActiveText = useColorModeValue("orange.700", "orange.200");
  const mutedChip = useColorModeValue("gray.100", "whiteAlpha.100");
  const mutedChipHover = useColorModeValue("gray.200", "whiteAlpha.200");

  return (
    <>
      <nav>
        <HStack
          justify={"space-between"}
          mb={4}
          px={{ base: 3, md: 4 }}
          py={{ base: 2.5, md: 3 }}
          borderRadius="2xl"
          bg={surface}
          borderWidth="1px"
          borderColor={borderColor}
          boxShadow="md"
        >
          <HStack>
            <Box
              boxSize={14}
              display="flex"
              alignItems="center"
              justifyContent="center"
              mr={3}
            >
              <Link to="/">
                <IoGameControllerOutline size={50} />
              </Link>
            </Box>

            <NavLink to="/">
              {({ isActive }) => (
                <Box
                  px={3}
                  py={1.5}
                  borderRadius="full"
                  bg={isActive ? navActiveBg : navMuted}
                  borderWidth="1px"
                  borderColor={isActive ? navActiveBorder : borderColor}
                  transition="background-color 0.2s ease, border-color 0.2s ease"
                  _hover={{ bg: isActive ? navActiveBg : navHover }}
                >
                  <Text
                    fontWeight="semibold"
                    color={isActive ? navActiveText : textColor}
                  >
                    Home
                  </Text>
                </Box>
              )}
            </NavLink>
          </HStack>

          <HStack gap={2}>
            <Box
              boxSize={10}
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="full"
              borderWidth="1px"
              transition="background-color 0.2s ease"
            >
              <Link to="/cart">
                <IoCartOutline size={40} />
              </Link>
            </Box>
          </HStack>
        </HStack>
      </nav>
    </>
  );
};

export default NavBar;
