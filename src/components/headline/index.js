import './index.css'
import headlineimg from '../../img/headline.png'

import Container from "../ui/container"
import Img from "../ui/image"
import Grid from '../ui/grid'

const Headline = () => {
  return (
    <Container>
      <Grid>
        <div className="text">
          <h1>Фотографиня естетистка, твій гід по вивченню твоєї фотогенічності. </h1>
          <p>Мене звуть Олександра, займаюсь фотографією вже понад 4 роки.Готова реалізувати будь яку вашу ідею. Подивись на себе з нової сторони, записуйся на фотосесію!</p>
        </div>
        <div className="photo">
          <Img image={headlineimg} type="headline" />
        </div>
      </Grid>
    </Container>
  )
}

export default Headline