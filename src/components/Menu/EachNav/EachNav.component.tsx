import React, { FC, useState } from "react";
import { Container, InnerLink, Text, TextContainer } from "./EachNav.style";
import { toogleMenu } from "@/src/redux/slices";

interface Props {
  text: string;
  innerLink: { name: string; url: string }[];
}

export const EachNav: FC<Props> = ({ text, innerLink }) => {
  const [toogleMenu, settoogleMenu] = useState(false);
  return (
    <Container>
      <TextContainer onClick={() => settoogleMenu(!toogleMenu)}>
        <Text>{text}</Text>
        <Text>{toogleMenu ? "- " : "+"}</Text>
      </TextContainer>
      {innerLink.length > 0 &&
        toogleMenu &&
        innerLink.map((each, i) => {
          return (
            <InnerLink key={i} href={each.url}>
              {each.name}
            </InnerLink>
          );
        })}
    </Container>
  );
};
