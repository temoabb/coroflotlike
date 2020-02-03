import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background: #48d1a9;
  border: none;
  outline: none;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  padding: 11px 20px;
  border-radius: 3px;
  cursor: pointer;

  :hover {
    background: #363636;
  }
`

const Button = ({ title }) => {
  return (
    <StyledButton>{title}</StyledButton>
  )
}

export default Button