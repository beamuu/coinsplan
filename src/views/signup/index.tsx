import { FC, useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Heading,
  Input,
  Progress,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import ScreenFixAuthTemplate from "../../components/structures/ScreenFixAuthTemplate";
import { useAccount, useSignMessage } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import EmailVerify from "./components/EmailVerify";
import SelectProfilePic from "./components/SelectProfilePic";
import Welcome from "./components/Welcome";

const SignupPage: FC = () => {
  const { address } = useAccount();
  const [signComplete, setSignComplete] = useState<boolean>(false);
  const [isSigningIn, setIsSigningIn] = useState<boolean>(false);
  const [step, setStep] = useState<number>(0);

  const styles = {
    borderColor: useColorModeValue("#00000030", "#ffffff30"),
    input: {
      fontWeight: 500,
      fontSize: 16
    }
  };

  const {
    isLoading: isSignLoading,
    isError: isSignError,
    isSuccess: isSignSuccess,
    data: signMessageData,
    signMessage,
  } = useSignMessage({
    message: `Coinsplan Authentication:\nThis will not cost you any fee. Just a message to verify that you are going to login to Coinsplan Crypto Services.\n${Date.now()}`,
  });

  const handleDigitalSignatureSign = async () => {
    signMessage();
  };

  const signin = () => {
    setTimeout(() => {
      setStep(1);
    }, 2000);
  };

  useEffect(() => {
    if (isSignSuccess) {
      setSignComplete(true);
    } else {
      setSignComplete(false);
    }
  }, [isSignSuccess]);

  useEffect(() => {
    if (signComplete) {
      alert(signMessageData);
      setSignComplete(false);
      setIsSigningIn(true);
      signin();
    }
  }, [signComplete]);

  if (step === 1) {
    return (
      <ScreenFixAuthTemplate>
        <Container
          maxW="container.sm"
          minH="100vh"
          py="6%"
          display="flex"
          justifyContent="center"
        >
          <EmailVerify setStep={(s: number) => setStep(s)}/>
        </Container>
      </ScreenFixAuthTemplate>
    );
  }
  if (step === 2) {
    return (
      <SelectProfilePic setStep={(s: number) => setStep(s)}/>
    )
  }

  if (step === 3) {
    return (
      <Welcome setStep={(s: number) => setStep(s)}/>
    )
  }

  return (
    <ScreenFixAuthTemplate>
      <Container
        maxW="container.sm"
        minH="100vh"
        py="6%"
        display="flex"
        justifyContent="center"
      >
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
          {isSigningIn ? (
            <Progress
              size="xs"
              isIndeterminate
              position="absolute"
              top={0}
              left={0}
              right={0}
              colorScheme="coinsplan.fix"
            />
          ) : null}

          <Box>
            {/* <Heading size="sm" mb="40px">CoinsID</Heading> */}
            <Heading
              fontSize="25px"
              fontWeight={700}
              fontFamily="Poppins !important"
            >
              Create an account
            </Heading>
            <VStack my="30px" alignItems="start" spacing={8}>
              {!address ? (
                <Text my="20px">
                  Please connect your crypto wallet to continue the account sign
                  up process.
                </Text>
              ) : (
                <Text my="20px">
                  Your new account will be linked to this blockchain address.
                </Text>
              )}
              <ConnectButton chainStatus="icon" />
              {!address ? null : (
                <>
                  <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }} gap={6}>
                    <Box>
                      <Heading size="sm" mb={3}>
                        Firstname
                      </Heading>
                      <Input w="full" size="lg" {...styles.input}/>
                    </Box>
                    <Box>
                      <Heading size="sm" mb={3}>
                        Lastname
                      </Heading>
                      <Input w="full" size="lg" {...styles.input}/>
                    </Box>
                  </SimpleGrid>
                  <Box w="full">
                    <Heading size="sm" mb={3}>
                      Email
                    </Heading>
                    <Input type="email" w="full" size="lg" {...styles.input}/>
                  </Box>
                  <Checkbox mt="40px !important" colorScheme="coinsplan.fix">
                    <Text fontSize="14px">
                      I agree to the terms and conditions and privacy policy.
                    </Text>
                  </Checkbox>
                </>
              )}
            </VStack>
          </Box>

          <VStack spacing={5}>
            {!address ? null : (
              <Button
                size="xl"
                w="full"
                color="white"
                colorScheme="coinsplan.fix"
                _hover={{ bg: undefined }}
                _focus={{ bg: undefined }}
                onClick={handleDigitalSignatureSign}
                isLoading={isSignLoading}
              >
                {isSignLoading ? (
                  "Waiting for confirmation"
                ) : (
                  <>
                    Create an account <ArrowForwardIcon ms="10px" />
                  </>
                )}
              </Button>
            )}
          </VStack>
        </Flex>
      </Container>
    </ScreenFixAuthTemplate>
  );
};
export default SignupPage;
