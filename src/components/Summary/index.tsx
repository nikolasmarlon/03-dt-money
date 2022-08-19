import { SummaryCard, SummaryContainer } from "./styles";

import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar} from 'phosphor-react'
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";


export function Summary() {

    const { transactions } = useContext(TransactionsContext)

    //reduce permite percorrer o array e reduzir este array a uma nova estrutura de dados
    //neste caso, vai converter o array de  transactions num objeto -- {income: 0, outcome: 0, total: 0}

    //Primeiro parâmetro é uma função, segundo é a estrutura de dados inicial
    const summary = transactions.reduce(
        //as operações sao feitas no accumulator(resumo)
        (acc, transaction) => {
            if (transaction.type === 'income'){
                acc.income += transaction.price
                acc.total = acc.total + transaction.price
                
            }else {
                acc.outcome += transaction.price
                acc.total = acc.total - transaction.price
            }

            return acc
        }, 
        {
            income: 0, 
            outcome: 0, 
            total: 0
        }
        )

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00b37e" />
                </header>
                
                <strong>{summary.income}</strong>
            </SummaryCard>
            <SummaryCard>
                <header>
                    <span>Saidas</span>
                    <ArrowCircleDown size={32} color="#f75a68" />
                </header>

                <strong>{summary.outcome}</strong>
            </SummaryCard>
            <SummaryCard variant={"green"}>
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#fff" />
                </header>

                <strong>{summary.total}</strong>
            </SummaryCard>
        </SummaryContainer>
        
    )
}