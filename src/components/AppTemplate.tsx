import { Box, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import { FC } from "react";
import WalletProvider from "../providers/Wallet";
import { coinsplan500 } from "../styles/color";
import Navbar from "./Navbar";

interface IAppTemplate {
  children?: any;
}
const AppTemplate: FC<IAppTemplate> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="theme-color" content={useColorModeValue("background.light", "background.dark")} />
      </Head>
      <Navbar variant="modern" />

      {children}
    </>
  );
};
export default AppTemplate;
