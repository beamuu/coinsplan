import "../src/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/styles/theme";
import WalletProvider from "../src/providers/Wallet";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <WalletProvider>
        <Component {...pageProps} />
      </WalletProvider>
    </ChakraProvider>
  );
}

export default MyApp;
