import './index.css'

const Container = ({className, children, ...props}) => {
    return (
        <div className={`Container ${className}`}>
            {children}
        </div>
    )
}

export default Container