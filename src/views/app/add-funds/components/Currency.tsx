import {
  Box,
  Divider,
  Flex,
  Heading,
  ScaleFade,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { coinsplan500 } from "../../../../styles/color";

const mocks = [
  { name: "USD Tether", symbol: "USDT" },
  { name: "USD Coin", symbol: "USDC" },
  { name: "Binance USD", symbol: "BUSD" },
];

interface SelectorProps {
  name: string;
  symbol: string;
  index: number;
  current?: number;
  onClick: (indx: number) => void;
}

const Selector: FC<SelectorProps> = ({
  name,
  symbol,
  index,
  current,
  onClick,
}) => {
  const activeContainerStyles = {
    border: "none",
    boxShadow: `0 0 0 4px ${coinsplan500}`,
  };

  const containerStyles = {
    rounded: 14,
    boxShadow: useColorModeValue("0 0 0 1px #00000080", "0 0 0 1px #ffffff80"),
    color: useColorModeValue("black", "white"),
    py: 6,
    px: 3,
    w: "full",
    mb: 5,
    cursor: "pointer",
    transition: "200ms ease",
  };

  return (
    <Box
      {...containerStyles}
      {...(current === index ? activeContainerStyles : undefined)}
      onClick={() => onClick(index)}
    >
      <Text fontSize={28} fontWeight={600}>{symbol}</Text>
      <Text fontWeight={500}>{name}</Text>
    </Box>
  );
};

const Currency: FC = () => {
  const dividerStyles = {
    color: useColorModeValue("gray.700", "gray.300"),
  };

  const [current, setCurrent] = useState<number | undefined>();

  return (
    <Box>
      <Flex alignItems="center" gap={4} mb={6}>
        <Flex alignItems="center" gap={2}>
          <Heading size="sm" whiteSpace="nowrap">
            1. Select currency
          </Heading>
          <ScaleFade initialScale={0.9} in={current !== undefined}>
            <BsFillCheckCircleFill size="22px" color={coinsplan500} />
          </ScaleFade>
        </Flex>
        <Divider {...dividerStyles} />
      </Flex>

      {mocks.map((e, index) => (
        <Selector
          {...e}
          key={`currency-selector-${index}`}
          index={index}
          current={current}
          onClick={(indx: number) => setCurrent(indx)}
        />
      ))}
    </Box>
  );
};
export default Currency;
