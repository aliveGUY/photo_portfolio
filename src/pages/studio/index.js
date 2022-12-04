import './index.css'
import Container from "../../components/ui/container"
import Grid from "../../components/ui/grid"
import Carrousel from "../../components/ui/carrousel"
import Comparison from '../../components/ui/comparison'

import studio_1 from "../../img/studio/studio_1.jpg"
import studio_2 from "../../img/studio/studio_2.jpg"
import studio_3 from "../../img/studio/studio_3.jpg"
import studio_4 from "../../img/studio/studio_4.jpg"
import before from "../../img/studio/before.jpg"
import after from "../../img/studio/after.jpg"

const Studio = () => {
  const carrousel = [studio_1, studio_2, studio_3, studio_4]
  const comparison = [ before, after]
  return (
    <Container>
      <Grid>
        <h2 className="studio_title">Студійні Фотосесії</h2>
        <div className="studio_carrusel">
          <Carrousel photos={carrousel}/>
        </div>
        <div className="studio_text">
          <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text </p>
        </div>
      </Grid>
      <Grid>
        <h2 className="studio_title">Обробка Фото</h2>
        <Comparison className="studio_comparison" photos={comparison} />
      </Grid>
    </Container>
  )
}

export default Studio