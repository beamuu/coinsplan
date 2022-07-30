import { NextPage } from "next";
import Head from "next/head";

import WalletProvider from "../../src/providers/Wallet";
import SigninPage from "../../src/views/signin";

const Signin: NextPage = () => {
  return (
    <>
      <Head>
        <title>Coinsplan - Sign In</title>
      </Head>
        <SigninPage />
    </>
  );
};
export default Signin;
