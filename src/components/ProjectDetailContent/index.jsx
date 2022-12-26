import { Container, Text } from '../ui-library/index'

const ProjectDetailContent = ({ richText }) => {
  return (
    <Container size="large">
        <Text dangerouslySetInnerHTML={{ __html: richText.html }} />
    </Container>
  )
}

export default ProjectDetailContent