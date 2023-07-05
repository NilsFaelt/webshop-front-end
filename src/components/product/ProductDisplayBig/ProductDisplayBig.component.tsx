import React, { FC } from "react";
import {
  Container,
  TextContainer,
  MainText,
  UnderText,
  InfoText,
} from "./ProductDisplayBig.style";
import { GenericButton } from "@/src/ui";
import { useProduct } from "@/src/features/Product/hooks";
import { useRouter } from "next/navigation";
interface Props {
  textColor?: "white";
}

export const ProductDisplayBig: FC<Props> = ({ textColor = "black" }) => {
  const { data } = useProduct("none", "true");
  const router = useRouter();
  if (!data?.fields) return;
  const { imageUrl, title, info, underTitle, urlId } = data?.fields;
  const handleClick = () => {
    router.push(`product/${urlId}`);
  };
  return (
    <Container $imageurl={imageUrl}>
      <TextContainer color={textColor}>
        <MainText>{title}</MainText>
        <UnderText>{underTitle && underTitle}</UnderText>
        <InfoText>{info && info}</InfoText>
      </TextContainer>

      <GenericButton onClick={handleClick} text='DISCOVER MORE' />
    </Container>
  );
};
