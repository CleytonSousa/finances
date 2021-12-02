import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "./services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionProviderProps {
    children: ReactNode
}

interface TransactionContextData {
  transactions: Transaction[],
  createTransaction: (transaction: TransactionInput) => void
}

export const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData // hmmmmm suspeito
);

export const TransactionProvider = ({children}: TransactionProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((res) => setTransactions(res.data.transactions));
  }, []);

  const createTransaction = (transaction: TransactionInput) => {
    // const data = {
    //   title,
    //   value,
    //   category,
    //   type,
    //   createAt: new Date()
    // }

    api.post('/transaction', transaction)
  }

  return (
    <TransactionContext.Provider
      value={{transactions, createTransaction }}
    >
        {children}
    </TransactionContext.Provider>
  );
};
