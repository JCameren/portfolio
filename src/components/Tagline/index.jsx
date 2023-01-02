import { Text, Grid, SmallText, Flex, Spacer } from "../ui-library/index";

const Tagline = () => {
  return (
    <>
      <Flex>
        <SmallText>ABOUT</SmallText>
        <Spacer size="xs" />
        <Text>
          Hey there! I'm Cameren, a recent graduate of a software engineering
          bootcamp with a focus in full stack web development. I believe in the
          power of minimalism in web design and enjoy the process of breaking
          down tough challenges into manageable pieces. When it comes to user
          experience, I strive to create websites that are visually striking and
          leave a lasting impression.
        </Text>
      </Flex>
      <Spacer size="md" />
    </>
  );
};

export default Tagline;
