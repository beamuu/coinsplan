import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Heading } from "@chakra-ui/react";
import { FC } from "react";
import ContentContainer from "../ContentContainer";
import TransactionCard from "./TransactionCard";

const mock = [
  {
    accountName: "Spotify Technology S.A.",
    detail: "Monthly Subscription - Spotify",
    value: "USD 9.99",
    type: "out" as "out",
  },
  {
    accountName: "NUTCHANON CHANTRASUP",
    detail: "Transfer",
    value: "USD 12.00",
    type: "in" as "in",
  },
  {
    accountName: "Netflix, Inc.",
    detail: "Monthly Subscription - Standard Plan",
    value: "USD 15.49",
    type: "out" as "out",
  },
  {
    accountName: "Apple, Inc.",
    detail: "Monthly Subscription - Apple Music",
    value: "USD 9.99",
    type: "out" as "out",
  },
  {
    accountName: "Steam",
    detail: "Transfer - Refund",
    value: "USD 2.99",
    type: "in" as "in",
  },
];
const Transactions: FC = () => {
  return (
    <>
      <ContentContainer py="30px">
        <Heading variant="head1">Latest Transactions</Heading>
      </ContentContainer>
      <ContentContainer py="20px">
        {mock.map((each, index) => (
          <TransactionCard key={`tx-lts-${index}`} {...each} />
        ))}
      </ContentContainer>
      <ContentContainer py="20px">
        <Button gap={2} rounded="full">
          View all transactions <ArrowForwardIcon />
        </Button>
      </ContentContainer>
    </>
  );
};
export default Transactions;
