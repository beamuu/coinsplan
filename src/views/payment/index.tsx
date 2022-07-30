import {
  Alert,
  AlertIcon,
  Avatar,
  Box,
  Button,
  Collapse,
  Container,
  Divider,
  Flex,
  Heading,
  IconButton,
  Input,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import AppTemplate from "../../components/AppTemplate";
import { MdEmail, MdAccountBox } from "react-icons/md";
import { IoScanSharp } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";
import { profilePicUrl } from "../../cdn/profile";
import { coinsplan400 } from "../../styles/color";
import QrCodeModal from "../app/scheduler/components/QrCodeModal";

export const PaymentPage = () => {
  const styles = {
    divider: {
      color: useColorModeValue("gray.100", "gray.900"),
    },
    accountBox: {
      bg: useColorModeValue("gray.100", "gray.900"),
      p: 5,
      rounded: 8,
    },
    icon: {
      color: useColorModeValue("black", "white"),
    },
    detailFont: {
      fontSize: 12,
      fontWeight: 500,
    },
  };

  const [showAccountCard, setShowAccountCard] = useState(false);
  const [isQrCodeModalOpen, setIsQrCodeModalOpen] = useState(false);

  return (
    <AppTemplate>
      <QrCodeModal open={isQrCodeModalOpen} setOpen={setIsQrCodeModalOpen} />
      <Container maxW="container.md" py={10} mt="60px">
        <VStack spacing={6} alignItems="start">
          <Heading fontWeight={500} size="lg">
            Send your Crypto
          </Heading>
          <Text fontSize={14} color="gray.500">
            Send CPUSD to whoever using Coinsplan. CPUSD can be withdrawn as a
            stable coins.
          </Text>
        </VStack>
        <Alert
          status="warning"
          rounded={8}
          fontWeight={600}
          my={3}
          fontSize={14}
        >
          <AlertIcon />
          Please read! We recommended you not to transfer CPUSD by using any
          unreliable applications. Please use Coinsplan for your safety.
        </Alert>
        <Box my={10}>
          <Heading size="sm" mb={3}>
            Who is your recipient?
          </Heading>
          <Text fontSize={12} mb={3}>
            Ethereum Address (started with 0x) or Coinsplan ID (started with
            cpac)
          </Text>
          <Button onClick={() => setShowAccountCard(!showAccountCard)} my={5}>
            Click Me - remove this button
          </Button>
          <Box {...styles.accountBox}>
            <Flex alignItems="center">
              <Input
                variant="unstyled"
                placeholder="0x... or  cpac..."
                fontFamily="'DM Mono' !important"
                fontWeight={500}
                fontSize={18}
              />
              <IconButton
                aria-label="scan"
                rounded="full"
                onClick={() => setIsQrCodeModalOpen(true)}
              >
                <IoScanSharp size="28px" />
              </IconButton>
            </Flex>

            <Collapse in={showAccountCard} animateOpacity>
              <Flex my={6} alignItems="center" gap={4}>
                <Avatar src={profilePicUrl["coinsplan-default-profile-08"]} />
                <Text fontWeight={600}>NUTCHANON CHANTRASUP</Text>
                <FaCheckCircle color={coinsplan400} />
              </Flex>
              <Divider {...styles.divider} />
              <Box my={4}>
                <Flex alignItems="center" gap={4} my={2}>
                  <MdEmail />
                  <Text {...styles.detailFont}>beamuonly@gmail.com</Text>
                </Flex>
                <Flex alignItems="center" gap={4} my={2}>
                  <MdAccountBox />
                  <Text {...styles.detailFont}>0x4177079...68DaE70c4a</Text>
                </Flex>
              </Box>
            </Collapse>
          </Box>
        </Box>
      </Container>
    </AppTemplate>
  );
};
