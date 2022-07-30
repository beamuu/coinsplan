import {
  Avatar,
  Box,
  Divider,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";
import { profilePicUrl } from "../../../../../cdn/profile";
import ContentContainer from "../ContentContainer";

const mock = [
  {
    name: "NUTCHANON CHANTRASUP",
    profile: "coinsplan-default-profile-08",
    uid: "",
  },
];

interface FavoriteUserProps {
  name: string;
  profile: string;
  uid: string;
}

const FavoriteUser: FC<FavoriteUserProps> = ({ name, profile, uid }) => {
  return (
    <Box>
      <Flex
        alignItems="center"
        gap={4}
        my={2}
        p={2}
        rounded={10}
        cursor="pointer"
        transition="300ms ease"
        _hover={{ bg: useColorModeValue("gray.100", "gray.800") }}
      >
        <Avatar src={profilePicUrl[profile]} name={name} size="md" />
        <Text fontSize={14} fontWeight={600}>
          {name}
        </Text>
      </Flex>
      <Divider color={useColorModeValue("gray.100", "gray.900")} />
    </Box>
  );
};

const Favorites: FC = () => {
  return (
    <>
      <ContentContainer mt={16} py="10px">
        <Heading variant="head1">Favorites</Heading>
      </ContentContainer>
      <ContentContainer py="20px">
        {mock.map((e, index) => (
          <FavoriteUser key={`fav-u-${index}`} {...e} />
        ))}
      </ContentContainer>
    </>
  );
};
export default Favorites;
