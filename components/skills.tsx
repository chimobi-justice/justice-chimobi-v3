import { Box, Center, Divider, Heading, Stack, Text, Wrap } from "@fidely-ui/react"
import { Container } from "@fidely-ui/styled-system/jsx"

const skillsList = [
  "React",
  "Next.js",
  "TypeScript",
  "Fidely UI",
  "Chakra UI",
  "MUI",
  "Ant Design",
  "React Query",
  "Redux Toolkit",
  "Storybook",
  "TailwindCss",
  "Laravel",
  "PHP"
]

export const Skills = () => {
  return (
    <Container maxW="7xl" my={{ base: "10px", md: "15px"}} as="section">
      <Box
        alignItems="center"
        padding="15px"
      >
        <Stack mb="30px" gap="3.5">
          <Heading textStyle={{ base: "4xl", md: "6xl"}} fontWeight="bold" color="fg.muted">
            Tools & Softwares
          </Heading>
          <Text width={{ base: "100%", md: "55%"}} lineHeight="1.9" color="fg.muted">
            Over the years, I had the opportunity to work with various software, tools and frameworks. Here are some of them:
          </Text>
        </Stack>

        <Divider thickness="1px" color="border.disabled" />

        <Wrap gap={5} mt="30px" mb="40px">
          {skillsList.map((skill) => (
            <Center key={skill} color="colorPalette.default" fontSize={{ base: "xl", md: "4xl"}}>
              {skill}
            </Center>
          ))}
        </Wrap>
      </Box>
    </Container>
  )
}