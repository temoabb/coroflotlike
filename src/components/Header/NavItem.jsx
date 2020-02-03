import React from 'react'
import styled from 'styled-components'

const StyledNavItem = styled.li`
  font-weight: bold;
  list-style-type: none;
  cursor: pointer;

  :hover {
    color: red;
  }
`

const NavItem = ({ title }) => {
  return (
    <StyledNavItem>{title}</StyledNavItem>
  )
}

export default NavItem
