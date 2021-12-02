import { api } from "../../services/api";
import { FormEvent, useState, useContext } from "react";
import { TransactionContext } from "../../TransactionContext";
import Modal from "react-modal";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

import { Container, TransactionTypeCatgories, RadioBox } from "./style";


interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => {

  const transactions = useContext(TransactionContext)
  const { createTransaction } = useContext(TransactionContext)

  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    createTransaction({
      amount,
      category,
      title,
      type
    })
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Botão de fechar" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input placeholder="Título" value={title} onChange={event => setTitle(event.target.value)}/>

        <input type="number" placeholder="Valor" value={amount} 
          onChange={event => setAmount(Number(event.target.value))} 
        />

        <TransactionTypeCatgories>

          <RadioBox
            type="button"
            onClick={() => {setType("deposit")}}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => {setType("withdraw")}}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saida</span>
          </RadioBox>

        </TransactionTypeCatgories>

        <input placeholder="Categoria" 
        value={category} onChange={event => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};
