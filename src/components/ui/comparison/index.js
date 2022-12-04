import { useState } from 'react'
import Img from "../image"
import './index.css'

const Comparison = ({ photos, className }) => {
  const [range, setCount] = useState(50)
  const x = event => {
    setCount(event.target.value)
  }

  return (
    <div className={`comparison_tag ${className}`}>
      <h3 className="comparison_before">До</h3>
      <div className="comparison">
        <div className="comparison_photos">
          <img src={photos[1]} />
          <img src={photos[0]} style={{ clipPath: `polygon(0 0, ${range}% 0, ${range}% 100%, 0 100%)` }} />
        </div>
        <input type="range" min="0" max="100" id="range" onChange={x} />
      </div>
      <h3 className="comparison_after">Після</h3>
    </div>
  )
}

export default Comparison