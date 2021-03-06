import { Dashboard } from "./components/dashboard";
import { Header } from "./components/header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionProvider } from "./hooks/useTransaction";

//acessibilidade Body => Root
Modal.setAppElement("#root");

function App() {
  const [isNewTransactionModalOpen, setNewTransactionModalOpen] =
    useState(false);

  const handleOpenNewtransactionModal = () => {
    setNewTransactionModalOpen(true);
  };

  const handleCloseNewtransactionModal = () => {
    setNewTransactionModalOpen(false);
  };

  return (
    <TransactionProvider>
      <Header onOpenNewtransactionModal={handleOpenNewtransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewtransactionModal}
      />
      <GlobalStyle />
    </TransactionProvider>
  );
}

export default App;
