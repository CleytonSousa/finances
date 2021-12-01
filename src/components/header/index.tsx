import React, { useState } from "react";
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./style";

import Modal from "react-modal";

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
