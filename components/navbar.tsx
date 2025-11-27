"use client"

import Link from "next/link"
import { useState } from "react"
import { Avatar, Box, Button, Flex } from "@fidely-ui/react"
import { Container } from "@fidely-ui/styled-system/jsx"
import { RiHome3Line } from "react-icons/ri"
import { FaRegUserCircle } from "react-icons/fa"
import { BsWindowFullscreen } from "react-icons/bs"
import { RxHamburgerMenu } from "react-icons/rx"

import { ColorModeButton } from "~/components/color-mode-button"
import { Drawer } from "~/components/drawer"

export const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <Container maxW="7xl" as="nav">
        <Flex
          align="center"
          justify="space-between"
          py="15px"
        >
          <Avatar.Root size={{ base: "md", md: "lg" }}>
            <Avatar.Fallback name="Justice Chimobi" />
            <Avatar.Image src="/author_profile.jpeg" />
          </Avatar.Root>

          <Flex gap="2" align="center" display={{ base: "none", md: "flex" }}>
            {MenuLink.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                color="fg.muted"
                size="xs"
                asChild
                gap="2"
              >
                <Link href={link.link}>
                  {link.icon} {link.name}
                </Link>
              </Button>
            ))}
            <ColorModeButton />
          </Flex>

          <Box display={{ base: "flex", md: "none" }} onClick={toggleDrawer}>
            <RxHamburgerMenu size="22px" />
          </Box>
        </Flex>
      </Container>

      <Drawer isOpen={isDrawerOpen} closeDrawer={closeDrawer} />
    </>
  )
}

export const MenuLink = [
  {
    id: 1,
    name: "Home",
    link: "#home",
    icon: <RiHome3Line />
  },
  {
    id: 2,
    name: "About",
    link: "#about",
    icon: <FaRegUserCircle />
  },
  {
    id: 3,
    name: "Projects",
    link: "#projects",
    icon: <BsWindowFullscreen />
  }
]