import { Box, IconButton, VStack, useColorModeValue } from "@chakra-ui/react";

const MenuBar = () => {

  const defaultIconButtonProps = {
    w: "40px",
  }

  return (
    <Box
      display={{sm: "none", md: "block", lg: "block"}}
      position="fixed"
      top={0}
      left={0}
      w="60px"
      px="10px"
      bg={useColorModeValue("background.light", "background.dark")}
      border="solid"
      borderWidth="0 1px 0 0"
      borderColor={useColorModeValue("gray.100", "gray.800")}
      h="100vh"
      mt="60px"
      py="20px"
    >
      <VStack spacing={6}>
        <IconButton {...defaultIconButtonProps} aria-label=""></IconButton>
        <IconButton {...defaultIconButtonProps} aria-label=""></IconButton>
        <IconButton {...defaultIconButtonProps} aria-label=""></IconButton>
        <IconButton {...defaultIconButtonProps} aria-label=""></IconButton>
      </VStack>
    </Box>
  );
};
export default MenuBar;
