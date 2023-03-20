import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Nav from './Nav'

const Header = () => {
  return (
      <Mainheader>
          <NavLink>
              <img className='logo' src='./images/logo.png' alt='image not found' />
          </NavLink>
          <Nav/>
    </Mainheader>
  )
}

const Mainheader = styled.header`
padding: 0 4.8rem;
height: 10rem;
background-color: ${({ theme }) => theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
.logo {
  height: 8rem;
  width : 20rem;
}
`;
export default Header