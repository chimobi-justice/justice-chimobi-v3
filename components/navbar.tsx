"use client"

import Link from "next/link"
import { useState } from "react"
import { Avatar, Box, Flex, Text } from "@fidely-ui/react"
import { Container } from "@fidely-ui/styled-system/jsx"
import { RxHamburgerMenu } from "react-icons/rx"

import { ColorModeButton } from "~/components/color-mode-button"
import { Drawer } from "~/components/drawer"
import { MenuLink } from "~/constant/menu-links"

export const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <Container maxW="7xl" as="header">
        <Flex
          align="center"
          justify="space-between"
          py="15px"
        >
          <Avatar.Root size={{ base: "md", md: "md" }}>
            <Avatar.Fallback name="Justice Chimobi" />
            <Avatar.Image src="/author_profile.jpeg" alt="Justice Chimobi" />
          </Avatar.Root>

          <Flex
            as="nav"
            gap="10"
            align="center"
            justify="center"
            display={{ base: "none", md: "flex" }}
            width="max-content"
            py="15px"
            px="40px"
            rounded="full"
            colorPalette="gray"
            bg="colorPalette.alpha3"
            color="colorPalette.text"
          >
            {MenuLink.map((link) => (
              <Text
                asChild
                key={link.id}
                _hover={{ color: "accentColor.default" }}
                _focusVisible={{
                  outline: '0px solid',
                  outlineColor: 'colorPalette.default',
                  rounded: "full"
                }}
              >
                <Link href={link.link}>
                  {link.name}
                </Link>
              </Text>
            ))}
          </Flex>
          
          <Box display={{ base: "none", md: "block" }}>
            <ColorModeButton />
          </Box>


          <Box display={{ base: "flex", md: "none" }} onClick={toggleDrawer}>
            <RxHamburgerMenu size="22px" />
          </Box>
        </Flex>
      </Container>

      <Drawer isOpen={isDrawerOpen} closeDrawer={closeDrawer} />
    </>
  )
}