import { ChangeEventHandler, MouseEventHandler, useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'

//usar type cuando no se va a indicar la forma del objeto o clase y se va a hacer con otro objeto o clase
export type UserFormState ={
    name:string, 
    username:string
}

const InitialValue: UserFormState = {
    name:'',
    username:'',
}

//Cuando no vamos a compartir lógica de la clase principal pero si necesitamos implementar los métodos y las propiedades se pueden utilizar las interfaces
interface userFormProps{
    //en este caso, esta es una función que se va a pasar desde el componente padre(App)
    handleSubmit:(user:UserFormState)=>void
}

export default function User({handleSubmit}:userFormProps) {

    //el primer valor de useState contendrá valores definidos sin valor pero con las estructura del type UserFormState
    const [form, setForm] = useState(InitialValue)
    //en este caso se utilizará el mismo elemento declarado en Button.tsx para un onClick, de esta forma elemento e ya sabe qué pasar
   const handleClick:MouseEventHandler<HTMLButtonElement>  = (e)=>{
    e.preventDefault()
    //se pasan los datos del formulario
    handleSubmit(form)
    //aquí reinicia el form a sus valores iniciales, al declarar la propiedad de value en el input esto permite que se limpien las casillas
    setForm(InitialValue)
  }
  //en este caso se crea una función con la porpiedad onChange
  const handleChange:ChangeEventHandler<HTMLInputElement> = (e)=>{
     //con keyof se define una variable name que solo puede tomar dos valores, name y last name de userform state
     const name = e.target.name as keyof UserFormState
     setForm({...form, [name]:e.target.value})
  }

  //los input reaccionand al agregar valores en el campo
  //el botón de handleclick hace que se actualice la lista (form)
  return (
    <>
        <Input value={form.name} name='name' placeholder='Nombre'  handleChange={handleChange}/>
        <Input value={form.username} name='username' placeholder='Usuario'  handleChange={handleChange}/>
        <Button
          handleClick={handleClick}
        >
            Agregar
        </Button>
    </>
  )
}
