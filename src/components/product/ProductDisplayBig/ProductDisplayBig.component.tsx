import React, { FC } from "react";
import {
  Container,
  TextContainer,
  MainText,
  UnderText,
  InfoText,
} from "./ProductDisplayBig.style";
import { GenericButton } from "@/src/ui";

interface Props {
  mainText: string;
  underText?: string;
  infoText?: string;
  imageUrl: string;
  linkUrl?: string;
  textColor?: "white";
}

export const ProductDisplayBig: FC<Props> = ({
  textColor = "black",
  mainText,
  underText,
  infoText,
  imageUrl,
  linkUrl,
}) => {
  const handleClick = () => {};
  return (
    <Container $imageurl={imageUrl}>
      <TextContainer color={textColor}>
        <MainText>{mainText}</MainText>
        <UnderText>{underText && underText}</UnderText>
        <InfoText>{infoText && infoText}</InfoText>
      </TextContainer>
      <GenericButton text='DISCOVER MORE' onClick={() => console.log("")} />
    </Container>
  );
};
