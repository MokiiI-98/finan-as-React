import styledComponents from 'styled-components'

export const Container = styledComponents.div`
  max-width: 1120px;
  margin: 20px auto;
  width: 90%;
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  padding: 15px 0px;
  gap: 10px;

  @media(max-width: 750px){
    display:grid;
  }
  `
export const InputContent = styledComponents.div`
  display:flex;
  flex-direction: column;
`
export const Label = styledComponents.label``

export const Input = styledComponents.input`
  outline:none;
  border-radius: 5px;
  padding:5px 10px;
  font-size: 15px;
  border: 1px solid #ccc;
`
export const RadioGroup = styledComponents.div`
  display:flex;
  align-items: center;

  input {
    margin-left:20px;
    accent-color: black;
    margin-top:0;
  }
`

export const Button = styledComponents.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  background-color: #008080;
`
