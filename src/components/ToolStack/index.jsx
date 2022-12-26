import { SP } from "next/dist/shared/lib/utils";
import ToolBadges from "../ToolBadges";
import { Heading, Spacer, Card } from "../ui-library";

const ToolStack = () => {
  return (
    <Card variant="outlined">
        <Heading>TOOLS & PLATFORMS</Heading>
        <Spacer size="sm" />
        <ToolBadges />
    </Card>
  )
}

export default ToolStack