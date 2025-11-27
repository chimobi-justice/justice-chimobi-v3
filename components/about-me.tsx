import Link from "next/link"
import { Avatar, Box, Button, Divider, Flex, Heading, HStack, Text } from "@fidely-ui/react"
import { Container } from "@fidely-ui/styled-system/jsx"

import { SocialLink } from '~/components/footer'

export const AboutMe = () => {
  return (
    <Container 
      maxW="7xl" 
      my="15px" 
      id="about" 
      as="article"
      role="author info"
    >
      <Flex
        alignItems="flex-start"
        padding="15px"
        justifyContent="space-between"
        flexDirection={{ base: "column", md: "row" }}

      >
        <Box width={{ base: "100%", md: "60%" }}>
          <Flex align="center" gap="4" mb="10px">
            <Avatar.Root size="2xl" display={{ base: "none", md: "block" }}>
              <Avatar.Fallback name="Justice Chimobi" />
              <Avatar.Image src="/author_profile.jpeg" />
            </Avatar.Root>

            <Heading textStyle={{ base: "4xl", md: "7xl" }} color="fg.muted">
              I build interfaces
            </Heading>

          </Flex>
          <Heading textStyle={{ base: "4xl", md: "7xl" }} color="colorPalette.default">that feel, intentional, and beautifully engineered</Heading>
        </Box>

        <Box width={{ base: "100%", md: "40%" }} mt={{ base: "1rem", md: "0rem" }}>
          <Text lineHeight="2.1em" color="fg.muted" textStyle={{ base: "xl", md: "2xl"}} mb="10px">
            I'm a frontend engineer who loves building tools, not just screens.
            I design systems, think deeply about interaction, and write code that feels good to use.
          </Text>

          <Divider />

          <HStack mt="20px" gap="5">
            {SocialLink.map((link) => (
              <Button
                key={link.id}
                variant="plain"
                size={{ base: "xl", md: "2xl" }}
                display="flex"
                color="fg.muted"
                gap="2"
                padding="0"
                asChild
                textDecoration="underline"
              >
                <Link href={link.link} key={link.id} target="_blank">
                  {link.icon} {link.name}
                </Link>
              </Button>
            ))}
          </HStack>
        </Box>
      </Flex>
    </Container>
  )
}