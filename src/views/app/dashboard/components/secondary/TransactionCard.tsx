import { Box, Divider, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";

interface TransactionCardProps {
  accountName: string;
  detail: string;
  value: string;
  type: "in" | "out";
}

const TransactionCard: FC<TransactionCardProps> = ({
  accountName,
  detail,
  value,
  type,
}) => {
  const baseTextStyle = {
    fontSize: 12,
  };

  const valueStyles = {
    bgNormal: useColorModeValue("black", "white"),
    colorNormal: useColorModeValue("white", "black"),
  };

  return (
    <>
      <Flex justifyContent="space-between" alignItems="end">
        <Box>
          <Text
            fontWeight={600}
            {...baseTextStyle}
            overflow="hidden "
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            maxW="180px"
          >
            {accountName}
          </Text>
          <Text
            {...baseTextStyle}
            overflow="hidden "
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            maxW="180px"
          >
            {detail}
          </Text>
        </Box>
        <Box
          p={1}
          bg={type === "out" ? "red.500" : valueStyles.bgNormal}
          rounded={8}
          color={type === "out" ? "white" : valueStyles.colorNormal}
        >
          <Text
            fontSize={12}
            fontWeight={600}
            whiteSpace="nowrap"
          >
            {value}
          </Text>
        </Box>
      </Flex>
      <Divider my={4} color={useColorModeValue("gray.100", "gray.900")} />
    </>
  );
};
export default TransactionCard;
