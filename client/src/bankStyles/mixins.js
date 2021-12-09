import {css} from 'styled-components'
import {blue} from './variables'

export const displayGrid=()=>css`
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 5px;
`
export const basicStyle=()=>css`
  font-weight: bold;
  padding: 8px;
  border-radius: 15px;
  border: none;
  outline: none;
`
export const btnStyle=()=>css`
  ${basicStyle()};
  background-color:${blue};
  color: white;
`
