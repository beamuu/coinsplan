import { useColorMode } from "@chakra-ui/react";
import { RainbowKitProvider, lightTheme, midnightTheme } from "@rainbow-me/rainbowkit";
import { FC } from "react";

import { WagmiConfig } from "wagmi";
import { chains, wagmiClient } from "../lib/rainbowkit/wallet";

interface IWalletProvider {
  children?: any;
}

const WalletProvider: FC<IWalletProvider> = ({ children }) => {
  const { colorMode } = useColorMode()
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={ colorMode === "light" ? lightTheme(): midnightTheme()} initialChain={chains[0]}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default WalletProvider;
