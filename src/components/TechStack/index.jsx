import { Heading, Spacer, Card } from "../ui-library";
import TechBadges from "../TechBadges";

const TechStack = () => {
  return (
    <>
      <Card variant="outlined">
        <Heading>TECH STACK</Heading>
        <Spacer size="sm" />
        <TechBadges />
      </Card>
      <Spacer size="sm" />
    </>
  );
};

export default TechStack;
