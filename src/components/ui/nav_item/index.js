import { useRef, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom"
import './index.css'

const NavItem = ({ path, children, index, onClick }) => {
  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight
      });
    }
  }, []);
  const length = dimensions.width - 25
  const height = dimensions.height

  const height_half = height / 2
  const one_fourth = height / 4
  const three_fourth = one_fourth * 3

  return (
    <li ref={targetRef} className="item" style={{zIndex: index, clipPath: `path('M 0 ${height} C ${one_fourth} ${height} ${height_half} ${three_fourth} ${height_half} ${height_half} C ${height_half} ${one_fourth} ${three_fourth} 0 ${height} 0 L ${length} 0 C ${length + one_fourth} 0 ${length + height_half} ${one_fourth} ${length + height_half} ${height_half} C ${length + height_half} ${three_fourth} ${length + three_fourth} ${height} ${length + height} ${height}')` }}>
      <Link onClick={onClick} to={path}>{children}</Link>
    </li>
  )
}
export default NavItem