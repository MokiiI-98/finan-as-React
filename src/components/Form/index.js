import React, { useState } from 'react'
import Grid from '../Grid'
import * as C from './styles'

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState('')
  const [amount, setAmount] = useState('')
  const [isExpense, setExpense] = useState(false)

  const generateID = () => Math.round(Math.random() * 1000)

  const handleSave = () => {
    if (!desc) {
      alert('Informe a descrição')
      return
    } else if (amount < 1) {
      alert('O valor tem que ser positivo!')
      return
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense
    }

    handleAdd(transaction)
    setDesc('')
    setAmount('')
  }

  return (
    <div>
      <C.Container>
        <C.InputContent>
          <C.Label>Descrição</C.Label>

          <C.Input
            value={desc}
            onChange={e => setDesc(e.target.value)}
          ></C.Input>
        </C.InputContent>
        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input
            value={amount}
            type="number"
            onChange={e => setAmount(e.target.value)}
          ></C.Input>
        </C.InputContent>
        <C.RadioGroup>
          <C.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          ></C.Input>
          <C.Label htmlFor="rIncome">Dinheiro na conta </C.Label>
          <C.Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}
          ></C.Input>
          <C.Label htmlFor="rExpenses">Pagar </C.Label>
        </C.RadioGroup>
        <C.Button onClick={handleSave}>ADICIONAR</C.Button>
      </C.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList}></Grid>
    </div>
  )
}

export default Form
