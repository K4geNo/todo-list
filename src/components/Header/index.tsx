import { Flex, Image } from "@chakra-ui/react"
import React from "react"

import Logo from "../../assets/Logo.svg"

export function Header() {
    return (
        <Flex
            w={"full"}
            justifyContent={"center"}
            alignItems={"center"}
            pt={"4.5rem"}
            pb={"5rem"}
            bg={"gray.700"}
        >
            <Image src={Logo} alt="Logo" width="7.875rem" height="3rem" />
        </Flex>
    )
}
