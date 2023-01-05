import { useRouter } from "next/router";
import {
  Container,
  Button,
  BannerText,
  Spacer,
  Flex,
} from "../components/ui-library/index";

const Custom500Page = () => {
  const router = useRouter();
  return (
    <>
      <Spacer size="lg" />
      <Container size="large">
        <Flex variant="center">
          <BannerText>500, Server Issue I guess...</BannerText>
        </Flex>
        <Spacer size="sm" />
        <Flex variant="center">
          <Button onClick={() => router.push("/")}>Return Home</Button>
        </Flex>
      </Container>
      <Spacer size="lg" />
    </>
  );
};

export default Custom500Page;
