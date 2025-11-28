import Link from "next/link"
import { Box, Button, Divider, Flex, Heading, HStack, Stack, Text } from "@fidely-ui/react"
import { Container } from "@fidely-ui/styled-system/jsx"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

export const SocialLink = [
  {
    id: 1,
    name: "Linkedin",
    link: "https://www.linkedin.com/in/justice-chimobi/",
    icon: <FaLinkedin />
  },
  {
    id: 2,
    name: "Github",
    link: "https://github.com/chimobi-justice",
    icon: <FaGithub />
  },
  {
    id: 3,
    name: "Email",
    link: "mailto:chimobi.justice@gmail.com",
    icon: <MdEmail />
  }
]

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
        <Stack mb="40px" gap="3.5">
          <Heading textStyle="3xl" fontWeight="bold" color="fg.muted">Justice Chimobi</Heading>
          <Text color="fg.muted">Passionate Frontend engineer bridging the gap between design and code</Text>
        </Stack>

        <Divider thickness="1px" color="border.disabled" />

        <Flex 
          justify="space-between" 
          flexDirection={{ base: "column", md: "row" }}
          align={{ base: "flex-start", md: "center"}} 
          width="full" 
          mt="40px" 
          pb="10px" 
          color="fg.muted"
        >
          <Text textStyle="sm">All rights reserved &copy; Justice Chimobi {new Date().getFullYear().toString()}</Text>

          <HStack>
            {SocialLink.map((link) => (
              <Button
                key={link.id}
                variant="plain"
                size="xs"
                display="flex"
                color="fg.muted"
                gap="2"
                asChild
                textDecoration="underline"
              >
                <Link href={link.link} key={link.id}>
                  {link.icon} {link.name}
                </Link>
              </Button>
            ))}
          </HStack>
        </Flex>
      </Box>
    </Container>
  )
}