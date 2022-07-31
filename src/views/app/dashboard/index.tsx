import { Box, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";
import AppTemplate from "../../../components/AppTemplate";
import AccountStats from "./components/AccountStats";
import MenuBar from "./components/MenuBar";
import NameTag from "./components/NameTag";
import Favorites from "./components/secondary/Favorites";
import Transactions from "./components/secondary/Transactions";
import Wallet from "./components/Wallet";

const DashboardPage: FC = () => {
  const styles = {
    borderColor: useColorModeValue("gray.100", "gray.700"),
  };

  return (
    <AppTemplate>
      <MenuBar />
      <Grid
        mt="60px"
        ms={{
          sm: 0,
          md: "60px",
          lg: "60px",
        }}
        templateColumns="repeat(12, 1fr)"
        gap={0}
      >
        <GridItem colSpan={{ sm: 12, md: 12, lg: 12, xl: 8 }} py={10}>
          <Wallet />
          <AccountStats />
          <NameTag />
        </GridItem>
        <GridItem
          position="relative"
          pt={10}
          colSpan={{ sm: 12, md: 12, lg: 12, xl: 4 }}
          border="solid"
          borderColor={styles.borderColor}
          borderWidth={{ sm: 0, md: 0, lg: 0, xl: "0 0 0 1px" }}
          minH={{ sm: "auto", md: "auto", lg: "100vh" }}
        >
          <Box h="8px" bg="coinsplan.500" position="absolute" top={0} left={0} right={0} borderRadius="0 0 4px 4px"/>
          <Transactions />
          <Favorites />
        </GridItem>
      </Grid>
    </AppTemplate>
  );
};
export default DashboardPage;
