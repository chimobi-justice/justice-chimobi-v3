import Image from "next/image"
import Link from "next/link"
import { Box, Button, Flex, Heading, Stack, Text } from "@fidely-ui/react"
import { Container } from "@fidely-ui/styled-system/jsx"
import { FaGithub } from "react-icons/fa"
import { TiWorld } from "react-icons/ti"

export const Projects = () => {
  return (
    <Container maxW="7xl" my="5rem" id="projects" as="section">
      <Box textAlign="center" mb="3.5rem">
        <Heading textStyle="xl" color="fg.muted">Featured Works</Heading>
      </Box>

      {PROJECT_SOURCE.map((project, index: number) => (
        <Flex
          alignItems="flex-start"
          padding="15px"
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
          key={index}
        >
          <Box width={{ base: "100%", md: "45%"}}>
            <Heading textStyle="3xl" color="colorPalette.default" fontWeight="bold">{project.title}</Heading>

            <Box my="20px" bg="colorPalette.3" padding="15px" rounded="md" width="100%" position="relative">
              <Text color="fg.muted" lineHeight="1.8em">{project.desc}</Text>
            </Box>

            <Stack flexDirection={{ base: "column", md: "row" }}>
              <Button 
                fullWidth
                asChild
              >
                <Link href={project.website} target="_blank">
                  <TiWorld color="gray" /> Website
                </Link>
              </Button>

              <Button 
                variant="outline" 
                fullWidth
                asChild
              >
                <Link href={project.github} target="_blank">
                  <FaGithub /> Github
                </Link>
              </Button>
            </Stack>
          </Box>

          <Box width={{ base: "100%", md: "45%"}}>
            <Image
              src={project.dest}
              width={480}
              height={440}
              alt="my photo"
              quality={100}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPsn9pfDwAFogI0qPkC4wAAAABJRU5ErkJggg=="
            />
          </Box>
        </Flex>
      ))}
    </Container>
  )
}

const PROJECT_SOURCE = [
  {
    dest: '/fidely-ui-img.png',
    title: 'Fidely UI',
    desc: `Fidely UI is a modern UI library with reusable, intuitive components that help you ship products faster. Create beautiful, consistent interfaces with customizable, production-ready building blocks.`,
    github: 'https://github.com/fidely-ui/fidely-ui',
    website: 'https://fidely-ui.vercel.app/',
  },
  {
    dest: '/leahai.png',
    title: 'Leah Ai',
    desc: `AI platform that automates your business operations, providing real-time analytical insights enabling you to run more sustainably and profitably`,
    github: '#',
    website: 'https://leahai.co/',
  },
  // {
  //   dest: '/learn-hub.png',
  //   title: 'Learn Hub',
  //   desc: `An online content creation and publishing platform.`,
  //   github: 'https://github.com/chimobi-justice/learn-hub',
  //   website: 'https://learn-hub-rosy.vercel.app/',
  // },
  // {
  //   dest: '/estudy.PNG',
  //   title: 'Estudy',
  //   desc: `An eLearning platform to choose learning courses from
  //     different categories in TECH also finding support from mentors
  //     and peers`,
  //   github: 'https://github.com/chimobi-justice/estudy-web-frontend',
  //   website: 'https://estudy-self.vercel.app/',
  // },
  // {
  //   dest: '/bluesea.png',
  //   title: 'Bluesea Investment Limited',
  //   desc: `Bluesea Investment Limited is a contruction company focused in
  //       engineering Projects, procurement Services, and construction work.`,
  //   github: 'https://github.com/chimobi-justice/bluesea',
  //   website: 'https://bluesea-pi.vercel.app/',
  // },
];
