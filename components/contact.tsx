import Link from "next/link"
import { Box, Button, Divider, Heading, Stack, Text } from "@fidely-ui/react"
import { Container } from "@fidely-ui/styled-system/jsx"

export const Contact = () => {
  return (
    <Container
      maxW="7xl"
      my={{ base: "3rem", md: "5rem" }}
      id="projects"
      as="section"
    >
      <Box
        alignItems="center"
        padding="15px"
      >
        <Stack mb="30px" gap="3.5">
          <Heading textStyle={{ base: "4xl", md: "5xl" }} fontWeight="bold" color="fg.muted">
            Let's build something great
          </Heading>

          <Divider thickness="1px" color="border.disabled" />

          <Text width={{ base: "100%", md: "55%" }} lineHeight="1.9" color="fg.muted">
            If you're building products where quality, accessibility, and consistency matter, let's talk.
          </Text>

          <Box>
            <Button
              variant="outline"
              asChild
              minWidth="auto"
            >
              <Link href="mailto:chimobi.justice@gmail.com" target="_blank">
                SAY HELLO
              </Link>
            </Button>
          </Box>
        </Stack>
      </Box>
    </Container>
  )
}
