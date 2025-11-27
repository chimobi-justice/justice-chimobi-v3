import { Box, Flex, Heading, Text } from "@fidely-ui/react"

export default function NotFound() {
  return (
    <Flex
      textAlign="center"
      justifyContent="center"
      height="75vh"
      flexDirection="column"
      pt="2"
      pb="2"
    >
      <Heading pt={4} pb={3} textStyle="5xl">
        404
      </Heading>

      <Text pt="4" pb="3">
        Sorry the page you looking for does not exit or might be move out, thanks
      </Text>
    </Flex>
  )
}