import { Heading } from "@chakra-ui/react";
import { FC } from "react";
import ContentContainer from "./ContentContainer";

const NameTag: FC = () => {
  return (
    <>
    <ContentContainer py="20px" borderWidth="0 0 1px 0">
        <Heading fontWeight={500} variant="head1">
          Name tags
        </Heading>
      </ContentContainer>
    </>
  )
}
export default NameTag;