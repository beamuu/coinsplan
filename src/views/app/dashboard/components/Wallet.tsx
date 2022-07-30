import { ArrowForwardIcon, CopyIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  HStack,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useColorModeValue,
  Tag,
  Text,
  Center,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { BsFillHeartFill } from "react-icons/bs";
import { BiScan } from "react-icons/bi";
import { IoShare } from "react-icons/io5";
import ContentContainer from "./ContentContainer";
import { FC, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { useAccount } from "wagmi";

const Wallet: FC = () => {
  const [isQroCdeModalOpen, setIsQrCodeOpen] = useState<boolean>(false);
  const { address } = useAccount();
  const tagProps = {
    size: "lg",
    rounded: "full",
  };
  const iconButtonProps = {
    h: "50px",
    w: "50px",
    rounded: "full",
  };

  return (
    <ContentContainer pt="60px" pb="10px" borderWidth="0 0 1px 0">
      <Modal isOpen={isQroCdeModalOpen} onClose={() => setIsQrCodeOpen(false)}>
        <ModalOverlay />
        <ModalContent
          bg={useColorModeValue("background.light", "gray.900")}
          rounded={20}
        >
          <ModalHeader>Your Address QR Code</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {address ? (
              <Center>
                <Box overflow="hidden" rounded={14}>
                  <QRCodeSVG value={address} size={300} includeMargin={true} />
                </Box>
              </Center>
            ) : null}
            <Center mt={4}>
              <Text fontSize={12}>
                Scan this QR Code to interact with this account.
              </Text>
            </Center>
          </ModalBody>

          <ModalFooter>
            <Button
              color="white"
              colorScheme="coinsplan.fix"
              onClick={() => setIsQrCodeOpen(false)}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Heading size="sm" fontWeight={400}>
        Total Assets Value
      </Heading>
      <Heading fontSize="2.6em" mt={4} mb={6} fontWeight={500}>
        USD 13974.26
      </Heading>
      <HStack>
        <Tag {...tagProps}>USDT</Tag>
        <Tag {...tagProps}>USDC</Tag>
        <Tag {...tagProps}>BUSD</Tag>
        <ArrowForwardIcon />
        <Tag {...tagProps}>CPUSD</Tag>
      </HStack>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        my={10}
        flexWrap="wrap"
        gap={8}
      >
        <Button
          w="full"
          rounded="full"
          maxW={{ sm: "auto", md: "auto", lg: "320px" }}
          h="50px"
          colorScheme="button.blackAndWhite"
          gap={2}
          fontSize={14}
        >
          {" "}
          Deposit stable coins now <ArrowForwardIcon />
        </Button>
        <ButtonGroup
          spacing={4}
          justifyContent={{ sm: "space-between", md: "space-between" }}
        >
          <IconButton aria-label="" {...iconButtonProps}>
            <BsFillHeartFill size="22px" />
          </IconButton>
          <Popover placement="bottom" closeOnBlur={true}>
            <PopoverTrigger>
              <IconButton aria-label="" {...iconButtonProps}>
                <IoShare size="22px" />
              </IconButton>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader fontSize={16} fontWeight={600}>
                Share your account
              </PopoverHeader>
              <PopoverBody>
                <Text fontSize={12}>Account URL</Text>
                <InputGroup>
                  <Input
                    fontSize={12}
                    value={
                      "https://coinsplan.org/ac/q97r397grwnrkjnrjk3nr197r37rb1rhbjhr"
                    }
                  />
                  <InputRightElement>
                    <IconButton aria-label="copy-account-url-button" size="sm">
                      <CopyIcon />
                    </IconButton>
                  </InputRightElement>
                </InputGroup>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <IconButton
            aria-label=""
            {...iconButtonProps}
            onClick={() => setIsQrCodeOpen(true)}
          >
            <BiScan size="22px" />
          </IconButton>
          <Button
            h="50px"
            colorScheme="coinsplan.fix"
            gap={2}
            fontSize={14}
            rounded="full"
            color="white"
          >
            Send Crypto <ArrowForwardIcon />
          </Button>
        </ButtonGroup>
      </Flex>
    </ContentContainer>
  );
};
export default Wallet;
