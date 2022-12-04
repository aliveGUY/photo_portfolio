import './index.css'

// type = [headline, carrousel, comparison ]
const Img = ({ image, type, className }) => <div className={`${type} ${className}`} style={{ backgroundImage: `url(${image})` }} />
export default Img