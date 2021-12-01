import React from 'react'
import { Summary } from '../sumary'
import { TransactionsTable } from '../transactionsTable'
import { Container } from './style'

export const Dashboard = () => {
    return (
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>
    )
}
