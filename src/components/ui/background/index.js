import './index.css'

const Background = ({ color, image, opacity, children }) => {
  console.log(image)
  const styles = {}
  if(color) styles.backgroundColor = color
  if(image) styles.backgroundImage = `url(${image})`
  if(opacity) styles.opacity = opacity
  return (
    <div style={styles} className="background">
      {children}
    </div>
  )
}

export default Background