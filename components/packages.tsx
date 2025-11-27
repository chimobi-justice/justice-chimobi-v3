import Link from "next/link"
import { Button, Grid, GridItem, Heading, Stack, Text } from "@fidely-ui/react"
import { Container } from "@fidely-ui/styled-system/jsx"
import { IoLogoNpm } from "react-icons/io5"

export const Packages = () => {
  return (
    <Container maxW="7xl" my="5rem" id="projects" as="section">
      <Heading 
        textStyle={{ base: "4xl", md: "6xl" }} 
        fontWeight="bold" color="fg.muted" 
        mb={{ base: "2rem", md: "4rem"}}
      >
        Publish Packages
      </Heading>

      <Grid
        mt="30px"
        mb="40px"
        w="100%"
        gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      >
        {PUBLISH_PACKAGES_SOURCE.map((project, index) => (
          <GridItem key={index} p={4}>
            <Heading
              textStyle={{ base: "xl", md: "3xl"}}
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


const PUBLISH_PACKAGES_SOURCE = [
  {
    title: '@fidely-ui/react',
    desc: `Fidely UI is a modern, beautifully crafted React design system powered 
    by Ark UI and Panda CSS, delivering accessible and themeable components for building exceptional web apps.`,
    NPM: 'https://www.npmjs.com/package/@fidely-ui/react',
  },
  {
    title: '@fidely-ui/panda-preset',
    desc: `Panda preset for Fidely UI design system in your Panda CSS.`,
    github: 'https://github.com/chimobi-justice/num-format-utils',
    NPM: 'https://www.npmjs.com/package/@fidely-ui/panda-preset',
  },
  {
    title: 'num-format-utils',
    desc: `A lightweight utility library for formatting numbers, currencies, 
    percentages, and decimals — with full TypeScript support and locale-aware 
    formatting via the Intl API.`,
    github: 'https://github.com/chimobi-justice/num-format-utils',
    NPM: 'https://www.npmjs.com/package/num-format-utils',
  },
];