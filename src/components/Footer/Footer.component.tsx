import React, { FC } from "react";
import {
  Container,
  InfoContainer,
  InnerContainer,
  PaymnetInfoContainer,
  Title,
  Text,
  StyledImage,
} from "./Footer.style";
import { StyledLink } from "@/src/styles";

export const Footer: FC = () => {
  return (
    <Container>
      <InnerContainer>
        <InfoContainer>
          <Title>NUSAS</Title>
          <Text>Copyright © Nusas</Text>
          <Text>
            © 2023 Fango Solutions. <br /> All rights reserved.
          </Text>
        </InfoContainer>
        <InfoContainer>
          <>
            <Title>ABOUT</Title>
            <Text>Our Goals</Text>
            <Text>Why us</Text>
          </>
        </InfoContainer>
        <InfoContainer>
          <Title>CONTACT</Title>
          <Text>
            Email: <br /> inof@nusas.com{" "}
          </Text>
          <Text>
            Phone: <br /> 0046-76-069-8660
          </Text>
        </InfoContainer>
        <InfoContainer>
          <Title>LOGIN</Title>
          <StyledLink href={"/sign-in"}>
            <Text>Sign-In</Text>
          </StyledLink>
          <StyledLink href={"/sign-in"}>
            <Text>Sign-Up</Text>
          </StyledLink>
        </InfoContainer>
      </InnerContainer>
      <PaymnetInfoContainer>
        <StyledImage alt='visa-logo' width={1} height={1} src='/svg/visa.svg' />
        <StyledImage
          alt='mastercard-logo'
          width={1}
          height={1}
          src='/svg/mastercard.svg'
        />
        <StyledImage
          alt='klarna-logo'
          width={1}
          height={1}
          src='/svg/klarna.svg'
        />
      </PaymnetInfoContainer>
    </Container>
  );
};
