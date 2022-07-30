import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";
import CustomConnectButton from "./ConnectButton";
import { FiMenu } from "react-icons/fi";
import TransactionSearchBar from "./TransactionSearchBar";
import { v3Icon } from "../cdn/icons";

type Variants = "minimal" | "default" | "modern" | "pro";
interface NavbarProps {
  variant?: Variants;
}

interface NavbarVariant {
  imageUrl?: string;
  logoDisplay?: "block" | "none" | "flex" | "inline" | "inline-block";
}

const variants: { [key in Variants]: NavbarVariant } = {
  default: {
    imageUrl:
      "https://raw.githubusercontent.com/coinsplan/resources/524064751792fee7d493a0313bba5ceec40767e9/logos/icon.svg",
  },
  modern: {
    imageUrl:
      "https://github.com/coinsplan/resources/blob/main/logos/coinsplan-text-blue.png?raw=true",
  },
  pro: {},
  minimal: {},
};

const Navbar: FC<NavbarProps> = ({ variant }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const styles = {
    menu: {
      fontWeight: 600,
      bg: useColorModeValue("white", "background.dark"),
      color: useColorModeValue("gray.800", "gray.200"),
    },
  };
  const variantStyles = variants[variant || "default"];
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={70}
      bg={useColorModeValue("background.light", "background.dark")}
      h="60px"
      px="20px"
      border="solid"
      borderColor={useColorModeValue("gray.100", "gray.900")}
      borderWidth="0 0 1px 0"
      backdropFilter="blur(6px)"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        minH="40px"
        py="10px"
      >
        <Flex alignItems="center" gap={1}>
          {/* <Image
            alt="coinsplan-logo"
            h="34px"
            rounded={8}
            src={v3Icon}
          ></Image> */}
          <Heading size="md" letterSpacing="-1px">
            coinsplan
          </Heading>
        </Flex>
        <HStack>
          <Box display={{ sm: "none", md: "block" }}>
            <TransactionSearchBar />
          </Box>
          <CustomConnectButton height="40px" />
          <Menu autoSelect={false} closeOnSelect={false}>
            <MenuButton
              as={Box}
              color={useColorModeValue("black", "white")}
              bg="transparent"
              _hover={{ bg: "#00000010" }}
              _active={{ bg: undefined }}
              rounded={14}
              fontSize="20px"
              p="10px"
              cursor="pointer"
            >
              <FiMenu />
            </MenuButton>
            <MenuList
              bg={styles.menu.bg}
              color={styles.menu.color}
              rounded={10}
              overflow="hidden"
              fontSize="14px"
              boxShadow="#00000020"
            >
              <MenuItem
                _hover={{ bg: "#00000010" }}
                px={6}
                fontWeight={styles.menu.fontWeight}
              >
                My Transactions
              </MenuItem>
              <MenuItem
                _hover={{ bg: "#00000010" }}
                px={6}
                fontWeight={styles.menu.fontWeight}
              >
                Register
              </MenuItem>
              <MenuItem
                _hover={{ bg: "#00000010" }}
                px={6}
                fontWeight={styles.menu.fontWeight}
              >
                Docs
              </MenuItem>
              <MenuItem
                _hover={{ bg: "#00000010" }}
                px={6}
                onClick={() => toggleColorMode()}
                fontWeight={styles.menu.fontWeight}
                gap={2}
              >
                {colorMode === "light" ? "Dark Mode" : "Light Mode"}
                <Badge variant="subtle" colorScheme="pink" rounded={8}>
                  new
                </Badge>
              </MenuItem>
              <MenuItem
                _hover={{ bg: "#00000010" }}
                px={6}
                fontWeight={styles.menu.fontWeight}
              >
                About
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </Box>
  );
};
export default Navbar;
