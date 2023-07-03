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
}

export const ProductDisplayBig: FC<Props> = ({
  mainText,
  underText,
  infoText,
  imageUrl,
  linkUrl,
}) => {
  return (
    <Container imageUrl={imageUrl}>
      <TextContainer>
        <MainText>{mainText}</MainText>
        <UnderText>{underText && underText}</UnderText>
        <InfoText>{infoText && infoText}</InfoText>
      </TextContainer>
      <GenericButton text='DISPLAY MORE' onClick={() => console.log("")} />
    </Container>
  );
};
