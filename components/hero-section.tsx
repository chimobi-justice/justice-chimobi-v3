import Image from "next/image"
import Link from "next/link"
import {
  Badge,
  Button,
  Flex,
  Heading,
  HStack,
  Stack,
  Text
} from "@fidely-ui/react"
import { Container } from "@fidely-ui/styled-system/jsx"
import { GoDotFill } from "react-icons/go"

export const HeroSection = () => {
  return (
    <Container maxW="7xl" as="section">
      <Stack
        gap="2"
        mt="25px"
        mb="10px"
        padding="15px"
        height="75vh"
        justifyContent="center"
        flexDirection="column"
        textAlign={{ base: "center", md: "left" }}
      >
        <Flex 
          align="center" 
          gap="5" 
          flexDirection={{ base: "column-reverse", md: "row" }}
        >
          <Heading
            as="h3"
            color="colorPalette.default"
            size="3xl"
            display="flex"
            alignItems="center"
            gap="3.2"
          >
            <GoDotFill /> Frontend Engineer
          </Heading>

          <Badge variant="subtle" gap="3.2" mt="4px" size="lg"> 
            AVAILABLE FOR WORK
          </Badge>
        </Flex>

        <Flex
          align="center"
          justify="space-between"
          mt="40px"
        >
          <Stack width={{ base: "100%", md: "75%" }} gap="7">
            <Heading
              as="h1"
              textStyle={{ base: "4xl", md: "9xl" }}
              color="fg.muted"
            >
              Justice Chimobi
            </Heading>
            <Text
              color="fg.muted"
              width={{ base: "100%", md: "70%" }}
              lineHeight="2em"
              textStyle="xl"
            >
              👋 I'm passionate about ♿️ accessibility, 😍 user experience and 🎨 human centered products.
            </Text>

            <HStack mt="15px">
              <Button
                variant="plain"
                display="flex"
                size="lg"
                color="fg.muted"
                padding="0"
                asChild
                _hover={{
                  textDecoration: "underline"
                }}

                width={{ base: "100%", md: "auto" }}
              >
                <Link href={"https://fidely-ui.vercel.app/"} target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/fidely-small.png"
                    width={35}
                    height={40}
                    alt='fidely ui logo'
                  /> Creator, Fidely UI
                </Link>
              </Button>
            </HStack>
          </Stack>
        </Flex>
      </Stack>
    </Container>
  )
}