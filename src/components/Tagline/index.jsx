import Link from "next/link";
import { SmallText, Spacer, Button } from "../ui-library/index";
import { CgArrowRight } from 'react-icons/cg'

const Tagline = () => {
  return (
    <>
      <SmallText>
        As a recent graduate of a software engineering bootcamp, I am excited to
        bring my passion for problem-solving and my dedication to continuous
        learning to the field of software development. With a growth, failure,
        and evolving mindset, I am always looking for opportunities to grow and
        improve my skills. I believe that my time in the bootcamp has prepared
        me to take on new challenges and tackle complex problems with
        confidence. I am eager to continue growing my knowledge and expanding my
        expertise in the field of software engineering. Whether it's working on
        a team to develop a new application or tackling a tough coding problem
        on my own, I am always ready to dive in and find creative solutions. I
        am excited to share my portfolio with you and demonstrate my skills and
        abilities as a software engineer. I look forward to the opportunity to
        contribute my skills and expertise to a team and make a positive impact
        on the projects I am involved in.
      </SmallText>
      <Spacer size="sm" />
      {/* <Button as={Link} href="/projects" variant="filled">View Projects <CgArrowRight /></Button>
      <Spacer size="md" /> */}
    </>
  );
};

export default Tagline;
