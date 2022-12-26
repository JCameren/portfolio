import { Container, Text } from '../ui-library/index'

const ProjectDetailContent = ({ richText }) => {
  return (
    <Container size="small">
        <Text dangerouslySetInnerHTML={{ __html: richText.html }} />
    </Container>
  )
}

export default ProjectDetailContent