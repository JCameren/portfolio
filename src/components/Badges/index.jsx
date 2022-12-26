import { Flex, Text } from "../ui-library";
import {
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPython,
    SiDjango,
    SiPostgresql,
  } from "react-icons/si";

const Badges = () => {
  return (
    <Flex variant="spaceBetween">
      <Text>
        <SiHtml5 />
      </Text>
      <Text>
        <SiCss3 />
      </Text>
      <Text>
        <SiJavascript />
      </Text>
      <Text>
        <SiReact />
      </Text>
      <Text>
        <SiNodedotjs />
      </Text>
      <Text>
        <SiExpress />
      </Text>
      <Text>
        <SiMongodb />
      </Text>
      <Text>
        <SiPython />
      </Text>
      <Text>
        <SiDjango />
      </Text>
      <Text>
        <SiPostgresql />
      </Text>
    </Flex>
  );
};

export default Badges;
