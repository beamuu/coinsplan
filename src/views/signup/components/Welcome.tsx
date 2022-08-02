import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { profilePicUrl } from "../../../cdn/profile";
import ScreenFixAuthTemplate from "../../../components/structures/ScreenFixAuthTemplate";
import { routes } from "../../../constants/routes";

interface WelcomeProps {
  setStep: (s: number) => void;
}

const Welcome: FC<WelcomeProps> = ({ setStep }) => {
  const router = useRouter()
  const baseButtonStyles = {
    w: "full",
    maxW: "500px",
    size: "lg",
    gap: 3,
  };
  return (
    <ScreenFixAuthTemplate>
      <Container maxW="container.md" minH="100vh" py="6%">
        <Box mt={10}>
          <Fade delay={0} direction="up">
            <Heading size="xl" textAlign="center">
              Welcome to Coinsplan
            </Heading>
          </Fade>
        </Box>
        <Box mt={10}>
          <Fade delay={1000} direction="up">
            <Flex alignItems="center" justifyContent="center" gap={4}>
              <Avatar src={profilePicUrl["coinsplan-default-profile-08"]}/>
              <Heading size="md" textAlign="center">
                Hi, {"Nutchanon C.".toUpperCase()}
              </Heading>
            </Flex>
          </Fade>
        </Box>
        <Box my={7}>
          <Fade delay={1400} direction="up">
            <Text fontWeight={600} fontSize={18} textAlign="center">
              Glad to see you on Coinsplan. Your account is ready to go.
            </Text>
          </Fade>
        </Box>
        <Fade delay={1800} direction="up">
          <VStack spacing={6}>
            <Button {...baseButtonStyles}>Quick Start Guide</Button>
            <Button {...baseButtonStyles}>Deposit stable coins</Button>
            <Button {...baseButtonStyles} color="white" colorScheme="coinsplan.fix" onClick={() => router.push(routes.dashboard)}>
              Go to dashboard <ArrowForwardIcon />
            </Button>
          </VStack>
        </Fade>
      </Container>
    </ScreenFixAuthTemplate>
  );
};
export default Welcome;
