import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";

interface StatProps {
  label: string;
  value: string;
}

const Stat: FC<StatProps> = ({label, value}) => {
  const labelStyles = {
    fontWeight: 600,
    fontSize: 12,
    color: useColorModeValue("gray.500", "gray.500"),
    
  }
  const valueStyles = {
    fontSize: 20,
  }
  return (
    <Box>
      <Text {...labelStyles}>{label.toUpperCase()}</Text>
      <Text {...valueStyles}>{value}</Text>
    </Box>
  )
}
export default Stat;