import React, { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

export const TransactionsTable = () => {
  useEffect(() => {
    api.get("transactions")
      .then((res) => console.log(res.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>01/12/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-R$1.000</td>
            <td>Casa</td>
            <td>28/11/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
