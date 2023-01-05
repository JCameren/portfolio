import { BannerText, Spacer } from "../ui-library/index.js";

const HeroText = () => {
  return (
    <>
      <Spacer size="sm" />
      <BannerText>
        <img src={'/logo.svg' } alt="" style={{ width: "2.6rem" }}/>
      </BannerText>
      <Spacer size="sm" />
    </>
  );
};

export default HeroText;
