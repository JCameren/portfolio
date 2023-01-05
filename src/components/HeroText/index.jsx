import Image from "next/image.js";
import { BannerText, Spacer } from "../ui-library/index.js";

const HeroText = () => {
  return (
    <>
      <Spacer size="sm" />
      <BannerText>
        <Image src={'/logo.svg' } width={41.6} height={41.6} priority alt="website logo"/>
      </BannerText>
      <Spacer size="sm" />
    </>
  );
};

export default HeroText;
