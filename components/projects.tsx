import Link from "next/link"
import { Avatar, Box, Card, Grid, GridItem, Heading, HStack, Stack } from "@fidely-ui/react"
import { Container } from "@fidely-ui/styled-system/jsx"
import { FaGithub } from "react-icons/fa"
import { HiArrowUpRight } from "react-icons/hi2"

import { PROJECT_SOURCE } from "~/constant/projects"
import { Icon } from "~/components/icon"

export const Projects = () => {
  return (
    <Container maxW="7xl" my="7rem" id="projects" as="section">
      <Box mb="14">
        <Heading
          as="h2"
          textStyle={{ base: "4xl", md: "5xl" }}
          fontWeight="bold"
          color="fg.muted"
        >
          A few things I've built.
        </Heading>
      </Box>

      <Grid
        gridTemplateColumns={{
          base: '1fr',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
        gap={{ base: '2', md: '3' }}
      >
        {PROJECT_SOURCE.map((item) => (
          <GridItem height="min-content" key={item.id}>
            <Card.Root
              bg="transparent"
              shadow="none"
              _hover={{
                colorPalette: 'gray',
                bg: "colorPalette.alpha3",
              }}
            >
              <Card.Body>
                <Stack gap="6">
                  <Avatar.Root size="lg">
                    <Avatar.Fallback name={item.title} />
                    <Avatar.Image src={item.dest} alt={item.title} />
                  </Avatar.Root>

                  <Card.Title>{item.title}</Card.Title>
                  <Card.Description>{item.desc}</Card.Description>

                  <HStack gap="4">
                    <Link href={item.website} target="_blank" rel="noopener noreferrer">
                      <HStack
                        transition="all 0.2s"
                        _hover={{
                          colorPalette: "accentColor",
                          color: "colorPalette.default",
                          transform: "translateX(2px)"
                        }}
                      >
                        Live
                        <Icon boxSize="4">
                          <HiArrowUpRight />
                        </Icon>
                      </HStack>
                    </Link>
                    
                    {item.github !== "#" && (
                      <Link href={item.github} target="_blank" rel="noopener noreferrer">
                        <HStack
                          transition="all 0.2s"
                          _hover={{
                            colorPalette: "accentColor",
                            color: "colorPalette.default",
                            transform: "translateX(2px)"
                          }}
                        >

                          <Icon boxSize="4">
                            <FaGithub />
                          </Icon>
                          Code
                        </HStack>
                      </Link>
                    )}
                  </HStack>
                </Stack>
              </Card.Body>
            </Card.Root>
          </GridItem>
        ))}
      </Grid>
    </Container>
  )
}