import React from "react";
import { Text, Grid, GridItem } from "@chakra-ui/react";
import { ExperienceLink } from "./ExperienceLink";

export const SocialLink: React.FC<any> = ({ side, title, href, ...props }) => {
  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)" {...props}>
        <GridItem colSpan={{ base: 5, md: 1 }}>
          <Text variant="darker" mr={1}>
            {side}
          </Text>
        </GridItem>
        <GridItem colSpan={{ base: 5, md: 4 }} mt={1}>
          <ExperienceLink title={title} href={href} />
        </GridItem>
      </Grid>
    </>
  );
};
