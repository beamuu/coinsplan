import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  Container,
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { profilePicUrl } from "../../../cdn/profile";
import ScreenFixAuthTemplate from "../../../components/structures/ScreenFixAuthTemplate";

interface SelectProfilePicProps {
  setStep: (s: number) => void
}

const SelectProfilePic: FC<SelectProfilePicProps> = ({ setStep }) => {
  const [indx, setIndx] = useState(0);

  const router = useRouter();

  const handleSetProfile = () => {
    router.push("/app/dashboard")
  }

  const selectedStyles = {
    outline: "6px solid",
    outlineColor: "#00f7be",
    boxShadow: "0 0 40px #00f7be90 !important",
  };
  const profileBaseStyles = {
    cursor: "pointer",
    _hover: {
      boxShadow: "0 0 40px #168DFB90 !important",
    },
  };

  return (
    <ScreenFixAuthTemplate>
      <Container maxW="container.md" minH="100vh" py="6%">
        <Heading size="md" textAlign="center">
          Select you avatar
        </Heading>
        <SimpleGrid mt={16} columns={{ sm: 3, md: 4, lg: 5 }} gap={14}>
          {Object.keys(profilePicUrl).map((key, index) => (
            <Image
              key={`profile-${index + 1}`}
              alt={`profile-${index + 1}`}
              src={profilePicUrl[key]}
              rounded="full"
              {...profileBaseStyles}
              {...(index + 1 === indx ? { ...selectedStyles } : undefined)}
              onClick={() => setIndx(index + 1)}
            />
          ))}
        </SimpleGrid>
        <Center mt={16}>
          <Button
            colorScheme="button.blackAndWhite"
            size="lg"
            rounded="full"
            gap={2}
            disabled={indx === 0}
            onClick={handleSetProfile}
          >
            Continue <ArrowForwardIcon />
          </Button>
        </Center>
      </Container>
    </ScreenFixAuthTemplate>
  );
};
export default SelectProfilePic;
