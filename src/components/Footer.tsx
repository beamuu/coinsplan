import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react"

const Footer: FC = () => {
  const styles = {
    bg: useColorModeValue("background.light", "background.dark")
  }
  return (
    <Box bg={styles.bg} mt={20}>
      <Container maxW="container.lg" minH="200px" py="30px">
        Footerrrrrr
      </Container>
    </Box>
  )
}
export default Footer;