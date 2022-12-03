import { Link } from "react-router-dom"
import Container from "../ui/container"
const Navbar = () => {
  return (
    <Container>
      <Link to="/">Film</Link>
      <Link to="/studio">Studio</Link>
    </Container>
  )
}

export default Navbar