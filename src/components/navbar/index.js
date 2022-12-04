import './index.css'
import NavItem from "../ui/nav_item"
import { useState } from 'react';

const Navbar = () => {
  const [index, setindex] = useState(0)
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