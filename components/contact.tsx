import Link from "next/link"
import { Box, Button, Divider, Heading, Stack, Text } from "@fidely-ui/react"
import { Container } from "@fidely-ui/styled-system/jsx"

export const Contact = () => {
  return (
    <Container 
      maxW="7xl" 
      my={{ base: "3rem", md: "5rem"}}
      id="projects"
      as="section"
    >
      <Box
        alignItems="center"
        padding="15px"
      >
        <Stack mb="30px" gap="3.5">
          <Heading textStyle={{ base: "4xl", md: "6xl"}} fontWeight="bold" color="fg.muted">
            Get In Touch
          </Heading>

          <Divider thickness="1px" color="border.disabled" />

          <Text width={{ base: "100%", md: "55%"}} lineHeight="1.9" color="fg.muted">
            If you’re building something ambitious and need someone who understands UI deeply let's talk.
          </Text>

          <Box>
            <Button
              variant="outline"
              asChild
              minWidth="auto"
            >
              <Link href="mail:chimobi.justice@gmail.com" target="_blank">
                SAY HELLO
              </Link>
            </Button>
          </Box>
        </Stack>
      </Box>
    </Container>
  )
}
