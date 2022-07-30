import { Box } from "@chakra-ui/react";
import { FC } from "react";
import WalletProvider from "../providers/Wallet";
import Navbar from "./Navbar";

interface IAppTemplate {
    children?: any
}
const AppTemplate: FC<IAppTemplate> = ({ children }) => {
    return (
        <>
            <Navbar variant="modern"/>
            
            {
                children
            }
        </>
    )
}
export default AppTemplate