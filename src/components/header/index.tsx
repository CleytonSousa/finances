import React from "react";
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./style";

export const Header = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button>Nova transação</button>
      </Content>
    </Container>
  );
};
