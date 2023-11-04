import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { Experience } from "@/components/Experience";
import { BigLink } from "@/components/link/BigLink";
import { Banner } from "@/components/Banner";
import { Section } from "@/components/Section";

export default async function Home() {
  const pageW = 900;
  const sectionSpacing = [20, "8rem"];

  return (
    <>
      <Box mx="auto" px="3">
        <Banner />
      </Box>
      <Box mb={sectionSpacing}>
        <Section title="About" width={pageW}>
          {renderAbout()}
        </Section>
      </Box>
      <Box mb={sectionSpacing}>
        <Section title="Experience" mt={[0, 10]}>
          {renderExperience()}
        </Section>
      </Box>
      <Box mb={sectionSpacing}>
        <Section title="Featured Projects" mt={[0, 10]}>
          {renderFeaturedProjects()}
        </Section>
      </Box>
    </>
  );

  function renderAbout() {
    return (
      <>
        <Grid templateColumns="repeat(2, 1fr)">
          <GridItem p={4} colSpan={{ base: 2, lg: 1 }}>
            <Flex>
              <Text variant="big">
                I&apos;m a full stack software engineer who loves designing,
                building, and shipping creative products with intuitive
                experiences from start to finish.
              </Text>
            </Flex>
          </GridItem>
          <GridItem p={4} textAlign="justify" colSpan={{ base: 2, lg: 1 }}>
            <Text>
              As a self-taught developer, I learned how to build code first,
              sharpening my craft through curiosity and grit. I&apos;ve
              developed and contributed to a variety of exciting projects since
              starting my journey back in 2018. When I&apos;m not coding,
              I&apos;m producing my own music, surfing, snowboarding, taking
              photos with my film cameras, and out exploring the world.
            </Text>
          </GridItem>
          <GridItem p={4} textAlign="justify" colSpan={{ base: 2, lg: 1 }}>
            <Text>
              I work best at the intersection of boundless creativity and
              unwavering precision, where imaginative design meets methodical
              development. I&apos;m passionate about both product and
              engineering, and love putting my problem solving skills to the
              test.
            </Text>
          </GridItem>
          <GridItem p={4} colSpan={{ base: 2, lg: 1 }} overflow="hidden">
            <BigLink
              title="Say Hello"
              href="mailto:maxhfung@gmail.com?subject=Hello Max"
            />
          </GridItem>
        </Grid>
      </>
    );
  }

  function renderExperience() {
    return (
      <>
        <Experience
          href="https://www.flexe.com/"
          from="2022"
          to="present"
          title="Software Development Engineer"
          company="Flexe"
          desc="Deliver high-quality, robust production code for Flexe’s proprietary warehouse management
            system serving a diverse array of large enterprise clients. Led the design and deployment of reusable mobile front end components,
            architected  a refactored Android application, and contributed to the decomposition of
            a monolithic Ruby on Rails application to a modern Kotlin microservices architecture."
          stack={["Kotlin", "Rails", "Android", "React", "TS"]}
          long={true}
        />
        <Experience
          href="https://www.boeing.com/"
          from="2021"
          to="2022"
          title="Technologist and Project Manager"
          company="Boeing"
          desc="Developed, maintained, and shipped internal production tracking software using
            Python and Excel, providing project managers with comprehensive data to track products through
            the entire supply chain, reducing overhead costs by around $5,000, per project, per week"
          stack={["Python", "Analytics", "Shell", "SQL"]}
          long={true}
        />
        <Experience
          href="https://www.l3harris.com/company/aerojet-rocketdyne"
          from="2018"
          to="2019"
          title="Engineer"
          company="Aeroject Rocketdyne"
          desc="Independently architected an internal desktop application for pressure transducer and load cell
            calibration tests using Python and PyQt5"
          stack={["Python", "PyQt", "NI-VISA"]}
          long={true}
        />
        <BigLink title="View Full Résumé" href="/resume.pdf" />
      </>
    );
  }

  function renderFeaturedProjects() {
    return (
      <>
        <Experience
          title="Streets For All"
          company="Web Design"
          href="https://github.com/streetsforall"
          stack={["JavaScript", "React", "Python"]}
          image="/sfa.png"
        />
      </>
    );
  }
}
