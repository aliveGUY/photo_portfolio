import './index.css'
import Img from '../image'

const Carrousel = ({ photos }) => {
  return (
    <div className='slideshow-container'>{
      photos.map((photo, id) => {
        return (
          <div key={id} className="slide">
            <Img className="carrousel_image" image={photo} type="carrousel" />
          </div>
        )
      })
    }</div>
  )
}
export default Carrousel