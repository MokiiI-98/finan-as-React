import styledComponents from 'styled-components'

export const Table = styledComponents.table`
  width: 98%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
`

export const Thead = styledComponents.thead``
export const Tbody = styledComponents.tbody``
export const Tr = styledComponents.tr``

export const Th = styledComponents.th`
  border-bottom: inset;
  padding-bottom: 5px;
  text-align: ${props => (props.alignCenter ? 'center' : 'start')};
  width: ${props => (props.width ? '%' : 'auto')};
`

export const Thx = styledComponents.th`
  border-bottom: inset;
  padding-bottom: 5px;
  text-align: center;
`
