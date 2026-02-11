import Link from "next/link"
import { Box, Divider, Flex, HStack, Text } from "@fidely-ui/react"
import { Container } from "@fidely-ui/styled-system/jsx"
import { MenuLink } from "~/constant/menu-links"

export const Footer = () => {
  return (
    <Container
      maxW="7xl"
      as="footer"
    >
      <Box
        alignItems="center"
        padding="15px"
      >
        <Divider thickness="1px" color="border.disabled" />

        <Flex
          justify="space-between"
          flexDirection={{ base: "column", md: "row" }}
          align={"center"}
          width="full"
          mt="40px"
          pb="10px"
          color="fg.muted"
        >
          <HStack gap='4' mb={{ base: "6", md: "0"}}>
            {MenuLink.map((link) => (
              <Text 
                asChild 
                key={link.id}
                _hover={{ color: "colorPalette.default"}}
              >
                <Link href={link.link}>
                  {link.name}
                </Link>
              </Text>
            ))}
          </HStack>

          <Text textStyle="sm">&copy; Justice Chimobi {new Date().getFullYear().toString()}, All rights reserved</Text>
        </Flex>
      </Box>
    </Container>
  )
}