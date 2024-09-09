import React from 'react'
import ResumeItems from '../ResumeItems/index'
import * as C from './styles'
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign
} from 'react-icons/fa'
const Resume = ({ income, expense, total }) => {
  return (
    <C.Container>
      <ResumeItems
        title="Entradas"
        Icon={FaRegArrowAltCircleUp}
        value={income}
      ></ResumeItems>
      <ResumeItems
        title="Saídas"
        Icon={FaRegArrowAltCircleDown}
        value={expense}
      ></ResumeItems>
      <ResumeItems
        title="Total"
        Icon={FaDollarSign}
        value={total}
      ></ResumeItems>
    </C.Container>
  )
}
export default Resume
