import { Flex, Text } from "../ui-library"
import { SiGithub, SiNpm, SiNetlify, SiHeroku, SiVercel} from 'react-icons/si'

const ToolBadges = () => {
  return (
    <Flex variant="spaceBetween">
        <Text>
            <SiGithub />
        </Text>
        <Text>
            <SiNpm />
        </Text>        
        <Text>
            <SiNetlify />
        </Text>        
        <Text>
            <SiHeroku />
        </Text> 
        <Text>
            <SiVercel />
        </Text> 
    </Flex>
  )
}

export default ToolBadges