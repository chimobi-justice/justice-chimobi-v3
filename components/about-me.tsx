import Link from "next/link"
import { Avatar, Box, Divider, Flex, Heading, HStack, Span, Stack, Text } from "@fidely-ui/react"
import { Container } from "@fidely-ui/styled-system/jsx"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"

import { Icon } from "~/components/icon"

export const AboutMe = () => {
  return (
    <Container
      maxW="7xl"
      my="5rem"
      id="about"
      as="article"
    >
      <Flex
        justify="space-between"
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Box width={{ base: "100%", lg: "55%" }}>
          <Stack gap="6">
            <Heading
              as="h2"
              textStyle={{ base: "4xl", md: "5xl" }}
              fontWeight="bold"
              color="fg.muted"
            >
              I'm Justice Chimobi, Frontend & Design System Engineer.
            </Heading>

            <Text
              color="fg.muted"
              lineHeight="2em"
              textStyle="lg"
            >
              I specializing in web accessibility, focused
              on building intuitive, pixel-perfect interfaces. I work at the intersection
              of design and engineering, where thoughtful user experience meets clean, scalable code.
            </Text>

            <Text
              color="fg.muted"
              lineHeight="2em"
              textStyle="lg"
            >
              Today, I'm the creator and maintainer of {' '}
              <Text asChild textDecoration="underline" color="colorPalette.default">
                <Link
                  href={"https://fidely-ui.vercel.app/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fidely UI
                </Link>
              </Text> {' '}
              , a modern React design system.
              It provides accessible, themeable, and composable components for building high-quality web applications.
            </Text>

            <Text
              color="fg.muted"
              lineHeight="2em"
              textStyle="lg"
            >
              Helping teams ship consistent, accessible interfaces faster.
            </Text>
          </Stack>
        </Box>

        <Box width={{ base: "100%", lg: "40%" }} mt={{ base: "16", lg: "0" }}>
          <Stack gap="6">
            <Flex align="center" gap="3">
              <Avatar.Root size="2xl">
                <Avatar.Fallback name="Justice Chimobi" />
                <Avatar.Image src="/author_profile.jpeg" alt="Justice Chimobi profile image" />
              </Avatar.Root>

              <Heading textStyle={{ base: "4xl", md: "5xl" }} color="fg.muted">
                Get In <Span color="colorPalette.default">Touch</Span>
              </Heading>
            </Flex>

            <Stack gap="6">
              {SOCIAL_LINKS.map((link) => (
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  key={link.name}
                >
                  <HStack
                    gap="3"
                    transition="all 0.2s"
                    _hover={{
                      color: "colorPalette.default",
                      transform: "translateX(3px)",
                    }}
                  >
                    <Icon boxSize="7">
                      <link.icon />
                    </Icon>
                    {link.name}
                  </HStack>
                </Link>
              ))}

              <Divider thickness="2px" />

              <Link href="mailto:chimobi.justice@gmail.com">
                <HStack
                  gap="3"
                  transition="all 0.2s"
                  _hover={{
                    color: "colorPalette.default",
                    transform: "translateX(3px)",
                  }}
                >
                  <Icon boxSize="7">
                    <MdEmail />
                  </Icon>
                  chimobi.justice@gmail.com
                </HStack>
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Flex>
    </Container>
  )
}

export const SOCIAL_LINKS = [
  {
    name: "Github",
    href: "https://github.com/chimobi-justice",
    icon: FaGithub,
    ariaLabel: "Github",
  },
  {
    name: "Twitter",
    href: "https://x.com/chimobijustice",
    icon: FaXTwitter,
    ariaLabel: "Twitter",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/justice-chimobi/",
    icon: FaLinkedin,
    ariaLabel: "LinkedIn",
  }
]
