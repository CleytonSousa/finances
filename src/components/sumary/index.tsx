import React from "react";
import { Container } from "./style";
import incomeImg from '../../assets/income.svg'
import outComeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export const Summary = () => {
  return (
    <Container>

      <div>
          <header>
              <p>Entradas</p>
              <img src={incomeImg} alt="entradas" />
          </header>
          <strong>R$1000,00</strong>
      </div>

      <div>
          <header>
              <p>Entradas</p>
              <img src={outComeImg} alt="saidas" />
          </header>
          <strong>-R$500,00</strong>
      </div>

      <div className="highLight-background">
          <header>
              <p>Entradas</p>
              <img src={totalImg} alt="total" />
          </header>
          <strong>R$500,00</strong>
      </div>
     
    </Container>
  );
};
