import Seo from "../components/Seo/index";
import { useRouter } from "next/router";
import {
  BannerText,
  Button,
  Container,
  Flex,
  Spacer,
} from "../components/ui-library";

const Custom404Page = () => {
  const router = useRouter();
  return (
    <>
      <Seo
        title="404 Page Not Found"
        description="Could not find the resource you are looking for. Sorry."
      />
      <Spacer size="lg" />
      <Container size="large">
        <Flex variant="center">
          <BannerText>404 Uh-oh...</BannerText>
        </Flex>
        <Spacer size="sm" />
        <Flex variant="center">
          <Button variant="filled" onClick={() => router.push("/")}>
            Go Home
          </Button>
        </Flex>
      </Container>
      <Spacer size="lg" />
    </>
  );
};

export default Custom404Page;
