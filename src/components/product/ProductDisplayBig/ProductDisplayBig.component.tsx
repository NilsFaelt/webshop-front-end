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
  if (!data?.[0]?.fields) return;
  console.log(data);
  const { url, title, infoText, underTitle, urlId } = data?.[0].fields;
  const handleClick = () => {
    router.push(`product/${urlId}`);
  };
  return (
    <Container $imageurl={url}>
      <TextContainer color={textColor}>
        <MainText>{title}</MainText>
        <UnderText>{underTitle && underTitle}</UnderText>
        <InfoText>{infoText && infoText}</InfoText>
      </TextContainer>

      <GenericButton onClick={handleClick} text='DISCOVER MORE' />
    </Container>
  );
};
