import { Center, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";
import { BsFillTagsFill } from "react-icons/bs";
import ContentContainer from "./ContentContainer";

const NameTag: FC = () => {
  return (
    <>
      <ContentContainer py="20px" borderWidth="0 0 1px 0">
        <Flex alignItems="center" justifyContent="space-between">
          <Heading fontWeight={500} variant="head1">
            Name tags
          </Heading>
          <Center
            w="40px"
            h="40px"
            rounded="full"
            bg={useColorModeValue("gray.100", "gray.900")}
          >
            <BsFillTagsFill size="20px" />
          </Center>
        </Flex>
      </ContentContainer>
    </>
  );
};
export default NameTag;
