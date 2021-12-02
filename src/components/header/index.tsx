import React from "react";
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./style";


interface HeaderProps {
  onOpenNewtransactionModal: () => void
}

export const Header = ({onOpenNewtransactionModal}: HeaderProps) => {
  
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewtransactionModal}>
          Nova transação
        </button>
        
      </Content>
    </Container>
  );
};
