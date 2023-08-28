import { ChangeEventHandler } from "react"

//la interface describe cómo debe verse el objeto, las propiedades y tipos
//Cuando no vamos a compartir lógica de la clase principal pero si necesitamos implementar los métodos y las propiedades se pueden utilizar las interfaces
//handleChange contiene la propiedad con Change
interface InputProps{
    placeholder: string,
    handleChange: ChangeEventHandler<HTMLInputElement>
    name:string
    value:string
    
}

const Input = ({placeholder, handleChange, name, value}:InputProps) => {
  return (
    <input
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
    />
  )
}

export default Input