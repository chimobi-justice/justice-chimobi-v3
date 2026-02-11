import Link from "next/link"
import { Button, Grid, GridItem, Heading, Stack, Text } from "@fidely-ui/react"
import { Container } from "@fidely-ui/styled-system/jsx"
import { IoLogoNpm } from "react-icons/io5"

import { PUBLISH_PACKAGES_SOURCE } from "~/constant/packages"

export const Packages = () => {
  return (
    <Container maxW="7xl" my="5rem" id="projects" as="section">
      <Grid
        mt="30px"
        mb="40px"
        w="100%"
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)"
        }}
      >
        {PUBLISH_PACKAGES_SOURCE.map((project, index) => (
          <GridItem key={index} p={4}>
            <Heading
              textStyle={{ base: "xl", md: "3xl" }}
              color="colorPalette.default"
              fontWeight="bold">
              {project.title}
            </Heading>

            <Text color="fg.muted" mt="5px" lineHeight="1.8em">{project.desc}</Text>

            <Stack mt="15px">
              <Button
                variant="outline"
                asChild
              >
                <Link
                  href={project.NPM}
                  target="_blank">
                  <IoLogoNpm /> NPM </Link>
              </Button>
            </Stack>
          </GridItem>
        ))}
      </Grid>

    </Container>
  )
}