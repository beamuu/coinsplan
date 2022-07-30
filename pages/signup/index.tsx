import { NextPage } from "next";
import Head from "next/head";

import WalletProvider from "../../src/providers/Wallet";
import SignupPage from "../../src/views/signup";

const Signup: NextPage = () => {
  return (
    <>
      <Head>
        <title>Coinsplan - Create an account</title>
      </Head>
      <SignupPage />
    </>
  );
};
export default Signup;
