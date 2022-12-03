import './index.css'

// type = [headline, ]
const Img = ({ image, type }) => <div className={type} style={{ backgroundImage: `url(${image})` }} />
export default Img