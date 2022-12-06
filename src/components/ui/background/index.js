import './index.css'

const Background = ({ color, image, opacity, children }) => {
  const styles = {}
  const hex = color && color.match(/.{1,2}/g)
  console.log(hex)
  const rgba= [
    hex ? parseInt(hex[0], 16) : 225,
    hex ? parseInt(hex[1], 16) : 225,
    hex ? parseInt(hex[2], 16) : 225,
    opacity ? opacity : 1
  ]
  if(color) styles.backgroundColor = `rgba(${rgba})`
  if(image) styles.backgroundImage = `url(${image})`
  return (
    <div style={styles} className="background">
      {children}
    </div>
  )
}

export default Background