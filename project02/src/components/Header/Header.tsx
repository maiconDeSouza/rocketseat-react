import { HeadersContainer } from './Header.styles'

import Logo from '../../assets/Logo.svg'
import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeadersContainer>
      <img src={Logo} alt="Logo da marca Ignite" />
      <nav>
        <NavLink to="/" title="Relogio">
          <Timer size={24} />
        </NavLink>
        <NavLink to="history" title="Históia">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeadersContainer>
  )
}
