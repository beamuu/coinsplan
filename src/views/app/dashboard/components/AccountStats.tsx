import { Heading, SimpleGrid } from "@chakra-ui/react";
import { FC } from "react";
import ContentContainer from "./ContentContainer";
import Stat from "./Stat";

const AccountStats: FC = () => {
  return (
    <>
      <ContentContainer py="20px" borderWidth="0 0 1px 0">
        <Heading fontWeight={500} variant="head1">
          Account Stats
        </Heading>
      </ContentContainer>
      <ContentContainer py="40px" borderWidth="0 0 1px 0">
        <Heading size="sm">Your Account Activities</Heading>
        <SimpleGrid columns={{sm: 2, md: 3, lg: 4}} my={8} gap={6}>
          <Stat label="Transactions" value={"216"} />
          <Stat label="Monthly txs" value={"12"} />
          <Stat label="Monthly in" value={"USD 122.50"} />
          <Stat label="Monthly out" value={"USD 3,022.50"} />
          <Stat label="Scheduled txs" value={"4"} />
          <Stat label="Subscriptions" value={"4"} />
          <Stat label="Failed" value={"0"} />
        </SimpleGrid>
      </ContentContainer>
    </>
  );
};
export default AccountStats;
