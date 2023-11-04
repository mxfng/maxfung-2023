import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { Experience } from "@/components/Experience";
import { BigLink } from "@/components/link/BigLink";
import { Banner } from "@/components/Banner";
import { Section } from "@/components/Section";
import { SocialLink } from "@/components/link/SocialLink";
import { nowPlaying, recentlyPlayed, songOfTheMonth } from "@/utils/spotify";
import { SpotifyLogo } from "@/components/svg/SpotifyLogo";

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
        <Flex>
          <Text mb={3} pb={6} variant="big">
            I&apos;m a full stack software engineer who loves designing,
            building, and shipping creative products with intuitive experiences
            from start to finish.
          </Text>
        </Flex>
        <Text mb={3}>
          As a self-taught developer, I learned how to build code first,
          sharpening my craft through curiosity and grit. I&apos;ve developed
          and contributed to a variety of exciting projects since starting my
          journey back in 2018. I work best at the intersection of boundless
          creativity and unwavering precision, where imaginative design meets
          methodical development.
        </Text>
        <Text mb={[10, 14]}>
          I&apos;m passionate about both product and engineering, and love
          putting my problem solving skills to the test. When I&apos;m not
          coding, I&apos;m producing my own music, surfing, snowboarding, taking
          photos with my film cameras, and out exploring the world.
        </Text>
        <BigLink
          title="Say Hello"
          href="mailto:maxhfung@gmail.com?subject=Hello Max"
        />
      </>
    );
  }

  function renderExperience() {
    return (
      <>
        <Experience
          href="https://www.flexe.com/"
          side="2022 - present"
          title="Software Development Engineer · Flexe"
          desc="Deliver high-quality, robust production code for Flexe’s proprietary warehouse management
            system serving a diverse array of large enterprise clients. Led the design and deployment of reusable mobile front end components,
            architected  a refactored Android application, and contributed to the decomposition of
            a monolithic Ruby on Rails application to a modern Kotlin microservices architecture."
          stack={[
            "Kotlin",
            "Ruby on Rails",
            "Android",
            "Ktor",
            "React",
            "TypeScript",
            "Docker",
            "GCP",
          ]}
        />
        <Experience
          href="https://www.boeing.com/"
          side="2021 - 2022"
          title="Project Manager and Technologist · Boeing"
          desc="Developed, maintained, and shipped internal production tracking software using
            Python and Excel, providing project managers with comprehensive data to track products through
            the entire supply chain, reducing overhead costs by around $5,000, per project, per week"
          stack={["Python", "Pandas", "Shell Scripting", "SQL"]}
        />
        <Experience
          href="https://www.l3harris.com/company/aerojet-rocketdyne"
          side="2018, 2019"
          title="Software Engineer · Aeroject Rocketdyne"
          desc="Independently architected an internal desktop application for pressure transducer and load cell
            calibration tests using Python and PyQt5"
          stack={["Python", "PyQt", "NI-VISA"]}
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
  function renderLinks() {
    return <></>;
  }
}
