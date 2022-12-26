import { Heading, Spacer, Card } from "../ui-library";
import Badges from "../Badges";

const TechStack = () => {
  return (
    <>
      <Card variant="outlined">
        <Heading>TECHNICAL SKILLS</Heading>
        <Spacer size="sm" />
        <Badges />
      </Card>
      <Spacer size="sm" />
    </>
  );
};

export default TechStack;
