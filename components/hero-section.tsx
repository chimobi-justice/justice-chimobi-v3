import Link from "next/link"
import { Flex, Heading, HStack, Stack, Text } from "@fidely-ui/react"
import { Container } from "@fidely-ui/styled-system/jsx"

import { Icon } from "~/components/icon"
import { SOCIAL_LINKS } from "~/components/about-me"

export const HeroSection = () => {
  return (
    <Container maxW="7xl" as="section">
      <Stack
        gap="2"
        mt="20px"
        mb="5px"
        padding="15px"
        height="75vh"
        justifyContent="center"
        flexDirection="column"
      >
        <Flex
          align="center"
          justify="space-between"
          mt="40px"
        >
          <Stack width={{ base: "100%", md: "90%" }} gap="7">
            <Heading
              as="h1"
              textStyle={{ base: "3xl", md: "5xl", lg: "6xl" }}
              fontWeight="bold"
              color="fg.muted"
            >
              Frontend & Design Systems Engineer
            </Heading>
            <Text
              color="fg.muted"
              width={{ base: "100%", lg: "70%" }}
              lineHeight="2em"
              textStyle={{ base: "lg", md: "xl"}}
            >
              I'm Justice Chimobi, a Frontend & Design Systems Engineer based in Lagos, Nigeria.
              I'm the creator and maintainer of {' '}
              <Text asChild textDecoration="underline" color="colorPalette.default">
                <Link
                  href={"https://fidely-ui.vercel.app/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fidely UI
                </Link>
              </Text>, {' '}
              a modern React design system library. {' '}
              It provides accessible, themeable, and composable components for building high-quality web applications.
            </Text>
            
            <HStack mt="15px" gap="5">
              {SOCIAL_LINKS.map((link) => (
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  key={link.name}
                >
                  <Icon boxSize={{ base: "5", md: "7"}} color="fg.muted">
                    <link.icon />
                  </Icon>
                </Link>
              ))}
            </HStack>
          </Stack>
        </Flex>
      </Stack>
    </Container>
  )
}