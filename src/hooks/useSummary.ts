import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'

export function useSummary() {
  const { transactions } = useContext(TransactionsContext)

  // reduce permite percorrer o array e reduzir este array a uma nova estrutura de dados
  // neste caso, vai converter o array de  transactions num objeto -- {income: 0, outcome: 0, total: 0}

  // Primeiro parâmetro é uma função, segundo é a estrutura de dados inicial
  const summary = transactions.reduce(
    // as operações sao feitas no accumulator(resumo)
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
        acc.total = acc.total + transaction.price
      } else {
        acc.outcome += transaction.price
        acc.total = acc.total - transaction.price
      }

      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return summary
}
