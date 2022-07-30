import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Link,
  PinInput,
  PinInputField,
  Slide,
  SlideFade,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { FC } from "react";

const mock = {
  email: "beamuonly@gmail.com",
};

interface EmailVerifyProps {
  setStep: (s: number) => void
}

const EmailVerify: FC<EmailVerifyProps> = ({ setStep }) => {
  const styles = {
    borderColor: useColorModeValue("#00000030", "#ffffff30"),
  };

  const handleVerify = () => {
    setStep(2)
  }

  return (
    <Flex
      w="full"
      border="1px solid"
      borderColor={styles.borderColor}
      rounded={20}
      py="10%"
      px="8%"
      flexDir="column"
      justifyContent="space-between"
      position="relative"
      overflow="hidden"
    >
      <Box>
        <Heading fontSize="25px" fontWeight={700} mb={10}>
          Verify your email
        </Heading>
        <Text fontSize={14}>
          We have send a 6 digits verification code to{" "}
          <strong>{mock.email}</strong>. Please check your email inbox and enter
          the verification code below.
        </Text>
      </Box>
      <HStack justifyContent="center">
        <PinInput type="number" size="lg">
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
      <Box>
        <VStack mt={10} spacing={3} alignItems="start">
          <Heading size="sm">
            I have not received any verification email.
          </Heading>
          <Text fontSize={12}>👉🏻 Try checking your spam or junk mails.</Text>
          <Link fontSize={12} color="coinsplan.400" href="#">
            👉🏻 Click to RESEND me an email.
          </Link>
        </VStack>
      </Box>
      <Button colorScheme="coinsplan.fix" h="60px" color="white" onClick={handleVerify}>
        Verify my email
      </Button>
    </Flex>
  );
};
export default EmailVerify;
