import Container from "../ui/container"
import headlineimg from '../../img/headline.png'
import Img from "../ui/image"
import './index.css'

const Headline = () => {
  return (
    <Container>
      <div>
        <h1>Фотографиня естетистка, твій гід по вивченню твоєї фотогенічності. </h1>
        <p>Мене звуть Олександра, займаюсь фотографією вже понад 4 роки.Готова реалізувати будь яку вашу ідею. Подивись на себе з нової сторони, записуйся на фотосесію!</p>
      </div>
      <div>
        <Img image={headlineimg} type="headline" />
      </div>
    </Container>
  )
}

export default Headline