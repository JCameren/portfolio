import { useRouter } from "next/router";
import {
  Container,
  Flex,
  BannerText,
  Spacer,
  Button,
} from "../ui-library/index";
import { MdArrowBackIos } from "react-icons/md";

const ProjectDetailHeader = ({ title }) => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <>
      <Container size="large" as="header">
        <Flex variant="spaceBetween">
          <BannerText>{title}</BannerText>
          <Button onClick={goBack}>
            <MdArrowBackIos />
            Back
          </Button>
        </Flex>
      </Container>
      <Spacer size="md" />
    </>
  );
};

export default ProjectDetailHeader;
