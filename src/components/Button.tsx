import { MouseEventHandler, ReactNode } from "react"

//Se genera una interfaz donde se crean las propiedades para las props, en este caso children
//Necesitamos que los children sean un nodo de react
//En el caso de handle click, se agrega la propiedad que tiene un "onClick" por defecto, como se reconoce en html
interface ButtonProps{
    children: ReactNode,
    handleClick: MouseEventHandler<HTMLButtonElement> 
}

//le decimos al botón cómo van a ser la propiedades, estas pasando a través de ButtonProps
const Button = ({children, handleClick}:ButtonProps) => {
  return (
    <button 
    onClick={handleClick}
    className='button is-primary'
    >
     {children}
    </button>
  )
}

export default Button