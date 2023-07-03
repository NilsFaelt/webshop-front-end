import React, { FC } from "react";
import { Container, Title, UnderTitle, StyledLink } from "./MainTitle.style";
import Link from "next/link";

export const MainTitle: FC = () => {
  return (
    <StyledLink href={"/"}>
      <Container>
        <Title>GREEN FUTURE</Title>
        <UnderTitle>ASSOSCIATED</UnderTitle>
      </Container>
    </StyledLink>
  );
};
