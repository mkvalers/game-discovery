import { Badge, HStack, Text } from "@chakra-ui/react";
import { useColorModeValue } from "../../../components/ui/color-mode";
import { FaPlus } from "react-icons/fa";

interface Props {
  price: number;
  metacritic?: number;
}

const GameCardDetails = ({ price, metacritic }: Props) => {
  const priceColor = useColorModeValue("gray.900", "gray.100");

  return (
    <HStack justify={"space-between"} align={"center"}>
      <Text
        textStyle="lg"
        fontWeight="semibold"
        letterSpacing="tight"
        color={priceColor}
      >
        &#8369;{price}
      </Text>
      {metacritic && (
        <Badge
          colorPalette="green"
          variant="subtle"
          borderRadius="md"
          px={1.5}
          py={1}
        >
          <FaPlus style={{ display: "inline", marginRight: "2px" }} />
          {metacritic}
        </Badge>
      )}
    </HStack>
  );
};

export default GameCardDetails;
