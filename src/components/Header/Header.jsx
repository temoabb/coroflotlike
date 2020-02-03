import React from 'react'
import styled from 'styled-components'

import NavItem from './NavItem'
import Button from '../Button'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 30px;
  height: 66px;
  background-color: #fff;
`
const StyledList = styled.ul`
  display: flex;
`

const Header = () => {
  return (
    <StyledHeader>
      <StyledList>
        <NavItem title="Design Jobs" />
        <NavItem title="Designer" />
        <NavItem title="Projects" />
        <NavItem title="Salaries" />
      </StyledList>
      <Button title="Post a Job" />
    </StyledHeader>
  )
}

export default Header