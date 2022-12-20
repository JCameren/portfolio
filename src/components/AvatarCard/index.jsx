import React from "react";
import { Button, Card, Flex, Grid, Heading, Spacer, Text } from "../ui-library/index";
import * as styles from "./index.css";
import Image from "next/image";
import { VscGithubAlt } from "react-icons/vsc";
import { BsLinkedin } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

const AvatarCard = () => {
  return (
    <div className={styles.avatarCardWrapper}>
      <Card variant="filled">
        <Flex variant="column">
          <Image
            src={"/me.png"}
            width="175"
            height="175"
            className={styles.avatarImageWrapper}
            alt="picture of me! :D"
          />
          <Spacer size="xs" />
          <Heading>Cameren Johnson</Heading>
          <Spacer size="xs" />
          <Text>Web Developer</Text>
          <Spacer size="xs" />
          <Flex variant="center">
            <a className={styles.avatarCardBtns} href='#'>
              <VscGithubAlt />
            </a>
            <a className={styles.avatarCardBtns} href='#'>
              <BsLinkedin />
            </a>
            <a className={styles.avatarCardBtns} href='#'>
              <AiOutlineMail />
            </a>
          </Flex>
          <Spacer size="xs" />
          <Button variant="filled">Resume</Button>
        </Flex>
      </Card>
    </div>
  );
};

export default AvatarCard;
