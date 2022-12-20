import {
  Button,
  Card,
  Container,
  Spacer,
  Grid,
  BannerText,
  Flex,
} from "../components/ui-library";
import AvatarCard from "../components/AvatarCard/index";

export default function Home() {
  return (
    <>
      <Container size="extraSmall">
          <AvatarCard />
      </Container>
    </>
  );
}
