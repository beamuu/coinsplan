import {
  Box,
  Flex,
  Heading,
  ScaleFade,
  Divider,
  useColorModeValue,
  Input,
  Text,
} from "@chakra-ui/react";
import { ChangeEvent, FC, useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { coinsplan500 } from "../../../../styles/color";

const Amount: FC = () => {
  const dividerStyles = {
    color: useColorModeValue("gray.700", "gray.300"),
  };
  const inputContainerStyles = {
    alignItems: "center",
    justifyContent: "space-between",
    py: 3,
    px: 5,
    rounded: 8,
    border: "1px solid",
    borderColor: useColorModeValue("black", "white"),
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value)
  }
  const [amount, setAmount] = useState<string>("");
  return (
    <Box>
      <Flex alignItems="center" gap={4} mb={6}>
        <Flex alignItems="center" gap={2}>
          <Heading size="sm" whiteSpace="nowrap">
            2. Amount
          </Heading>
          <ScaleFade initialScale={0.9} in={!!amount}>
            <BsFillCheckCircleFill size="22px" color={coinsplan500} />
          </ScaleFade>
        </Flex>
        <Divider {...dividerStyles} />
      </Flex>
      <Flex {...inputContainerStyles}>
        <Input
          variant="unstyled"
          placeholder="0.00"
          fontFamily="'DM Mono' !important"
          fontWeight={500}
          letterSpacing={1}
          value={amount}
          onChange={handleInputChange}
        />
        <Text fontWeight={600}>USD</Text>
      </Flex>
    </Box>
  );
};
export default Amount;
