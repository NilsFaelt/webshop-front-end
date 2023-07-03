import React, { FC } from "react";
import { Container, Title, UnderTitle, StyledLink } from "./MainTitle.style";
import Link from "next/link";

export const MainTitle: FC = () => {
  return (
    <StyledLink href={"/"}>
      <Container>
        <Title>LANOA </Title>
        <UnderTitle>GREEN LIFE</UnderTitle>
      </Container>
    </StyledLink>
  );
};
