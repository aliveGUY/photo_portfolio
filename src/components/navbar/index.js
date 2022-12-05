import './index.css'
import NavItem from "../ui/nav_item"
import { useMatch } from 'react-router';
import { useState } from 'react';

const Navbar = () => {
  const _0 = useMatch('/') 
  const _1 = useMatch('/individual')
  const _2 = useMatch('/studio')
  const _default = _0 ? 0 : _1 ? 1 : _2 ? 2 : 0
  const [index, setindex] = useState(_default)
  const indeces = [
    [10, 5, 0],
    [5, 10, 0],
    [0, 5, 10]
  ]

  return (
    <ul className="list">
      <NavItem onClick={() => setindex(0)} index={indeces[0][index]} path="/">Плівкові</NavItem>
      <NavItem onClick={() => setindex(1)} index={indeces[1][index]} path="/individual">Індивідуальні</NavItem>
      <NavItem onClick={() => setindex(2)} index={indeces[2][index]} path="/studio">Студійні</NavItem>
    </ul>
  )
}

export default Navbar