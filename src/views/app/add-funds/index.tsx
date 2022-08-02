import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { FC } from "react";
import AppTemplate from "../../../components/AppTemplate";
import Amount from "./components/Amount";
import Currency from "./components/Currency";

export const AddFundsPage: FC = () => {
  return (
    <AppTemplate>
      <Container maxW="container.lg" py={10} mt="60px">
        <Heading mb={7}>Deposit funds</Heading>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }} gap={8}>
          <Currency />
          <Amount />
        </SimpleGrid>
      </Container>
    </AppTemplate>
  );
};
